use jni::{
    objects::{JClass, JString},
    sys::{jboolean, jstring, JNI_FALSE, JNI_TRUE},
    JNIEnv,
};
use std::{
    path::PathBuf,
    sync::{Mutex, Once},
    thread::JoinHandle,
};
use tokio::sync::oneshot;

static LOGGING: Once = Once::new();
struct Control {
    shutdown: oneshot::Sender<()>,
    thread: JoinHandle<()>,
}

static CONTROL: Mutex<Option<Control>> = Mutex::new(None);

#[no_mangle]
pub extern "system" fn Java_moe_matsuri_nb4a_qsocket_QSocketCore_start(
    mut env: JNIEnv,
    _class: JClass,
    config_path: JString,
) -> jboolean {
    let Ok(path) = env
        .get_string(&config_path)
        .map(|value| PathBuf::from(value.to_string_lossy().as_ref()))
    else {
        return JNI_FALSE;
    };
    if !path.is_file() {
        return JNI_FALSE;
    }

    let mut control = CONTROL
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner());
    if control
        .as_ref()
        .is_some_and(|value| !value.thread.is_finished())
    {
        return JNI_TRUE;
    }
    if let Some(previous) = control.take() {
        let _ = previous.thread.join();
    }

    LOGGING.call_once(|| {
        let _ = tracing_subscriber::fmt()
            .with_env_filter("info")
            .with_ansi(false)
            .try_init();
    });
    let (shutdown_tx, shutdown_rx) = oneshot::channel();
    let thread = std::thread::Builder::new()
        .name("qsocket-local".into())
        .spawn(move || {
            let runtime = match tokio::runtime::Builder::new_multi_thread()
                .enable_all()
                .thread_name("qsocket-worker")
                .build()
            {
                Ok(runtime) => runtime,
                Err(error) => {
                    tracing::error!(%error, "QSocket Android runtime 创建失败");
                    return;
                }
            };
            runtime.block_on(async move {
                tokio::select! {
                    result = qsocket_core::run_file_mobile(path) => {
                        if let Err(error) = result {
                            tracing::error!(%error, "QSocket Android 核心退出");
                        }
                    }
                    _ = shutdown_rx => {}
                }
            });
        })
        .ok();
    match thread {
        Some(thread) => {
            *control = Some(Control {
                shutdown: shutdown_tx,
                thread,
            });
            JNI_TRUE
        }
        None => JNI_FALSE,
    }
}

#[no_mangle]
pub extern "system" fn Java_moe_matsuri_nb4a_qsocket_QSocketCore_stop(
    _env: JNIEnv,
    _class: JClass,
) {
    if let Some(control) = CONTROL
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner())
        .take()
    {
        let _ = control.shutdown.send(());
        let _ = control.thread.join();
    }
}

#[no_mangle]
pub extern "system" fn Java_moe_matsuri_nb4a_qsocket_QSocketCore_trafficSnapshot(
    env: JNIEnv,
    _class: JClass,
) -> jstring {
    env.new_string(qsocket_core::mobile_traffic_snapshot().to_string())
        .map(|value| value.into_raw())
        .unwrap_or(std::ptr::null_mut())
}
