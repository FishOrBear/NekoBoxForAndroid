(()=>{var De={208:(e,f,B)=>{"use strict";B.d(f,{A:()=>W});var C=B(354),x=B.n(C),c=B(314),k=B.n(c),E=B(417),_=B.n(E),I=new URL(B(590),B.b),v=k()(x()),S=_()(I);v.push([e.id,`table {
    border-collapse: collapse;
    width          : 100%;
}

.speed-test-detail { margin-top:10px;padding:14px;border:1px solid var(--line);border-radius:10px;background:var(--surface); }
.speed-test-detail.empty { color:var(--muted);text-align:center; }
.speed-test-detail>header { display:flex;align-items:center;justify-content:space-between;margin-bottom:9px; }
.speed-test-detail>header div { display:grid;gap:2px; }.speed-test-detail>header small { color:var(--muted); }
.speed-test-state { padding:3px 9px;border-radius:20px;background:var(--surface-soft);font-size:.72rem; }.speed-test-state.running { color:var(--green);background:var(--green-soft); }.speed-test-state.failed { color:var(--red);background:rgba(220,53,69,.1); }
.speed-test-progress { height:6px;overflow:hidden;border-radius:5px;background:var(--surface-soft); }.speed-test-progress i { display:block;height:100%;background:#1769e0;transition:width .3s; }
.speed-test-summary { display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0; }.speed-test-summary>div { display:grid;padding:10px;border-radius:8px;background:var(--surface-soft); }.speed-test-summary small,.speed-test-summary em { color:var(--muted);font-size:.7rem;font-style:normal; }.speed-test-summary strong { font-size:.9rem; }
.speed-test-bars { display:grid;grid-template-columns:repeat(10,1fr);align-items:end;gap:5px;height:120px;padding-top:8px; }.speed-test-bars span { display:grid;grid-template-rows:1fr auto;align-items:end;height:100%;text-align:center; }.speed-test-bars i { display:block;min-height:2px;border-radius:3px 3px 0 0;background:#1769e0;transition:height .3s; }.speed-test-bars small { color:var(--muted);font-size:.62rem; }
.speed-test-threads { margin-top:12px;max-height:190px;overflow:auto; }.speed-test-threads>div { display:grid;grid-template-columns:50px repeat(3,1fr);gap:6px;padding:6px 3px;border-top:1px solid var(--line);font-size:.72rem; }.speed-test-threads>div span:not(:first-child) { text-align:right; }.speed-test-threads .head { color:var(--muted); }.speed-test-error { color:var(--red); }
@media (max-width:600px) { .speed-test-summary { grid-template-columns:1fr 1fr; }.speed-test-threads>div { grid-template-columns:38px repeat(3,1fr);font-size:.65rem; } }

th,
td {
    border    : 1px solid #dddddd;
    /* \u6587\u5B57\u5C45\u4E2D */
    text-align: center;
    padding   : 5px;
}

th {
    background-color: #f2f2f2;
}

body {
    width         : -webkit-fill-available;
    height        : -webkit-fill-available;
    display       : flex;
    flex-direction: column;
}

/*server div*/
.sdiv {
    padding         : 4px;
    background-color: white;
    margin-bottom   : 0.5em;
    border-radius   : 0.5em;
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);
    font-size       : 0.9rem;
    text-align      : center;

    display: flex;

    /*this centers the text horizontally*/
    justify-content: center;

    /*this centers the text vertically*/
    align-items: center;
}

.Header {
    margin-top   : 3px;
    margin-bottom: 3px;
    margin-left  : 3px;
    margin-right : 3px;
    padding      : 4px;
    border-radius: 0.5rem;
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);

    display: flex;

    font-size       : 1rem;
    background-color: rgb(246, 248, 251);
}

/* \u8282\u70B9\u5217\u8868\u7684\u5934 */
.NodesHeader {
    margin-top   : 3px;
    margin-bottom: 3px;
    margin-left  : 3px;
    margin-right : 3px;
    padding      : 4px;
    border-radius: 0.5rem;
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);

    font-size: 1.1rem;

    position        : sticky;
    top             : 2px;
    z-index         : 100;
    /* \u4FBF\u4E8E\u89C2\u5BDF\u6548\u679C */
    background-color: rgb(246, 248, 251);
}

/* \u524D\u4E24\u4E2A\u5B50\u5143\u7D20 */
.NodesHeader>* {
    padding-left: 3px;
}

/* \u8FDE\u63A5\u5934 */
.LinksHeader {
    display        : flex;
    text-align     : center;
    justify-content: center;
    align-items    : center;
    margin-top     : 3px;
    margin-bottom  : 3px;
    margin-left    : 3px;
    margin-right   : 3px;
    padding        : 4px;
    border-radius  : 0.5rem;
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);

    position        : sticky;
    top             : 35px;
    z-index         : 102;
    background-color: #f6f8fb;

    font-size: 1rem;
}

/* \u7B2C\u4E00\u4E2A\u5143\u7D20 */
.LinksHeader>*:first-child {
    padding-left: 3px;
}

.LinksHeader button {
    width: 1em;
}

.SpeedChartHeader {
    display        : flex;
    text-align     : center;
    justify-content: center;
    align-items    : center;
    margin-top     : 3px;
    margin-bottom  : 3px;
    margin-left    : 3px;
    margin-right   : 3px;
    padding        : 4px;
    border-radius  : 0.5rem;
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);

    font-size: 0.9rem;
}

ul {
    list-style-type: none;
    padding        : 0;
}

li {
    display         : flex;
    justify-content : space-between;
    padding         : 4px;
    background-color: white;
    margin-bottom   : 0.5em;
    border-radius   : 0.5em;
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);
    font-size       : 0.9rem;
}

[data-dark-mode="true"] li {
    background-color: var(--purple-md);
}

li::before {
    display: none;
}

li button {
    appearance      : none;
    border          : none;
    padding         : none;
    margin          : none;
    background-color: transparent;
    display         : flex;
    align-items     : center;
    cursor          : pointer;
}

li button svg {
    width: 1.2em;
    fill : red;
}


.simple-button {
    /* padding: 10px 20px; */
    padding         : 3px;
    margin-right    : 3px;
    /* font-size    : 16px; */
    color           : white;
    background-color: #99c7f8;
    border          : none;
    border-radius   : 3px;
    cursor          : pointer;
    transition      : background-color 0.3s ease;
    outline         : none;
    text-align      : center;
    display         : flex;
    justify-content : center;
}

.simple-button:hover {
    background-color: #4e7bac;
}

.fade-out {
    transition: opacity 3s ease;
}

.link-end {
    /* \u5B57\u989C\u8272\u6E10\u6E10\u4ECE\u9ED1\u8272\u53D8\u6DE1 */
    color: rgba(35, 24, 77, 0.6);

    transition: color 3s ease;
}

/* \u6574\u4F53\u6EDA\u52A8\u6761 */
::-webkit-scrollbar {
    width: 1px;
    /* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */
}

/* \u6EDA\u52A8\u6761\u8F68\u9053 */
::-webkit-scrollbar-track {
    background   : #f1f1f1;
    /* \u8F68\u9053\u80CC\u666F */
    border-radius: 1px;
    /* \u5706\u89D2 */
}

/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */
::-webkit-scrollbar-thumb {
    background-color: #888;
    /* \u6ED1\u5757\u7684\u989C\u8272 */
    border-radius   : 1px;
    /* \u5706\u89D2 */
    border          : 1px solid #f1f1f1;
    /* \u7ED9\u6ED1\u5757\u6DFB\u52A0\u8FB9\u6846 */
}

/* \u6ED1\u5757\u5728\u60AC\u505C\u72B6\u6001\u65F6\u7684\u6837\u5F0F */
::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* \u60AC\u505C\u65F6\u53D8\u6697 */
}

/* 2026 \u63A7\u5236\u53F0\u89C6\u89C9\u7CFB\u7EDF */
:root {
    color-scheme: light;
    --canvas: #f3f6fa;
    --surface: #ffffff;
    --surface-soft: #f7f9fc;
    --line: #e3e9f1;
    --text: #122033;
    --muted: #68778c;
    --navy: #071b34;
    --blue: #2563eb;
    --blue-soft: #eaf1ff;
    --green: #079669;
    --green-soft: #e7f8f1;
    --amber: #d97706;
    --amber-soft: #fff5df;
    --red: #dc3545;
    --violet: #7256d8;
    --teal: #0891b2;
    --shadow: 0 8px 30px rgba(28, 45, 75, .07);
    --radius: 16px;
}

:root[data-theme="dark"] {
    color-scheme: dark;
    --canvas: #0b1220;
    --surface: #111b2b;
    --surface-soft: #162235;
    --line: #27364a;
    --text: #e8eef7;
    --muted: #93a3b8;
    --navy: #07111f;
    --blue: #6b98ff;
    --blue-soft: #1a3156;
    --green: #28c597;
    --green-soft: #13382f;
    --amber: #f2ad4c;
    --amber-soft: #3a2d18;
    --red: #ff6675;
    --violet: #9c87f2;
    --teal: #39b8d4;
    --shadow: 0 10px 34px rgba(0,0,0,.28);
}

* { box-sizing: border-box; }

html, body, #root { min-height: 100%; }

body {
    margin: 0;
    width: 100%;
    height: auto;
    display: block;
    overflow-x: hidden;
    background: var(--canvas);
    color: var(--text);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    -webkit-font-smoothing: antialiased;
}

button, select, input { font: inherit; }
button { -webkit-tap-highlight-color: transparent; }

.app-shell { min-height: 100vh; }

.app-sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 300;
    width: 220px;
    padding: 24px 16px;
    color: #dbe7f7;
    background: var(--navy);
    display: flex;
    flex-direction: column;
}

.brand-mark {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    padding: 0 10px 22px;
    color: white;
    font-size: 1.08rem;
    font-weight: 750;
    letter-spacing: .02em;
}

.brand-pulse {
    width: 12px;
    height: 12px;
    border: 3px solid #6aa7ff;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(72, 139, 255, .15);
}

.app-nav { display: grid; gap: 7px; }
.app-nav button {
    width: 100%;
    min-height: 44px;
    padding: 0 13px;
    border: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #aebed3;
    background: transparent;
    cursor: pointer;
    text-align: left;
    transition: .18s ease;
}
.app-nav button:hover { color: white; background: rgba(255, 255, 255, .07); }
.app-nav button.active { color: white; background: #1763d6; box-shadow: 0 7px 18px rgba(0, 74, 180, .28); }
.nav-icon { width: 22px; font-size: 1.2rem; text-align: center; }

.sidebar-foot {
    margin-top: auto;
    padding: 13px 10px 0;
    border-top: 1px solid rgba(255, 255, 255, .1);
    display: flex;
    align-items: center;
    gap: 8px;
    color: #93a8c2;
    font-size: .76rem;
}
.online-dot { display: inline-block; width: 8px; height: 8px; flex: 0 0 8px; border-radius: 50%; background: #16c784; box-shadow: 0 0 0 4px rgba(22,199,132,.12); }

.app-main { min-height: 100vh; margin-left: 220px; }
.topbar {
    min-height: 82px;
    padding: 17px clamp(20px, 3vw, 42px);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,.88);
    backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 210;
}
.topbar-actions { display: flex; align-items: center; gap: 9px; }
.theme-toggle { min-height: 38px; padding: 0 10px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); color: var(--muted); display: flex; align-items: center; gap: 5px; cursor: pointer; }
.theme-toggle span { color: var(--text); font-size: 1rem; line-height: 1; }.theme-toggle small { font-size: .68rem; }
.theme-toggle:hover { color: var(--blue); border-color: var(--blue); }
.topbar h1 { margin: 1px 0 0; font-size: clamp(1.25rem, 2vw, 1.65rem); line-height: 1.2; }
.eyebrow { color: var(--muted); font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; }
.topbar-route { display: flex; align-items: center; gap: 10px; padding: 8px 13px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); }
.topbar-route span { color: var(--muted); font-size: .78rem; }
.topbar-route strong { font-size: .88rem; }

.page-content { max-width: 1480px; margin: 0 auto; padding: 24px clamp(18px, 3vw, 38px) 48px; }
.page-section { min-width: 0; }
.page-intro { margin: 2px 2px 20px; }
.page-intro h2 { margin: 0; font-size: 1.25rem; }
.page-intro p { margin: 5px 0 0; color: var(--muted); font-size: .86rem; }

.hero-card {
    min-height: 136px;
    margin-bottom: 18px;
    padding: 24px clamp(20px, 3vw, 32px);
    border: 1px solid #dce6f4;
    border-radius: var(--radius);
    background: linear-gradient(120deg, #fff 0%, #f5f9ff 100%);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
.hero-card h2 { margin: 6px 0 5px; font-size: clamp(1.35rem, 2.4vw, 2rem); }
.hero-card p { margin: 0; color: var(--muted); }
.hero-kicker { display: flex; align-items: center; gap: 8px; color: var(--green); font-size: .78rem; font-weight: 700; }
.primary-action { min-height: 42px; padding: 0 18px; border: 0; border-radius: 10px; color: white; background: var(--blue); font-weight: 650; cursor: pointer; box-shadow: 0 8px 18px rgba(37,99,235,.22); }

.metric-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
.metric-card {
    position: relative;
    min-width: 0;
    min-height: 130px;
    padding: 17px;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--surface);
    box-shadow: 0 5px 18px rgba(28,45,75,.045);
}
.metric-card::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 3px; background: currentColor; opacity: .8; }
.metric-card.blue { color: var(--blue); }.metric-card.green { color: var(--green); }.metric-card.amber { color: var(--amber); }
.metric-card.violet { color: var(--violet); }.metric-card.teal { color: var(--teal); }.metric-card.slate { color: #53657c; }
.speed-tone-idle { color: #94a3b8 !important; }
.speed-tone-low { color: #64748b !important; }
.speed-tone-active { color: #3b82f6 !important; }
.speed-tone-fast { color: #6366f1 !important; }
.speed-tone-peak { color: #8b5cf6 !important; }
.speed-value { transition: color .2s ease, background-color .2s ease, border-color .2s ease; font-variant-numeric: tabular-nums; }
.metric-label { color: var(--muted); font-size: .78rem; font-weight: 650; }
.metric-card strong { display: block; margin-top: 8px; color: var(--text); font-size: clamp(1.22rem, 2vw, 1.7rem); white-space: nowrap; }
.metric-card > span { display: block; margin-top: 4px; color: var(--muted); font-size: .72rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-spark { position: absolute; inset: auto 10px 9px 10px; width: calc(100% - 20px); height: 25px; }
.mini-spark polyline { fill: none; stroke: currentColor; stroke-width: 2; vector-effect: non-scaling-stroke; opacity: .8; }

.overview-grid { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(310px, .8fr); gap: 18px; align-items: stretch; }
.overview-main, .overview-side { min-width: 0; }
.overview-main > .NodesHeader, .overview-main > .NodesHeader + div { margin-left: 0 !important; margin-right: 0 !important; }
.overview-side { display: flex; }
.panel-card { min-width: 0; padding: 18px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow); }
.node-snapshot { width: 100%; }
.panel-title { min-height: 38px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.panel-title h3 { margin: 0; font-size: 1rem; }.panel-title p { margin: 3px 0 0; color: var(--muted); font-size: .72rem; }
.panel-title button { border: 0; background: transparent; color: var(--blue); cursor: pointer; font-size: .76rem; }
.node-row, .route-row { min-height: 43px; display: grid; align-items: center; gap: 8px; border-top: 1px solid #edf1f5; font-size: .78rem; }
.node-row { grid-template-columns: 10px minmax(72px, 1fr) 76px 58px 70px; }
.node-row > span { color: var(--muted); white-space: nowrap; }
.node-row > span:nth-last-child(-n+3) { text-align: right; font-variant-numeric: tabular-nums; }
.node-sort-toolbar { margin: -3px 0 7px; display: flex; justify-content: flex-end; align-items: center; gap: 3px; }
.node-sort-toolbar > span { margin-right: 3px; color: var(--muted); font-size: .66rem; }
.node-sort-toolbar button { min-height: 25px; padding: 0 9px; border: 1px solid transparent; border-radius: 7px; background: transparent; color: var(--muted); cursor: pointer; font-size: .68rem; }
.node-sort-toolbar button:hover { color: var(--blue); }
.node-sort-toolbar button.active { border-color: #dbe7fa; background: var(--blue-soft); color: var(--blue); font-weight: 700; }
.node-speed-cell, .node-latency-cell { min-height: 36px; padding: 4px 7px; border-radius: 8px; background: var(--surface-soft); font-variant-numeric: tabular-nums; }
.node-speed-cell { display: grid; align-content: center; gap: 1px; text-align: right; }
.node-speed-cell small { font-size: .74rem; font-weight: 650; line-height: 1.2; }
.node-latency-cell { display: flex; align-items: center; justify-content: flex-end; font-size: .76rem; font-weight: 650; }
.node-latency-cell.good { color: var(--green) !important; }.node-latency-cell.warn { color: var(--amber) !important; }.node-latency-cell.bad { color: var(--red) !important; }
.node-links-cell { font-size: .72rem; }
.health-dot { width: 8px; height: 8px; border-radius: 50%; }.health-dot.ok { background: var(--green); }.health-dot.warn { background: #f59e0b; }.health-dot.bad { background: var(--red); }
.overview-bottom { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(280px, .6fr); gap: 18px; margin-top: 18px; }
.route-row { min-height: 47px; grid-template-columns: minmax(180px, 1.6fr) minmax(78px, .65fr) 72px 76px 76px; }
.route-row strong { font-size: .82rem; }
.route-row span { color: #536780; white-space: nowrap; }
.route-row > span:nth-child(2), .route-row > span:nth-child(3) { font-size: .78rem; font-weight: 650; }
.route-row .speed-value { opacity: 1; font-size: .8rem; font-weight: 650; font-variant-numeric: tabular-nums; }
.route-row .speed-tone-idle { color: #64748b !important; }
.route-row > span:nth-child(n+3) { text-align: right; }
.alert-item { min-height: 68px; margin-top: 9px; padding: 12px; border-radius: 11px; display: flex; align-items: flex-start; gap: 10px; }
.alert-item > span { width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }
.alert-item strong { font-size: .8rem; }.alert-item p { margin: 3px 0 0; color: var(--muted); font-size: .7rem; }
.alert-item.ok { background: var(--green-soft); }.alert-item.ok > span { color: var(--green); background: white; }
.alert-item.warn { background: var(--amber-soft); }.alert-item.warn > span { color: var(--amber); background: white; }
.alert-item.info { background: var(--blue-soft); }.alert-item.info > span { color: var(--blue); background: white; }
.diagnostic-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
.node-latency-overview { margin: 18px 0 10px; }
.node-latency-overview .panel-title { margin-bottom: 8px; }
.node-latency-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }
.node-latency-card { min-width: 0; min-height: 86px; padding: 11px 12px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); display: grid; grid-template-columns: minmax(0, 1fr) auto; align-content: center; gap: 6px 10px; box-shadow: none; }
.node-latency-card > div { min-width: 0; display: flex; align-items: center; gap: 6px; }
.node-latency-flag { width: 17px; height: 17px; flex: 0 0 17px; overflow: hidden; border-radius: 50%; display: grid; place-items: center; }.node-latency-flag svg { width: 17px !important; height: 17px; }
.node-latency-card strong { overflow: hidden; color: var(--text); font-size: .76rem; text-overflow: ellipsis; white-space: nowrap; }
.node-latency-card small { padding: 2px 5px; border-radius: 5px; font-size: .58rem; white-space: nowrap; }
.node-latency-card b { color: var(--text); font-size: .9rem; font-variant-numeric: tabular-nums; }
.node-latency-card > span { grid-column: 1 / -1; color: var(--muted); font-size: .65rem; }
.node-latency-card.good small { color: var(--green); background: var(--green-soft); }.node-latency-card.warn small { color: var(--amber); background: var(--amber-soft); }.node-latency-card.bad small { color: var(--red); background: rgba(220,53,69,.12); }
.node-business-links { margin-top: 18px; }
.link-route-state { min-width: 105px; max-width: 180px; margin: 0 8px; padding: 3px 7px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface-soft); display: grid; gap: 1px; }
.link-route-state b { overflow: hidden; color: var(--text); font-size: .65rem; text-overflow: ellipsis; white-space: nowrap; }
.link-route-state small { font-size: .56rem; }.link-route-state.current small { color: var(--green); }.link-route-state.changed small { color: var(--amber); }.link-route-state.ended small, .link-route-state.missing small { color: var(--red); }
.links-list.show-route { width: 100%; min-width: 0; margin: 8px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); container-name: all-links; container-type: inline-size; }
.links-list.show-route > li { margin: 0 !important; padding: 0 10px !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; background: transparent; transition: background .14s ease; }
.links-list.show-route > li:first-child { border-top: 0; }
.links-list.show-route > li:not(.all-link-columns):nth-child(even) { background: color-mix(in srgb, var(--surface-soft) 72%, var(--surface)); }
.links-list.show-route > li:not(.all-link-columns):nth-child(odd) { background: var(--surface); }
.links-list.show-route > li:not(.all-link-columns):hover { background: rgba(37,99,235,.055); }
.links-list.show-route .link-summary-row, .all-link-columns { width: 100%; min-width: 0; display: grid !important; grid-template-columns: 52px minmax(130px, 180px) 42px 54px 54px minmax(200px, 1fr) 210px; align-items: center; column-gap: 8px; }
.links-list.show-route .link-summary-row { min-height: 50px; justify-content: initial !important; }
.all-link-columns { min-height: 34px; color: var(--muted); background: var(--surface-soft) !important; font-size: .63rem; font-weight: 650; }
.all-link-columns > span { text-align: center; }.all-link-columns > span:nth-child(2), .all-link-columns > span:nth-child(6) { text-align: left; }
.all-link-speed-headings, .links-list.show-route .link-speed-groups { min-width: 0; display: grid; grid-template-columns: 94px 108px; align-items: center; gap: 8px; }
.all-link-speed-headings > span { text-align: center; }
.sortable-column { width: 100%; min-height: 28px; padding: 0 5px; border: 0; border-radius: 6px; background: transparent; color: var(--muted); display: inline-flex; align-items: center; justify-content: center; gap: 4px; font: inherit; font-weight: 650; white-space: nowrap; cursor: pointer; transition: color .14s ease, background .14s ease; }
.sortable-column:hover { color: var(--blue); background: rgba(37,99,235,.07); }
.sortable-column.active { color: var(--blue); background: var(--blue-soft); }
.sortable-column b { font-size: .66rem; font-weight: 750; }
.links-list.show-route .link-server, .links-list.show-route .link-remote, .links-list.show-route .link-time, .links-list.show-route .link-delay { width: auto !important; margin: 0 !important; text-align: center; font-variant-numeric: tabular-nums; }
.links-list.show-route .link-route-state { width: auto; min-width: 0; max-width: none; margin: 0; }
.links-list.show-route .link-target-address { min-width: 0; overflow: hidden; color: var(--text); font-size: .84rem; font-weight: 680; line-height: 1.3; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { min-width: 0; height: auto !important; margin: 0 !important; align-items: center; overflow: hidden; font-variant-numeric: tabular-nums; }
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .76rem !important; line-height: 1.25; font-weight: 520; }

@container all-links (max-width: 900px) {
    .links-list.show-route .all-link-columns { min-height: 40px; padding: 5px 8px !important; display: flex !important; justify-content: flex-end; gap: 6px; }
    .links-list.show-route .all-link-columns > span { display: none; }
    .links-list.show-route .all-link-columns > span:nth-child(3), .links-list.show-route .all-link-columns > .all-link-speed-headings { display: grid; }
    .links-list.show-route .all-link-columns > span:nth-child(3) { width: 72px; }
    .links-list.show-route .all-link-columns > .all-link-speed-headings { grid-template-columns: 102px 108px; gap: 6px; }
    .links-list.show-route .link-summary-row { min-height: 72px; grid-template-columns: 44px minmax(120px, 1fr) 34px 46px 48px; grid-template-rows: 35px 35px; gap: 0 6px; }
    .links-list.show-route .link-server { grid-column: 1; grid-row: 1; }
    .links-list.show-route .link-route-state { grid-column: 2; grid-row: 1; }
    .links-list.show-route .link-remote { grid-column: 3; grid-row: 1; }
    .links-list.show-route .link-time { grid-column: 4; grid-row: 1; }
    .links-list.show-route .link-delay { grid-column: 5; grid-row: 1; }
    .links-list.show-route .link-target-address { grid-column: 1 / 3; grid-row: 2; }
    .links-list.show-route .link-speed-groups { grid-column: 3 / 6; grid-row: 2; grid-template-columns: 1fr 1fr; gap: 8px; }
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { height: 30px !important; align-items: center; }
}

@container all-links (max-width: 520px) {
    .links-list.show-route > li { padding-inline: 7px !important; }
    .links-list.show-route .link-summary-row { grid-template-columns: 40px minmax(92px, 1fr) 30px 40px 42px; gap: 0 4px; }
    .links-list.show-route .link-target-address { font-size: .84rem; }
    .links-list.show-route .link-speed-groups { gap: 5px; }
    .links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .7rem !important; }
}
.links-list.route-scoped { width: 100%; min-width: 0; margin: 8px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); container-name: route-links; container-type: inline-size; }
.links-list.route-scoped > li { margin: 0 !important; padding: 0 8px !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; transition: background .14s ease; }
.links-list.route-scoped > li:first-child { border-top: 0; }
.links-list.route-scoped > li:not(.route-link-columns):nth-child(even) { background: color-mix(in srgb, var(--surface-soft) 72%, var(--surface)); }
.links-list.route-scoped > li:not(.route-link-columns):nth-child(odd) { background: var(--surface); }
.links-list.route-scoped > li:not(.route-link-columns):hover { background: rgba(37,99,235,.055); }
.links-list.route-scoped .link-summary-row, .route-link-columns { display: grid !important; grid-template-columns: 62px 42px 54px 54px minmax(220px, 1fr) 208px; align-items: center; column-gap: 8px; }
.links-list.route-scoped .link-summary-row { min-height: 45px; justify-content: initial !important; }
.route-link-columns { min-height: 32px; color: var(--muted); background: var(--surface-soft); font-size: .63rem; font-weight: 650; }
.route-link-columns > span { text-align: center; }.route-link-columns > span:nth-child(5) { text-align: left; }
.route-link-speed-headings, .links-list.route-scoped .link-speed-groups { min-width: 0; display: grid; grid-template-columns: 92px 108px; align-items: center; gap: 8px; }
.route-link-speed-headings > span { text-align: center; }
.links-list.route-scoped .link-server, .links-list.route-scoped .link-remote, .links-list.route-scoped .link-time, .links-list.route-scoped .link-delay { width: auto !important; margin: 0 !important; font-variant-numeric: tabular-nums; }
.links-list.route-scoped .link-server, .links-list.route-scoped .link-remote, .links-list.route-scoped .link-time, .links-list.route-scoped .link-delay { text-align: center; }
.links-list.route-scoped .link-target-address { min-width: 0; overflow: hidden; font-size: .82rem; font-weight: 650; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { min-width: 0; height: auto !important; margin: 0 !important; align-items: center; overflow: hidden; font-variant-numeric: tabular-nums; }
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .78rem !important; line-height: 1.25; font-weight: 520; }

.link-detail-panel { width: 100%; margin: 2px 0 10px; overflow: hidden; border: 1px solid var(--line); border-radius: 11px; background: var(--surface); color: var(--text); box-shadow: 0 6px 20px rgba(28,45,75,.055); }
.link-detail-header { min-height: 54px; padding: 9px 13px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--line); background: linear-gradient(100deg, rgba(37,99,235,.08), rgba(37,99,235,.018) 45%, transparent); }
.link-detail-header-icon { width: 30px; height: 30px; flex: 0 0 30px; border-radius: 8px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; }
.link-detail-header-icon svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.link-detail-heading { min-width: 0; display: grid; gap: 2px; }.link-detail-heading strong { font-size: .82rem; }.link-detail-heading small { color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }
.link-detail-status { margin-left: auto; padding: 4px 9px; border-radius: 999px; font-size: .64rem; font-weight: 650; white-space: nowrap; }
.link-detail-status.current { color: var(--green); background: var(--green-soft); }.link-detail-status.changed { color: var(--amber); background: var(--amber-soft); }.link-detail-status.ended, .link-detail-status.missing { color: var(--red); background: rgba(220,53,69,.1); }
.link-detail-grid { padding: 11px 13px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; background: var(--surface-soft); }
.link-detail-grid > div { min-width: 0; min-height: 48px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); display: grid; align-content: center; gap: 3px; }
.link-detail-grid small { color: var(--muted); font-size: .61rem; }.link-detail-grid strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .72rem; font-weight: 620; text-overflow: ellipsis; white-space: nowrap; font-variant-numeric: tabular-nums; }
.link-detail-grid .link-detail-delay { color: var(--green); }
.link-detail-chart { border-top: 1px solid var(--line); background: var(--surface); }
.link-detail-chart-title { min-height: 40px; padding: 8px 13px 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; }.link-detail-chart-title strong { font-size: .78rem; }.link-detail-chart-title span { color: var(--muted); font-size: .62rem; }
.link-detail-chart-canvas { width: 100%; height: 230px; }

@container route-links (max-width: 719px) {
    .links-list.route-scoped .route-link-columns { display: none !important; }
    .links-list.route-scoped .link-summary-row { min-width: 0; min-height: 58px; padding: 3px 0; grid-template-columns: 52px 36px 46px 48px minmax(120px, 1fr); grid-template-rows: 29px 25px; column-gap: 6px; }
    .links-list.route-scoped .link-server { grid-column: 1; grid-row: 1; }.links-list.route-scoped .link-remote { grid-column: 2; grid-row: 1; }.links-list.route-scoped .link-time { grid-column: 3; grid-row: 1; }.links-list.route-scoped .link-delay { grid-column: 4; grid-row: 1; }
    .links-list.route-scoped .link-target-address { grid-column: 5; grid-row: 1; text-align: left !important; }
    .links-list.route-scoped .link-speed-groups { grid-column: 1 / -1; grid-row: 2; padding: 2px 8px; border-radius: 6px; background: var(--surface-soft); grid-template-columns: 1fr 1fr; gap: 10px; }
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { height: 20px !important; display: flex !important; align-items: center; justify-content: center; flex-direction: row !important; gap: 6px; color: var(--muted); font-size: .63rem; white-space: nowrap; }
    .links-list.route-scoped .link-total-speed { padding-left: 10px; border-left: 1px solid var(--line); }
    .links-list.route-scoped .link-current-speed::before, .links-list.route-scoped .link-total-speed::before { color: var(--muted); font-size: .57rem; font-weight: 650; }.links-list.route-scoped .link-current-speed::before { content: "\u5B9E\u65F6"; }.links-list.route-scoped .link-total-speed::before { content: "\u7D2F\u8BA1"; }
}

@container route-links (max-width: 430px) {
    .links-list.route-scoped .link-summary-row { min-height: 58px; grid-template-columns: 40px 32px 34px minmax(50px, 1fr) minmax(120px, 40%); grid-template-rows: 29px 23px; column-gap: 3px; }
    .links-list.route-scoped .link-remote { display: none; }.links-list.route-scoped .link-time { grid-column: 2; }.links-list.route-scoped .link-delay { grid-column: 3; }
    .links-list.route-scoped .link-speed-groups { grid-column: 5; grid-row: 1 / 3; padding: 2px 0; background: transparent; grid-template-columns: 1fr; grid-template-rows: 1fr 1fr; gap: 2px; }
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { padding: 0; border-left: 0; justify-content: flex-end; gap: 5px; font-size: .57rem; }
    .links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .72rem !important; font-weight: 550; }
    .links-list.route-scoped .link-current-speed::before, .links-list.route-scoped .link-total-speed::before { content: none; }
    .links-list.route-scoped .link-target-address { grid-column: 1 / 5; grid-row: 2; color: var(--text) !important; font-size: .82rem; font-weight: 650; }
}

@media (max-width: 640px) {
    .link-detail-panel { border-radius: 9px; }
    .link-detail-grid { padding: 8px; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
    .link-detail-grid > div { min-height: 45px; padding: 7px 8px; }
    .link-detail-chart-title span { display: none; }
    .link-detail-chart-canvas { height: 205px; }
}

/* \u8FDE\u63A5\u5217\u8868\u4E09\u680F\u4FE1\u606F\u67B6\u6784\uFF1A\u5DE6\u72B6\u6001\u3001\u4E2D\u5730\u5740\u3001\u53F3\u901F\u5EA6\u4E0E\u6D41\u91CF\u3002 */
.links-list.show-route .all-link-columns,
.links-list.show-route .link-summary-row,
.links-list.route-scoped .route-link-columns,
.links-list.route-scoped .link-summary-row { grid-template-columns: minmax(210px,.9fr) minmax(250px,1.6fr) minmax(170px,.72fr) !important; grid-template-rows: auto !important; column-gap: 16px !important; }
.all-link-columns > span, .route-link-columns > span { text-align: left !important; }
.all-link-columns > span:nth-child(2), .route-link-columns > span:nth-child(2) { text-align: center !important; }
.all-link-columns > span:last-child, .route-link-columns > span:last-child { text-align: right !important; }
.links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { min-height: 68px !important; padding-block: 7px; }
.link-identity-group { min-width: 0; display: grid; gap: 7px; }
.link-identity-top { min-width: 0; display: flex; align-items: center; gap: 9px; }
.link-identity-top .link-server { width: auto !important; min-width: 0; flex: 0 1 auto; display: inline-flex; align-items: center; gap: 6px; font-size: 1rem; text-align: left !important; }.link-identity-top .link-server b { overflow: hidden; font-size: .9rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }
.link-identity-top .link-delay { width: auto !important; margin: 0 !important; padding: 3px 7px; flex: 0 0 auto; border-radius: 6px; font-size: .64rem; font-weight: 800; text-align: left !important; font-variant-numeric: tabular-nums; }.link-identity-top .link-delay.good { color: var(--green); background: var(--green-soft); }.link-identity-top .link-delay.warn { color: var(--amber); background: var(--amber-soft); }.link-identity-top .link-delay.bad { color: var(--red); background: rgba(220,53,69,.11); }
.link-identity-top .link-time { width: auto !important; margin: 0 !important; flex: 0 0 auto; color: var(--muted); font-size: .64rem; text-align: left !important; white-space: nowrap; }
.link-identity-meta { min-width: 0; display: flex; align-items: center; gap: 13px; color: var(--muted); font-size: .67rem; font-variant-numeric: tabular-nums; white-space: nowrap; }
.link-identity-meta .link-time { width: auto !important; margin: 0 !important; color: var(--muted); font-size: .64rem; text-align: left !important; }
.link-identity-meta .link-route-state { min-width: 0; max-width: 150px; margin: 0; padding: 0; border: 0; background: transparent; display: flex; align-items: center; gap: 5px; }.link-identity-meta .link-route-state b { overflow: hidden; color: var(--muted); font-size: .62rem; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }.link-identity-meta .link-route-state small { flex: 0 0 auto; font-size: .58rem; }
.links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { min-width: 0; max-width: 100%; margin: auto; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; color: var(--text); font-size: .9rem; font-weight: 700; line-height: 1.32; text-align: center !important; text-overflow: initial; white-space: normal; overflow-wrap: anywhere; word-break: normal !important; }
.links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { min-width: 0; display: grid !important; grid-template-columns: 1fr !important; gap: 5px !important; }
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { min-width: 0; width: 100%; height: auto !important; margin: 0 !important; display: grid !important; grid-template-columns: 32px minmax(48px,1fr) minmax(48px,1fr); align-items: center !important; gap: 3px; text-align: right; }
.link-current-speed > small, .link-total-speed > small { color: var(--muted); font-size: .62rem; text-align: left; }
.link-current-speed::before, .link-total-speed::before { content: none !important; }
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span,
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .74rem !important; text-align: right; white-space: nowrap; }

@container all-links (max-width: 560px) {
    .links-list.show-route .all-link-columns { display: none !important; }
    .links-list.show-route .link-summary-row { grid-template-columns: minmax(0,1fr) minmax(178px,auto) !important; grid-template-rows: auto auto !important; gap: 9px 12px !important; }
    .links-list.show-route .link-identity-group { grid-column: 1; grid-row: 1; }
    .links-list.show-route .link-target-address { grid-column: 1; grid-row: 2; margin: 0; text-align: left !important; }
    .links-list.show-route .link-speed-groups { grid-column: 2; grid-row: 1 / 3; }
}
@container route-links (max-width: 560px) {
    .links-list.route-scoped .route-link-columns { display: none !important; }
    .links-list.route-scoped .link-summary-row { grid-template-columns: minmax(0,1fr) minmax(178px,auto) !important; grid-template-rows: auto auto !important; gap: 9px 12px !important; }
    .links-list.route-scoped .link-identity-group { grid-column: 1; grid-row: 1; }
    .links-list.route-scoped .link-target-address { grid-column: 1; grid-row: 2; margin: 0; text-align: left !important; }
    .links-list.route-scoped .link-speed-groups { grid-column: 2; grid-row: 1 / 3; }
}
@media (max-width: 430px) {
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns: 1fr !important; grid-template-rows: auto auto auto !important; }
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1; grid-row: 1; }
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1; grid-row: 2; }
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1; grid-row: 3; }
    .link-identity-meta { gap: 9px; }
}

/* \u6700\u7EC8\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF1A\u663E\u5F0F\u91CD\u7F6E\u5386\u53F2\u89C4\u5219\u7559\u4E0B\u7684\u7F51\u683C\u884C\u5217\u3002 */
@container all-links (min-width: 561px) {
    .links-list.show-route .all-link-columns, .links-list.show-route .link-summary-row { width: 100%; min-width: 0; display: grid !important; grid-template-columns: minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows: auto !important; column-gap: 12px !important; }
    .links-list.show-route .all-link-columns > span { display: block !important; }
    .links-list.show-route .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }
    .links-list.show-route .link-target-address { grid-column: 2 !important; grid-row: 1 !important; margin: auto !important; text-align: center !important; }
    .links-list.show-route .link-speed-groups { grid-column: 3 !important; grid-row: 1 !important; }
}
@container route-links (min-width: 561px) {
    .links-list.route-scoped .route-link-columns, .links-list.route-scoped .link-summary-row { width: 100%; min-width: 0; display: grid !important; grid-template-columns: minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows: auto !important; column-gap: 12px !important; }
    .links-list.route-scoped .route-link-columns > span { display: block !important; }
    .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }
    .links-list.route-scoped .link-target-address { grid-column: 2 !important; grid-row: 1 !important; margin: auto !important; text-align: center !important; }
    .links-list.route-scoped .link-speed-groups { grid-column: 3 !important; grid-row: 1 !important; }
}
@container all-links (max-width: 560px) {
    .links-list.show-route .all-link-columns { display: none !important; }
    .links-list.show-route .link-summary-row { width: 100%; min-width: 0; min-height: 102px !important; padding-block: 9px !important; display: grid !important; grid-template-columns: minmax(0,1fr) 120px !important; grid-template-rows: auto auto !important; gap: 8px 10px !important; }
    .links-list.show-route .link-identity-group { grid-column: 1 / 3 !important; grid-row: 1 !important; }
    .links-list.show-route .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; text-align: left !important; }
    .links-list.show-route .link-speed-groups { grid-column: 2 !important; grid-row: 2 !important; }
}
@container route-links (max-width: 560px) {
    .links-list.route-scoped .route-link-columns { display: none !important; }
    .links-list.route-scoped .link-summary-row { width: 100%; min-width: 0; min-height: 102px !important; padding-block: 9px !important; display: grid !important; grid-template-columns: minmax(0,1fr) 120px !important; grid-template-rows: auto auto !important; gap: 8px 10px !important; }
    .links-list.route-scoped .link-identity-group { grid-column: 1 / 3 !important; grid-row: 1 !important; }
    .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; text-align: left !important; }
    .links-list.route-scoped .link-speed-groups { grid-column: 2 !important; grid-row: 2 !important; }
}
@media (max-width: 360px) {
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns: 1fr !important; grid-template-rows: auto auto auto !important; }
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; }
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1 !important; grid-row: 3 !important; }
}

/* \u7CBE\u786E\u6D41\u91CF\u5206\u6790 */
.traffic-analytics { margin-bottom: 18px; }
.analytics-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; }
.analytics-header h3 { margin: 0; font-size: 1rem; }
.analytics-header p { margin: 4px 0 0; color: var(--muted); font-size: .72rem; }
.analytics-controls { display: flex; align-items: center; gap: 9px; }
.analytics-controls select { height: 34px; min-width: 130px; padding: 0 28px 0 10px; border: 1px solid var(--line); border-radius: 8px; background: white; color: var(--text); }
.range-tabs { padding: 3px; border-radius: 9px; background: #eef2f7; display: flex; gap: 2px; }
.range-tabs button, .range-tabs > span { min-height: 28px; padding: 0 10px; border: 0; border-radius: 7px; background: transparent; color: var(--muted); cursor: pointer; font-size: .72rem; display: grid; place-items: center; }
.range-tabs button.active, .range-tabs > span.active { color: var(--blue); background: white; box-shadow: 0 1px 4px rgba(28,45,75,.12); font-weight: 700; }
.traffic-summary-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 9px; margin: 17px 0 8px; }
.traffic-summary-grid > div { min-width: 0; padding: 12px 14px; border: 1px solid #e4eaf2; border-radius: 11px; background: var(--surface-soft); display: grid; gap: 4px; }
.traffic-summary-grid span { color: var(--muted); font-size: .7rem; }
.traffic-summary-grid strong { overflow: hidden; color: var(--text); font-size: 1.05rem; text-overflow: ellipsis; white-space: nowrap; }
.traffic-history-chart { width: 100%; height: 310px; }
.traffic-node-table { margin-top: 5px; border-top: 1px solid var(--line); }
.traffic-node-row { min-height: 42px; padding: 0 9px; border-bottom: 1px solid #edf1f5; display: grid; grid-template-columns: minmax(110px, 1.3fr) repeat(3, minmax(90px, 1fr)); align-items: center; gap: 10px; font-size: .76rem; }
.traffic-node-row span { color: var(--muted); text-align: right; }
.traffic-node-row.head { min-height: 34px; color: var(--muted); font-size: .68rem; font-weight: 700; }
.traffic-empty { padding: 24px; color: var(--muted); text-align: center; font-size: .8rem; }

/* \u8FDE\u63A5\u901F\u5EA6\u5361\u7247 */
.speed-panel {
    min-width: 0;
    margin: 10px 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow);
}
.speed-panel-header {
    width: 100%;
    min-height: 70px;
    padding: 12px 18px;
    border: 0;
    background: var(--surface);
    color: var(--text);
    display: grid;
    grid-template-columns: auto minmax(150px, 1fr) auto auto auto;
    align-items: center;
    gap: 14px;
    text-align: left;
    cursor: pointer;
}
.speed-panel-header:hover { background: #fbfcfe; }
.speed-panel-chevron { width: 20px; color: var(--muted); display: grid; place-items: center; }
.speed-panel-heading { min-width: 0; display: grid; gap: 3px; }
.speed-panel-heading strong { font-size: 1rem; }
.speed-panel-heading small { color: var(--muted); font-size: .72rem; font-weight: 400; }
.speed-panel-live {
    min-width: 105px;
    padding-left: 14px;
    border-left: 1px solid var(--line);
    display: grid;
    gap: 2px;
}
.speed-panel-live small { color: var(--muted); font-size: .68rem; }
.speed-panel-live strong { font-size: .9rem; white-space: nowrap; }
.speed-chart-body { height: 245px; padding: 0 12px 10px; border-top: 1px solid #edf1f5; background: var(--surface); }
.speed-chart-canvas { width: 100%; height: 235px; }
.speed-panel.collapsed { box-shadow: 0 4px 16px rgba(28,45,75,.045); }

/* \u5EF6\u8FDF\u9762\u677F\u4E0E\u901F\u5EA6\u9762\u677F\u4FDD\u6301\u540C\u4E00\u5957\u5361\u7247\u8BED\u8A00 */
.latency-panel { margin: 10px 0; overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow); }
.latency-panel-header { width: 100%; min-height: 66px; padding: 12px 18px; border: 0; background: white; color: var(--text); display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; text-align: left; cursor: pointer; }
.latency-panel-header:hover { background: #fbfcfe; }
.latency-health { padding: 7px 10px; border-radius: 999px; background: var(--green-soft); color: #087a5a; font-size: .7rem; display: flex; align-items: center; gap: 6px; white-space: nowrap; }
.latency-chart-body { height: 250px; padding: 0 12px 10px; border-top: 1px solid #edf1f5; }
.latency-chart-canvas { width: 100%; height: 240px; }

/* \u7EDF\u4E00\u6298\u53E0\u9762\u677F */
.NodesHeader, .LinksHeader, .SpeedChartHeader {
    min-height: 52px;
    margin: 10px 0 !important;
    padding: 9px 13px !important;
    border: 1px solid var(--line);
    border-radius: 13px;
    box-shadow: 0 4px 16px rgba(28,45,75,.045);
    background: var(--surface) !important;
    color: var(--text);
    position: static;
    z-index: auto;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
.NodesHeader svg, .LinksHeader svg { color: var(--muted); }
.panel-title-icon { width: 26px; height: 26px; flex: 0 0 26px; border-radius: 7px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; }
.panel-title-icon .toolbar-icon { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; color: var(--blue); }
.section-name { min-width: 0; min-height: 26px; display: inline-flex; align-items: center; font-weight: 750; line-height: 1.2; transform: translateY(-1px); }
.section-spacer { flex: 1 1 auto; }
.traffic-remaining { margin-left: 8px; color: var(--muted); font-size: .76rem; white-space: nowrap; }
.connection-count { padding: 3px 8px; border-radius: 999px; background: #eef2f7; color: var(--muted); font-size: .72rem; white-space: nowrap; }
.route-list-shell { margin: 10px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); }
.links-panel-shell { margin: 10px 0; overflow: hidden; border: 1px solid rgba(8,145,178,.22); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); }
.links-panel-shell .LinksHeader { min-height: 58px; margin: 0 !important; border: 0; border-radius: 0; box-shadow: inset 3px 0 0 rgba(8,145,178,.68); }
.links-panel-shell.expanded .LinksHeader { border-bottom: 1px solid var(--line); }
.links-panel-shell .links-list.show-route { margin: 0; border: 0; border-radius: 0; }
.links-panel-shell .links-list.show-route > li { margin: 0 !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; }
.links-panel-shell .links-list.show-route > li:first-child { border-top: 0; }
.route-list-shell .route-panel-header { min-height: 58px; margin: 0 !important; padding: 9px 15px !important; border: 0; border-radius: 0; box-shadow: none; }
.route-list-shell .route-panel-header { background: linear-gradient(100deg, rgba(37,99,235,.105) 0%, rgba(37,99,235,.035) 34%, var(--surface) 72%) !important; box-shadow: inset 3px 0 0 rgba(37,99,235,.72); }
.route-list-shell .route-panel-header:hover { background: linear-gradient(100deg, rgba(37,99,235,.145) 0%, rgba(37,99,235,.05) 38%, var(--surface) 76%) !important; }
.LinksHeader { border-color: rgba(8,145,178,.2); background: linear-gradient(100deg, rgba(8,145,178,.1) 0%, rgba(8,145,178,.03) 34%, var(--surface) 72%) !important; box-shadow: inset 3px 0 0 rgba(8,145,178,.68), 0 4px 16px rgba(28,45,75,.045); }
.LinksHeader:hover { background: linear-gradient(100deg, rgba(8,145,178,.14) 0%, rgba(8,145,178,.045) 38%, var(--surface) 76%) !important; }
.LinksHeader .panel-title-icon { background: rgba(8,145,178,.105); color: #087f9d; }
.LinksHeader .panel-title-icon .toolbar-icon { color: #087f9d; }
.route-list-shell.expanded .route-panel-header { border-bottom: 1px solid var(--line); }
.route-list-shell .route-list-body { padding: 0 15px; }
.route-list-shell .route-item-header { margin: 0 !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: inset 0 0 0 transparent; background: transparent !important; transition: background .16s ease, box-shadow .16s ease; }
.route-list-shell .route-item-header:hover { background: linear-gradient(90deg, rgba(37,99,235,.09), rgba(37,99,235,.025)) !important; box-shadow: inset 3px 0 0 rgba(37,99,235,.52); }
.route-list-shell .route-item-header.expanded { background: linear-gradient(90deg, rgba(37,99,235,.12), rgba(37,99,235,.035)) !important; box-shadow: inset 3px 0 0 var(--blue); }
.route-list-shell .route-item-header.expanded:hover { background: linear-gradient(90deg, rgba(37,99,235,.15), rgba(37,99,235,.05)) !important; }
.route-list-shell .route-list-columns + .route-item-header { border-top: 0; }
.route-item-details { margin: 6px 0 12px; overflow: hidden; border-top: 1px solid var(--line); background: transparent; }
.route-item-details .route-detail-toggle { min-height: 43px; margin: 0 !important; padding: 8px 13px; border-radius: 0; background: transparent; box-shadow: none; font-size: .86rem !important; font-weight: 650; transition: background .14s ease, color .14s ease; }
.route-item-details .route-detail-toggle + .route-detail-toggle, .route-item-details > .links-list + .route-detail-toggle, .route-item-details > div + .route-detail-toggle { border-top: 1px solid var(--line); }
.route-item-details .route-detail-toggle:hover { color: var(--blue); background: rgba(37,99,235,.055); }
.route-item-details .route-detail-toggle.expanded { color: var(--blue); background: rgba(37,99,235,.07); }
.route-item-details .route-detail-toggle.expanded .route-detail-chevron,
.route-item-details .route-detail-toggle.expanded .route-detail-icon,
.route-item-details .route-detail-toggle.expanded .route-detail-label > b { color: var(--blue); }
.route-item-details .route-detail-toggle.expanded .route-detail-label > b { background: var(--blue-soft); }
.route-item-details .route-detail-toggle svg { width: 15px; height: 15px; }
.route-detail-chevron { width: 18px; height: 18px; flex: 0 0 18px; display: grid; place-items: center; color: var(--text); }
.route-detail-chevron > svg { width: 14px !important; height: 14px !important; display: block; }
.route-detail-label { min-width: 0; display: grid; grid-template-columns: 18px auto auto; align-items: center; gap: 7px; }
.route-detail-label .route-detail-icon { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; color: var(--muted); }
.route-detail-label .connection-icon { transform: translateX(1px); }
.route-detail-label > span { line-height: 1; }
.route-detail-label > b { min-width: 25px; padding: 2px 7px; border-radius: 999px; background: var(--surface-soft); color: var(--muted); font-size: .7rem; font-weight: 650; line-height: 1.4; text-align: center; font-variant-numeric: tabular-nums; }
.route-detail-toggle:hover .route-detail-icon, .route-detail-toggle:hover .route-detail-label > b { color: var(--blue); }
.route-disconnect-all { width: auto; min-height: 30px; margin-left: auto; padding: 0 9px; border: 1px solid rgba(220,53,69,.28); border-radius: 7px; background: rgba(220,53,69,.055); color: var(--red); display: inline-flex; align-items: center; justify-content: center; gap: 5px; font-size: .68rem; font-weight: 650; white-space: nowrap; cursor: pointer; transition: background .14s ease, border-color .14s ease; }
.route-disconnect-all:hover:not(:disabled) { border-color: var(--red); background: rgba(220,53,69,.1); }
.route-disconnect-all:disabled { opacity: .42; cursor: default; }
.route-disconnect-all .toolbar-icon { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.route-item-details > .links-list.route-scoped { margin: 0; border-width: 1px 0 0; border-radius: 0; background: var(--surface); }
.route-item-header { min-height: 48px !important; padding: 7px 12px !important; display: grid !important; grid-template-columns: 18px minmax(150px, 1fr) minmax(112px, auto) 30px minmax(58px, auto) 58px; gap: 8px !important; }
.route-list-columns { min-height: 34px; margin: 0 -15px; padding: 0 27px; display: grid; grid-template-columns: 18px minmax(150px, 1fr) minmax(112px, auto) 30px minmax(58px, auto) 58px; align-items: center; column-gap: 8px; color: var(--muted); background: linear-gradient(90deg, rgba(37,99,235,.055), rgba(37,99,235,.018)); border-bottom: 1px solid var(--line); font-size: .64rem; }
.route-list-columns > span:nth-child(n + 3) { text-align: right; }.route-list-columns > span:nth-child(5) { text-align: left; }
.route-item-toggle { display: grid; place-items: center; }.route-item-name { min-width: 0; overflow: hidden; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
.route-item-speeds { display: flex; justify-content: flex-end; gap: 9px; color: var(--muted); font-size: .84rem; font-weight: 650; font-variant-numeric: tabular-nums; white-space: nowrap; }.route-item-speeds .speed-value { padding: 0; }
.route-item-count { width: 25px; height: 25px; border-radius: 999px; background: var(--surface-soft); color: var(--muted); display: grid; place-items: center; font-size: .7rem; font-variant-numeric: tabular-nums; }
.route-item-exit { min-width: 0; overflow: hidden; color: var(--text); font-size: .78rem; text-overflow: ellipsis; white-space: nowrap; }.route-item-mode { width: 68px; height: 34px; padding: 0 25px 0 9px; border: 1px solid #cbd8e7; border-radius: 8px; appearance: none; -webkit-appearance: none; background: var(--surface-soft) url(${S}) no-repeat right 8px center; color: var(--text); font-size: .76rem; font-weight: 650; line-height: 1; cursor: pointer; transition: border-color .15s ease, background-color .15s ease, box-shadow .15s ease; }.route-item-mode:hover { border-color: var(--blue); background-color: var(--blue-soft); }.route-item-mode:focus { outline: none; }.route-item-mode:focus-visible { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft); }

@media (max-width: 820px) {
    .route-list-columns { display: none; }
    .route-item-header { min-height: 52px !important; grid-template-columns: 18px minmax(120px, 1fr) minmax(88px, auto) auto minmax(54px, auto) 68px !important; gap: 7px !important; }
    .route-item-speeds { justify-content: flex-end; gap: 6px; font-size: .78rem; }
    .route-item-count { width: 23px; height: 23px; }
    .route-item-exit { max-width: 72px; }
    .route-item-mode { width: 68px; max-width: 68px; }
}
.aggregate-speed { flex: 1; display: flex; gap: 8px; font-weight: 700; font-size: .8rem; }
.link-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 4px; }
.link-toolbar .simple-button { width: auto !important; min-width: 40px; white-space: nowrap; }
.link-toolbar .toolbar-icon { width: 18px; height: 18px; flex: 0 0 auto; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; pointer-events: none; }
.link-toolbar .sort-metric-button { gap: 4px; }
.link-toolbar .sort-metric-button > span { color: currentColor; font-size: .68rem; font-weight: 750; pointer-events: none; }
.link-toolbar .danger-button { gap: 6px; }
.simple-button {
    min-width: 32px;
    min-height: 32px;
    margin: 0;
    padding: 0 9px;
    border: 1px solid #d9e2ee;
    border-radius: 8px;
    background: #f4f7fb;
    color: #3c4c61;
    font-size: .72rem;
    font-weight: 650;
    align-items: center;
}
.simple-button:hover { color: var(--blue); background: var(--blue-soft); }
.simple-button[style*="rgb(1, 22, 42)"], .simple-button[style*="#01162a"] { color: white !important; background: var(--blue) !important; }
.danger-button { color: var(--red); border-color: #f1c6cc; background: #fff7f8; }

.Header { margin: 8px 0; padding: 8px; border: 1px solid var(--line); border-radius: 12px; box-shadow: none; background: var(--surface-soft); }
.sdiv { min-height: 42px !important; height: auto !important; border: 1px solid var(--line); box-shadow: none; }
ul { margin: 8px 0; }
li { border: 1px solid var(--line); box-shadow: 0 4px 16px rgba(28,45,75,.045); }

/* VPS \u4E0E MTCP */
.vps-grid { display: grid; gap: 22px; }
.vps-card {
    --node-accent: #2878e8;
    --node-accent-secondary: #27b99a;
    --node-accent-border: rgba(40,120,232,.42);
    --node-accent-soft: rgba(40,120,232,.075);
    --node-accent-shadow: rgba(40,120,232,.1);
    position: relative;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
    border: 1px solid var(--node-accent-border) !important;
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: 0 10px 28px var(--node-accent-shadow), 0 2px 5px rgba(28,45,75,.04) !important;
}
.vps-card::before { content: ""; position: absolute; z-index: 2; inset: 0 0 auto; width: auto; height: 5px; display: block; background: linear-gradient(90deg, var(--node-accent), var(--node-accent-secondary)); opacity: .96; }
.vps-card-accent-0 { --node-accent: #2878e8; --node-accent-secondary: #22b8cf; --node-accent-border: rgba(40,120,232,.42); --node-accent-soft: rgba(40,120,232,.075); --node-accent-shadow: rgba(40,120,232,.1); }
.vps-card-accent-1 { --node-accent: #18a47c; --node-accent-secondary: #7ac943; --node-accent-border: rgba(24,164,124,.42); --node-accent-soft: rgba(24,164,124,.075); --node-accent-shadow: rgba(24,164,124,.1); }
.vps-card-accent-2 { --node-accent: #7c5ce4; --node-accent-secondary: #b45bd6; --node-accent-border: rgba(124,92,228,.42); --node-accent-soft: rgba(124,92,228,.075); --node-accent-shadow: rgba(124,92,228,.1); }
.vps-card-accent-3 { --node-accent: #e58a22; --node-accent-secondary: #e8b128; --node-accent-border: rgba(229,138,34,.45); --node-accent-soft: rgba(229,138,34,.08); --node-accent-shadow: rgba(229,138,34,.1); }
.vps-card-accent-4 { --node-accent: #db4f70; --node-accent-secondary: #ed7a59; --node-accent-border: rgba(219,79,112,.42); --node-accent-soft: rgba(219,79,112,.075); --node-accent-shadow: rgba(219,79,112,.1); }
.vps-card-accent-5 { --node-accent: #168fa8; --node-accent-secondary: #3974d5; --node-accent-border: rgba(22,143,168,.42); --node-accent-soft: rgba(22,143,168,.075); --node-accent-shadow: rgba(22,143,168,.1); }
.vps-card-main { margin: 0 !important; padding: 18px !important; border-radius: 0 !important; background: var(--surface) !important; box-shadow: none !important; }
.vps-card-heading { margin: 0 0 14px !important; padding: 12px 13px; border: 1px solid var(--node-accent-border); border-radius: 11px; background: linear-gradient(90deg, var(--node-accent-soft), transparent 72%) !important; }
.vps-identity { gap: 6px; }
.vps-location-flag { width: 19px; height: 19px; flex: 0 0 19px; overflow: hidden; border-radius: 50%; display: grid; place-items: center; box-shadow: 0 0 0 1px var(--line); }
.vps-location-flag svg { width: 19px !important; height: 19px; object-fit: cover; }
.vps-name { margin-right: 1px; color: var(--text); font-size: 1.3em; font-weight: 800; white-space: nowrap; }
.vps-reset-time { overflow: hidden; color: var(--muted); font-size: .8em; text-overflow: ellipsis; white-space: nowrap; }
.vps-traffic-total { gap: 7px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.vps-traffic-total small { margin-right: 2px; color: var(--muted); font-size: .68rem; }
.vps-traffic-total span { font-size: .76rem; font-weight: 700; }
.vps-live-speed { width: auto; min-width: 0; min-height: 38px; margin-left: auto; padding: 5px 7px; border: 1px solid transparent; border-radius: 9px; background: transparent; display: flex; align-items: center; justify-content: flex-end; gap: 7px; cursor: pointer; transition: border-color .15s ease, background .15s ease, transform .15s ease; }
.vps-live-speed:hover, .vps-live-speed.active { border-color: var(--node-accent-border); background: var(--node-accent-soft); transform: translateY(-1px); }
.vps-live-speed:focus { outline: none; }.vps-live-speed:focus-visible { box-shadow: 0 0 0 2px var(--node-accent-soft); }
.vps-current-latency { margin-right: 3px; padding: 4px 8px; border-radius: 7px; font-size: .72rem; font-weight: 800; white-space: nowrap; }
.vps-throughput { min-height: 27px; padding: 3px 8px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(28,45,75,.035); }
.vps-throughput > span { font-size: .83rem; font-weight: 750; font-variant-numeric: tabular-nums; white-space: nowrap; }
.vps-current-latency.good { color: var(--green); background: var(--green-soft); }.vps-current-latency.warn { color: var(--amber); background: var(--amber-soft); }.vps-current-latency.bad { color: var(--red); background: rgba(220,53,69,.12); }
.vps-stats, .vps-detail-row { background: transparent !important; }
.vps-stats { min-height: 34px; }
.vps-system-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; background: var(--surface-soft); }
.vps-system-grid > div { min-width: 0; min-height: 58px; padding: 10px 12px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; align-content: center; gap: 4px; }
.vps-system-grid > div:nth-child(3n) { border-right: 0; }
.vps-system-grid > div:nth-last-child(-n+3) { border-bottom: 0; }
.vps-system-grid small { color: var(--muted); font-size: .65rem; }
.vps-system-grid strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .75rem; text-overflow: ellipsis; white-space: nowrap; font-variant-numeric: tabular-nums; }
.vps-system-grid em { margin-left: 4px; color: var(--green); font-size: .64rem; font-style: normal; }
.vps-usage-meter { width: 100%; height: 4px; overflow: hidden; border-radius: 999px; background: #e3e9f0; display: block; }
.vps-usage-meter i { min-width: 2px; height: 100%; border-radius: inherit; display: block; transition: width .3s ease-out; }
.vps-disk-meter { min-width: 0; display: grid; gap: 5px; }
.vps-disk-meter + .vps-disk-meter { margin-top: 5px; }
.vps-detail-actions { margin-top: 12px; padding-top: 11px; border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
.vps-detail-actions button, .vps-speedtest-actions button, .traffic-reset-editor button { min-height: 33px; padding: 0 12px; border: 1px solid #d9e2ee; border-radius: 8px; background: #f4f7fb; color: #3c4c61; cursor: pointer; font-size: .72rem; font-weight: 700; }
.vps-detail-actions button:hover, .vps-speedtest-actions button:hover { color: var(--blue); background: var(--blue-soft); }
.vps-detail-actions button.active { border-color: #cdddf7; color: var(--blue); background: var(--blue-soft); }
.vps-detail-actions button span { margin-left: 5px; color: var(--muted); font-weight: 500; }
.vps-detail-actions button.speed-test { color: #087a5a; border-color: #ccebe1; background: #effbf7; }
.vps-detail-actions button.speed-test:hover { color: var(--green); border-color: var(--green); background: var(--green-soft); }
.vps-detail-section { margin-top: 12px; padding-top: 2px; animation: detail-in .16s ease-out; }
@keyframes detail-in { from { opacity: .35; transform: translateY(-3px); } }
.vps-empty-detail { padding: 18px; color: var(--muted); text-align: center; font-size: .76rem; }
.node-connection-list { display: grid; gap: 10px; }
.node-connection-group { overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); }
.node-connection-group-header { width: 100%; min-height: 48px; padding: 8px 16px; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-soft); color: var(--text); display: flex; align-items: center; gap: 9px; text-align: left; cursor: pointer; }
.node-connection-group.collapsed .node-connection-group-header { border-bottom: 0; }
.node-connection-group-header:hover { background: var(--blue-soft); }
.node-connection-group-chevron { width: 18px; flex: 0 0 18px; color: var(--muted); font-size: 1rem; font-style: normal; text-align: center; line-height: 1; }
.node-connection-group-header > strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .86rem; text-overflow: ellipsis; white-space: nowrap; }
.node-connection-group-header > .route-state { padding: 3px 7px; border-radius: 999px; font-size: .63rem; font-weight: 750; white-space: nowrap; }
.node-connection-group-header > .route-state.current { color: var(--green); background: var(--green-soft); }.node-connection-group-header > .route-state.changed { color: var(--amber); background: var(--amber-soft); }.node-connection-group-header > .route-state.ended, .node-connection-group-header > .route-state.missing { color: var(--red); background: rgba(220,53,69,.11); }
.node-connection-group-header > b { margin-left: auto; color: var(--muted); font-size: .68rem; font-weight: 650; white-space: nowrap; }
.node-connection-head, .node-connection-row { width: 100%; min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) 78px minmax(170px, .34fr) minmax(170px, .34fr); align-items: center; gap: 10px; }
.node-connection-head { min-height: 34px; padding: 0 13px; border-bottom: 1px solid var(--line); color: var(--muted); font-size: .65rem; font-weight: 750; letter-spacing: .01em; }
.node-connection-head span:nth-child(2) { text-align: right; }.node-connection-head span:nth-child(3), .node-connection-head span:nth-child(4) { text-align: center; }
.node-connection-item + .node-connection-item { border-top: 1px solid var(--line); }
.node-connection-item.expanded { padding-bottom: 1px; background: var(--surface-soft); }
.node-connection-row { min-height: 54px; padding: 7px 13px; border: 0; background: var(--surface); color: inherit; text-align: left; cursor: pointer; transition: background .15s ease; }
.node-connection-row:focus { outline: none; }.node-connection-row:focus-visible { box-shadow: inset 0 0 0 2px var(--blue-soft); }
.node-connection-item:nth-child(odd) .node-connection-row { background: color-mix(in srgb, var(--surface-soft) 48%, var(--surface)); }
.node-connection-row:hover { background: var(--blue-soft); }
.node-connection-row.ended { opacity: .58; }
.node-connection-target { min-width: 0; position: relative; padding-left: 18px; display: grid; gap: 2px; }
.node-connection-target > i { position: absolute; left: 1px; top: 7px; width: 8px; height: 8px; border-radius: 50%; }.node-connection-target > i.online { background: var(--green); box-shadow: 0 0 0 3px rgba(7,150,105,.11); }.node-connection-target > i.offline { background: var(--red); }
.node-connection-target strong, .node-connection-route strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .78rem; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
.node-connection-target small { overflow: hidden; color: var(--muted); font-size: .61rem; text-overflow: ellipsis; white-space: nowrap; }
.node-connection-route { min-width: 0; display: grid; justify-items: start; gap: 5px; }.node-connection-route small { padding: 3px 7px; border-radius: 999px; font-size: .64rem; font-weight: 750; line-height: 1; }
.node-connection-route.current small { color: var(--green); background: var(--green-soft); }.node-connection-route.changed small { color: var(--amber); background: var(--amber-soft); }.node-connection-route.ended small, .node-connection-route.missing small { color: var(--red); background: rgba(220,53,69,.11); }
.node-connection-delay { color: var(--muted); font-size: .69rem; font-weight: 650; text-align: right; font-variant-numeric: tabular-nums; }
.node-connection-speed { min-width: 0; padding-right: 1px; display: flex; align-items: center; justify-content: flex-end; gap: 5px; text-align: right; font-size: .68rem; font-variant-numeric: tabular-nums; white-space: nowrap; }
.node-connection-speed b { min-width: 70px; padding: 4px 6px; border: 1px solid transparent; border-radius: 6px; text-align: center; transition: color .2s ease, background .2s ease, border-color .2s ease, opacity .2s ease; }
.node-connection-speed b.speed-tone-idle { opacity: .58; background: rgba(148,163,184,.06); }
.node-connection-speed b.speed-tone-low { background: rgba(100,116,139,.07); }
.node-connection-speed b.speed-tone-active { border-color: rgba(59,130,246,.17); background: rgba(59,130,246,.10); }
.node-connection-speed b.speed-tone-fast { border-color: rgba(99,102,241,.22); background: rgba(99,102,241,.12); }
.node-connection-speed b.speed-tone-peak { border-color: rgba(139,92,246,.25); background: rgba(139,92,246,.14); }
.node-connection-traffic { min-width: 0; display: flex; align-items: center; justify-content: flex-end; gap: 5px; color: var(--muted); font-size: .67rem; font-variant-numeric: tabular-nums; white-space: nowrap; }
.node-connection-traffic b { min-width: 69px; text-align: right; }.node-connection-traffic b:first-child { color: #4a78bd; }.node-connection-traffic b:nth-child(2) { color: #3c8d72; }
.node-connection-traffic i { width: 12px; margin-left: 2px; color: var(--muted); font-size: .85rem; font-style: normal; font-weight: 650; text-align: center; }
.speed-history-detail { overflow: hidden; }
.speed-history-detail > header { min-height: 58px; }
.speed-history-stats { display: flex; align-items: center; gap: 13px; color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }
.speed-history-stats span { display: grid; gap: 1px; }.speed-history-stats b { color: var(--text); font-size: .69rem; white-space: nowrap; }
.speed-history-canvas { width: 100%; height: 230px; }
.speed-history-detail.compact { margin: 0 12px 12px; background: var(--surface); }
.speed-history-detail.compact > header { min-height: 52px; padding: 8px 11px; }
.speed-history-detail.compact .speed-history-canvas { height: 170px; }
.node-quality-details { display: grid; gap: 12px; }
.vps-traffic-inline-detail { margin-top: 10px; }
.node-latency-detail > header { min-height: 58px; }
.node-latency-stats { display: flex; align-items: center; gap: 12px; color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }
.node-latency-stats span { display: grid; gap: 1px; }.node-latency-stats b { color: var(--text); font-size: .68rem; white-space: nowrap; }
.node-latency-detail-canvas { width: 100%; height: 220px; }
.vps-precise-traffic { margin-top: 8px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
.vps-precise-traffic span { min-width: 0; color: var(--muted); font-size: .7rem; display: grid; gap: 2px; }
.vps-precise-traffic strong { overflow: hidden; color: var(--text); font-size: .8rem; text-overflow: ellipsis; white-space: nowrap; }
.session-ip-row { margin: 7px 0 0 !important; color: var(--muted) !important; }
.session-ip-row span:not(:first-child) { padding: 4px 8px !important; border: 1px solid var(--line); background: var(--surface-soft) !important; }
.vps-detail-row { min-height: 30px; gap: 18px; }
.mtcp-pool { margin-top: 13px !important; padding: 13px !important; gap: 12px !important; border: 1px solid #e0e8f2; background: #f4f7fb !important; }
.mtcp-config-editor { margin: 8px 0; padding: 13px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface-soft); display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; align-items: end; }
.config-center-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 14px; }.config-center-card { min-height: 150px; padding: 18px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); }.config-center-card h3 { margin: 10px 0 7px; }.config-center-card p, .config-center-card small { color: var(--muted); }.config-badge { display: inline-block; padding: 3px 7px; border-radius: 999px; background: #e8f8f2; color: #16845c; font-size: .7rem; font-weight: 700; }.config-badge.pending { background: #f3f5f8; color: #778399; }
.mtcp-config-editor > strong { grid-column: 1 / -1; }.mtcp-config-editor label { display: grid; gap: 4px; color: var(--muted); font-size: .72rem; }.mtcp-config-editor input { min-width: 0; padding: 6px 7px; border: 1px solid var(--line); border-radius: 5px; background: var(--surface); color: var(--text); }.mtcp-config-editor button { width: fit-content; min-height: 34px; padding: 7px 14px; border: 1px solid #087e8b; border-radius: 6px; background: linear-gradient(135deg, #0da59a, #087e8b); color: #fff; font-weight: 750; box-shadow: 0 2px 5px rgba(8,126,139,.24); cursor: pointer; transition: transform .15s, box-shadow .15s, opacity .15s; }.mtcp-config-editor button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(8,126,139,.3); }.mtcp-config-editor button:disabled { cursor: wait; opacity: .62; }.mtcp-config-editor .success { align-self: center; color: #16845c; font-weight: 700; }.mtcp-config-editor .error { align-self: center; color: #c23b3b; font-weight: 700; }
.config-center-mtcp { padding: 0; overflow: hidden; border-radius: 14px; box-shadow: 0 8px 28px rgba(29,54,83,.06); }
.config-card-heading { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; padding: 22px 24px 18px; border-bottom: 1px solid var(--line); background: linear-gradient(135deg, rgba(13,165,154,.07), transparent 48%); }
.config-card-heading h3 { margin: 8px 0 4px; font-size: 1.18rem; }.config-card-heading p { margin: 0; }.config-live { display: flex; align-items: center; gap: 7px; color: #16845c; font-size: .75rem; font-weight: 700; white-space: nowrap; }.config-live i { width: 8px; height: 8px; border-radius: 50%; background: #19b77d; box-shadow: 0 0 0 4px rgba(25,183,125,.12); }
.config-center-mtcp .mtcp-config-editor { display: block; margin: 0; padding: 20px 24px 22px; border: 0; border-radius: 0; background: var(--surface); }
.config-group { padding: 0 0 20px; margin-bottom: 20px; border-bottom: 1px solid var(--line); }.config-group.compact { margin-bottom: 0; }.config-group > header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 13px; }.config-group > header b { font-size: .9rem; }.config-group > header small { color: var(--muted); }
.config-pairs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }.config-direction { display: grid; grid-template-columns: auto 1fr 1fr; gap: 12px; align-items: end; padding: 14px; border: 1px solid rgba(37,118,224,.16); border-radius: 10px; background: rgba(37,118,224,.035); }.config-direction.down { border-color: rgba(22,132,92,.18); background: rgba(22,132,92,.035); }.config-direction > strong { align-self: start; padding-top: 5px; color: #2576e0; font-size: .78rem; }.config-direction.down > strong { color: #16845c; }
.config-fields { display: grid; grid-template-columns: repeat(4, minmax(130px, 1fr)); gap: 12px; }.config-fields.single { grid-template-columns: minmax(180px, 310px); }.config-field { display: grid; gap: 5px; min-width: 0; color: var(--text); font-size: .75rem; }.config-field > span { font-weight: 700; }.config-field > small { min-height: 1em; color: var(--muted); font-size: .66rem; line-height: 1.3; }
.config-input-wrap { display: flex; align-items: center; min-width: 0; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); transition: border-color .15s, box-shadow .15s; }.config-input-wrap:focus-within { border-color: #0da59a; box-shadow: 0 0 0 3px rgba(13,165,154,.1); }.config-center-mtcp .config-input-wrap input { width: 100%; min-width: 0; padding: 9px 10px; border: 0; outline: 0; background: transparent; font-weight: 750; }.config-input-wrap em { padding: 0 9px; color: var(--muted); font-size: .68rem; font-style: normal; white-space: nowrap; }
.config-actions { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding-top: 2px; }.config-actions > div { min-height: 18px; }.config-actions button { margin-left: auto; }.config-loading { padding: 28px 24px; color: var(--muted); }
@media (max-width: 900px) { .config-pairs { grid-template-columns: 1fr; }.config-fields { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .config-card-heading { padding: 18px; }.config-card-heading p { font-size: .75rem; }.config-live { display: none; }.config-center-mtcp .mtcp-config-editor { padding: 16px 18px 18px; }.config-group > header { display: grid; gap: 3px; }.config-direction { grid-template-columns: 1fr 1fr; }.config-direction > strong { grid-column: 1 / -1; }.config-fields { grid-template-columns: 1fr 1fr; }.config-field > small { display: none; }.config-actions { align-items: stretch; flex-direction: column; }.config-actions button { width: 100%; margin: 0; }.config-center-grid { grid-template-columns: 1fr; } }
.mtcp-direction { min-width: 0 !important; }
.mtcp-link-grid { grid-template-columns: repeat(auto-fit, minmax(142px, 1fr)) !important; gap: 7px !important; align-items: start; }
.mtcp-link-card { position: relative; min-width: 0; align-self: start; padding: 9px 10px !important; border-color: var(--line) !important; box-shadow: 0 2px 8px rgba(28,45,75,.04) !important; }
.mtcp-link-card[role="button"] { cursor: pointer; }
.mtcp-link-card.rotating { height: 126px !important; min-height: 126px; max-height: 126px; border-color: #5eead4 !important; box-shadow: 0 2px 10px rgba(20,184,166,.14) !important; }
.mtcp-link-card.rotating .mtcp-link-spark { display: none !important; }
.mtcp-link-card.rotating::after { content: ""; position: absolute; z-index: 2; pointer-events: none; inset: 0; padding: 2px; border-radius: inherit; background: linear-gradient(100deg, #10b981, #5eead4, #38bdf8, #10b981); background-size: 220% 100%; -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: mtcp-rotate-border 2.4s linear infinite; }
.mtcp-link-state.rotating-state { animation: mtcp-rotate-state 1.1s ease-in-out infinite alternate; }
.mtcp-link-card.rotation-complete { border-color: rgba(32,180,134,.58) !important; }
.mtcp-link-state.completed-state { display: inline-flex; align-items: center; gap: 5px; }
.mtcp-link-state.completed-state::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #20b486; box-shadow: 0 0 0 0 rgba(32,180,134,.48); animation: mtcp-complete-breathe 1.25s ease-out infinite; }
@keyframes mtcp-rotate-border { to { background-position: 220% 0; } }
@keyframes mtcp-rotate-state { from { opacity: .58; } to { opacity: 1; } }
@keyframes mtcp-complete-breathe { 0% { box-shadow: 0 0 0 0 rgba(32,180,134,.48); opacity: .72; } 70% { box-shadow: 0 0 0 6px rgba(32,180,134,0); opacity: 1; } 100% { box-shadow: 0 0 0 0 rgba(32,180,134,0); opacity: .82; } }
.mtcp-link-card:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
.mtcp-link-identity { min-width: 0; display: grid; gap: 1px; }
.mtcp-link-identity small { color: var(--muted); font-size: .58rem; font-weight: 500; }
.mtcp-link-card.suspect { border-color: #f1aeb5 !important; }
.mtcp-link-card.recent-timeout { border-color: rgba(230,126,34,.55) !important; }
.mtcp-link-alerts { margin-top: 5px; display: flex; gap: 5px; }
.mtcp-link-alerts span { padding: 2px 5px; border-radius: 4px; background: rgba(230,126,34,.1); color: #c56a13; font-size: .61rem; font-weight: 700; }
.mtcp-link-hover-detail { position: absolute; z-index: 20; left: 50%; bottom: calc(100% + 8px); width: 248px; padding: 10px 11px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--text); box-shadow: 0 10px 30px rgba(13,31,54,.2); opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, 5px); transition: opacity .12s ease, transform .12s ease, visibility .12s; }
.mtcp-link-card:hover .mtcp-link-hover-detail, .mtcp-link-card:focus-visible .mtcp-link-hover-detail, .mtcp-link-card.detail-open .mtcp-link-hover-detail { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
.mtcp-link-hover-detail > strong { display: block; margin-bottom: 7px; font-size: .72rem; }
.mtcp-link-hover-detail dl { margin: 0; display: grid; gap: 4px; }
.mtcp-link-hover-detail dl > div { display: flex; justify-content: space-between; gap: 10px; font-size: .64rem; }
.mtcp-link-hover-detail dt { color: var(--muted); }.mtcp-link-hover-detail dd { margin: 0; max-width: 150px; overflow: hidden; font-variant-numeric: tabular-nums; text-overflow: ellipsis; white-space: nowrap; }.mtcp-link-hover-detail dd.warn { color: #e67e22; font-weight: 750; }
.mtcp-link-spark { position: relative; width: 100%; height: 24px !important; min-height: 24px; max-height: 24px; margin-top: 6px; display: block; border-bottom: 1px solid #edf1f5; cursor: crosshair; }
.mtcp-link-spark svg { width: 100%; height: 100%; display: block; overflow: visible; }
.mtcp-link-spark polyline { fill: none; stroke-width: 2; vector-effect: non-scaling-stroke; }
.mtcp-spark-guide { stroke: #8492a6; stroke-width: 1; stroke-dasharray: 2 2; vector-effect: non-scaling-stroke; opacity: .75; }
.mtcp-spark-point { stroke: white; stroke-width: 1.5; vector-effect: non-scaling-stroke; }
.mtcp-spark-tooltip { position: absolute; z-index: 3; top: -25px; padding: 3px 6px; border-radius: 5px; background: #10263f; color: white; font-size: .64rem; font-weight: 700; white-space: nowrap; pointer-events: none; transform: translateX(-50%); box-shadow: 0 3px 10px rgba(12,35,61,.22); }
.mtcp-link-spark.empty { height: 10px !important; min-height: 10px; max-height: 10px; border-bottom-style: dashed; }
.traffic-reset-editor { margin: 10px 0; padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); display: flex; flex-wrap: wrap; align-items: center; gap: 7px; color: var(--muted); font-size: .72rem; }
.traffic-reset-editor input { height: 33px; padding: 0 8px; border: 1px solid #d9e2ee; border-radius: 7px; background: white; color: var(--text); }
.traffic-reset-editor input[type="number"] { width: 58px; }
.traffic-reset-editor small.success { color: var(--green); }.traffic-reset-editor small.error { color: var(--red); }
.vps-speedtest-actions { margin: 10px 0; display: flex; justify-content: flex-end; gap: 8px; }
.vps-traffic-charts { margin-top: 12px; display: grid; gap: 12px; }
.vps-traffic-chart-card { overflow: hidden; border: 1px solid var(--line); border-radius: 11px; background: white; box-shadow: 0 2px 8px rgba(28,45,75,.035); }
.vps-traffic-chart-card > header { min-height: 54px; padding: 10px 14px; border-bottom: 1px solid #edf1f5; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vps-traffic-chart-card h4 { margin: 0; color: var(--text); font-size: .8rem; }
.vps-traffic-chart-card p { margin: 3px 0 0; color: var(--muted); font-size: .65rem; }
.vps-traffic-chart-card > header > span { padding: 4px 7px; border-radius: 6px; background: var(--surface-soft); color: var(--muted); font-size: .62rem; font-weight: 700; white-space: nowrap; }
.vps-traffic-chart-canvas { width: 100%; height: 240px; }
.vps-traffic-progress { width: 100%; margin-top: 13px; padding: 11px 10px 9px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); color: inherit; display: block; text-align: left; cursor: pointer; transition: border-color .15s ease, background .15s ease, box-shadow .15s ease; }
.vps-traffic-progress:hover, .vps-traffic-progress.active { border-color: var(--node-accent-border); background: var(--node-accent-soft); }
.vps-traffic-progress:focus { outline: none; }.vps-traffic-progress:focus-visible { box-shadow: 0 0 0 2px var(--node-accent-soft); }
.vps-traffic-progress-labels { margin-bottom: 7px; display: grid; grid-template-columns: minmax(170px, 1fr) minmax(150px, 1fr) minmax(170px, auto); align-items: center; gap: 12px; color: var(--muted); font-size: .7rem; font-variant-numeric: tabular-nums; }
.vps-traffic-progress-labels span:nth-child(2) { text-align: center; }
.vps-traffic-progress-labels span:last-child { text-align: right; }
.vps-traffic-progress-labels strong { color: var(--text); }
.vps-traffic-progress-labels i { margin-left: 8px; color: var(--node-accent); font-size: .62rem; font-style: normal; font-weight: 750; }
.vps-traffic-progress-track { width: 100%; height: 7px; overflow: hidden; border-radius: 999px; background: #e9eef4; display: block; }
.vps-traffic-progress-track > div { min-width: 3px; height: 100%; border-radius: inherit; transition: width .3s ease-out; }
.mtcp-diagnostics { margin: 10px 0 18px; padding: 0; overflow: visible; }
.mtcp-direction-title > strong { min-width: 76px; text-align: right; font-size: .78rem; font-variant-numeric: tabular-nums; }
.mtcp-diagnostics-header { width: 100%; min-height: 64px; padding: 12px 16px; border: 0; background: white; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; color: var(--text); text-align: left; cursor: pointer; }
.mtcp-diagnostics-header > span:nth-child(2) { min-width: 0; display: grid; gap: 3px; }
.mtcp-diagnostics-header small { color: var(--muted); font-size: .69rem; font-weight: 400; }
.mtcp-diagnostics-header b { color: var(--blue); font-size: .7rem; }
.mtcp-diagnostic-content { padding: 0 14px 14px; }
.mtcp-diagnostic-node { border-top: 1px solid var(--line); }
.mtcp-diagnostic-node > button { width: 100%; min-height: 58px; padding: 7px 4px; border: 0; background: transparent; display: grid; grid-template-columns: minmax(110px, 1fr) minmax(76px, auto) minmax(136px, auto) 74px; align-items: center; gap: 10px; text-align: left; cursor: pointer; }
.mtcp-diagnostic-node-name { min-width: 0; display: grid; gap: 3px; }.mtcp-diagnostic-node-name > small { overflow: hidden; color: var(--muted); font-size: .72rem; text-overflow: ellipsis; white-space: nowrap; }
.mtcp-diagnostic-metric { min-height: 40px; padding: 5px 8px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface-soft); display: grid; gap: 2px; font-variant-numeric: tabular-nums; }.mtcp-diagnostic-metric small { color: var(--muted); font-size: .58rem; font-weight: 500; }.mtcp-diagnostic-metric > strong { color: var(--text); font-size: .72rem; white-space: nowrap; }
.mtcp-diagnostic-metric.latency.good > strong { color: var(--green); }.mtcp-diagnostic-metric.latency.warn > strong { color: #e67e22; }.mtcp-diagnostic-metric.latency.bad > strong { color: var(--red); }
.mtcp-diagnostic-metric.speed > strong { display: flex; gap: 7px; }.mtcp-diagnostic-metric.speed i { font-size: .66rem; font-style: normal; }
.mtcp-diagnostic-node > button b { color: var(--green); font-size: .7rem; text-align: right; }
.mtcp-diagnostic-node > button b.warn { color: #e67e22; }

@media (max-width: 620px) {
    .mtcp-diagnostic-node > button { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
    .mtcp-diagnostic-node-name { grid-column: 1; grid-row: 1; }
    .mtcp-diagnostic-node > button > b { grid-column: 2; grid-row: 1; }
    .mtcp-diagnostic-metric.latency { grid-column: 1; grid-row: 2; }
    .mtcp-diagnostic-metric.speed { grid-column: 2; grid-row: 2; }
    .mtcp-diagnostic-metric { min-width: 0; min-height: 49px; padding: 7px 10px; }
    .mtcp-diagnostic-metric.speed > strong { flex-wrap: wrap; gap: 2px 8px; }
    .mtcp-diagnostic-metric.speed i { font-size: .7rem; }
    .mtcp-diagnostic-node-name > small { font-size: .65rem; }
}

.mobile-nav { display: none; }

/* \u6697\u8272\u4E3B\u9898\u8986\u76D6\u4ECD\u4F7F\u7528\u56FA\u5B9A\u6D45\u8272\u503C\u7684\u65E7\u7EC4\u4EF6\u3002 */
:root[data-theme="dark"] .topbar { background: rgba(11,18,32,.9); }
:root[data-theme="dark"] .hero-card { border-color: var(--line); background: linear-gradient(120deg, #111b2b 0%, #14243a 100%); }
:root[data-theme="dark"] .speed-panel-header,
:root[data-theme="dark"] .latency-panel-header,
:root[data-theme="dark"] .mtcp-diagnostics-header,
:root[data-theme="dark"] .vps-traffic-chart-card { background: var(--surface); }
:root[data-theme="dark"] .speed-panel-header:hover,
:root[data-theme="dark"] .latency-panel-header:hover { background: var(--surface-soft); }
:root[data-theme="dark"] .mtcp-link-card { background: var(--surface) !important; border-color: var(--line) !important; }
:root[data-theme="dark"] .mtcp-pool { background: #0e1929 !important; border-color: var(--line); }
:root[data-theme="dark"] .traffic-reset-editor input,
:root[data-theme="dark"] .analytics-controls select { background: var(--surface); border-color: var(--line); color: var(--text); }
:root[data-theme="dark"] .range-tabs { background: #0c1625; }
:root[data-theme="dark"] .range-tabs button.active,
:root[data-theme="dark"] .range-tabs > span.active { background: var(--surface-soft); }
:root[data-theme="dark"] .alert-item > span { background: var(--surface) !important; }
:root[data-theme="dark"] .vps-detail-actions button,
:root[data-theme="dark"] .vps-speedtest-actions button,
:root[data-theme="dark"] .traffic-reset-editor button,
:root[data-theme="dark"] .simple-button { color: #bdc9d9; border-color: var(--line); background: var(--surface-soft); }
:root[data-theme="dark"] .vps-detail-actions button.speed-test { color: var(--green); border-color: #245b4d; background: #13382f; }
:root[data-theme="dark"] .vps-system-grid,
:root[data-theme="dark"] .vps-precise-traffic,
:root[data-theme="dark"] .traffic-reset-editor { border-color: var(--line); }
:root[data-theme="dark"] .vps-name { color: #f2f6fc !important; }
:root[data-theme="dark"] .LinksHeader .panel-title-icon,
:root[data-theme="dark"] .LinksHeader .panel-title-icon .toolbar-icon { color: #38c8e8; }
:root[data-theme="dark"] .speed-tone-idle { color: #64748b !important; }
:root[data-theme="dark"] .speed-tone-low { color: #94a3b8 !important; }
:root[data-theme="dark"] .speed-tone-active { color: #60a5fa !important; }
:root[data-theme="dark"] .route-row span { color: #a9b8cc; }
:root[data-theme="dark"] .route-row .speed-tone-idle { color: #94a3b8 !important; }
:root[data-theme="dark"] .speed-tone-fast { color: #818cf8 !important; }
:root[data-theme="dark"] .speed-tone-peak { color: #a78bfa !important; }
:root[data-theme="dark"] .vps-reset-time { color: var(--muted) !important; }
:root[data-theme="dark"] .vps-usage-meter,
:root[data-theme="dark"] .vps-traffic-progress-track { background: #27364a; }
:root[data-theme="dark"] .node-row,
:root[data-theme="dark"] .route-row,
:root[data-theme="dark"] .traffic-node-row,
:root[data-theme="dark"] .vps-card-heading,
:root[data-theme="dark"] .vps-detail-actions,
:root[data-theme="dark"] .vps-traffic-progress,
:root[data-theme="dark"] .speed-chart-body,
:root[data-theme="dark"] .latency-chart-body { border-color: var(--line) !important; }
:root[data-theme="dark"] .sdiv,
:root[data-theme="dark"] li { background: var(--surface); color: var(--text); }
:root[data-theme="dark"] th { background: var(--surface-soft); }
:root[data-theme="dark"] th,
:root[data-theme="dark"] td { border-color: var(--line); }

@media (max-width: 1180px) {
    .metric-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .overview-grid { grid-template-columns: 1fr; }
    .overview-bottom { grid-template-columns: 1fr; }
}

@media (max-width: 820px) {
    .app-sidebar { display: none; }
    .app-main { margin-left: 0; padding-bottom: 74px; }
    .topbar { min-height: 66px; padding: 10px 16px; }
    .eyebrow { display: none; }
    .topbar h1 { font-size: 1.15rem; }
    .topbar-route { padding: 6px 9px; }.topbar-route span { display: none; }
    .theme-toggle { min-width: 36px; padding: 0 8px; }.theme-toggle small { display: none; }
    .page-content { padding: 14px 12px 25px; }
    .mobile-nav {
        position: fixed;
        inset: auto 0 0;
        z-index: 500;
        min-height: 64px;
        padding: 6px max(8px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));
        border-top: 1px solid var(--line);
        background: rgba(255,255,255,.96);
        backdrop-filter: blur(18px);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        box-shadow: 0 -8px 24px rgba(28,45,75,.08);
    }
    :root[data-theme="dark"] .mobile-nav { background: rgba(11,18,32,.96); }
    .mobile-nav button { min-width: 0; border: 0; background: transparent; color: #7a899c; display: grid; place-items: center; gap: 1px; }
    .mobile-nav button > span { font-size: 1.15rem; line-height: 1; }
    .mobile-nav button small { font-size: .65rem; white-space: nowrap; }
    .mobile-nav button.active { color: var(--blue); font-weight: 750; }
    .hero-card { min-height: 0; padding: 18px; align-items: flex-end; }
    .hero-card h2 { font-size: 1.35rem; }.hero-card p { font-size: .76rem; }.primary-action { min-width: 92px; padding: 0 12px; }
    .metric-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }
    .metric-card { min-height: 116px; padding: 14px; }.metric-card strong { font-size: 1.25rem; }
    .overview-grid, .overview-bottom { grid-template-columns: 1fr; gap: 12px; }
    .diagnostic-summary { grid-template-columns: 1fr 1fr; }
    .node-latency-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 4px; }
    .node-latency-card { flex: 0 0 min(72vw, 230px); scroll-snap-align: start; }
    .analytics-header { display: grid; }
    .analytics-controls { width: 100%; justify-content: space-between; }
    .traffic-summary-grid { grid-template-columns: 1fr 1fr; }
    .traffic-history-chart { height: 260px; }
    .traffic-node-table { overflow-x: auto; }
    .traffic-node-row { min-width: 550px; }
    .NodesHeader, .LinksHeader { min-height: 48px; border-radius: 11px; }
    .LinksHeader { flex-wrap: wrap; }
    .aggregate-speed { justify-content: flex-end; }
    .link-toolbar { width: 100%; justify-content: flex-start; padding-top: 7px; border-top: 1px solid var(--line); overflow-x: auto; flex-wrap: nowrap; }
    .link-toolbar .simple-button { flex: 0 0 auto; min-height: 36px; }
    .link-route-state { min-width: 82px; max-width: 105px; margin: 0 4px; }
    .traffic-remaining { display: none; }
    .route-row { grid-template-columns: 1fr auto auto; gap: 5px; padding: 8px 0; }
    .route-row .up-text, .route-row .down-text { grid-row: 2; }
    .route-row .up-text { grid-column: 2; }.route-row .down-text { grid-column: 3; }
    .vps-card-main { padding: 14px !important; }
    .vps-card-heading { display: grid !important; grid-template-columns: 1fr auto; gap: 7px; }
    .vps-identity { flex-basis: auto !important; }.vps-traffic-total { justify-content: flex-end; }.vps-live-speed { grid-column: 1 / -1; width: auto; margin-left: auto; justify-self: end; justify-content: flex-end; }
    .vps-stats { display: grid !important; grid-template-columns: 1fr 1fr; gap: 7px; }
    .vps-stats span { flex: auto !important; text-align: left !important; }.vps-stats span:last-child { grid-column: 1 / -1; }
    .vps-system-grid { grid-template-columns: 1fr 1fr; }
    .vps-system-grid > div, .vps-system-grid > div:nth-child(3n) { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .vps-system-grid > div:nth-child(2n) { border-right: 0; }
    .vps-system-grid > div:nth-last-child(-n+2) { border-bottom: 0; }
    .vps-system-grid strong { overflow: visible; font-size: .7rem; line-height: 1.25; text-overflow: clip; white-space: normal; }
    .vps-precise-traffic { grid-template-columns: 1fr 1fr; }
    .vps-detail-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .vps-detail-actions button { padding: 0 5px; }
    .node-connection-head { display: none; }
    .node-connection-row { min-height: 102px; padding: 9px 10px; grid-template-columns: minmax(0, 1fr) auto; gap: 6px 8px; }
    .node-connection-target { grid-column: 1; grid-row: 1; }
    .node-connection-delay { grid-column: 2; grid-row: 1; text-align: right; }
    .node-connection-speed { grid-column: 1 / -1; grid-row: 2; justify-content: flex-end; }
    .node-connection-speed b { min-width: 82px; }
    .node-connection-traffic { grid-column: 1 / -1; grid-row: 3; justify-content: flex-end; }
    .node-connection-traffic b { min-width: 82px; }
    .speed-history-detail > header { align-items: flex-start; flex-direction: column; }
    .speed-history-stats { width: 100%; justify-content: space-between; }
    .speed-history-canvas { height: 205px; }
    .speed-history-detail.compact { margin: 0 8px 9px; }
    .speed-history-detail.compact .speed-history-canvas { height: 155px; }
    .node-connection-group-header { padding: 8px 11px; flex-wrap: wrap; }
    .node-connection-group-header > b { width: 100%; margin-left: 0; }
    .node-latency-detail > header { align-items: flex-start; flex-direction: column; }
    .node-latency-stats { width: 100%; justify-content: space-between; }
    .node-latency-detail-canvas { height: 200px; }
    .traffic-reset-editor button { width: 100%; }
    .vps-traffic-chart-card > header { min-height: 50px; padding: 9px 11px; }
    .vps-traffic-chart-canvas { height: 210px; }
    .vps-traffic-progress-labels { grid-template-columns: 1fr 1fr; gap: 4px 10px; }
    .vps-traffic-progress-labels span:nth-child(2) { text-align: right; }
    .vps-traffic-progress-labels span:last-child { grid-column: 1 / -1; text-align: left; }
    .vps-detail-row { align-items: flex-start !important; flex-direction: column; gap: 4px; }
    .mtcp-pool { display: block !important; padding: 10px !important; }
    .mtcp-direction + .mtcp-direction { margin-top: 13px; padding-top: 12px; border-top: 1px solid var(--line); }
    .mtcp-pool { display: grid !important; grid-template-columns: minmax(0, 1fr); padding: 6px !important; }
    .mtcp-direction { width: 100%; }
    .mtcp-link-grid { display: grid !important; grid-template-columns: minmax(0, 1fr) !important; overflow: visible; padding-bottom: 0; }
    .mtcp-link-card { width: 100%; padding: 10px 11px !important; }
    .mtcp-link-card.rotating { height: auto !important; min-height: 0; max-height: none; }
    .mtcp-link-hover-detail { position: static; width: 100%; margin-top: 9px; padding: 9px; display: none; opacity: 1; visibility: visible; pointer-events: auto; transform: none; box-shadow: none; background: var(--surface-soft); }
    .mtcp-link-card.detail-open .mtcp-link-hover-detail { display: block; opacity: 1; visibility: visible; transform: none; }
    .mtcp-link-hover-detail > strong { font-size: .78rem; }
    .mtcp-link-hover-detail dl { gap: 6px; }
    .mtcp-link-hover-detail dl > div { font-size: .72rem; }
    .panel-card { padding: 15px; }
    .speed-panel-header { min-height: 64px; padding: 10px 13px; grid-template-columns: auto minmax(100px, 1fr) auto auto; gap: 8px; }
    .speed-range-tabs { grid-column: 2 / -1; grid-row: 2; justify-self: start; }
    .speed-panel-heading small { display: none; }
    .speed-panel-live { min-width: 0; padding-left: 8px; }
    .speed-panel-live strong { font-size: .76rem; }
    .speed-chart-body { height: 220px; padding: 0 4px 8px; }
    .speed-chart-canvas { height: 212px; }
    .latency-panel-header { min-height: 62px; padding: 10px 13px; }
    .latency-panel-header small { display: none; }
    .latency-chart-body { height: 225px; padding: 0 4px 8px; }
    .latency-chart-canvas { height: 217px; }
}

@media (max-width: 480px) {
    .topbar-route strong { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .hero-card { display: block; }.primary-action { width: 100%; margin-top: 14px; }
    .metric-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; margin-right: -12px; padding-right: 12px; }
    .metric-card { flex: 0 0 42vw; min-width: 150px; scroll-snap-align: start; }
    .diagnostic-summary { display: flex; overflow-x: auto; }.diagnostic-summary .metric-card { flex: 0 0 160px; }
    .route-list-shell .route-list-body { padding-inline: 6px; }
    .route-list-shell .route-item-header { padding-inline: 7px !important; }
    .route-item-header { grid-template-columns: 18px minmax(0, 1fr) auto auto 68px !important; gap: 5px !important; }
    .route-list-columns { display: none; }
    .route-item-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .route-item-speeds { grid-column: 2 / -1; grid-row: 2; justify-content: flex-start; gap: 8px; }
    .route-item-count { width: 23px; height: 23px; }
    .route-item-exit { max-width: 64px; }
    .route-item-mode { width: 68px; max-width: 68px; }
    .route-item-details { margin: 4px 0 8px; }
    .aggregate-speed { width: 100%; order: 5; justify-content: flex-start; padding-left: 30px; }
    .node-row { grid-template-columns: 8px 1fr auto; padding: 6px 0; }
    .node-row .health-dot { grid-column: 1; grid-row: 1 / 3; }
    .node-row > strong { grid-column: 2; grid-row: 1; }
    .node-row .node-speed-cell { grid-column: 2; grid-row: 2; display: flex; gap: 8px; text-align: left; }
    .node-row > span:nth-last-child(2) { grid-column: 3; grid-row: 1; }
    .node-row > span:last-child { grid-column: 3; grid-row: 2; text-align: right; }
    .mtcp-diagnostic-node > button { position: relative; grid-template-columns: minmax(72px, .55fr) minmax(166px, 1.45fr); padding: 10px 4px; gap: 9px 12px; }
    .mtcp-diagnostic-node > button .mtcp-diagnostic-node-name { grid-column: 1 / -1; grid-row: 1; padding-right: 58px; }
    .mtcp-diagnostic-node > button .mtcp-diagnostic-node-name > small { overflow: visible; text-overflow: clip; }
    .mtcp-diagnostic-node > button > b { position: absolute; top: 12px; right: 4px; }
    .mtcp-diagnostic-node > button .mtcp-diagnostic-metric.latency { grid-column: 1; grid-row: 2; }
    .mtcp-diagnostic-node > button .mtcp-diagnostic-metric.speed { grid-column: 2; grid-row: 2; min-width: 166px; }
    .speed-panel-header { grid-template-columns: auto 1fr auto; }
    .speed-panel-live { border-left: 0; text-align: right; }
    .speed-panel-live.up { display: none; }
}

@media (max-width: 640px) {
    .LinksHeader { padding: 10px 15px !important; display: grid !important; grid-template-columns: 20px 26px auto auto minmax(0, 1fr); gap: 7px 8px; }
    .LinksHeader .aggregate-speed { width: auto; padding: 0; order: initial; justify-content: flex-end; gap: 7px; }
    .LinksHeader .link-toolbar { grid-column: 1 / -1; width: 100%; padding: 8px 0 1px; border-top: 1px solid var(--line); display: flex; gap: 6px; overflow-x: auto; flex-wrap: nowrap; scrollbar-width: none; }
    .LinksHeader .link-toolbar::-webkit-scrollbar { display: none; }
    .LinksHeader .link-toolbar .simple-button { width: auto !important; min-width: 42px; min-height: 34px; padding: 0 10px; flex: 0 0 auto; white-space: nowrap; }
    .LinksHeader .link-toolbar .danger-button { min-width: 72px; }

    .links-list.show-route { margin: 6px 0 0; }
    .links-list.show-route > li { margin: 5px 0 !important; padding: 0 9px !important; border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 2px 8px rgba(28,45,75,.035); }
    .links-list.show-route .link-summary-row { width: 100%; min-width: 0; min-height: 72px; display: grid !important; grid-template-columns: 42px minmax(100px, 1fr) 30px 40px 42px; grid-template-rows: 35px 35px; align-items: center; gap: 0 5px; }
    .links-list.show-route .link-server { grid-column: 1; grid-row: 1; width: auto !important; }
    .links-list.show-route .link-route-state { grid-column: 2; grid-row: 1; width: auto; min-width: 0; max-width: none; margin: 0; }
    .links-list.show-route .link-remote { grid-column: 3; grid-row: 1; width: auto !important; text-align: center; }
    .links-list.show-route .link-time { grid-column: 4; grid-row: 1; width: auto !important; text-align: center; }
    .links-list.show-route .link-delay { grid-column: 5; grid-row: 1; width: auto !important; margin: 0 !important; text-align: center; }
    .links-list.show-route .link-target-address { grid-column: 1 / 3; grid-row: 2; min-width: 0; overflow: hidden; color: var(--text); font-size: .74rem; font-weight: 520; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }
    .links-list.show-route .link-speed-groups { grid-column: 3 / 6; grid-row: 2; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 6px; }
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { min-width: 0; height: 30px !important; margin: 0 !important; align-items: flex-end; overflow: hidden; }
    .links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .68rem !important; line-height: 1.2; white-space: nowrap; }
}

/* \u5FC5\u987B\u4F4D\u4E8E\u65E7\u7248\u79FB\u52A8\u89C4\u5219\u4E4B\u540E\uFF0C\u907F\u514D\u4E09\u680F\u91CD\u6784\u5728\u624B\u673A\u5BBD\u5EA6\u88AB\u5386\u53F2\u6837\u5F0F\u8986\u76D6\u3002 */
@media (max-width: 430px) {
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { min-height: 126px !important; padding: 10px 0 !important; display: grid !important; grid-template-columns: minmax(0,1fr) !important; grid-template-rows: auto auto auto !important; gap: 8px !important; }
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; font-size: .82rem; text-align: left !important; }
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1 !important; grid-row: 3 !important; display: grid !important; grid-template-columns: 1fr !important; gap: 4px !important; }
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: 100%; height: auto !important; display: grid !important; grid-template-columns: 42px minmax(0,1fr) minmax(0,1fr) !important; align-items: center !important; }
    .link-identity-top .link-route-state { max-width: calc(100% - 42px); }
    .link-identity-meta { gap: 8px; font-size: .62rem; }
}

/* \u901F\u5EA6\u4E0E\u6D41\u91CF\u4F7F\u7528\u7D27\u51D1\u6307\u6807\u6761\uFF0C\u4E0D\u5360\u636E\u6574\u5217\u5BBD\u5EA6\u3002 */
.links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { justify-items: end; gap: 4px !important; }
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: fit-content !important; min-width: 112px; padding: 3px 7px !important; border: 1px solid var(--line); border-radius: 7px; background: color-mix(in srgb, var(--surface-soft) 68%, transparent); grid-template-columns: 49px 49px !important; gap: 2px !important; }
.link-current-speed > small, .link-total-speed > small { font-size: .6rem; }
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span,
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .8rem !important; font-weight: 750; }
.links-list.show-route .link-current-speed.live-active, .links-list.route-scoped .link-current-speed.live-active { opacity: 1; border-color: color-mix(in srgb, var(--blue) 32%, var(--line)); background: color-mix(in srgb, var(--blue-soft) 72%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--blue) 13%, transparent); animation: none; }
.links-list.show-route .link-current-speed.live-idle, .links-list.route-scoped .link-current-speed.live-idle { animation: link-live-speed-fade 3s ease-out forwards; }
@keyframes link-live-speed-fade {
    from { opacity: 1; border-color: color-mix(in srgb, var(--blue) 32%, var(--line)); background: color-mix(in srgb, var(--blue-soft) 72%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--blue) 13%, transparent); }
    to { opacity: 0; border-color: transparent; background: transparent; box-shadow: none; }
}
.links-list.show-route .link-total-speed, .links-list.route-scoped .link-total-speed { opacity: 1 !important; }
@media (max-width: 430px) {
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { align-items: end; }
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: fit-content !important; min-width: 112px; grid-template-columns: 49px 49px !important; }
}

/* \u6700\u7EC8\u7F51\u683C\u5F52\u4E00\u89C4\u5219\uFF1B\u653E\u5728\u6587\u4EF6\u672B\u5C3E\u4EE5\u8986\u76D6\u5386\u53F2\u54CD\u5E94\u5F0F\u9009\u62E9\u5668\u3002 */
@container all-links (min-width: 561px) {
    .links-list.show-route .all-link-columns, .links-list.show-route .link-summary-row { width:100%; min-width:0; display:grid !important; grid-template-columns:minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows:auto !important; column-gap:12px !important; }
    .links-list.show-route .all-link-columns > span { display:block !important; }
    .links-list.show-route .link-identity-group { grid-column:1 !important; grid-row:1 !important; }
    .links-list.show-route .link-target-address { grid-column:2 !important; grid-row:1 !important; margin:auto !important; text-align:center !important; }
    .links-list.show-route .link-speed-groups { grid-column:3 !important; grid-row:1 !important; }
}
@container route-links (min-width: 561px) {
    .links-list.route-scoped .route-link-columns, .links-list.route-scoped .link-summary-row { width:100%; min-width:0; display:grid !important; grid-template-columns:minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows:auto !important; column-gap:12px !important; }
    .links-list.route-scoped .route-link-columns > span { display:block !important; }
    .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }
    .links-list.route-scoped .link-target-address { grid-column:2 !important; grid-row:1 !important; margin:auto !important; text-align:center !important; }
    .links-list.route-scoped .link-speed-groups { grid-column:3 !important; grid-row:1 !important; }
}
@container all-links (max-width:560px) {
    .links-list.show-route .all-link-columns { display:none !important; }
    .links-list.show-route .link-summary-row { width:100%; min-width:0; min-height:82px !important; padding-block:5px !important; display:grid !important; grid-template-columns:minmax(0,1fr) 120px !important; grid-template-rows:auto auto !important; gap:4px 8px !important; }
    .links-list.show-route .link-identity-group { grid-column:1 !important; grid-row:1 !important; }
    .links-list.show-route .link-target-address { grid-column:1 !important; grid-row:2 !important; margin:0 !important; text-align:left !important; }
    .links-list.show-route .link-speed-groups { display:contents !important; }
    .links-list.show-route .link-current-speed { grid-column:2 !important; grid-row:1 !important; justify-self:end; }
    .links-list.show-route .link-total-speed { grid-column:2 !important; grid-row:2 !important; justify-self:end; }
}
@container route-links (max-width:560px) {
    .links-list.route-scoped .route-link-columns { display:none !important; }
    .links-list.route-scoped .link-summary-row { width:100%; min-width:0; min-height:82px !important; padding-block:5px !important; display:grid !important; grid-template-columns:minmax(0,1fr) 120px !important; grid-template-rows:auto auto !important; gap:4px 8px !important; }
    .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }
    .links-list.route-scoped .link-target-address { grid-column:1 !important; grid-row:2 !important; margin:0 !important; text-align:left !important; }
    .links-list.route-scoped .link-speed-groups { display:contents !important; }
    .links-list.route-scoped .link-current-speed { grid-column:2 !important; grid-row:1 !important; justify-self:end; }
    .links-list.route-scoped .link-total-speed { grid-column:2 !important; grid-row:2 !important; justify-self:end; }
}
@media (max-width:360px) {
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns:1fr !important; grid-template-rows:auto auto auto !important; }
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column:1 !important; grid-row:2 !important; }
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column:1 !important; grid-row:3 !important; display:grid !important; }
    .links-list.show-route .link-current-speed, .links-list.route-scoped .link-current-speed { grid-column:1 !important; grid-row:1 !important; }
    .links-list.show-route .link-total-speed, .links-list.route-scoped .link-total-speed { grid-column:1 !important; grid-row:2 !important; }
}
`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[`table {\r
    border-collapse: collapse;\r
    width          : 100%;\r
}

.speed-test-detail { margin-top:10px;padding:14px;border:1px solid var(--line);border-radius:10px;background:var(--surface); }
.speed-test-detail.empty { color:var(--muted);text-align:center; }
.speed-test-detail>header { display:flex;align-items:center;justify-content:space-between;margin-bottom:9px; }
.speed-test-detail>header div { display:grid;gap:2px; }.speed-test-detail>header small { color:var(--muted); }
.speed-test-state { padding:3px 9px;border-radius:20px;background:var(--surface-soft);font-size:.72rem; }.speed-test-state.running { color:var(--green);background:var(--green-soft); }.speed-test-state.failed { color:var(--red);background:rgba(220,53,69,.1); }
.speed-test-progress { height:6px;overflow:hidden;border-radius:5px;background:var(--surface-soft); }.speed-test-progress i { display:block;height:100%;background:#1769e0;transition:width .3s; }
.speed-test-summary { display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0; }.speed-test-summary>div { display:grid;padding:10px;border-radius:8px;background:var(--surface-soft); }.speed-test-summary small,.speed-test-summary em { color:var(--muted);font-size:.7rem;font-style:normal; }.speed-test-summary strong { font-size:.9rem; }
.speed-test-bars { display:grid;grid-template-columns:repeat(10,1fr);align-items:end;gap:5px;height:120px;padding-top:8px; }.speed-test-bars span { display:grid;grid-template-rows:1fr auto;align-items:end;height:100%;text-align:center; }.speed-test-bars i { display:block;min-height:2px;border-radius:3px 3px 0 0;background:#1769e0;transition:height .3s; }.speed-test-bars small { color:var(--muted);font-size:.62rem; }
.speed-test-threads { margin-top:12px;max-height:190px;overflow:auto; }.speed-test-threads>div { display:grid;grid-template-columns:50px repeat(3,1fr);gap:6px;padding:6px 3px;border-top:1px solid var(--line);font-size:.72rem; }.speed-test-threads>div span:not(:first-child) { text-align:right; }.speed-test-threads .head { color:var(--muted); }.speed-test-error { color:var(--red); }
@media (max-width:600px) { .speed-test-summary { grid-template-columns:1fr 1fr; }.speed-test-threads>div { grid-template-columns:38px repeat(3,1fr);font-size:.65rem; } }
\r
th,\r
td {\r
    border    : 1px solid #dddddd;\r
    /* \u6587\u5B57\u5C45\u4E2D */\r
    text-align: center;\r
    padding   : 5px;\r
}\r
\r
th {\r
    background-color: #f2f2f2;\r
}\r
\r
body {\r
    width         : -webkit-fill-available;\r
    height        : -webkit-fill-available;\r
    display       : flex;\r
    flex-direction: column;\r
}\r
\r
/*server div*/\r
.sdiv {\r
    padding         : 4px;\r
    background-color: white;\r
    margin-bottom   : 0.5em;\r
    border-radius   : 0.5em;\r
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
    font-size       : 0.9rem;\r
    text-align      : center;\r
\r
    display: flex;\r
\r
    /*this centers the text horizontally*/\r
    justify-content: center;\r
\r
    /*this centers the text vertically*/\r
    align-items: center;\r
}\r
\r
.Header {\r
    margin-top   : 3px;\r
    margin-bottom: 3px;\r
    margin-left  : 3px;\r
    margin-right : 3px;\r
    padding      : 4px;\r
    border-radius: 0.5rem;\r
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    display: flex;\r
\r
    font-size       : 1rem;\r
    background-color: rgb(246, 248, 251);\r
}\r
\r
/* \u8282\u70B9\u5217\u8868\u7684\u5934 */\r
.NodesHeader {\r
    margin-top   : 3px;\r
    margin-bottom: 3px;\r
    margin-left  : 3px;\r
    margin-right : 3px;\r
    padding      : 4px;\r
    border-radius: 0.5rem;\r
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    font-size: 1.1rem;\r
\r
    position        : sticky;\r
    top             : 2px;\r
    z-index         : 100;\r
    /* \u4FBF\u4E8E\u89C2\u5BDF\u6548\u679C */\r
    background-color: rgb(246, 248, 251);\r
}\r
\r
/* \u524D\u4E24\u4E2A\u5B50\u5143\u7D20 */\r
.NodesHeader>* {\r
    padding-left: 3px;\r
}\r
\r
/* \u8FDE\u63A5\u5934 */\r
.LinksHeader {\r
    display        : flex;\r
    text-align     : center;\r
    justify-content: center;\r
    align-items    : center;\r
    margin-top     : 3px;\r
    margin-bottom  : 3px;\r
    margin-left    : 3px;\r
    margin-right   : 3px;\r
    padding        : 4px;\r
    border-radius  : 0.5rem;\r
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    position        : sticky;\r
    top             : 35px;\r
    z-index         : 102;\r
    background-color: #f6f8fb;\r
\r
    font-size: 1rem;\r
}\r
\r
/* \u7B2C\u4E00\u4E2A\u5143\u7D20 */\r
.LinksHeader>*:first-child {\r
    padding-left: 3px;\r
}\r
\r
.LinksHeader button {\r
    width: 1em;\r
}\r
\r
.SpeedChartHeader {\r
    display        : flex;\r
    text-align     : center;\r
    justify-content: center;\r
    align-items    : center;\r
    margin-top     : 3px;\r
    margin-bottom  : 3px;\r
    margin-left    : 3px;\r
    margin-right   : 3px;\r
    padding        : 4px;\r
    border-radius  : 0.5rem;\r
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    font-size: 0.9rem;\r
}\r
\r
ul {\r
    list-style-type: none;\r
    padding        : 0;\r
}\r
\r
li {\r
    display         : flex;\r
    justify-content : space-between;\r
    padding         : 4px;\r
    background-color: white;\r
    margin-bottom   : 0.5em;\r
    border-radius   : 0.5em;\r
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
    font-size       : 0.9rem;\r
}\r
\r
[data-dark-mode="true"] li {\r
    background-color: var(--purple-md);\r
}\r
\r
li::before {\r
    display: none;\r
}\r
\r
li button {\r
    appearance      : none;\r
    border          : none;\r
    padding         : none;\r
    margin          : none;\r
    background-color: transparent;\r
    display         : flex;\r
    align-items     : center;\r
    cursor          : pointer;\r
}\r
\r
li button svg {\r
    width: 1.2em;\r
    fill : red;\r
}\r
\r
\r
.simple-button {\r
    /* padding: 10px 20px; */\r
    padding         : 3px;\r
    margin-right    : 3px;\r
    /* font-size    : 16px; */\r
    color           : white;\r
    background-color: #99c7f8;\r
    border          : none;\r
    border-radius   : 3px;\r
    cursor          : pointer;\r
    transition      : background-color 0.3s ease;\r
    outline         : none;\r
    text-align      : center;\r
    display         : flex;\r
    justify-content : center;\r
}\r
\r
.simple-button:hover {\r
    background-color: #4e7bac;\r
}\r
\r
.fade-out {\r
    transition: opacity 3s ease;\r
}\r
\r
.link-end {\r
    /* \u5B57\u989C\u8272\u6E10\u6E10\u4ECE\u9ED1\u8272\u53D8\u6DE1 */\r
    color: rgba(35, 24, 77, 0.6);\r
\r
    transition: color 3s ease;\r
}\r
\r
/* \u6574\u4F53\u6EDA\u52A8\u6761 */\r
::-webkit-scrollbar {\r
    width: 1px;\r
    /* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */\r
}\r
\r
/* \u6EDA\u52A8\u6761\u8F68\u9053 */\r
::-webkit-scrollbar-track {\r
    background   : #f1f1f1;\r
    /* \u8F68\u9053\u80CC\u666F */\r
    border-radius: 1px;\r
    /* \u5706\u89D2 */\r
}\r
\r
/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */\r
::-webkit-scrollbar-thumb {\r
    background-color: #888;\r
    /* \u6ED1\u5757\u7684\u989C\u8272 */\r
    border-radius   : 1px;\r
    /* \u5706\u89D2 */\r
    border          : 1px solid #f1f1f1;\r
    /* \u7ED9\u6ED1\u5757\u6DFB\u52A0\u8FB9\u6846 */\r
}\r
\r
/* \u6ED1\u5757\u5728\u60AC\u505C\u72B6\u6001\u65F6\u7684\u6837\u5F0F */\r
::-webkit-scrollbar-thumb:hover {\r
    background-color: #555;\r
    /* \u60AC\u505C\u65F6\u53D8\u6697 */\r
}\r
\r
/* 2026 \u63A7\u5236\u53F0\u89C6\u89C9\u7CFB\u7EDF */\r
:root {\r
    color-scheme: light;\r
    --canvas: #f3f6fa;\r
    --surface: #ffffff;\r
    --surface-soft: #f7f9fc;\r
    --line: #e3e9f1;\r
    --text: #122033;\r
    --muted: #68778c;\r
    --navy: #071b34;\r
    --blue: #2563eb;\r
    --blue-soft: #eaf1ff;\r
    --green: #079669;\r
    --green-soft: #e7f8f1;\r
    --amber: #d97706;\r
    --amber-soft: #fff5df;\r
    --red: #dc3545;\r
    --violet: #7256d8;\r
    --teal: #0891b2;\r
    --shadow: 0 8px 30px rgba(28, 45, 75, .07);\r
    --radius: 16px;\r
}\r
\r
:root[data-theme="dark"] {\r
    color-scheme: dark;\r
    --canvas: #0b1220;\r
    --surface: #111b2b;\r
    --surface-soft: #162235;\r
    --line: #27364a;\r
    --text: #e8eef7;\r
    --muted: #93a3b8;\r
    --navy: #07111f;\r
    --blue: #6b98ff;\r
    --blue-soft: #1a3156;\r
    --green: #28c597;\r
    --green-soft: #13382f;\r
    --amber: #f2ad4c;\r
    --amber-soft: #3a2d18;\r
    --red: #ff6675;\r
    --violet: #9c87f2;\r
    --teal: #39b8d4;\r
    --shadow: 0 10px 34px rgba(0,0,0,.28);\r
}\r
\r
* { box-sizing: border-box; }\r
\r
html, body, #root { min-height: 100%; }\r
\r
body {\r
    margin: 0;\r
    width: 100%;\r
    height: auto;\r
    display: block;\r
    overflow-x: hidden;\r
    background: var(--canvas);\r
    color: var(--text);\r
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;\r
    -webkit-font-smoothing: antialiased;\r
}\r
\r
button, select, input { font: inherit; }\r
button { -webkit-tap-highlight-color: transparent; }\r
\r
.app-shell { min-height: 100vh; }\r
\r
.app-sidebar {\r
    position: fixed;\r
    inset: 0 auto 0 0;\r
    z-index: 300;\r
    width: 220px;\r
    padding: 24px 16px;\r
    color: #dbe7f7;\r
    background: var(--navy);\r
    display: flex;\r
    flex-direction: column;\r
}\r
\r
.brand-mark {\r
    display: flex;\r
    align-items: center;\r
    gap: 10px;\r
    min-height: 44px;\r
    padding: 0 10px 22px;\r
    color: white;\r
    font-size: 1.08rem;\r
    font-weight: 750;\r
    letter-spacing: .02em;\r
}\r
\r
.brand-pulse {\r
    width: 12px;\r
    height: 12px;\r
    border: 3px solid #6aa7ff;\r
    border-radius: 50%;\r
    box-shadow: 0 0 0 5px rgba(72, 139, 255, .15);\r
}\r
\r
.app-nav { display: grid; gap: 7px; }\r
.app-nav button {\r
    width: 100%;\r
    min-height: 44px;\r
    padding: 0 13px;\r
    border: 0;\r
    border-radius: 10px;\r
    display: flex;\r
    align-items: center;\r
    gap: 12px;\r
    color: #aebed3;\r
    background: transparent;\r
    cursor: pointer;\r
    text-align: left;\r
    transition: .18s ease;\r
}\r
.app-nav button:hover { color: white; background: rgba(255, 255, 255, .07); }\r
.app-nav button.active { color: white; background: #1763d6; box-shadow: 0 7px 18px rgba(0, 74, 180, .28); }\r
.nav-icon { width: 22px; font-size: 1.2rem; text-align: center; }\r
\r
.sidebar-foot {\r
    margin-top: auto;\r
    padding: 13px 10px 0;\r
    border-top: 1px solid rgba(255, 255, 255, .1);\r
    display: flex;\r
    align-items: center;\r
    gap: 8px;\r
    color: #93a8c2;\r
    font-size: .76rem;\r
}\r
.online-dot { display: inline-block; width: 8px; height: 8px; flex: 0 0 8px; border-radius: 50%; background: #16c784; box-shadow: 0 0 0 4px rgba(22,199,132,.12); }\r
\r
.app-main { min-height: 100vh; margin-left: 220px; }\r
.topbar {\r
    min-height: 82px;\r
    padding: 17px clamp(20px, 3vw, 42px);\r
    border-bottom: 1px solid var(--line);\r
    background: rgba(255,255,255,.88);\r
    backdrop-filter: blur(16px);\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
    position: sticky;\r
    top: 0;\r
    z-index: 210;\r
}\r
.topbar-actions { display: flex; align-items: center; gap: 9px; }\r
.theme-toggle { min-height: 38px; padding: 0 10px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); color: var(--muted); display: flex; align-items: center; gap: 5px; cursor: pointer; }\r
.theme-toggle span { color: var(--text); font-size: 1rem; line-height: 1; }.theme-toggle small { font-size: .68rem; }\r
.theme-toggle:hover { color: var(--blue); border-color: var(--blue); }\r
.topbar h1 { margin: 1px 0 0; font-size: clamp(1.25rem, 2vw, 1.65rem); line-height: 1.2; }\r
.eyebrow { color: var(--muted); font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; }\r
.topbar-route { display: flex; align-items: center; gap: 10px; padding: 8px 13px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); }\r
.topbar-route span { color: var(--muted); font-size: .78rem; }\r
.topbar-route strong { font-size: .88rem; }\r
\r
.page-content { max-width: 1480px; margin: 0 auto; padding: 24px clamp(18px, 3vw, 38px) 48px; }\r
.page-section { min-width: 0; }\r
.page-intro { margin: 2px 2px 20px; }\r
.page-intro h2 { margin: 0; font-size: 1.25rem; }\r
.page-intro p { margin: 5px 0 0; color: var(--muted); font-size: .86rem; }\r
\r
.hero-card {\r
    min-height: 136px;\r
    margin-bottom: 18px;\r
    padding: 24px clamp(20px, 3vw, 32px);\r
    border: 1px solid #dce6f4;\r
    border-radius: var(--radius);\r
    background: linear-gradient(120deg, #fff 0%, #f5f9ff 100%);\r
    box-shadow: var(--shadow);\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    gap: 20px;\r
}\r
.hero-card h2 { margin: 6px 0 5px; font-size: clamp(1.35rem, 2.4vw, 2rem); }\r
.hero-card p { margin: 0; color: var(--muted); }\r
.hero-kicker { display: flex; align-items: center; gap: 8px; color: var(--green); font-size: .78rem; font-weight: 700; }\r
.primary-action { min-height: 42px; padding: 0 18px; border: 0; border-radius: 10px; color: white; background: var(--blue); font-weight: 650; cursor: pointer; box-shadow: 0 8px 18px rgba(37,99,235,.22); }\r
\r
.metric-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }\r
.metric-card {\r
    position: relative;\r
    min-width: 0;\r
    min-height: 130px;\r
    padding: 17px;\r
    overflow: hidden;\r
    border: 1px solid var(--line);\r
    border-radius: 14px;\r
    background: var(--surface);\r
    box-shadow: 0 5px 18px rgba(28,45,75,.045);\r
}\r
.metric-card::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 3px; background: currentColor; opacity: .8; }\r
.metric-card.blue { color: var(--blue); }.metric-card.green { color: var(--green); }.metric-card.amber { color: var(--amber); }\r
.metric-card.violet { color: var(--violet); }.metric-card.teal { color: var(--teal); }.metric-card.slate { color: #53657c; }\r
.speed-tone-idle { color: #94a3b8 !important; }\r
.speed-tone-low { color: #64748b !important; }\r
.speed-tone-active { color: #3b82f6 !important; }\r
.speed-tone-fast { color: #6366f1 !important; }\r
.speed-tone-peak { color: #8b5cf6 !important; }\r
.speed-value { transition: color .2s ease, background-color .2s ease, border-color .2s ease; font-variant-numeric: tabular-nums; }\r
.metric-label { color: var(--muted); font-size: .78rem; font-weight: 650; }\r
.metric-card strong { display: block; margin-top: 8px; color: var(--text); font-size: clamp(1.22rem, 2vw, 1.7rem); white-space: nowrap; }\r
.metric-card > span { display: block; margin-top: 4px; color: var(--muted); font-size: .72rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
.mini-spark { position: absolute; inset: auto 10px 9px 10px; width: calc(100% - 20px); height: 25px; }\r
.mini-spark polyline { fill: none; stroke: currentColor; stroke-width: 2; vector-effect: non-scaling-stroke; opacity: .8; }\r
\r
.overview-grid { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(310px, .8fr); gap: 18px; align-items: stretch; }\r
.overview-main, .overview-side { min-width: 0; }\r
.overview-main > .NodesHeader, .overview-main > .NodesHeader + div { margin-left: 0 !important; margin-right: 0 !important; }\r
.overview-side { display: flex; }\r
.panel-card { min-width: 0; padding: 18px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow); }\r
.node-snapshot { width: 100%; }\r
.panel-title { min-height: 38px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }\r
.panel-title h3 { margin: 0; font-size: 1rem; }.panel-title p { margin: 3px 0 0; color: var(--muted); font-size: .72rem; }\r
.panel-title button { border: 0; background: transparent; color: var(--blue); cursor: pointer; font-size: .76rem; }\r
.node-row, .route-row { min-height: 43px; display: grid; align-items: center; gap: 8px; border-top: 1px solid #edf1f5; font-size: .78rem; }\r
.node-row { grid-template-columns: 10px minmax(72px, 1fr) 76px 58px 70px; }\r
.node-row > span { color: var(--muted); white-space: nowrap; }\r
.node-row > span:nth-last-child(-n+3) { text-align: right; font-variant-numeric: tabular-nums; }\r
.node-sort-toolbar { margin: -3px 0 7px; display: flex; justify-content: flex-end; align-items: center; gap: 3px; }\r
.node-sort-toolbar > span { margin-right: 3px; color: var(--muted); font-size: .66rem; }\r
.node-sort-toolbar button { min-height: 25px; padding: 0 9px; border: 1px solid transparent; border-radius: 7px; background: transparent; color: var(--muted); cursor: pointer; font-size: .68rem; }\r
.node-sort-toolbar button:hover { color: var(--blue); }\r
.node-sort-toolbar button.active { border-color: #dbe7fa; background: var(--blue-soft); color: var(--blue); font-weight: 700; }\r
.node-speed-cell, .node-latency-cell { min-height: 36px; padding: 4px 7px; border-radius: 8px; background: var(--surface-soft); font-variant-numeric: tabular-nums; }\r
.node-speed-cell { display: grid; align-content: center; gap: 1px; text-align: right; }\r
.node-speed-cell small { font-size: .74rem; font-weight: 650; line-height: 1.2; }\r
.node-latency-cell { display: flex; align-items: center; justify-content: flex-end; font-size: .76rem; font-weight: 650; }\r
.node-latency-cell.good { color: var(--green) !important; }.node-latency-cell.warn { color: var(--amber) !important; }.node-latency-cell.bad { color: var(--red) !important; }\r
.node-links-cell { font-size: .72rem; }\r
.health-dot { width: 8px; height: 8px; border-radius: 50%; }.health-dot.ok { background: var(--green); }.health-dot.warn { background: #f59e0b; }.health-dot.bad { background: var(--red); }\r
.overview-bottom { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(280px, .6fr); gap: 18px; margin-top: 18px; }\r
.route-row { min-height: 47px; grid-template-columns: minmax(180px, 1.6fr) minmax(78px, .65fr) 72px 76px 76px; }\r
.route-row strong { font-size: .82rem; }\r
.route-row span { color: #536780; white-space: nowrap; }\r
.route-row > span:nth-child(2), .route-row > span:nth-child(3) { font-size: .78rem; font-weight: 650; }\r
.route-row .speed-value { opacity: 1; font-size: .8rem; font-weight: 650; font-variant-numeric: tabular-nums; }\r
.route-row .speed-tone-idle { color: #64748b !important; }\r
.route-row > span:nth-child(n+3) { text-align: right; }\r
.alert-item { min-height: 68px; margin-top: 9px; padding: 12px; border-radius: 11px; display: flex; align-items: flex-start; gap: 10px; }\r
.alert-item > span { width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }\r
.alert-item strong { font-size: .8rem; }.alert-item p { margin: 3px 0 0; color: var(--muted); font-size: .7rem; }\r
.alert-item.ok { background: var(--green-soft); }.alert-item.ok > span { color: var(--green); background: white; }\r
.alert-item.warn { background: var(--amber-soft); }.alert-item.warn > span { color: var(--amber); background: white; }\r
.alert-item.info { background: var(--blue-soft); }.alert-item.info > span { color: var(--blue); background: white; }\r
.diagnostic-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }\r
.node-latency-overview { margin: 18px 0 10px; }\r
.node-latency-overview .panel-title { margin-bottom: 8px; }\r
.node-latency-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }\r
.node-latency-card { min-width: 0; min-height: 86px; padding: 11px 12px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface-soft); display: grid; grid-template-columns: minmax(0, 1fr) auto; align-content: center; gap: 6px 10px; box-shadow: none; }\r
.node-latency-card > div { min-width: 0; display: flex; align-items: center; gap: 6px; }\r
.node-latency-flag { width: 17px; height: 17px; flex: 0 0 17px; overflow: hidden; border-radius: 50%; display: grid; place-items: center; }.node-latency-flag svg { width: 17px !important; height: 17px; }\r
.node-latency-card strong { overflow: hidden; color: var(--text); font-size: .76rem; text-overflow: ellipsis; white-space: nowrap; }\r
.node-latency-card small { padding: 2px 5px; border-radius: 5px; font-size: .58rem; white-space: nowrap; }\r
.node-latency-card b { color: var(--text); font-size: .9rem; font-variant-numeric: tabular-nums; }\r
.node-latency-card > span { grid-column: 1 / -1; color: var(--muted); font-size: .65rem; }\r
.node-latency-card.good small { color: var(--green); background: var(--green-soft); }.node-latency-card.warn small { color: var(--amber); background: var(--amber-soft); }.node-latency-card.bad small { color: var(--red); background: rgba(220,53,69,.12); }\r
.node-business-links { margin-top: 18px; }\r
.link-route-state { min-width: 105px; max-width: 180px; margin: 0 8px; padding: 3px 7px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface-soft); display: grid; gap: 1px; }\r
.link-route-state b { overflow: hidden; color: var(--text); font-size: .65rem; text-overflow: ellipsis; white-space: nowrap; }\r
.link-route-state small { font-size: .56rem; }.link-route-state.current small { color: var(--green); }.link-route-state.changed small { color: var(--amber); }.link-route-state.ended small, .link-route-state.missing small { color: var(--red); }\r
.links-list.show-route { width: 100%; min-width: 0; margin: 8px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); container-name: all-links; container-type: inline-size; }\r
.links-list.show-route > li { margin: 0 !important; padding: 0 10px !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; background: transparent; transition: background .14s ease; }\r
.links-list.show-route > li:first-child { border-top: 0; }\r
.links-list.show-route > li:not(.all-link-columns):nth-child(even) { background: color-mix(in srgb, var(--surface-soft) 72%, var(--surface)); }\r
.links-list.show-route > li:not(.all-link-columns):nth-child(odd) { background: var(--surface); }\r
.links-list.show-route > li:not(.all-link-columns):hover { background: rgba(37,99,235,.055); }\r
.links-list.show-route .link-summary-row, .all-link-columns { width: 100%; min-width: 0; display: grid !important; grid-template-columns: 52px minmax(130px, 180px) 42px 54px 54px minmax(200px, 1fr) 210px; align-items: center; column-gap: 8px; }\r
.links-list.show-route .link-summary-row { min-height: 50px; justify-content: initial !important; }\r
.all-link-columns { min-height: 34px; color: var(--muted); background: var(--surface-soft) !important; font-size: .63rem; font-weight: 650; }\r
.all-link-columns > span { text-align: center; }.all-link-columns > span:nth-child(2), .all-link-columns > span:nth-child(6) { text-align: left; }\r
.all-link-speed-headings, .links-list.show-route .link-speed-groups { min-width: 0; display: grid; grid-template-columns: 94px 108px; align-items: center; gap: 8px; }\r
.all-link-speed-headings > span { text-align: center; }\r
.sortable-column { width: 100%; min-height: 28px; padding: 0 5px; border: 0; border-radius: 6px; background: transparent; color: var(--muted); display: inline-flex; align-items: center; justify-content: center; gap: 4px; font: inherit; font-weight: 650; white-space: nowrap; cursor: pointer; transition: color .14s ease, background .14s ease; }\r
.sortable-column:hover { color: var(--blue); background: rgba(37,99,235,.07); }\r
.sortable-column.active { color: var(--blue); background: var(--blue-soft); }\r
.sortable-column b { font-size: .66rem; font-weight: 750; }\r
.links-list.show-route .link-server, .links-list.show-route .link-remote, .links-list.show-route .link-time, .links-list.show-route .link-delay { width: auto !important; margin: 0 !important; text-align: center; font-variant-numeric: tabular-nums; }\r
.links-list.show-route .link-route-state { width: auto; min-width: 0; max-width: none; margin: 0; }\r
.links-list.show-route .link-target-address { min-width: 0; overflow: hidden; color: var(--text); font-size: .84rem; font-weight: 680; line-height: 1.3; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }\r
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { min-width: 0; height: auto !important; margin: 0 !important; align-items: center; overflow: hidden; font-variant-numeric: tabular-nums; }\r
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .76rem !important; line-height: 1.25; font-weight: 520; }\r
\r
@container all-links (max-width: 900px) {\r
    .links-list.show-route .all-link-columns { min-height: 40px; padding: 5px 8px !important; display: flex !important; justify-content: flex-end; gap: 6px; }\r
    .links-list.show-route .all-link-columns > span { display: none; }\r
    .links-list.show-route .all-link-columns > span:nth-child(3), .links-list.show-route .all-link-columns > .all-link-speed-headings { display: grid; }\r
    .links-list.show-route .all-link-columns > span:nth-child(3) { width: 72px; }\r
    .links-list.show-route .all-link-columns > .all-link-speed-headings { grid-template-columns: 102px 108px; gap: 6px; }\r
    .links-list.show-route .link-summary-row { min-height: 72px; grid-template-columns: 44px minmax(120px, 1fr) 34px 46px 48px; grid-template-rows: 35px 35px; gap: 0 6px; }\r
    .links-list.show-route .link-server { grid-column: 1; grid-row: 1; }\r
    .links-list.show-route .link-route-state { grid-column: 2; grid-row: 1; }\r
    .links-list.show-route .link-remote { grid-column: 3; grid-row: 1; }\r
    .links-list.show-route .link-time { grid-column: 4; grid-row: 1; }\r
    .links-list.show-route .link-delay { grid-column: 5; grid-row: 1; }\r
    .links-list.show-route .link-target-address { grid-column: 1 / 3; grid-row: 2; }\r
    .links-list.show-route .link-speed-groups { grid-column: 3 / 6; grid-row: 2; grid-template-columns: 1fr 1fr; gap: 8px; }\r
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { height: 30px !important; align-items: center; }\r
}\r
\r
@container all-links (max-width: 520px) {\r
    .links-list.show-route > li { padding-inline: 7px !important; }\r
    .links-list.show-route .link-summary-row { grid-template-columns: 40px minmax(92px, 1fr) 30px 40px 42px; gap: 0 4px; }\r
    .links-list.show-route .link-target-address { font-size: .84rem; }\r
    .links-list.show-route .link-speed-groups { gap: 5px; }\r
    .links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .7rem !important; }\r
}\r
.links-list.route-scoped { width: 100%; min-width: 0; margin: 8px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); container-name: route-links; container-type: inline-size; }\r
.links-list.route-scoped > li { margin: 0 !important; padding: 0 8px !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; transition: background .14s ease; }\r
.links-list.route-scoped > li:first-child { border-top: 0; }\r
.links-list.route-scoped > li:not(.route-link-columns):nth-child(even) { background: color-mix(in srgb, var(--surface-soft) 72%, var(--surface)); }\r
.links-list.route-scoped > li:not(.route-link-columns):nth-child(odd) { background: var(--surface); }\r
.links-list.route-scoped > li:not(.route-link-columns):hover { background: rgba(37,99,235,.055); }\r
.links-list.route-scoped .link-summary-row, .route-link-columns { display: grid !important; grid-template-columns: 62px 42px 54px 54px minmax(220px, 1fr) 208px; align-items: center; column-gap: 8px; }\r
.links-list.route-scoped .link-summary-row { min-height: 45px; justify-content: initial !important; }\r
.route-link-columns { min-height: 32px; color: var(--muted); background: var(--surface-soft); font-size: .63rem; font-weight: 650; }\r
.route-link-columns > span { text-align: center; }.route-link-columns > span:nth-child(5) { text-align: left; }\r
.route-link-speed-headings, .links-list.route-scoped .link-speed-groups { min-width: 0; display: grid; grid-template-columns: 92px 108px; align-items: center; gap: 8px; }\r
.route-link-speed-headings > span { text-align: center; }\r
.links-list.route-scoped .link-server, .links-list.route-scoped .link-remote, .links-list.route-scoped .link-time, .links-list.route-scoped .link-delay { width: auto !important; margin: 0 !important; font-variant-numeric: tabular-nums; }\r
.links-list.route-scoped .link-server, .links-list.route-scoped .link-remote, .links-list.route-scoped .link-time, .links-list.route-scoped .link-delay { text-align: center; }\r
.links-list.route-scoped .link-target-address { min-width: 0; overflow: hidden; font-size: .82rem; font-weight: 650; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }\r
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { min-width: 0; height: auto !important; margin: 0 !important; align-items: center; overflow: hidden; font-variant-numeric: tabular-nums; }\r
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .78rem !important; line-height: 1.25; font-weight: 520; }\r
\r
.link-detail-panel { width: 100%; margin: 2px 0 10px; overflow: hidden; border: 1px solid var(--line); border-radius: 11px; background: var(--surface); color: var(--text); box-shadow: 0 6px 20px rgba(28,45,75,.055); }\r
.link-detail-header { min-height: 54px; padding: 9px 13px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--line); background: linear-gradient(100deg, rgba(37,99,235,.08), rgba(37,99,235,.018) 45%, transparent); }\r
.link-detail-header-icon { width: 30px; height: 30px; flex: 0 0 30px; border-radius: 8px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; }\r
.link-detail-header-icon svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }\r
.link-detail-heading { min-width: 0; display: grid; gap: 2px; }.link-detail-heading strong { font-size: .82rem; }.link-detail-heading small { color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }\r
.link-detail-status { margin-left: auto; padding: 4px 9px; border-radius: 999px; font-size: .64rem; font-weight: 650; white-space: nowrap; }\r
.link-detail-status.current { color: var(--green); background: var(--green-soft); }.link-detail-status.changed { color: var(--amber); background: var(--amber-soft); }.link-detail-status.ended, .link-detail-status.missing { color: var(--red); background: rgba(220,53,69,.1); }\r
.link-detail-grid { padding: 11px 13px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; background: var(--surface-soft); }\r
.link-detail-grid > div { min-width: 0; min-height: 48px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); display: grid; align-content: center; gap: 3px; }\r
.link-detail-grid small { color: var(--muted); font-size: .61rem; }.link-detail-grid strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .72rem; font-weight: 620; text-overflow: ellipsis; white-space: nowrap; font-variant-numeric: tabular-nums; }\r
.link-detail-grid .link-detail-delay { color: var(--green); }\r
.link-detail-chart { border-top: 1px solid var(--line); background: var(--surface); }\r
.link-detail-chart-title { min-height: 40px; padding: 8px 13px 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; }.link-detail-chart-title strong { font-size: .78rem; }.link-detail-chart-title span { color: var(--muted); font-size: .62rem; }\r
.link-detail-chart-canvas { width: 100%; height: 230px; }\r
\r
@container route-links (max-width: 719px) {\r
    .links-list.route-scoped .route-link-columns { display: none !important; }\r
    .links-list.route-scoped .link-summary-row { min-width: 0; min-height: 58px; padding: 3px 0; grid-template-columns: 52px 36px 46px 48px minmax(120px, 1fr); grid-template-rows: 29px 25px; column-gap: 6px; }\r
    .links-list.route-scoped .link-server { grid-column: 1; grid-row: 1; }.links-list.route-scoped .link-remote { grid-column: 2; grid-row: 1; }.links-list.route-scoped .link-time { grid-column: 3; grid-row: 1; }.links-list.route-scoped .link-delay { grid-column: 4; grid-row: 1; }\r
    .links-list.route-scoped .link-target-address { grid-column: 5; grid-row: 1; text-align: left !important; }\r
    .links-list.route-scoped .link-speed-groups { grid-column: 1 / -1; grid-row: 2; padding: 2px 8px; border-radius: 6px; background: var(--surface-soft); grid-template-columns: 1fr 1fr; gap: 10px; }\r
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { height: 20px !important; display: flex !important; align-items: center; justify-content: center; flex-direction: row !important; gap: 6px; color: var(--muted); font-size: .63rem; white-space: nowrap; }\r
    .links-list.route-scoped .link-total-speed { padding-left: 10px; border-left: 1px solid var(--line); }\r
    .links-list.route-scoped .link-current-speed::before, .links-list.route-scoped .link-total-speed::before { color: var(--muted); font-size: .57rem; font-weight: 650; }.links-list.route-scoped .link-current-speed::before { content: "\u5B9E\u65F6"; }.links-list.route-scoped .link-total-speed::before { content: "\u7D2F\u8BA1"; }\r
}\r
\r
@container route-links (max-width: 430px) {\r
    .links-list.route-scoped .link-summary-row { min-height: 58px; grid-template-columns: 40px 32px 34px minmax(50px, 1fr) minmax(120px, 40%); grid-template-rows: 29px 23px; column-gap: 3px; }\r
    .links-list.route-scoped .link-remote { display: none; }.links-list.route-scoped .link-time { grid-column: 2; }.links-list.route-scoped .link-delay { grid-column: 3; }\r
    .links-list.route-scoped .link-speed-groups { grid-column: 5; grid-row: 1 / 3; padding: 2px 0; background: transparent; grid-template-columns: 1fr; grid-template-rows: 1fr 1fr; gap: 2px; }\r
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { padding: 0; border-left: 0; justify-content: flex-end; gap: 5px; font-size: .57rem; }\r
    .links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .72rem !important; font-weight: 550; }\r
    .links-list.route-scoped .link-current-speed::before, .links-list.route-scoped .link-total-speed::before { content: none; }\r
    .links-list.route-scoped .link-target-address { grid-column: 1 / 5; grid-row: 2; color: var(--text) !important; font-size: .82rem; font-weight: 650; }\r
}\r
\r
@media (max-width: 640px) {\r
    .link-detail-panel { border-radius: 9px; }\r
    .link-detail-grid { padding: 8px; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }\r
    .link-detail-grid > div { min-height: 45px; padding: 7px 8px; }\r
    .link-detail-chart-title span { display: none; }\r
    .link-detail-chart-canvas { height: 205px; }\r
}\r
\r
/* \u8FDE\u63A5\u5217\u8868\u4E09\u680F\u4FE1\u606F\u67B6\u6784\uFF1A\u5DE6\u72B6\u6001\u3001\u4E2D\u5730\u5740\u3001\u53F3\u901F\u5EA6\u4E0E\u6D41\u91CF\u3002 */\r
.links-list.show-route .all-link-columns,\r
.links-list.show-route .link-summary-row,\r
.links-list.route-scoped .route-link-columns,\r
.links-list.route-scoped .link-summary-row { grid-template-columns: minmax(210px,.9fr) minmax(250px,1.6fr) minmax(170px,.72fr) !important; grid-template-rows: auto !important; column-gap: 16px !important; }\r
.all-link-columns > span, .route-link-columns > span { text-align: left !important; }\r
.all-link-columns > span:nth-child(2), .route-link-columns > span:nth-child(2) { text-align: center !important; }\r
.all-link-columns > span:last-child, .route-link-columns > span:last-child { text-align: right !important; }\r
.links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { min-height: 68px !important; padding-block: 7px; }\r
.link-identity-group { min-width: 0; display: grid; gap: 7px; }\r
.link-identity-top { min-width: 0; display: flex; align-items: center; gap: 9px; }\r
.link-identity-top .link-server { width: auto !important; min-width: 0; flex: 0 1 auto; display: inline-flex; align-items: center; gap: 6px; font-size: 1rem; text-align: left !important; }.link-identity-top .link-server b { overflow: hidden; font-size: .9rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }\r
.link-identity-top .link-delay { width: auto !important; margin: 0 !important; padding: 3px 7px; flex: 0 0 auto; border-radius: 6px; font-size: .64rem; font-weight: 800; text-align: left !important; font-variant-numeric: tabular-nums; }.link-identity-top .link-delay.good { color: var(--green); background: var(--green-soft); }.link-identity-top .link-delay.warn { color: var(--amber); background: var(--amber-soft); }.link-identity-top .link-delay.bad { color: var(--red); background: rgba(220,53,69,.11); }\r
.link-identity-top .link-time { width: auto !important; margin: 0 !important; flex: 0 0 auto; color: var(--muted); font-size: .64rem; text-align: left !important; white-space: nowrap; }\r
.link-identity-meta { min-width: 0; display: flex; align-items: center; gap: 13px; color: var(--muted); font-size: .67rem; font-variant-numeric: tabular-nums; white-space: nowrap; }\r
.link-identity-meta .link-time { width: auto !important; margin: 0 !important; color: var(--muted); font-size: .64rem; text-align: left !important; }\r
.link-identity-meta .link-route-state { min-width: 0; max-width: 150px; margin: 0; padding: 0; border: 0; background: transparent; display: flex; align-items: center; gap: 5px; }.link-identity-meta .link-route-state b { overflow: hidden; color: var(--muted); font-size: .62rem; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }.link-identity-meta .link-route-state small { flex: 0 0 auto; font-size: .58rem; }\r
.links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { min-width: 0; max-width: 100%; margin: auto; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; color: var(--text); font-size: .9rem; font-weight: 700; line-height: 1.32; text-align: center !important; text-overflow: initial; white-space: normal; overflow-wrap: anywhere; word-break: normal !important; }\r
.links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { min-width: 0; display: grid !important; grid-template-columns: 1fr !important; gap: 5px !important; }\r
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,\r
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { min-width: 0; width: 100%; height: auto !important; margin: 0 !important; display: grid !important; grid-template-columns: 32px minmax(48px,1fr) minmax(48px,1fr); align-items: center !important; gap: 3px; text-align: right; }\r
.link-current-speed > small, .link-total-speed > small { color: var(--muted); font-size: .62rem; text-align: left; }\r
.link-current-speed::before, .link-total-speed::before { content: none !important; }\r
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span,\r
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .74rem !important; text-align: right; white-space: nowrap; }\r
\r
@container all-links (max-width: 560px) {\r
    .links-list.show-route .all-link-columns { display: none !important; }\r
    .links-list.show-route .link-summary-row { grid-template-columns: minmax(0,1fr) minmax(178px,auto) !important; grid-template-rows: auto auto !important; gap: 9px 12px !important; }\r
    .links-list.show-route .link-identity-group { grid-column: 1; grid-row: 1; }\r
    .links-list.show-route .link-target-address { grid-column: 1; grid-row: 2; margin: 0; text-align: left !important; }\r
    .links-list.show-route .link-speed-groups { grid-column: 2; grid-row: 1 / 3; }\r
}\r
@container route-links (max-width: 560px) {\r
    .links-list.route-scoped .route-link-columns { display: none !important; }\r
    .links-list.route-scoped .link-summary-row { grid-template-columns: minmax(0,1fr) minmax(178px,auto) !important; grid-template-rows: auto auto !important; gap: 9px 12px !important; }\r
    .links-list.route-scoped .link-identity-group { grid-column: 1; grid-row: 1; }\r
    .links-list.route-scoped .link-target-address { grid-column: 1; grid-row: 2; margin: 0; text-align: left !important; }\r
    .links-list.route-scoped .link-speed-groups { grid-column: 2; grid-row: 1 / 3; }\r
}\r
@media (max-width: 430px) {\r
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns: 1fr !important; grid-template-rows: auto auto auto !important; }\r
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1; grid-row: 1; }\r
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1; grid-row: 2; }\r
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1; grid-row: 3; }\r
    .link-identity-meta { gap: 9px; }\r
}\r
\r
/* \u6700\u7EC8\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF1A\u663E\u5F0F\u91CD\u7F6E\u5386\u53F2\u89C4\u5219\u7559\u4E0B\u7684\u7F51\u683C\u884C\u5217\u3002 */\r
@container all-links (min-width: 561px) {\r
    .links-list.show-route .all-link-columns, .links-list.show-route .link-summary-row { width: 100%; min-width: 0; display: grid !important; grid-template-columns: minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows: auto !important; column-gap: 12px !important; }\r
    .links-list.show-route .all-link-columns > span { display: block !important; }\r
    .links-list.show-route .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }\r
    .links-list.show-route .link-target-address { grid-column: 2 !important; grid-row: 1 !important; margin: auto !important; text-align: center !important; }\r
    .links-list.show-route .link-speed-groups { grid-column: 3 !important; grid-row: 1 !important; }\r
}\r
@container route-links (min-width: 561px) {\r
    .links-list.route-scoped .route-link-columns, .links-list.route-scoped .link-summary-row { width: 100%; min-width: 0; display: grid !important; grid-template-columns: minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows: auto !important; column-gap: 12px !important; }\r
    .links-list.route-scoped .route-link-columns > span { display: block !important; }\r
    .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }\r
    .links-list.route-scoped .link-target-address { grid-column: 2 !important; grid-row: 1 !important; margin: auto !important; text-align: center !important; }\r
    .links-list.route-scoped .link-speed-groups { grid-column: 3 !important; grid-row: 1 !important; }\r
}\r
@container all-links (max-width: 560px) {\r
    .links-list.show-route .all-link-columns { display: none !important; }\r
    .links-list.show-route .link-summary-row { width: 100%; min-width: 0; min-height: 102px !important; padding-block: 9px !important; display: grid !important; grid-template-columns: minmax(0,1fr) 120px !important; grid-template-rows: auto auto !important; gap: 8px 10px !important; }\r
    .links-list.show-route .link-identity-group { grid-column: 1 / 3 !important; grid-row: 1 !important; }\r
    .links-list.show-route .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; text-align: left !important; }\r
    .links-list.show-route .link-speed-groups { grid-column: 2 !important; grid-row: 2 !important; }\r
}\r
@container route-links (max-width: 560px) {\r
    .links-list.route-scoped .route-link-columns { display: none !important; }\r
    .links-list.route-scoped .link-summary-row { width: 100%; min-width: 0; min-height: 102px !important; padding-block: 9px !important; display: grid !important; grid-template-columns: minmax(0,1fr) 120px !important; grid-template-rows: auto auto !important; gap: 8px 10px !important; }\r
    .links-list.route-scoped .link-identity-group { grid-column: 1 / 3 !important; grid-row: 1 !important; }\r
    .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; text-align: left !important; }\r
    .links-list.route-scoped .link-speed-groups { grid-column: 2 !important; grid-row: 2 !important; }\r
}\r
@media (max-width: 360px) {\r
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns: 1fr !important; grid-template-rows: auto auto auto !important; }\r
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }\r
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; }\r
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1 !important; grid-row: 3 !important; }\r
}\r
\r
/* \u7CBE\u786E\u6D41\u91CF\u5206\u6790 */\r
.traffic-analytics { margin-bottom: 18px; }\r
.analytics-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; }\r
.analytics-header h3 { margin: 0; font-size: 1rem; }\r
.analytics-header p { margin: 4px 0 0; color: var(--muted); font-size: .72rem; }\r
.analytics-controls { display: flex; align-items: center; gap: 9px; }\r
.analytics-controls select { height: 34px; min-width: 130px; padding: 0 28px 0 10px; border: 1px solid var(--line); border-radius: 8px; background: white; color: var(--text); }\r
.range-tabs { padding: 3px; border-radius: 9px; background: #eef2f7; display: flex; gap: 2px; }\r
.range-tabs button, .range-tabs > span { min-height: 28px; padding: 0 10px; border: 0; border-radius: 7px; background: transparent; color: var(--muted); cursor: pointer; font-size: .72rem; display: grid; place-items: center; }\r
.range-tabs button.active, .range-tabs > span.active { color: var(--blue); background: white; box-shadow: 0 1px 4px rgba(28,45,75,.12); font-weight: 700; }\r
.traffic-summary-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 9px; margin: 17px 0 8px; }\r
.traffic-summary-grid > div { min-width: 0; padding: 12px 14px; border: 1px solid #e4eaf2; border-radius: 11px; background: var(--surface-soft); display: grid; gap: 4px; }\r
.traffic-summary-grid span { color: var(--muted); font-size: .7rem; }\r
.traffic-summary-grid strong { overflow: hidden; color: var(--text); font-size: 1.05rem; text-overflow: ellipsis; white-space: nowrap; }\r
.traffic-history-chart { width: 100%; height: 310px; }\r
.traffic-node-table { margin-top: 5px; border-top: 1px solid var(--line); }\r
.traffic-node-row { min-height: 42px; padding: 0 9px; border-bottom: 1px solid #edf1f5; display: grid; grid-template-columns: minmax(110px, 1.3fr) repeat(3, minmax(90px, 1fr)); align-items: center; gap: 10px; font-size: .76rem; }\r
.traffic-node-row span { color: var(--muted); text-align: right; }\r
.traffic-node-row.head { min-height: 34px; color: var(--muted); font-size: .68rem; font-weight: 700; }\r
.traffic-empty { padding: 24px; color: var(--muted); text-align: center; font-size: .8rem; }\r
\r
/* \u8FDE\u63A5\u901F\u5EA6\u5361\u7247 */\r
.speed-panel {\r
    min-width: 0;\r
    margin: 10px 0;\r
    overflow: hidden;\r
    border: 1px solid var(--line);\r
    border-radius: var(--radius);\r
    background: var(--surface);\r
    box-shadow: var(--shadow);\r
}\r
.speed-panel-header {\r
    width: 100%;\r
    min-height: 70px;\r
    padding: 12px 18px;\r
    border: 0;\r
    background: var(--surface);\r
    color: var(--text);\r
    display: grid;\r
    grid-template-columns: auto minmax(150px, 1fr) auto auto auto;\r
    align-items: center;\r
    gap: 14px;\r
    text-align: left;\r
    cursor: pointer;\r
}\r
.speed-panel-header:hover { background: #fbfcfe; }\r
.speed-panel-chevron { width: 20px; color: var(--muted); display: grid; place-items: center; }\r
.speed-panel-heading { min-width: 0; display: grid; gap: 3px; }\r
.speed-panel-heading strong { font-size: 1rem; }\r
.speed-panel-heading small { color: var(--muted); font-size: .72rem; font-weight: 400; }\r
.speed-panel-live {\r
    min-width: 105px;\r
    padding-left: 14px;\r
    border-left: 1px solid var(--line);\r
    display: grid;\r
    gap: 2px;\r
}\r
.speed-panel-live small { color: var(--muted); font-size: .68rem; }\r
.speed-panel-live strong { font-size: .9rem; white-space: nowrap; }\r
.speed-chart-body { height: 245px; padding: 0 12px 10px; border-top: 1px solid #edf1f5; background: var(--surface); }\r
.speed-chart-canvas { width: 100%; height: 235px; }\r
.speed-panel.collapsed { box-shadow: 0 4px 16px rgba(28,45,75,.045); }\r
\r
/* \u5EF6\u8FDF\u9762\u677F\u4E0E\u901F\u5EA6\u9762\u677F\u4FDD\u6301\u540C\u4E00\u5957\u5361\u7247\u8BED\u8A00 */\r
.latency-panel { margin: 10px 0; overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow); }\r
.latency-panel-header { width: 100%; min-height: 66px; padding: 12px 18px; border: 0; background: white; color: var(--text); display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; text-align: left; cursor: pointer; }\r
.latency-panel-header:hover { background: #fbfcfe; }\r
.latency-health { padding: 7px 10px; border-radius: 999px; background: var(--green-soft); color: #087a5a; font-size: .7rem; display: flex; align-items: center; gap: 6px; white-space: nowrap; }\r
.latency-chart-body { height: 250px; padding: 0 12px 10px; border-top: 1px solid #edf1f5; }\r
.latency-chart-canvas { width: 100%; height: 240px; }\r
\r
/* \u7EDF\u4E00\u6298\u53E0\u9762\u677F */\r
.NodesHeader, .LinksHeader, .SpeedChartHeader {\r
    min-height: 52px;\r
    margin: 10px 0 !important;\r
    padding: 9px 13px !important;\r
    border: 1px solid var(--line);\r
    border-radius: 13px;\r
    box-shadow: 0 4px 16px rgba(28,45,75,.045);\r
    background: var(--surface) !important;\r
    color: var(--text);\r
    position: static;\r
    z-index: auto;\r
    display: flex;\r
    align-items: center;\r
    gap: 8px;\r
    cursor: pointer;\r
}\r
.NodesHeader svg, .LinksHeader svg { color: var(--muted); }\r
.panel-title-icon { width: 26px; height: 26px; flex: 0 0 26px; border-radius: 7px; background: var(--blue-soft); color: var(--blue); display: grid; place-items: center; }\r
.panel-title-icon .toolbar-icon { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; color: var(--blue); }\r
.section-name { min-width: 0; min-height: 26px; display: inline-flex; align-items: center; font-weight: 750; line-height: 1.2; transform: translateY(-1px); }\r
.section-spacer { flex: 1 1 auto; }\r
.traffic-remaining { margin-left: 8px; color: var(--muted); font-size: .76rem; white-space: nowrap; }\r
.connection-count { padding: 3px 8px; border-radius: 999px; background: #eef2f7; color: var(--muted); font-size: .72rem; white-space: nowrap; }\r
.route-list-shell { margin: 10px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); }\r
.links-panel-shell { margin: 10px 0; overflow: hidden; border: 1px solid rgba(8,145,178,.22); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); }\r
.links-panel-shell .LinksHeader { min-height: 58px; margin: 0 !important; border: 0; border-radius: 0; box-shadow: inset 3px 0 0 rgba(8,145,178,.68); }\r
.links-panel-shell.expanded .LinksHeader { border-bottom: 1px solid var(--line); }\r
.links-panel-shell .links-list.show-route { margin: 0; border: 0; border-radius: 0; }\r
.links-panel-shell .links-list.show-route > li { margin: 0 !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: none; }\r
.links-panel-shell .links-list.show-route > li:first-child { border-top: 0; }\r
.route-list-shell .route-panel-header { min-height: 58px; margin: 0 !important; padding: 9px 15px !important; border: 0; border-radius: 0; box-shadow: none; }\r
.route-list-shell .route-panel-header { background: linear-gradient(100deg, rgba(37,99,235,.105) 0%, rgba(37,99,235,.035) 34%, var(--surface) 72%) !important; box-shadow: inset 3px 0 0 rgba(37,99,235,.72); }\r
.route-list-shell .route-panel-header:hover { background: linear-gradient(100deg, rgba(37,99,235,.145) 0%, rgba(37,99,235,.05) 38%, var(--surface) 76%) !important; }\r
.LinksHeader { border-color: rgba(8,145,178,.2); background: linear-gradient(100deg, rgba(8,145,178,.1) 0%, rgba(8,145,178,.03) 34%, var(--surface) 72%) !important; box-shadow: inset 3px 0 0 rgba(8,145,178,.68), 0 4px 16px rgba(28,45,75,.045); }\r
.LinksHeader:hover { background: linear-gradient(100deg, rgba(8,145,178,.14) 0%, rgba(8,145,178,.045) 38%, var(--surface) 76%) !important; }\r
.LinksHeader .panel-title-icon { background: rgba(8,145,178,.105); color: #087f9d; }\r
.LinksHeader .panel-title-icon .toolbar-icon { color: #087f9d; }\r
.route-list-shell.expanded .route-panel-header { border-bottom: 1px solid var(--line); }\r
.route-list-shell .route-list-body { padding: 0 15px; }\r
.route-list-shell .route-item-header { margin: 0 !important; border: 0; border-top: 1px solid var(--line); border-radius: 0; box-shadow: inset 0 0 0 transparent; background: transparent !important; transition: background .16s ease, box-shadow .16s ease; }\r
.route-list-shell .route-item-header:hover { background: linear-gradient(90deg, rgba(37,99,235,.09), rgba(37,99,235,.025)) !important; box-shadow: inset 3px 0 0 rgba(37,99,235,.52); }\r
.route-list-shell .route-item-header.expanded { background: linear-gradient(90deg, rgba(37,99,235,.12), rgba(37,99,235,.035)) !important; box-shadow: inset 3px 0 0 var(--blue); }\r
.route-list-shell .route-item-header.expanded:hover { background: linear-gradient(90deg, rgba(37,99,235,.15), rgba(37,99,235,.05)) !important; }\r
.route-list-shell .route-list-columns + .route-item-header { border-top: 0; }\r
.route-item-details { margin: 6px 0 12px; overflow: hidden; border-top: 1px solid var(--line); background: transparent; }\r
.route-item-details .route-detail-toggle { min-height: 43px; margin: 0 !important; padding: 8px 13px; border-radius: 0; background: transparent; box-shadow: none; font-size: .86rem !important; font-weight: 650; transition: background .14s ease, color .14s ease; }\r
.route-item-details .route-detail-toggle + .route-detail-toggle, .route-item-details > .links-list + .route-detail-toggle, .route-item-details > div + .route-detail-toggle { border-top: 1px solid var(--line); }\r
.route-item-details .route-detail-toggle:hover { color: var(--blue); background: rgba(37,99,235,.055); }\r
.route-item-details .route-detail-toggle.expanded { color: var(--blue); background: rgba(37,99,235,.07); }\r
.route-item-details .route-detail-toggle.expanded .route-detail-chevron,\r
.route-item-details .route-detail-toggle.expanded .route-detail-icon,\r
.route-item-details .route-detail-toggle.expanded .route-detail-label > b { color: var(--blue); }\r
.route-item-details .route-detail-toggle.expanded .route-detail-label > b { background: var(--blue-soft); }\r
.route-item-details .route-detail-toggle svg { width: 15px; height: 15px; }\r
.route-detail-chevron { width: 18px; height: 18px; flex: 0 0 18px; display: grid; place-items: center; color: var(--text); }\r
.route-detail-chevron > svg { width: 14px !important; height: 14px !important; display: block; }\r
.route-detail-label { min-width: 0; display: grid; grid-template-columns: 18px auto auto; align-items: center; gap: 7px; }\r
.route-detail-label .route-detail-icon { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; color: var(--muted); }\r
.route-detail-label .connection-icon { transform: translateX(1px); }\r
.route-detail-label > span { line-height: 1; }\r
.route-detail-label > b { min-width: 25px; padding: 2px 7px; border-radius: 999px; background: var(--surface-soft); color: var(--muted); font-size: .7rem; font-weight: 650; line-height: 1.4; text-align: center; font-variant-numeric: tabular-nums; }\r
.route-detail-toggle:hover .route-detail-icon, .route-detail-toggle:hover .route-detail-label > b { color: var(--blue); }\r
.route-disconnect-all { width: auto; min-height: 30px; margin-left: auto; padding: 0 9px; border: 1px solid rgba(220,53,69,.28); border-radius: 7px; background: rgba(220,53,69,.055); color: var(--red); display: inline-flex; align-items: center; justify-content: center; gap: 5px; font-size: .68rem; font-weight: 650; white-space: nowrap; cursor: pointer; transition: background .14s ease, border-color .14s ease; }\r
.route-disconnect-all:hover:not(:disabled) { border-color: var(--red); background: rgba(220,53,69,.1); }\r
.route-disconnect-all:disabled { opacity: .42; cursor: default; }\r
.route-disconnect-all .toolbar-icon { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\r
.route-item-details > .links-list.route-scoped { margin: 0; border-width: 1px 0 0; border-radius: 0; background: var(--surface); }\r
.route-item-header { min-height: 48px !important; padding: 7px 12px !important; display: grid !important; grid-template-columns: 18px minmax(150px, 1fr) minmax(112px, auto) 30px minmax(58px, auto) 58px; gap: 8px !important; }\r
.route-list-columns { min-height: 34px; margin: 0 -15px; padding: 0 27px; display: grid; grid-template-columns: 18px minmax(150px, 1fr) minmax(112px, auto) 30px minmax(58px, auto) 58px; align-items: center; column-gap: 8px; color: var(--muted); background: linear-gradient(90deg, rgba(37,99,235,.055), rgba(37,99,235,.018)); border-bottom: 1px solid var(--line); font-size: .64rem; }\r
.route-list-columns > span:nth-child(n + 3) { text-align: right; }.route-list-columns > span:nth-child(5) { text-align: left; }\r
.route-item-toggle { display: grid; place-items: center; }.route-item-name { min-width: 0; overflow: hidden; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }\r
.route-item-speeds { display: flex; justify-content: flex-end; gap: 9px; color: var(--muted); font-size: .84rem; font-weight: 650; font-variant-numeric: tabular-nums; white-space: nowrap; }.route-item-speeds .speed-value { padding: 0; }\r
.route-item-count { width: 25px; height: 25px; border-radius: 999px; background: var(--surface-soft); color: var(--muted); display: grid; place-items: center; font-size: .7rem; font-variant-numeric: tabular-nums; }\r
.route-item-exit { min-width: 0; overflow: hidden; color: var(--text); font-size: .78rem; text-overflow: ellipsis; white-space: nowrap; }.route-item-mode { width: 68px; height: 34px; padding: 0 25px 0 9px; border: 1px solid #cbd8e7; border-radius: 8px; appearance: none; -webkit-appearance: none; background: var(--surface-soft) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23647791' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 8px center; color: var(--text); font-size: .76rem; font-weight: 650; line-height: 1; cursor: pointer; transition: border-color .15s ease, background-color .15s ease, box-shadow .15s ease; }.route-item-mode:hover { border-color: var(--blue); background-color: var(--blue-soft); }.route-item-mode:focus { outline: none; }.route-item-mode:focus-visible { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft); }\r
\r
@media (max-width: 820px) {\r
    .route-list-columns { display: none; }\r
    .route-item-header { min-height: 52px !important; grid-template-columns: 18px minmax(120px, 1fr) minmax(88px, auto) auto minmax(54px, auto) 68px !important; gap: 7px !important; }\r
    .route-item-speeds { justify-content: flex-end; gap: 6px; font-size: .78rem; }\r
    .route-item-count { width: 23px; height: 23px; }\r
    .route-item-exit { max-width: 72px; }\r
    .route-item-mode { width: 68px; max-width: 68px; }\r
}\r
.aggregate-speed { flex: 1; display: flex; gap: 8px; font-weight: 700; font-size: .8rem; }\r
.link-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 4px; }\r
.link-toolbar .simple-button { width: auto !important; min-width: 40px; white-space: nowrap; }\r
.link-toolbar .toolbar-icon { width: 18px; height: 18px; flex: 0 0 auto; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; pointer-events: none; }\r
.link-toolbar .sort-metric-button { gap: 4px; }\r
.link-toolbar .sort-metric-button > span { color: currentColor; font-size: .68rem; font-weight: 750; pointer-events: none; }\r
.link-toolbar .danger-button { gap: 6px; }\r
.simple-button {\r
    min-width: 32px;\r
    min-height: 32px;\r
    margin: 0;\r
    padding: 0 9px;\r
    border: 1px solid #d9e2ee;\r
    border-radius: 8px;\r
    background: #f4f7fb;\r
    color: #3c4c61;\r
    font-size: .72rem;\r
    font-weight: 650;\r
    align-items: center;\r
}\r
.simple-button:hover { color: var(--blue); background: var(--blue-soft); }\r
.simple-button[style*="rgb(1, 22, 42)"], .simple-button[style*="#01162a"] { color: white !important; background: var(--blue) !important; }\r
.danger-button { color: var(--red); border-color: #f1c6cc; background: #fff7f8; }\r
\r
.Header { margin: 8px 0; padding: 8px; border: 1px solid var(--line); border-radius: 12px; box-shadow: none; background: var(--surface-soft); }\r
.sdiv { min-height: 42px !important; height: auto !important; border: 1px solid var(--line); box-shadow: none; }\r
ul { margin: 8px 0; }\r
li { border: 1px solid var(--line); box-shadow: 0 4px 16px rgba(28,45,75,.045); }\r
\r
/* VPS \u4E0E MTCP */\r
.vps-grid { display: grid; gap: 22px; }\r
.vps-card {\r
    --node-accent: #2878e8;\r
    --node-accent-secondary: #27b99a;\r
    --node-accent-border: rgba(40,120,232,.42);\r
    --node-accent-soft: rgba(40,120,232,.075);\r
    --node-accent-shadow: rgba(40,120,232,.1);\r
    position: relative;\r
    margin: 0 !important;\r
    padding: 0 !important;\r
    overflow: hidden;\r
    border: 1px solid var(--node-accent-border) !important;\r
    border-radius: var(--radius);\r
    background: var(--surface);\r
    box-shadow: 0 10px 28px var(--node-accent-shadow), 0 2px 5px rgba(28,45,75,.04) !important;\r
}\r
.vps-card::before { content: ""; position: absolute; z-index: 2; inset: 0 0 auto; width: auto; height: 5px; display: block; background: linear-gradient(90deg, var(--node-accent), var(--node-accent-secondary)); opacity: .96; }\r
.vps-card-accent-0 { --node-accent: #2878e8; --node-accent-secondary: #22b8cf; --node-accent-border: rgba(40,120,232,.42); --node-accent-soft: rgba(40,120,232,.075); --node-accent-shadow: rgba(40,120,232,.1); }\r
.vps-card-accent-1 { --node-accent: #18a47c; --node-accent-secondary: #7ac943; --node-accent-border: rgba(24,164,124,.42); --node-accent-soft: rgba(24,164,124,.075); --node-accent-shadow: rgba(24,164,124,.1); }\r
.vps-card-accent-2 { --node-accent: #7c5ce4; --node-accent-secondary: #b45bd6; --node-accent-border: rgba(124,92,228,.42); --node-accent-soft: rgba(124,92,228,.075); --node-accent-shadow: rgba(124,92,228,.1); }\r
.vps-card-accent-3 { --node-accent: #e58a22; --node-accent-secondary: #e8b128; --node-accent-border: rgba(229,138,34,.45); --node-accent-soft: rgba(229,138,34,.08); --node-accent-shadow: rgba(229,138,34,.1); }\r
.vps-card-accent-4 { --node-accent: #db4f70; --node-accent-secondary: #ed7a59; --node-accent-border: rgba(219,79,112,.42); --node-accent-soft: rgba(219,79,112,.075); --node-accent-shadow: rgba(219,79,112,.1); }\r
.vps-card-accent-5 { --node-accent: #168fa8; --node-accent-secondary: #3974d5; --node-accent-border: rgba(22,143,168,.42); --node-accent-soft: rgba(22,143,168,.075); --node-accent-shadow: rgba(22,143,168,.1); }\r
.vps-card-main { margin: 0 !important; padding: 18px !important; border-radius: 0 !important; background: var(--surface) !important; box-shadow: none !important; }\r
.vps-card-heading { margin: 0 0 14px !important; padding: 12px 13px; border: 1px solid var(--node-accent-border); border-radius: 11px; background: linear-gradient(90deg, var(--node-accent-soft), transparent 72%) !important; }\r
.vps-identity { gap: 6px; }\r
.vps-location-flag { width: 19px; height: 19px; flex: 0 0 19px; overflow: hidden; border-radius: 50%; display: grid; place-items: center; box-shadow: 0 0 0 1px var(--line); }\r
.vps-location-flag svg { width: 19px !important; height: 19px; object-fit: cover; }\r
.vps-name { margin-right: 1px; color: var(--text); font-size: 1.3em; font-weight: 800; white-space: nowrap; }\r
.vps-reset-time { overflow: hidden; color: var(--muted); font-size: .8em; text-overflow: ellipsis; white-space: nowrap; }\r
.vps-traffic-total { gap: 7px; white-space: nowrap; font-variant-numeric: tabular-nums; }\r
.vps-traffic-total small { margin-right: 2px; color: var(--muted); font-size: .68rem; }\r
.vps-traffic-total span { font-size: .76rem; font-weight: 700; }\r
.vps-live-speed { width: auto; min-width: 0; min-height: 38px; margin-left: auto; padding: 5px 7px; border: 1px solid transparent; border-radius: 9px; background: transparent; display: flex; align-items: center; justify-content: flex-end; gap: 7px; cursor: pointer; transition: border-color .15s ease, background .15s ease, transform .15s ease; }\r
.vps-live-speed:hover, .vps-live-speed.active { border-color: var(--node-accent-border); background: var(--node-accent-soft); transform: translateY(-1px); }\r
.vps-live-speed:focus { outline: none; }.vps-live-speed:focus-visible { box-shadow: 0 0 0 2px var(--node-accent-soft); }\r
.vps-current-latency { margin-right: 3px; padding: 4px 8px; border-radius: 7px; font-size: .72rem; font-weight: 800; white-space: nowrap; }\r
.vps-throughput { min-height: 27px; padding: 3px 8px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(28,45,75,.035); }\r
.vps-throughput > span { font-size: .83rem; font-weight: 750; font-variant-numeric: tabular-nums; white-space: nowrap; }\r
.vps-current-latency.good { color: var(--green); background: var(--green-soft); }.vps-current-latency.warn { color: var(--amber); background: var(--amber-soft); }.vps-current-latency.bad { color: var(--red); background: rgba(220,53,69,.12); }\r
.vps-stats, .vps-detail-row { background: transparent !important; }\r
.vps-stats { min-height: 34px; }\r
.vps-system-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; background: var(--surface-soft); }\r
.vps-system-grid > div { min-width: 0; min-height: 58px; padding: 10px 12px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; align-content: center; gap: 4px; }\r
.vps-system-grid > div:nth-child(3n) { border-right: 0; }\r
.vps-system-grid > div:nth-last-child(-n+3) { border-bottom: 0; }\r
.vps-system-grid small { color: var(--muted); font-size: .65rem; }\r
.vps-system-grid strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .75rem; text-overflow: ellipsis; white-space: nowrap; font-variant-numeric: tabular-nums; }\r
.vps-system-grid em { margin-left: 4px; color: var(--green); font-size: .64rem; font-style: normal; }\r
.vps-usage-meter { width: 100%; height: 4px; overflow: hidden; border-radius: 999px; background: #e3e9f0; display: block; }\r
.vps-usage-meter i { min-width: 2px; height: 100%; border-radius: inherit; display: block; transition: width .3s ease-out; }\r
.vps-disk-meter { min-width: 0; display: grid; gap: 5px; }\r
.vps-disk-meter + .vps-disk-meter { margin-top: 5px; }\r
.vps-detail-actions { margin-top: 12px; padding-top: 11px; border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }\r
.vps-detail-actions button, .vps-speedtest-actions button, .traffic-reset-editor button { min-height: 33px; padding: 0 12px; border: 1px solid #d9e2ee; border-radius: 8px; background: #f4f7fb; color: #3c4c61; cursor: pointer; font-size: .72rem; font-weight: 700; }\r
.vps-detail-actions button:hover, .vps-speedtest-actions button:hover { color: var(--blue); background: var(--blue-soft); }\r
.vps-detail-actions button.active { border-color: #cdddf7; color: var(--blue); background: var(--blue-soft); }\r
.vps-detail-actions button span { margin-left: 5px; color: var(--muted); font-weight: 500; }\r
.vps-detail-actions button.speed-test { color: #087a5a; border-color: #ccebe1; background: #effbf7; }\r
.vps-detail-actions button.speed-test:hover { color: var(--green); border-color: var(--green); background: var(--green-soft); }\r
.vps-detail-section { margin-top: 12px; padding-top: 2px; animation: detail-in .16s ease-out; }\r
@keyframes detail-in { from { opacity: .35; transform: translateY(-3px); } }\r
.vps-empty-detail { padding: 18px; color: var(--muted); text-align: center; font-size: .76rem; }\r
.node-connection-list { display: grid; gap: 10px; }\r
.node-connection-group { overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); }\r
.node-connection-group-header { width: 100%; min-height: 48px; padding: 8px 16px; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-soft); color: var(--text); display: flex; align-items: center; gap: 9px; text-align: left; cursor: pointer; }\r
.node-connection-group.collapsed .node-connection-group-header { border-bottom: 0; }\r
.node-connection-group-header:hover { background: var(--blue-soft); }\r
.node-connection-group-chevron { width: 18px; flex: 0 0 18px; color: var(--muted); font-size: 1rem; font-style: normal; text-align: center; line-height: 1; }\r
.node-connection-group-header > strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .86rem; text-overflow: ellipsis; white-space: nowrap; }\r
.node-connection-group-header > .route-state { padding: 3px 7px; border-radius: 999px; font-size: .63rem; font-weight: 750; white-space: nowrap; }\r
.node-connection-group-header > .route-state.current { color: var(--green); background: var(--green-soft); }.node-connection-group-header > .route-state.changed { color: var(--amber); background: var(--amber-soft); }.node-connection-group-header > .route-state.ended, .node-connection-group-header > .route-state.missing { color: var(--red); background: rgba(220,53,69,.11); }\r
.node-connection-group-header > b { margin-left: auto; color: var(--muted); font-size: .68rem; font-weight: 650; white-space: nowrap; }\r
.node-connection-head, .node-connection-row { width: 100%; min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) 78px minmax(170px, .34fr) minmax(170px, .34fr); align-items: center; gap: 10px; }\r
.node-connection-head { min-height: 34px; padding: 0 13px; border-bottom: 1px solid var(--line); color: var(--muted); font-size: .65rem; font-weight: 750; letter-spacing: .01em; }\r
.node-connection-head span:nth-child(2) { text-align: right; }.node-connection-head span:nth-child(3), .node-connection-head span:nth-child(4) { text-align: center; }\r
.node-connection-item + .node-connection-item { border-top: 1px solid var(--line); }\r
.node-connection-item.expanded { padding-bottom: 1px; background: var(--surface-soft); }\r
.node-connection-row { min-height: 54px; padding: 7px 13px; border: 0; background: var(--surface); color: inherit; text-align: left; cursor: pointer; transition: background .15s ease; }\r
.node-connection-row:focus { outline: none; }.node-connection-row:focus-visible { box-shadow: inset 0 0 0 2px var(--blue-soft); }\r
.node-connection-item:nth-child(odd) .node-connection-row { background: color-mix(in srgb, var(--surface-soft) 48%, var(--surface)); }\r
.node-connection-row:hover { background: var(--blue-soft); }\r
.node-connection-row.ended { opacity: .58; }\r
.node-connection-target { min-width: 0; position: relative; padding-left: 18px; display: grid; gap: 2px; }\r
.node-connection-target > i { position: absolute; left: 1px; top: 7px; width: 8px; height: 8px; border-radius: 50%; }.node-connection-target > i.online { background: var(--green); box-shadow: 0 0 0 3px rgba(7,150,105,.11); }.node-connection-target > i.offline { background: var(--red); }\r
.node-connection-target strong, .node-connection-route strong { min-width: 0; overflow: hidden; color: var(--text); font-size: .78rem; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }\r
.node-connection-target small { overflow: hidden; color: var(--muted); font-size: .61rem; text-overflow: ellipsis; white-space: nowrap; }\r
.node-connection-route { min-width: 0; display: grid; justify-items: start; gap: 5px; }.node-connection-route small { padding: 3px 7px; border-radius: 999px; font-size: .64rem; font-weight: 750; line-height: 1; }\r
.node-connection-route.current small { color: var(--green); background: var(--green-soft); }.node-connection-route.changed small { color: var(--amber); background: var(--amber-soft); }.node-connection-route.ended small, .node-connection-route.missing small { color: var(--red); background: rgba(220,53,69,.11); }\r
.node-connection-delay { color: var(--muted); font-size: .69rem; font-weight: 650; text-align: right; font-variant-numeric: tabular-nums; }\r
.node-connection-speed { min-width: 0; padding-right: 1px; display: flex; align-items: center; justify-content: flex-end; gap: 5px; text-align: right; font-size: .68rem; font-variant-numeric: tabular-nums; white-space: nowrap; }\r
.node-connection-speed b { min-width: 70px; padding: 4px 6px; border: 1px solid transparent; border-radius: 6px; text-align: center; transition: color .2s ease, background .2s ease, border-color .2s ease, opacity .2s ease; }\r
.node-connection-speed b.speed-tone-idle { opacity: .58; background: rgba(148,163,184,.06); }\r
.node-connection-speed b.speed-tone-low { background: rgba(100,116,139,.07); }\r
.node-connection-speed b.speed-tone-active { border-color: rgba(59,130,246,.17); background: rgba(59,130,246,.10); }\r
.node-connection-speed b.speed-tone-fast { border-color: rgba(99,102,241,.22); background: rgba(99,102,241,.12); }\r
.node-connection-speed b.speed-tone-peak { border-color: rgba(139,92,246,.25); background: rgba(139,92,246,.14); }\r
.node-connection-traffic { min-width: 0; display: flex; align-items: center; justify-content: flex-end; gap: 5px; color: var(--muted); font-size: .67rem; font-variant-numeric: tabular-nums; white-space: nowrap; }\r
.node-connection-traffic b { min-width: 69px; text-align: right; }.node-connection-traffic b:first-child { color: #4a78bd; }.node-connection-traffic b:nth-child(2) { color: #3c8d72; }\r
.node-connection-traffic i { width: 12px; margin-left: 2px; color: var(--muted); font-size: .85rem; font-style: normal; font-weight: 650; text-align: center; }\r
.speed-history-detail { overflow: hidden; }\r
.speed-history-detail > header { min-height: 58px; }\r
.speed-history-stats { display: flex; align-items: center; gap: 13px; color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }\r
.speed-history-stats span { display: grid; gap: 1px; }.speed-history-stats b { color: var(--text); font-size: .69rem; white-space: nowrap; }\r
.speed-history-canvas { width: 100%; height: 230px; }\r
.speed-history-detail.compact { margin: 0 12px 12px; background: var(--surface); }\r
.speed-history-detail.compact > header { min-height: 52px; padding: 8px 11px; }\r
.speed-history-detail.compact .speed-history-canvas { height: 170px; }\r
.node-quality-details { display: grid; gap: 12px; }\r
.vps-traffic-inline-detail { margin-top: 10px; }\r
.node-latency-detail > header { min-height: 58px; }\r
.node-latency-stats { display: flex; align-items: center; gap: 12px; color: var(--muted); font-size: .62rem; font-variant-numeric: tabular-nums; }\r
.node-latency-stats span { display: grid; gap: 1px; }.node-latency-stats b { color: var(--text); font-size: .68rem; white-space: nowrap; }\r
.node-latency-detail-canvas { width: 100%; height: 220px; }\r
.vps-precise-traffic { margin-top: 8px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }\r
.vps-precise-traffic span { min-width: 0; color: var(--muted); font-size: .7rem; display: grid; gap: 2px; }\r
.vps-precise-traffic strong { overflow: hidden; color: var(--text); font-size: .8rem; text-overflow: ellipsis; white-space: nowrap; }\r
.session-ip-row { margin: 7px 0 0 !important; color: var(--muted) !important; }\r
.session-ip-row span:not(:first-child) { padding: 4px 8px !important; border: 1px solid var(--line); background: var(--surface-soft) !important; }\r
.vps-detail-row { min-height: 30px; gap: 18px; }\r
.mtcp-pool { margin-top: 13px !important; padding: 13px !important; gap: 12px !important; border: 1px solid #e0e8f2; background: #f4f7fb !important; }\r
.mtcp-config-editor { margin: 8px 0; padding: 13px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface-soft); display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; align-items: end; }\r
.config-center-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 14px; }.config-center-card { min-height: 150px; padding: 18px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); }.config-center-card h3 { margin: 10px 0 7px; }.config-center-card p, .config-center-card small { color: var(--muted); }.config-badge { display: inline-block; padding: 3px 7px; border-radius: 999px; background: #e8f8f2; color: #16845c; font-size: .7rem; font-weight: 700; }.config-badge.pending { background: #f3f5f8; color: #778399; }\r
.mtcp-config-editor > strong { grid-column: 1 / -1; }.mtcp-config-editor label { display: grid; gap: 4px; color: var(--muted); font-size: .72rem; }.mtcp-config-editor input { min-width: 0; padding: 6px 7px; border: 1px solid var(--line); border-radius: 5px; background: var(--surface); color: var(--text); }.mtcp-config-editor button { width: fit-content; min-height: 34px; padding: 7px 14px; border: 1px solid #087e8b; border-radius: 6px; background: linear-gradient(135deg, #0da59a, #087e8b); color: #fff; font-weight: 750; box-shadow: 0 2px 5px rgba(8,126,139,.24); cursor: pointer; transition: transform .15s, box-shadow .15s, opacity .15s; }.mtcp-config-editor button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(8,126,139,.3); }.mtcp-config-editor button:disabled { cursor: wait; opacity: .62; }.mtcp-config-editor .success { align-self: center; color: #16845c; font-weight: 700; }.mtcp-config-editor .error { align-self: center; color: #c23b3b; font-weight: 700; }\r
.config-center-mtcp { padding: 0; overflow: hidden; border-radius: 14px; box-shadow: 0 8px 28px rgba(29,54,83,.06); }\r
.config-card-heading { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; padding: 22px 24px 18px; border-bottom: 1px solid var(--line); background: linear-gradient(135deg, rgba(13,165,154,.07), transparent 48%); }\r
.config-card-heading h3 { margin: 8px 0 4px; font-size: 1.18rem; }.config-card-heading p { margin: 0; }.config-live { display: flex; align-items: center; gap: 7px; color: #16845c; font-size: .75rem; font-weight: 700; white-space: nowrap; }.config-live i { width: 8px; height: 8px; border-radius: 50%; background: #19b77d; box-shadow: 0 0 0 4px rgba(25,183,125,.12); }\r
.config-center-mtcp .mtcp-config-editor { display: block; margin: 0; padding: 20px 24px 22px; border: 0; border-radius: 0; background: var(--surface); }\r
.config-group { padding: 0 0 20px; margin-bottom: 20px; border-bottom: 1px solid var(--line); }.config-group.compact { margin-bottom: 0; }.config-group > header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 13px; }.config-group > header b { font-size: .9rem; }.config-group > header small { color: var(--muted); }\r
.config-pairs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }.config-direction { display: grid; grid-template-columns: auto 1fr 1fr; gap: 12px; align-items: end; padding: 14px; border: 1px solid rgba(37,118,224,.16); border-radius: 10px; background: rgba(37,118,224,.035); }.config-direction.down { border-color: rgba(22,132,92,.18); background: rgba(22,132,92,.035); }.config-direction > strong { align-self: start; padding-top: 5px; color: #2576e0; font-size: .78rem; }.config-direction.down > strong { color: #16845c; }\r
.config-fields { display: grid; grid-template-columns: repeat(4, minmax(130px, 1fr)); gap: 12px; }.config-fields.single { grid-template-columns: minmax(180px, 310px); }.config-field { display: grid; gap: 5px; min-width: 0; color: var(--text); font-size: .75rem; }.config-field > span { font-weight: 700; }.config-field > small { min-height: 1em; color: var(--muted); font-size: .66rem; line-height: 1.3; }\r
.config-input-wrap { display: flex; align-items: center; min-width: 0; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); transition: border-color .15s, box-shadow .15s; }.config-input-wrap:focus-within { border-color: #0da59a; box-shadow: 0 0 0 3px rgba(13,165,154,.1); }.config-center-mtcp .config-input-wrap input { width: 100%; min-width: 0; padding: 9px 10px; border: 0; outline: 0; background: transparent; font-weight: 750; }.config-input-wrap em { padding: 0 9px; color: var(--muted); font-size: .68rem; font-style: normal; white-space: nowrap; }\r
.config-actions { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding-top: 2px; }.config-actions > div { min-height: 18px; }.config-actions button { margin-left: auto; }.config-loading { padding: 28px 24px; color: var(--muted); }\r
@media (max-width: 900px) { .config-pairs { grid-template-columns: 1fr; }.config-fields { grid-template-columns: repeat(2, 1fr); } }\r
@media (max-width: 560px) { .config-card-heading { padding: 18px; }.config-card-heading p { font-size: .75rem; }.config-live { display: none; }.config-center-mtcp .mtcp-config-editor { padding: 16px 18px 18px; }.config-group > header { display: grid; gap: 3px; }.config-direction { grid-template-columns: 1fr 1fr; }.config-direction > strong { grid-column: 1 / -1; }.config-fields { grid-template-columns: 1fr 1fr; }.config-field > small { display: none; }.config-actions { align-items: stretch; flex-direction: column; }.config-actions button { width: 100%; margin: 0; }.config-center-grid { grid-template-columns: 1fr; } }\r
.mtcp-direction { min-width: 0 !important; }\r
.mtcp-link-grid { grid-template-columns: repeat(auto-fit, minmax(142px, 1fr)) !important; gap: 7px !important; align-items: start; }\r
.mtcp-link-card { position: relative; min-width: 0; align-self: start; padding: 9px 10px !important; border-color: var(--line) !important; box-shadow: 0 2px 8px rgba(28,45,75,.04) !important; }\r
.mtcp-link-card[role="button"] { cursor: pointer; }\r
.mtcp-link-card.rotating { height: 126px !important; min-height: 126px; max-height: 126px; border-color: #5eead4 !important; box-shadow: 0 2px 10px rgba(20,184,166,.14) !important; }\r
.mtcp-link-card.rotating .mtcp-link-spark { display: none !important; }\r
.mtcp-link-card.rotating::after { content: ""; position: absolute; z-index: 2; pointer-events: none; inset: 0; padding: 2px; border-radius: inherit; background: linear-gradient(100deg, #10b981, #5eead4, #38bdf8, #10b981); background-size: 220% 100%; -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: mtcp-rotate-border 2.4s linear infinite; }\r
.mtcp-link-state.rotating-state { animation: mtcp-rotate-state 1.1s ease-in-out infinite alternate; }\r
.mtcp-link-card.rotation-complete { border-color: rgba(32,180,134,.58) !important; }\r
.mtcp-link-state.completed-state { display: inline-flex; align-items: center; gap: 5px; }\r
.mtcp-link-state.completed-state::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #20b486; box-shadow: 0 0 0 0 rgba(32,180,134,.48); animation: mtcp-complete-breathe 1.25s ease-out infinite; }\r
@keyframes mtcp-rotate-border { to { background-position: 220% 0; } }\r
@keyframes mtcp-rotate-state { from { opacity: .58; } to { opacity: 1; } }\r
@keyframes mtcp-complete-breathe { 0% { box-shadow: 0 0 0 0 rgba(32,180,134,.48); opacity: .72; } 70% { box-shadow: 0 0 0 6px rgba(32,180,134,0); opacity: 1; } 100% { box-shadow: 0 0 0 0 rgba(32,180,134,0); opacity: .82; } }\r
.mtcp-link-card:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }\r
.mtcp-link-identity { min-width: 0; display: grid; gap: 1px; }\r
.mtcp-link-identity small { color: var(--muted); font-size: .58rem; font-weight: 500; }\r
.mtcp-link-card.suspect { border-color: #f1aeb5 !important; }\r
.mtcp-link-card.recent-timeout { border-color: rgba(230,126,34,.55) !important; }\r
.mtcp-link-alerts { margin-top: 5px; display: flex; gap: 5px; }\r
.mtcp-link-alerts span { padding: 2px 5px; border-radius: 4px; background: rgba(230,126,34,.1); color: #c56a13; font-size: .61rem; font-weight: 700; }\r
.mtcp-link-hover-detail { position: absolute; z-index: 20; left: 50%; bottom: calc(100% + 8px); width: 248px; padding: 10px 11px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--text); box-shadow: 0 10px 30px rgba(13,31,54,.2); opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, 5px); transition: opacity .12s ease, transform .12s ease, visibility .12s; }\r
.mtcp-link-card:hover .mtcp-link-hover-detail, .mtcp-link-card:focus-visible .mtcp-link-hover-detail, .mtcp-link-card.detail-open .mtcp-link-hover-detail { opacity: 1; visibility: visible; transform: translate(-50%, 0); }\r
.mtcp-link-hover-detail > strong { display: block; margin-bottom: 7px; font-size: .72rem; }\r
.mtcp-link-hover-detail dl { margin: 0; display: grid; gap: 4px; }\r
.mtcp-link-hover-detail dl > div { display: flex; justify-content: space-between; gap: 10px; font-size: .64rem; }\r
.mtcp-link-hover-detail dt { color: var(--muted); }.mtcp-link-hover-detail dd { margin: 0; max-width: 150px; overflow: hidden; font-variant-numeric: tabular-nums; text-overflow: ellipsis; white-space: nowrap; }.mtcp-link-hover-detail dd.warn { color: #e67e22; font-weight: 750; }\r
.mtcp-link-spark { position: relative; width: 100%; height: 24px !important; min-height: 24px; max-height: 24px; margin-top: 6px; display: block; border-bottom: 1px solid #edf1f5; cursor: crosshair; }\r
.mtcp-link-spark svg { width: 100%; height: 100%; display: block; overflow: visible; }\r
.mtcp-link-spark polyline { fill: none; stroke-width: 2; vector-effect: non-scaling-stroke; }\r
.mtcp-spark-guide { stroke: #8492a6; stroke-width: 1; stroke-dasharray: 2 2; vector-effect: non-scaling-stroke; opacity: .75; }\r
.mtcp-spark-point { stroke: white; stroke-width: 1.5; vector-effect: non-scaling-stroke; }\r
.mtcp-spark-tooltip { position: absolute; z-index: 3; top: -25px; padding: 3px 6px; border-radius: 5px; background: #10263f; color: white; font-size: .64rem; font-weight: 700; white-space: nowrap; pointer-events: none; transform: translateX(-50%); box-shadow: 0 3px 10px rgba(12,35,61,.22); }\r
.mtcp-link-spark.empty { height: 10px !important; min-height: 10px; max-height: 10px; border-bottom-style: dashed; }\r
.traffic-reset-editor { margin: 10px 0; padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); display: flex; flex-wrap: wrap; align-items: center; gap: 7px; color: var(--muted); font-size: .72rem; }\r
.traffic-reset-editor input { height: 33px; padding: 0 8px; border: 1px solid #d9e2ee; border-radius: 7px; background: white; color: var(--text); }\r
.traffic-reset-editor input[type="number"] { width: 58px; }\r
.traffic-reset-editor small.success { color: var(--green); }.traffic-reset-editor small.error { color: var(--red); }\r
.vps-speedtest-actions { margin: 10px 0; display: flex; justify-content: flex-end; gap: 8px; }\r
.vps-traffic-charts { margin-top: 12px; display: grid; gap: 12px; }\r
.vps-traffic-chart-card { overflow: hidden; border: 1px solid var(--line); border-radius: 11px; background: white; box-shadow: 0 2px 8px rgba(28,45,75,.035); }\r
.vps-traffic-chart-card > header { min-height: 54px; padding: 10px 14px; border-bottom: 1px solid #edf1f5; display: flex; align-items: center; justify-content: space-between; gap: 12px; }\r
.vps-traffic-chart-card h4 { margin: 0; color: var(--text); font-size: .8rem; }\r
.vps-traffic-chart-card p { margin: 3px 0 0; color: var(--muted); font-size: .65rem; }\r
.vps-traffic-chart-card > header > span { padding: 4px 7px; border-radius: 6px; background: var(--surface-soft); color: var(--muted); font-size: .62rem; font-weight: 700; white-space: nowrap; }\r
.vps-traffic-chart-canvas { width: 100%; height: 240px; }\r
.vps-traffic-progress { width: 100%; margin-top: 13px; padding: 11px 10px 9px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-soft); color: inherit; display: block; text-align: left; cursor: pointer; transition: border-color .15s ease, background .15s ease, box-shadow .15s ease; }\r
.vps-traffic-progress:hover, .vps-traffic-progress.active { border-color: var(--node-accent-border); background: var(--node-accent-soft); }\r
.vps-traffic-progress:focus { outline: none; }.vps-traffic-progress:focus-visible { box-shadow: 0 0 0 2px var(--node-accent-soft); }\r
.vps-traffic-progress-labels { margin-bottom: 7px; display: grid; grid-template-columns: minmax(170px, 1fr) minmax(150px, 1fr) minmax(170px, auto); align-items: center; gap: 12px; color: var(--muted); font-size: .7rem; font-variant-numeric: tabular-nums; }\r
.vps-traffic-progress-labels span:nth-child(2) { text-align: center; }\r
.vps-traffic-progress-labels span:last-child { text-align: right; }\r
.vps-traffic-progress-labels strong { color: var(--text); }\r
.vps-traffic-progress-labels i { margin-left: 8px; color: var(--node-accent); font-size: .62rem; font-style: normal; font-weight: 750; }\r
.vps-traffic-progress-track { width: 100%; height: 7px; overflow: hidden; border-radius: 999px; background: #e9eef4; display: block; }\r
.vps-traffic-progress-track > div { min-width: 3px; height: 100%; border-radius: inherit; transition: width .3s ease-out; }\r
.mtcp-diagnostics { margin: 10px 0 18px; padding: 0; overflow: visible; }\r
.mtcp-direction-title > strong { min-width: 76px; text-align: right; font-size: .78rem; font-variant-numeric: tabular-nums; }\r
.mtcp-diagnostics-header { width: 100%; min-height: 64px; padding: 12px 16px; border: 0; background: white; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; color: var(--text); text-align: left; cursor: pointer; }\r
.mtcp-diagnostics-header > span:nth-child(2) { min-width: 0; display: grid; gap: 3px; }\r
.mtcp-diagnostics-header small { color: var(--muted); font-size: .69rem; font-weight: 400; }\r
.mtcp-diagnostics-header b { color: var(--blue); font-size: .7rem; }\r
.mtcp-diagnostic-content { padding: 0 14px 14px; }\r
.mtcp-diagnostic-node { border-top: 1px solid var(--line); }\r
.mtcp-diagnostic-node > button { width: 100%; min-height: 58px; padding: 7px 4px; border: 0; background: transparent; display: grid; grid-template-columns: minmax(110px, 1fr) minmax(76px, auto) minmax(136px, auto) 74px; align-items: center; gap: 10px; text-align: left; cursor: pointer; }\r
.mtcp-diagnostic-node-name { min-width: 0; display: grid; gap: 3px; }.mtcp-diagnostic-node-name > small { overflow: hidden; color: var(--muted); font-size: .72rem; text-overflow: ellipsis; white-space: nowrap; }\r
.mtcp-diagnostic-metric { min-height: 40px; padding: 5px 8px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface-soft); display: grid; gap: 2px; font-variant-numeric: tabular-nums; }.mtcp-diagnostic-metric small { color: var(--muted); font-size: .58rem; font-weight: 500; }.mtcp-diagnostic-metric > strong { color: var(--text); font-size: .72rem; white-space: nowrap; }\r
.mtcp-diagnostic-metric.latency.good > strong { color: var(--green); }.mtcp-diagnostic-metric.latency.warn > strong { color: #e67e22; }.mtcp-diagnostic-metric.latency.bad > strong { color: var(--red); }\r
.mtcp-diagnostic-metric.speed > strong { display: flex; gap: 7px; }.mtcp-diagnostic-metric.speed i { font-size: .66rem; font-style: normal; }\r
.mtcp-diagnostic-node > button b { color: var(--green); font-size: .7rem; text-align: right; }\r
.mtcp-diagnostic-node > button b.warn { color: #e67e22; }\r
\r
@media (max-width: 620px) {\r
    .mtcp-diagnostic-node > button { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }\r
    .mtcp-diagnostic-node-name { grid-column: 1; grid-row: 1; }\r
    .mtcp-diagnostic-node > button > b { grid-column: 2; grid-row: 1; }\r
    .mtcp-diagnostic-metric.latency { grid-column: 1; grid-row: 2; }\r
    .mtcp-diagnostic-metric.speed { grid-column: 2; grid-row: 2; }\r
    .mtcp-diagnostic-metric { min-width: 0; min-height: 49px; padding: 7px 10px; }\r
    .mtcp-diagnostic-metric.speed > strong { flex-wrap: wrap; gap: 2px 8px; }\r
    .mtcp-diagnostic-metric.speed i { font-size: .7rem; }\r
    .mtcp-diagnostic-node-name > small { font-size: .65rem; }\r
}\r
\r
.mobile-nav { display: none; }\r
\r
/* \u6697\u8272\u4E3B\u9898\u8986\u76D6\u4ECD\u4F7F\u7528\u56FA\u5B9A\u6D45\u8272\u503C\u7684\u65E7\u7EC4\u4EF6\u3002 */\r
:root[data-theme="dark"] .topbar { background: rgba(11,18,32,.9); }\r
:root[data-theme="dark"] .hero-card { border-color: var(--line); background: linear-gradient(120deg, #111b2b 0%, #14243a 100%); }\r
:root[data-theme="dark"] .speed-panel-header,\r
:root[data-theme="dark"] .latency-panel-header,\r
:root[data-theme="dark"] .mtcp-diagnostics-header,\r
:root[data-theme="dark"] .vps-traffic-chart-card { background: var(--surface); }\r
:root[data-theme="dark"] .speed-panel-header:hover,\r
:root[data-theme="dark"] .latency-panel-header:hover { background: var(--surface-soft); }\r
:root[data-theme="dark"] .mtcp-link-card { background: var(--surface) !important; border-color: var(--line) !important; }\r
:root[data-theme="dark"] .mtcp-pool { background: #0e1929 !important; border-color: var(--line); }\r
:root[data-theme="dark"] .traffic-reset-editor input,\r
:root[data-theme="dark"] .analytics-controls select { background: var(--surface); border-color: var(--line); color: var(--text); }\r
:root[data-theme="dark"] .range-tabs { background: #0c1625; }\r
:root[data-theme="dark"] .range-tabs button.active,\r
:root[data-theme="dark"] .range-tabs > span.active { background: var(--surface-soft); }\r
:root[data-theme="dark"] .alert-item > span { background: var(--surface) !important; }\r
:root[data-theme="dark"] .vps-detail-actions button,\r
:root[data-theme="dark"] .vps-speedtest-actions button,\r
:root[data-theme="dark"] .traffic-reset-editor button,\r
:root[data-theme="dark"] .simple-button { color: #bdc9d9; border-color: var(--line); background: var(--surface-soft); }\r
:root[data-theme="dark"] .vps-detail-actions button.speed-test { color: var(--green); border-color: #245b4d; background: #13382f; }\r
:root[data-theme="dark"] .vps-system-grid,\r
:root[data-theme="dark"] .vps-precise-traffic,\r
:root[data-theme="dark"] .traffic-reset-editor { border-color: var(--line); }\r
:root[data-theme="dark"] .vps-name { color: #f2f6fc !important; }\r
:root[data-theme="dark"] .LinksHeader .panel-title-icon,\r
:root[data-theme="dark"] .LinksHeader .panel-title-icon .toolbar-icon { color: #38c8e8; }\r
:root[data-theme="dark"] .speed-tone-idle { color: #64748b !important; }\r
:root[data-theme="dark"] .speed-tone-low { color: #94a3b8 !important; }\r
:root[data-theme="dark"] .speed-tone-active { color: #60a5fa !important; }\r
:root[data-theme="dark"] .route-row span { color: #a9b8cc; }\r
:root[data-theme="dark"] .route-row .speed-tone-idle { color: #94a3b8 !important; }\r
:root[data-theme="dark"] .speed-tone-fast { color: #818cf8 !important; }\r
:root[data-theme="dark"] .speed-tone-peak { color: #a78bfa !important; }\r
:root[data-theme="dark"] .vps-reset-time { color: var(--muted) !important; }\r
:root[data-theme="dark"] .vps-usage-meter,\r
:root[data-theme="dark"] .vps-traffic-progress-track { background: #27364a; }\r
:root[data-theme="dark"] .node-row,\r
:root[data-theme="dark"] .route-row,\r
:root[data-theme="dark"] .traffic-node-row,\r
:root[data-theme="dark"] .vps-card-heading,\r
:root[data-theme="dark"] .vps-detail-actions,\r
:root[data-theme="dark"] .vps-traffic-progress,\r
:root[data-theme="dark"] .speed-chart-body,\r
:root[data-theme="dark"] .latency-chart-body { border-color: var(--line) !important; }\r
:root[data-theme="dark"] .sdiv,\r
:root[data-theme="dark"] li { background: var(--surface); color: var(--text); }\r
:root[data-theme="dark"] th { background: var(--surface-soft); }\r
:root[data-theme="dark"] th,\r
:root[data-theme="dark"] td { border-color: var(--line); }\r
\r
@media (max-width: 1180px) {\r
    .metric-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
    .overview-grid { grid-template-columns: 1fr; }\r
    .overview-bottom { grid-template-columns: 1fr; }\r
}\r
\r
@media (max-width: 820px) {\r
    .app-sidebar { display: none; }\r
    .app-main { margin-left: 0; padding-bottom: 74px; }\r
    .topbar { min-height: 66px; padding: 10px 16px; }\r
    .eyebrow { display: none; }\r
    .topbar h1 { font-size: 1.15rem; }\r
    .topbar-route { padding: 6px 9px; }.topbar-route span { display: none; }\r
    .theme-toggle { min-width: 36px; padding: 0 8px; }.theme-toggle small { display: none; }\r
    .page-content { padding: 14px 12px 25px; }\r
    .mobile-nav {\r
        position: fixed;\r
        inset: auto 0 0;\r
        z-index: 500;\r
        min-height: 64px;\r
        padding: 6px max(8px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));\r
        border-top: 1px solid var(--line);\r
        background: rgba(255,255,255,.96);\r
        backdrop-filter: blur(18px);\r
        display: grid;\r
        grid-template-columns: repeat(5, 1fr);\r
        box-shadow: 0 -8px 24px rgba(28,45,75,.08);\r
    }\r
    :root[data-theme="dark"] .mobile-nav { background: rgba(11,18,32,.96); }\r
    .mobile-nav button { min-width: 0; border: 0; background: transparent; color: #7a899c; display: grid; place-items: center; gap: 1px; }\r
    .mobile-nav button > span { font-size: 1.15rem; line-height: 1; }\r
    .mobile-nav button small { font-size: .65rem; white-space: nowrap; }\r
    .mobile-nav button.active { color: var(--blue); font-weight: 750; }\r
    .hero-card { min-height: 0; padding: 18px; align-items: flex-end; }\r
    .hero-card h2 { font-size: 1.35rem; }.hero-card p { font-size: .76rem; }.primary-action { min-width: 92px; padding: 0 12px; }\r
    .metric-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }\r
    .metric-card { min-height: 116px; padding: 14px; }.metric-card strong { font-size: 1.25rem; }\r
    .overview-grid, .overview-bottom { grid-template-columns: 1fr; gap: 12px; }\r
    .diagnostic-summary { grid-template-columns: 1fr 1fr; }\r
    .node-latency-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 4px; }\r
    .node-latency-card { flex: 0 0 min(72vw, 230px); scroll-snap-align: start; }\r
    .analytics-header { display: grid; }\r
    .analytics-controls { width: 100%; justify-content: space-between; }\r
    .traffic-summary-grid { grid-template-columns: 1fr 1fr; }\r
    .traffic-history-chart { height: 260px; }\r
    .traffic-node-table { overflow-x: auto; }\r
    .traffic-node-row { min-width: 550px; }\r
    .NodesHeader, .LinksHeader { min-height: 48px; border-radius: 11px; }\r
    .LinksHeader { flex-wrap: wrap; }\r
    .aggregate-speed { justify-content: flex-end; }\r
    .link-toolbar { width: 100%; justify-content: flex-start; padding-top: 7px; border-top: 1px solid var(--line); overflow-x: auto; flex-wrap: nowrap; }\r
    .link-toolbar .simple-button { flex: 0 0 auto; min-height: 36px; }\r
    .link-route-state { min-width: 82px; max-width: 105px; margin: 0 4px; }\r
    .traffic-remaining { display: none; }\r
    .route-row { grid-template-columns: 1fr auto auto; gap: 5px; padding: 8px 0; }\r
    .route-row .up-text, .route-row .down-text { grid-row: 2; }\r
    .route-row .up-text { grid-column: 2; }.route-row .down-text { grid-column: 3; }\r
    .vps-card-main { padding: 14px !important; }\r
    .vps-card-heading { display: grid !important; grid-template-columns: 1fr auto; gap: 7px; }\r
    .vps-identity { flex-basis: auto !important; }.vps-traffic-total { justify-content: flex-end; }.vps-live-speed { grid-column: 1 / -1; width: auto; margin-left: auto; justify-self: end; justify-content: flex-end; }\r
    .vps-stats { display: grid !important; grid-template-columns: 1fr 1fr; gap: 7px; }\r
    .vps-stats span { flex: auto !important; text-align: left !important; }.vps-stats span:last-child { grid-column: 1 / -1; }\r
    .vps-system-grid { grid-template-columns: 1fr 1fr; }\r
    .vps-system-grid > div, .vps-system-grid > div:nth-child(3n) { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }\r
    .vps-system-grid > div:nth-child(2n) { border-right: 0; }\r
    .vps-system-grid > div:nth-last-child(-n+2) { border-bottom: 0; }\r
    .vps-system-grid strong { overflow: visible; font-size: .7rem; line-height: 1.25; text-overflow: clip; white-space: normal; }\r
    .vps-precise-traffic { grid-template-columns: 1fr 1fr; }\r
    .vps-detail-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
    .vps-detail-actions button { padding: 0 5px; }\r
    .node-connection-head { display: none; }\r
    .node-connection-row { min-height: 102px; padding: 9px 10px; grid-template-columns: minmax(0, 1fr) auto; gap: 6px 8px; }\r
    .node-connection-target { grid-column: 1; grid-row: 1; }\r
    .node-connection-delay { grid-column: 2; grid-row: 1; text-align: right; }\r
    .node-connection-speed { grid-column: 1 / -1; grid-row: 2; justify-content: flex-end; }\r
    .node-connection-speed b { min-width: 82px; }\r
    .node-connection-traffic { grid-column: 1 / -1; grid-row: 3; justify-content: flex-end; }\r
    .node-connection-traffic b { min-width: 82px; }\r
    .speed-history-detail > header { align-items: flex-start; flex-direction: column; }\r
    .speed-history-stats { width: 100%; justify-content: space-between; }\r
    .speed-history-canvas { height: 205px; }\r
    .speed-history-detail.compact { margin: 0 8px 9px; }\r
    .speed-history-detail.compact .speed-history-canvas { height: 155px; }\r
    .node-connection-group-header { padding: 8px 11px; flex-wrap: wrap; }\r
    .node-connection-group-header > b { width: 100%; margin-left: 0; }\r
    .node-latency-detail > header { align-items: flex-start; flex-direction: column; }\r
    .node-latency-stats { width: 100%; justify-content: space-between; }\r
    .node-latency-detail-canvas { height: 200px; }\r
    .traffic-reset-editor button { width: 100%; }\r
    .vps-traffic-chart-card > header { min-height: 50px; padding: 9px 11px; }\r
    .vps-traffic-chart-canvas { height: 210px; }\r
    .vps-traffic-progress-labels { grid-template-columns: 1fr 1fr; gap: 4px 10px; }\r
    .vps-traffic-progress-labels span:nth-child(2) { text-align: right; }\r
    .vps-traffic-progress-labels span:last-child { grid-column: 1 / -1; text-align: left; }\r
    .vps-detail-row { align-items: flex-start !important; flex-direction: column; gap: 4px; }\r
    .mtcp-pool { display: block !important; padding: 10px !important; }\r
    .mtcp-direction + .mtcp-direction { margin-top: 13px; padding-top: 12px; border-top: 1px solid var(--line); }\r
    .mtcp-pool { display: grid !important; grid-template-columns: minmax(0, 1fr); padding: 6px !important; }\r
    .mtcp-direction { width: 100%; }\r
    .mtcp-link-grid { display: grid !important; grid-template-columns: minmax(0, 1fr) !important; overflow: visible; padding-bottom: 0; }\r
    .mtcp-link-card { width: 100%; padding: 10px 11px !important; }\r
    .mtcp-link-card.rotating { height: auto !important; min-height: 0; max-height: none; }\r
    .mtcp-link-hover-detail { position: static; width: 100%; margin-top: 9px; padding: 9px; display: none; opacity: 1; visibility: visible; pointer-events: auto; transform: none; box-shadow: none; background: var(--surface-soft); }\r
    .mtcp-link-card.detail-open .mtcp-link-hover-detail { display: block; opacity: 1; visibility: visible; transform: none; }\r
    .mtcp-link-hover-detail > strong { font-size: .78rem; }\r
    .mtcp-link-hover-detail dl { gap: 6px; }\r
    .mtcp-link-hover-detail dl > div { font-size: .72rem; }\r
    .panel-card { padding: 15px; }\r
    .speed-panel-header { min-height: 64px; padding: 10px 13px; grid-template-columns: auto minmax(100px, 1fr) auto auto; gap: 8px; }\r
    .speed-range-tabs { grid-column: 2 / -1; grid-row: 2; justify-self: start; }\r
    .speed-panel-heading small { display: none; }\r
    .speed-panel-live { min-width: 0; padding-left: 8px; }\r
    .speed-panel-live strong { font-size: .76rem; }\r
    .speed-chart-body { height: 220px; padding: 0 4px 8px; }\r
    .speed-chart-canvas { height: 212px; }\r
    .latency-panel-header { min-height: 62px; padding: 10px 13px; }\r
    .latency-panel-header small { display: none; }\r
    .latency-chart-body { height: 225px; padding: 0 4px 8px; }\r
    .latency-chart-canvas { height: 217px; }\r
}\r
\r
@media (max-width: 480px) {\r
    .topbar-route strong { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r
    .hero-card { display: block; }.primary-action { width: 100%; margin-top: 14px; }\r
    .metric-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; margin-right: -12px; padding-right: 12px; }\r
    .metric-card { flex: 0 0 42vw; min-width: 150px; scroll-snap-align: start; }\r
    .diagnostic-summary { display: flex; overflow-x: auto; }.diagnostic-summary .metric-card { flex: 0 0 160px; }\r
    .route-list-shell .route-list-body { padding-inline: 6px; }\r
    .route-list-shell .route-item-header { padding-inline: 7px !important; }\r
    .route-item-header { grid-template-columns: 18px minmax(0, 1fr) auto auto 68px !important; gap: 5px !important; }\r
    .route-list-columns { display: none; }\r
    .route-item-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r
    .route-item-speeds { grid-column: 2 / -1; grid-row: 2; justify-content: flex-start; gap: 8px; }\r
    .route-item-count { width: 23px; height: 23px; }\r
    .route-item-exit { max-width: 64px; }\r
    .route-item-mode { width: 68px; max-width: 68px; }\r
    .route-item-details { margin: 4px 0 8px; }\r
    .aggregate-speed { width: 100%; order: 5; justify-content: flex-start; padding-left: 30px; }\r
    .node-row { grid-template-columns: 8px 1fr auto; padding: 6px 0; }\r
    .node-row .health-dot { grid-column: 1; grid-row: 1 / 3; }\r
    .node-row > strong { grid-column: 2; grid-row: 1; }\r
    .node-row .node-speed-cell { grid-column: 2; grid-row: 2; display: flex; gap: 8px; text-align: left; }\r
    .node-row > span:nth-last-child(2) { grid-column: 3; grid-row: 1; }\r
    .node-row > span:last-child { grid-column: 3; grid-row: 2; text-align: right; }\r
    .mtcp-diagnostic-node > button { position: relative; grid-template-columns: minmax(72px, .55fr) minmax(166px, 1.45fr); padding: 10px 4px; gap: 9px 12px; }\r
    .mtcp-diagnostic-node > button .mtcp-diagnostic-node-name { grid-column: 1 / -1; grid-row: 1; padding-right: 58px; }\r
    .mtcp-diagnostic-node > button .mtcp-diagnostic-node-name > small { overflow: visible; text-overflow: clip; }\r
    .mtcp-diagnostic-node > button > b { position: absolute; top: 12px; right: 4px; }\r
    .mtcp-diagnostic-node > button .mtcp-diagnostic-metric.latency { grid-column: 1; grid-row: 2; }\r
    .mtcp-diagnostic-node > button .mtcp-diagnostic-metric.speed { grid-column: 2; grid-row: 2; min-width: 166px; }\r
    .speed-panel-header { grid-template-columns: auto 1fr auto; }\r
    .speed-panel-live { border-left: 0; text-align: right; }\r
    .speed-panel-live.up { display: none; }\r
}\r
\r
@media (max-width: 640px) {\r
    .LinksHeader { padding: 10px 15px !important; display: grid !important; grid-template-columns: 20px 26px auto auto minmax(0, 1fr); gap: 7px 8px; }\r
    .LinksHeader .aggregate-speed { width: auto; padding: 0; order: initial; justify-content: flex-end; gap: 7px; }\r
    .LinksHeader .link-toolbar { grid-column: 1 / -1; width: 100%; padding: 8px 0 1px; border-top: 1px solid var(--line); display: flex; gap: 6px; overflow-x: auto; flex-wrap: nowrap; scrollbar-width: none; }\r
    .LinksHeader .link-toolbar::-webkit-scrollbar { display: none; }\r
    .LinksHeader .link-toolbar .simple-button { width: auto !important; min-width: 42px; min-height: 34px; padding: 0 10px; flex: 0 0 auto; white-space: nowrap; }\r
    .LinksHeader .link-toolbar .danger-button { min-width: 72px; }\r
\r
    .links-list.show-route { margin: 6px 0 0; }\r
    .links-list.show-route > li { margin: 5px 0 !important; padding: 0 9px !important; border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 2px 8px rgba(28,45,75,.035); }\r
    .links-list.show-route .link-summary-row { width: 100%; min-width: 0; min-height: 72px; display: grid !important; grid-template-columns: 42px minmax(100px, 1fr) 30px 40px 42px; grid-template-rows: 35px 35px; align-items: center; gap: 0 5px; }\r
    .links-list.show-route .link-server { grid-column: 1; grid-row: 1; width: auto !important; }\r
    .links-list.show-route .link-route-state { grid-column: 2; grid-row: 1; width: auto; min-width: 0; max-width: none; margin: 0; }\r
    .links-list.show-route .link-remote { grid-column: 3; grid-row: 1; width: auto !important; text-align: center; }\r
    .links-list.show-route .link-time { grid-column: 4; grid-row: 1; width: auto !important; text-align: center; }\r
    .links-list.show-route .link-delay { grid-column: 5; grid-row: 1; width: auto !important; margin: 0 !important; text-align: center; }\r
    .links-list.show-route .link-target-address { grid-column: 1 / 3; grid-row: 2; min-width: 0; overflow: hidden; color: var(--text); font-size: .74rem; font-weight: 520; text-align: left !important; text-overflow: ellipsis; white-space: nowrap; word-break: normal !important; }\r
    .links-list.show-route .link-speed-groups { grid-column: 3 / 6; grid-row: 2; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 6px; }\r
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed { min-width: 0; height: 30px !important; margin: 0 !important; align-items: flex-end; overflow: hidden; }\r
    .links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span { font-size: .68rem !important; line-height: 1.2; white-space: nowrap; }\r
}\r
\r
/* \u5FC5\u987B\u4F4D\u4E8E\u65E7\u7248\u79FB\u52A8\u89C4\u5219\u4E4B\u540E\uFF0C\u907F\u514D\u4E09\u680F\u91CD\u6784\u5728\u624B\u673A\u5BBD\u5EA6\u88AB\u5386\u53F2\u6837\u5F0F\u8986\u76D6\u3002 */\r
@media (max-width: 430px) {\r
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { min-height: 126px !important; padding: 10px 0 !important; display: grid !important; grid-template-columns: minmax(0,1fr) !important; grid-template-rows: auto auto auto !important; gap: 8px !important; }\r
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column: 1 !important; grid-row: 1 !important; }\r
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column: 1 !important; grid-row: 2 !important; margin: 0 !important; font-size: .82rem; text-align: left !important; }\r
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column: 1 !important; grid-row: 3 !important; display: grid !important; grid-template-columns: 1fr !important; gap: 4px !important; }\r
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,\r
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: 100%; height: auto !important; display: grid !important; grid-template-columns: 42px minmax(0,1fr) minmax(0,1fr) !important; align-items: center !important; }\r
    .link-identity-top .link-route-state { max-width: calc(100% - 42px); }\r
    .link-identity-meta { gap: 8px; font-size: .62rem; }\r
}\r
\r
/* \u901F\u5EA6\u4E0E\u6D41\u91CF\u4F7F\u7528\u7D27\u51D1\u6307\u6807\u6761\uFF0C\u4E0D\u5360\u636E\u6574\u5217\u5BBD\u5EA6\u3002 */\r
.links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { justify-items: end; gap: 4px !important; }\r
.links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,\r
.links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: fit-content !important; min-width: 112px; padding: 3px 7px !important; border: 1px solid var(--line); border-radius: 7px; background: color-mix(in srgb, var(--surface-soft) 68%, transparent); grid-template-columns: 49px 49px !important; gap: 2px !important; }\r
.link-current-speed > small, .link-total-speed > small { font-size: .6rem; }\r
.links-list.show-route .link-current-speed > span, .links-list.show-route .link-total-speed > span,\r
.links-list.route-scoped .link-current-speed > span, .links-list.route-scoped .link-total-speed > span { font-size: .8rem !important; font-weight: 750; }\r
.links-list.show-route .link-current-speed.live-active, .links-list.route-scoped .link-current-speed.live-active { opacity: 1; border-color: color-mix(in srgb, var(--blue) 32%, var(--line)); background: color-mix(in srgb, var(--blue-soft) 72%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--blue) 13%, transparent); animation: none; }\r
.links-list.show-route .link-current-speed.live-idle, .links-list.route-scoped .link-current-speed.live-idle { animation: link-live-speed-fade 3s ease-out forwards; }\r
@keyframes link-live-speed-fade {\r
    from { opacity: 1; border-color: color-mix(in srgb, var(--blue) 32%, var(--line)); background: color-mix(in srgb, var(--blue-soft) 72%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--blue) 13%, transparent); }\r
    to { opacity: 0; border-color: transparent; background: transparent; box-shadow: none; }\r
}\r
.links-list.show-route .link-total-speed, .links-list.route-scoped .link-total-speed { opacity: 1 !important; }\r
@media (max-width: 430px) {\r
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { align-items: end; }\r
    .links-list.show-route .link-current-speed, .links-list.show-route .link-total-speed,\r
    .links-list.route-scoped .link-current-speed, .links-list.route-scoped .link-total-speed { width: fit-content !important; min-width: 112px; grid-template-columns: 49px 49px !important; }\r
}\r
\r
/* \u6700\u7EC8\u7F51\u683C\u5F52\u4E00\u89C4\u5219\uFF1B\u653E\u5728\u6587\u4EF6\u672B\u5C3E\u4EE5\u8986\u76D6\u5386\u53F2\u54CD\u5E94\u5F0F\u9009\u62E9\u5668\u3002 */\r
@container all-links (min-width: 561px) {\r
    .links-list.show-route .all-link-columns, .links-list.show-route .link-summary-row { width:100%; min-width:0; display:grid !important; grid-template-columns:minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows:auto !important; column-gap:12px !important; }\r
    .links-list.show-route .all-link-columns > span { display:block !important; }\r
    .links-list.show-route .link-identity-group { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.show-route .link-target-address { grid-column:2 !important; grid-row:1 !important; margin:auto !important; text-align:center !important; }\r
    .links-list.show-route .link-speed-groups { grid-column:3 !important; grid-row:1 !important; }\r
}\r
@container route-links (min-width: 561px) {\r
    .links-list.route-scoped .route-link-columns, .links-list.route-scoped .link-summary-row { width:100%; min-width:0; display:grid !important; grid-template-columns:minmax(190px,.9fr) minmax(180px,1.5fr) 132px !important; grid-template-rows:auto !important; column-gap:12px !important; }\r
    .links-list.route-scoped .route-link-columns > span { display:block !important; }\r
    .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.route-scoped .link-target-address { grid-column:2 !important; grid-row:1 !important; margin:auto !important; text-align:center !important; }\r
    .links-list.route-scoped .link-speed-groups { grid-column:3 !important; grid-row:1 !important; }\r
}\r
@container all-links (max-width:560px) {\r
    .links-list.show-route .all-link-columns { display:none !important; }\r
    .links-list.show-route .link-summary-row { width:100%; min-width:0; min-height:82px !important; padding-block:5px !important; display:grid !important; grid-template-columns:minmax(0,1fr) 120px !important; grid-template-rows:auto auto !important; gap:4px 8px !important; }\r
    .links-list.show-route .link-identity-group { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.show-route .link-target-address { grid-column:1 !important; grid-row:2 !important; margin:0 !important; text-align:left !important; }\r
    .links-list.show-route .link-speed-groups { display:contents !important; }\r
    .links-list.show-route .link-current-speed { grid-column:2 !important; grid-row:1 !important; justify-self:end; }\r
    .links-list.show-route .link-total-speed { grid-column:2 !important; grid-row:2 !important; justify-self:end; }\r
}\r
@container route-links (max-width:560px) {\r
    .links-list.route-scoped .route-link-columns { display:none !important; }\r
    .links-list.route-scoped .link-summary-row { width:100%; min-width:0; min-height:82px !important; padding-block:5px !important; display:grid !important; grid-template-columns:minmax(0,1fr) 120px !important; grid-template-rows:auto auto !important; gap:4px 8px !important; }\r
    .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.route-scoped .link-target-address { grid-column:1 !important; grid-row:2 !important; margin:0 !important; text-align:left !important; }\r
    .links-list.route-scoped .link-speed-groups { display:contents !important; }\r
    .links-list.route-scoped .link-current-speed { grid-column:2 !important; grid-row:1 !important; justify-self:end; }\r
    .links-list.route-scoped .link-total-speed { grid-column:2 !important; grid-row:2 !important; justify-self:end; }\r
}\r
@media (max-width:360px) {\r
    .links-list.show-route .link-summary-row, .links-list.route-scoped .link-summary-row { grid-template-columns:1fr !important; grid-template-rows:auto auto auto !important; }\r
    .links-list.show-route .link-identity-group, .links-list.route-scoped .link-identity-group { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.show-route .link-target-address, .links-list.route-scoped .link-target-address { grid-column:1 !important; grid-row:2 !important; }\r
    .links-list.show-route .link-speed-groups, .links-list.route-scoped .link-speed-groups { grid-column:1 !important; grid-row:3 !important; display:grid !important; }\r
    .links-list.show-route .link-current-speed, .links-list.route-scoped .link-current-speed { grid-column:1 !important; grid-row:1 !important; }\r
    .links-list.show-route .link-total-speed, .links-list.route-scoped .link-total-speed { grid-column:1 !important; grid-row:2 !important; }\r
}\r
`],sourceRoot:""}]);const W=v},314:e=>{"use strict";e.exports=function(f){var B=[];return B.toString=function(){return this.map(function(x){var c="",k=typeof x[5]<"u";return x[4]&&(c+="@supports (".concat(x[4],") {")),x[2]&&(c+="@media ".concat(x[2]," {")),k&&(c+="@layer".concat(x[5].length>0?" ".concat(x[5]):""," {")),c+=f(x),k&&(c+="}"),x[2]&&(c+="}"),x[4]&&(c+="}"),c}).join("")},B.i=function(x,c,k,E,_){typeof x=="string"&&(x=[[null,x,void 0]]);var I={};if(k)for(var v=0;v<this.length;v++){var S=this[v][0];S!=null&&(I[S]=!0)}for(var W=0;W<x.length;W++){var j=[].concat(x[W]);k&&I[j[0]]||(typeof _<"u"&&(typeof j[5]>"u"||(j[1]="@layer".concat(j[5].length>0?" ".concat(j[5]):""," {").concat(j[1],"}")),j[5]=_),c&&(j[2]&&(j[1]="@media ".concat(j[2]," {").concat(j[1],"}")),j[2]=c),E&&(j[4]?(j[1]="@supports (".concat(j[4],") {").concat(j[1],"}"),j[4]=E):j[4]="".concat(E)),B.push(j))}},B}},417:e=>{"use strict";e.exports=function(f,B){return B||(B={}),f&&(f=String(f.__esModule?f.default:f),/^['"].*['"]$/.test(f)&&(f=f.slice(1,-1)),B.hash&&(f+=B.hash),/["'() \t\n]|(%20)/.test(f)||B.needQuotes?'"'.concat(f.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):f)}},354:e=>{"use strict";e.exports=function(f){var B=f[1],C=f[3];if(!C)return B;if(typeof btoa=="function"){var x=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(x),k="/*# ".concat(c," */");return[B].concat([k]).join(`
`)}return[B].join(`
`)}},338:(e,f,B)=>{"use strict";var C,x=B(564);if(1)f.H=x.createRoot,C=x.hydrateRoot;else var c},20:(e,f,B)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=B(845),x=Symbol.for("react.element"),c=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,E=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function I(v,S,W){var j,y={},O=null,H=null;W!==void 0&&(O=""+W),S.key!==void 0&&(O=""+S.key),S.ref!==void 0&&(H=S.ref);for(j in S)k.call(S,j)&&!_.hasOwnProperty(j)&&(y[j]=S[j]);if(v&&v.defaultProps)for(j in S=v.defaultProps,S)y[j]===void 0&&(y[j]=S[j]);return{$$typeof:x,type:v,key:O,ref:H,props:y,_owner:E.current}}f.Fragment=c,f.jsx=I,f.jsxs=I},848:(e,f,B)=>{"use strict";e.exports=B(20)},72:e=>{"use strict";var f=[];function B(c){for(var k=-1,E=0;E<f.length;E++)if(f[E].identifier===c){k=E;break}return k}function C(c,k){for(var E={},_=[],I=0;I<c.length;I++){var v=c[I],S=k.base?v[0]+k.base:v[0],W=E[S]||0,j="".concat(S," ").concat(W);E[S]=W+1;var y=B(j),O={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(y!==-1)f[y].references++,f[y].updater(O);else{var H=x(O,k);k.byIndex=I,f.splice(I,0,{identifier:j,updater:H,references:1})}_.push(j)}return _}function x(c,k){var E=k.domAPI(k);E.update(c);var _=function(v){if(v){if(v.css===c.css&&v.media===c.media&&v.sourceMap===c.sourceMap&&v.supports===c.supports&&v.layer===c.layer)return;E.update(c=v)}else E.remove()};return _}e.exports=function(c,k){k=k||{},c=c||[];var E=C(c,k);return function(I){I=I||[];for(var v=0;v<E.length;v++){var S=E[v],W=B(S);f[W].references--}for(var j=C(I,k),y=0;y<E.length;y++){var O=E[y],H=B(O);f[H].references===0&&(f[H].updater(),f.splice(H,1))}E=j}}},659:e=>{"use strict";var f={};function B(x){if(typeof f[x]>"u"){var c=document.querySelector(x);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch{c=null}f[x]=c}return f[x]}function C(x,c){var k=B(x);if(!k)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");k.appendChild(c)}e.exports=C},540:e=>{"use strict";function f(B){var C=document.createElement("style");return B.setAttributes(C,B.attributes),B.insert(C,B.options),C}e.exports=f},56:(e,f,B)=>{"use strict";function C(x){var c=B.nc;c&&x.setAttribute("nonce",c)}e.exports=C},825:e=>{"use strict";function f(x,c,k){var E="";k.supports&&(E+="@supports (".concat(k.supports,") {")),k.media&&(E+="@media ".concat(k.media," {"));var _=typeof k.layer<"u";_&&(E+="@layer".concat(k.layer.length>0?" ".concat(k.layer):""," {")),E+=k.css,_&&(E+="}"),k.media&&(E+="}"),k.supports&&(E+="}");var I=k.sourceMap;I&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I))))," */")),c.styleTagTransform(E,x,c.options)}function B(x){if(x.parentNode===null)return!1;x.parentNode.removeChild(x)}function C(x){if(typeof document>"u")return{update:function(){},remove:function(){}};var c=x.insertStyleElement(x);return{update:function(E){f(c,x,E)},remove:function(){B(c)}}}e.exports=C},113:e=>{"use strict";function f(B,C){if(C.styleSheet)C.styleSheet.cssText=B;else{for(;C.firstChild;)C.removeChild(C.firstChild);C.appendChild(document.createTextNode(B))}}e.exports=f},590:e=>{"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2714%27 height=%2714%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23647791%27 stroke-width=%272.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E"},639:(e,f,B)=>{e.exports=B(301)(15)},252:(e,f,B)=>{e.exports=B(301)(253)},648:(e,f,B)=>{e.exports=B(301)(381)},798:(e,f,B)=>{e.exports=B(301)(484)},845:(e,f,B)=>{e.exports=B(301)(540)},922:(e,f,B)=>{e.exports=B(301)(813)},564:(e,f,B)=>{e.exports=B(301)(961)},301:e=>{"use strict";e.exports=dll}},Ie={};function z(e){var f=Ie[e];if(f!==void 0)return f.exports;var B=Ie[e]={id:e,exports:{}};return De[e](B,B.exports,z),B.exports}z.m=De,z.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return z.d(f,{a:f}),f},z.d=(e,f)=>{for(var B in f)z.o(f,B)&&!z.o(e,B)&&Object.defineProperty(e,B,{enumerable:!0,get:f[B]})},z.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{z.b=document.baseURI||self.location.href;var e={792:0}})(),z.nc=void 0;var Gt={};(()=>{"use strict";var e=z(848),f=z(798),B=z(648),C=z(922),x=z(639),c=z(845),k=z(338);function E(r){return r/(1024*1024)>=1?_(r/(1024*1024),1)+"m":r/1024>=1?_(r/1024,1)+"k":r+"b"}function _(r,t){return r.toFixed(t).replace(/[.]?0+$/,"")}function I(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-down-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z","stroke-width":"0",fill:"currentColor"})]})}function v(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-right-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z","stroke-width":"0",fill:"currentColor"})]})}var S=z(252);function W(r){if(r){if(r.startsWith("\u7F8E\u56FD"))return(0,e.jsx)(S.US,{style:{width:15}});if(r.startsWith("\u9999\u6E2F"))return(0,e.jsx)(S.HK,{style:{width:15}});if(r.startsWith("\u53F0\u6E7E"))return(0,e.jsx)(S.TW,{style:{width:15}});if(r.startsWith("\u65E5\u672C"))return(0,e.jsx)(S.JP,{style:{width:15}});if(r.startsWith("\u65B0\u52A0\u5761"))return(0,e.jsx)(S.SG,{style:{width:15}});if(r.startsWith("\u97E9\u56FD"))return(0,e.jsx)(S.KR,{style:{width:15}});if(r.startsWith("\u5FB7\u56FD"))return(0,e.jsx)(S.DE,{style:{width:15}});if(r.startsWith("\u82F1\u56FD"))return(0,e.jsx)(S.GB,{style:{width:15}});if(r.startsWith("\u4FC4\u7F57\u65AF"))return(0,e.jsx)(S.RU,{style:{width:15}})}}function j(r,t=Date.now()){var A=Math.floor((t-r)/1e3),n=Math.floor(A/31536e3);let o="";if(n>=1&&(o+=n+"\u5E74",A-=n*31536e3),n=Math.floor(A/2592e3),n>=1&&(o+=n+"\u6708",A-=n*2592e3),n=Math.floor(A/86400),n>=1&&(o+=n+"\u5929",A-=n*86400),n=Math.floor(A/3600),n>=1){return o+=n+"h",o;A-=n*3600}if(n=Math.floor(A/60),n>=1){return o+=n+"m",o;A-=n*60}return A>0?o+=A+"s":o+=t-r,o}function y(r){const t=Math.max(0,Number(r)||0);return t<1024?"speed-tone-idle":t<100*1024?"speed-tone-low":t<1024*1024?"speed-tone-active":t<10*1024*1024?"speed-tone-fast":"speed-tone-peak"}function O(r){const t=y(r);return t==="speed-tone-idle"?"#94a3b8":t==="speed-tone-low"?"#64748b":t==="speed-tone-active"?"#3b82f6":t==="speed-tone-fast"?"#6366f1":"#8b5cf6"}const H=(r,t)=>t==="remain"||r.classList.contains("rotating")||r.classList.contains("rotation-complete")?new KeyframeEffect(r,[{opacity:1},{opacity:1}],{duration:1}):new KeyframeEffect(r,t==="add"?[{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"translateY(0)"}]:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(5px)"}],{duration:220,easing:"ease-out"});let ue=C.observable.box(!0),Ae=C.observable.box([]),Ce=C.observable.box({});const ze=new Map,be=new Map,ke=new Map;let re="/",we=!1,ve=!1;async function me(){if(we){ve=!0;return}we=!0;try{do{ve=!1;try{const r=await fetch(re+"vps");if(!r.ok)throw new Error(`HTTP ${r.status}`);const t=await r.json();if(!Array.isArray(t))throw new Error("\u8282\u70B9\u6570\u636E\u683C\u5F0F\u9519\u8BEF");(0,C.runInAction)(()=>{const A=new Map(Ae.get().map(o=>[o.nodeName,o])),n=t.map(o=>{const a=A.get(o.nodeName);let i=a?{...a,...o,traffic:o.traffic??a.traffic,status:o.status??a.status}:o;const l=ke.get(o.nodeName);return l&&(Date.now()<l.expiresAt?i=Me(i,l.config):ke.delete(o.nodeName)),i});for(const o of n){const a=be.get(o.nodeName)??{up:[],down:[]};a.up=[...a.up,o.status?.speed?.rx??0].slice(-180),a.down=[...a.down,o.status?.speed?.tx??0].slice(-180),be.set(o.nodeName,a);for(const i of o.status?.mtcp2Links??[]){const l=`${o.nodeName}|${i.clientIp}|${i.session}|${i.direction}|${i.id}`,p=[...ze.get(l)??[],i.speed].slice(-30);ze.set(l,p),i.speedHistory=p}}Ae.set(n)})}catch(r){console.warn("\u83B7\u53D6 VPS \u8282\u70B9\u6570\u636E\u5931\u8D25",r)}}while(ve)}finally{we=!1}}async function Se(){try{const t=await(await fetch(re+"pings")).json();(0,C.runInAction)(()=>Ce.set(t??{}))}catch{}}me(),Se(),setInterval(me,1e3),setInterval(Se,1e3);const Ve=(0,x.observer)(function({businessLinks:t=[],routes:A=[]}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader vps-panel-header",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{ue.set(!ue.get())},children:[ue.get()?I():v(),(0,e.jsx)("span",{className:"section-name",children:"VPS \u4E0E MTCP \u8282\u70B9"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}})]}),ue.get()&&(0,e.jsx)(Xe,{businessLinks:t,routes:A})]})}),Xe=(0,x.observer)(function({businessLinks:t,routes:A}){const n=[...Ae.get()].sort((o,a)=>o.hostName.localeCompare(a.hostName,"zh-CN",{numeric:!0,sensitivity:"base"}));return(0,e.jsx)("div",{className:"vps-grid",children:n.map((o,a)=>o.traffic?(0,e.jsx)(Ze,{traffic:o,accentIndex:a,businessLinks:t,routes:A},o.hostName):(0,e.jsxs)("div",{children:[o.hostName,"\u83B7\u53D6\u5931\u8D25!"]},o.hostName))})}),Ze=(0,x.observer)(function(t){let{traffic:A,routes:n}=t;const[o,a]=(0,c.useState)(null),i=A.traffic.precise,l=Le(A),p=String(l.day).padStart(2,"0");let d=i?(A.calcType==="in"?i.billing.up:A.calcType==="out"?i.billing.dn:A.calcType==="max"?Math.max(i.billing.up,i.billing.dn):i.billing.up+i.billing.dn)/1024**3:0;if(!i)for(let D=A.traffic.day.length;D--;){let Y=A.traffic.day[D],Rt=Y.date.split("-")[2];if(d+=A.calcType==="in"?Y.rx:A.calcType==="out"?Y.tx:A.calcType==="max"?Math.max(Y.rx,Y.tx):Y.total,Rt===p)break}const u=mt(p,A.hostName==="\u9999\u6E2Fa");A.status||(A.status={rss:0,tcp:0,udp:0,speed:{rx:0,tx:0,rxp:0,txp:0},loadavg:[0,0,0],freemem:""}),A.status.speed??={rx:0,tx:0,rxp:0,txp:0},A.status.loadavg??=[0,0,0],A.status.clients??={},A.status.rss??=0,A.status.freemem??="0",A.status.tcp??=0,A.status.udp??=0;const g=parseFloat(A.traffic.totalmem)||0,h=g-(parseFloat(A.status.freemem)||0),s=g?Math.min(100,Math.round(h/g*100)):0,m=Object.entries(A.status.clients??{}).sort(([D],[Y])=>D.localeCompare(Y,void 0,{numeric:!0,sensitivity:"base"})),F=[...A.status.mtcp2Links??[]].sort((D,Y)=>D.direction.localeCompare(Y.direction)||D.id-Y.id),b=t.businessLinks.filter(D=>D.ss===A.nodeName).sort((D,Y)=>+!!D.endTime-+!!Y.endTime||Y.linkTime-D.linkTime).slice(0,100),w=b.filter(D=>!D.endTime).length,N=Ce.get()[A.hostName]??[],Q=N.at(-1)??9999,P=Q<200?"good":Q<500?"warn":"bad",U=be.get(A.nodeName)??{up:[],down:[]};return(0,e.jsx)("li",{className:`vps-card vps-card-accent-${t.accentIndex%6}`,style:{margin:1,display:"flex",flexDirection:"column"},children:(0,e.jsxs)("div",{className:"vps-card-main",style:{display:"flex",flexDirection:"column",backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"5px",margin:"1px 0",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[(0,e.jsxs)("div",{className:"vps-card-heading",style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-around",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsxs)("div",{className:"vps-identity",style:{display:"flex",flexDirection:"row",alignItems:"center",flex:"0 0 35%",minWidth:0,justifyContent:"flex-start"},children:[(0,e.jsx)("span",{className:"vps-location-flag",children:W(A.nodeName)}),(0,e.jsx)("span",{className:"vps-name",children:A.hostName}),(0,e.jsxs)("span",{className:"vps-reset-time",children:[p,"\u53F7 ",String(l.hour).padStart(2,"0"),":",String(l.minute).padStart(2,"0")," \u91CD\u7F6E"]})]}),(0,e.jsxs)("div",{className:"vps-traffic-total",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,e.jsx)("small",{children:"\u4ECA\u65E5"}),(0,e.jsxs)("span",{style:{color:"#007bff"},children:["\u2191",i?$(i.currentDay.up):We(A.traffic.day.at(-1)?.rx??0)]}),(0,e.jsxs)("span",{style:{color:"#28a745"},children:["\u2193",i?$(i.currentDay.dn):We(A.traffic.day.at(-1)?.tx??0)]})]}),(0,e.jsxs)("button",{className:`vps-live-speed ${o==="quality"?"active":""}`,title:"\u67E5\u770B\u901F\u5EA6\u4E0E\u5EF6\u8FDF\u8BE6\u60C5",onClick:()=>a(o==="quality"?null:"quality"),children:[(0,e.jsx)("span",{className:`vps-current-latency ${P}`,children:Q>=9999?"\u5EF6\u8FDF\u8D85\u65F6":`${Q} ms`}),(0,e.jsxs)("span",{className:"vps-throughput",children:[(0,e.jsxs)("span",{className:`speed-value ${y(A.status.speed.rx)}`,children:["\u2191",E(A.status.speed.rx)]}),(0,e.jsxs)("span",{className:`speed-value ${y(A.status.speed.tx)}`,children:["\u2193",E(A.status.speed.tx)]})]})]})]}),(0,e.jsxs)("div",{className:"vps-system-grid",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8FDB\u7A0B\u5185\u5B58"}),(0,e.jsxs)("strong",{children:[A.status.rss," MB"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u7CFB\u7EDF\u5185\u5B58"}),(0,e.jsxs)("strong",{children:[h.toFixed(1)," / ",A.traffic.totalmem," MB ",(0,e.jsxs)("em",{children:[s,"%"]})]}),(0,e.jsx)(qe,{percent:s})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8FDE\u63A5"}),(0,e.jsxs)("strong",{children:["TCP ",A.status.tcp," \xB7 UDP ",A.status.udp]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u7CFB\u7EDF\u8D1F\u8F7D"}),(0,e.jsx)("strong",{children:A.status.loadavg.join(" \xB7 ")})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u78C1\u76D8"}),A.traffic.diskInfo?.length?A.traffic.diskInfo.map(D=>(0,e.jsxs)("span",{className:"vps-disk-meter",children:[(0,e.jsxs)("strong",{children:[D.drive==="/"?"\u6839\u76EE\u5F55":D.drive," ",D.used.toFixed(1)," / ",D.total.toFixed(1)," GB ",(0,e.jsxs)("em",{children:[D.total?Math.round(D.used/D.total*100):0,"%"]})]}),(0,e.jsx)(qe,{percent:D.total?D.used/D.total*100:0})]},D.drive)):(0,e.jsx)("strong",{children:"--"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8FD0\u884C\u65F6\u95F4"}),(0,e.jsx)("strong",{children:pt(A.traffic.uptime)})]})]}),(0,e.jsx)(Et,{usedTraffic:d,totalTraffic:A.planTraffic,remDay:u,expanded:o==="traffic",onToggle:()=>a(o==="traffic"?null:"traffic")}),o==="traffic"&&(0,e.jsxs)("div",{className:"vps-detail-section vps-traffic-inline-detail",children:[i&&(0,e.jsxs)("div",{className:"vps-precise-traffic",children:[(0,e.jsxs)("span",{children:["\u672C\u5206\u949F ",(0,e.jsx)("strong",{children:$(i.currentMinute.up+i.currentMinute.dn)})]}),(0,e.jsxs)("span",{children:["\u672C\u5C0F\u65F6 ",(0,e.jsx)("strong",{children:$(i.currentHour.up+i.currentHour.dn)})]}),(0,e.jsxs)("span",{children:["\u4ECA\u65E5 ",(0,e.jsx)("strong",{children:$(i.currentDay.up+i.currentDay.dn)})]}),(0,e.jsxs)("span",{children:["\u8D26\u671F ",(0,e.jsx)("strong",{children:$(i.billing.up+i.billing.dn)})]})]}),(0,e.jsx)(it,{traffic:A,onSaved:me}),(0,e.jsxs)("div",{className:"vps-traffic-charts",children:[(0,e.jsx)(ct,{traffic:A}),(0,e.jsx)(ut,{traffic:A})]})]}),(0,e.jsxs)("div",{className:"vps-detail-actions",children:[(0,e.jsx)("button",{className:"speed-test",onClick:()=>{a("speedtest"),Ye(A.nodeName,1)},children:"\u5355\u7EBF\u7A0B\u6D4B\u901F"}),(0,e.jsx)("button",{className:"speed-test",onClick:()=>{a("speedtest"),Ye(A.nodeName,8)},children:"8 \u7EBF\u7A0B\u6D4B\u901F"}),(0,e.jsxs)("button",{className:o==="connections"?"active":"",onClick:()=>a(o==="connections"?null:"connections"),children:["\u8FDE\u63A5\u8BE6\u60C5 ",(0,e.jsx)("span",{children:w})]}),(0,e.jsxs)("button",{className:o==="mtcp"?"active":"",onClick:()=>a(o==="mtcp"?null:"mtcp"),children:["MTCP \u8FDE\u63A5 ",(0,e.jsxs)("span",{children:[F.filter(D=>D.direction==="up").length,"\xD7",F.filter(D=>D.direction==="down").length]})]}),(0,e.jsx)("button",{className:o==="mtcpconfig"?"active":"",onClick:()=>a(o==="mtcpconfig"?null:"mtcpconfig"),children:"MTCP \u8BBE\u7F6E"})]}),o==="connections"&&(0,e.jsx)(et,{links:b,routes:n}),o==="speedtest"&&(0,e.jsx)(nt,{nodeName:A.nodeName}),o==="mtcpconfig"&&(0,e.jsx)("div",{className:"vps-detail-section",children:(0,e.jsx)(at,{traffic:A,onSaved:me})}),o==="quality"&&(0,e.jsxs)("div",{className:"node-quality-details",children:[(0,e.jsx)(Ne,{title:`${A.hostName} \xB7 \u8282\u70B9\u901F\u5EA6`,up:U.up,down:U.down}),(0,e.jsx)(rt,{name:A.hostName,history:N})]}),o==="mtcp"&&(0,e.jsxs)("div",{className:"vps-detail-section",children:[(0,e.jsxs)("div",{className:"session-ip-row",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px 10px",fontSize:"0.85em",color:"#555",marginTop:"4px"},children:[(0,e.jsx)("span",{children:"\u4F1A\u8BDD IP:"}),m.length?m.map(([D,Y])=>(0,e.jsxs)("span",{style:{padding:"1px 6px",borderRadius:"4px",backgroundColor:"#e9ecef"},children:[D,typeof Y=="number"?` \xD7 ${Y}`:` ${Y}`]},D)):(0,e.jsx)("span",{children:"\u65E0"})]}),F.length>0?(0,e.jsx)(_e,{links:F}):(0,e.jsx)("div",{className:"vps-empty-detail",children:"\u6682\u65E0 MTCP v2 \u8FDE\u63A5"})]})]})})});function et({links:r,routes:t}){if(!r.length)return(0,e.jsx)("div",{className:"vps-detail-section vps-empty-detail",children:"\u8FD9\u4E2A\u8282\u70B9\u5F53\u524D\u6CA1\u6709\u4E1A\u52A1\u8FDE\u63A5"});const A=Array.from(r.reduce((n,o)=>{const a=o.routeName||"\u672A\u547D\u540D\u8DEF\u7531";return n.has(a)||n.set(a,[]),n.get(a).push(o),n},new Map).entries());return(0,e.jsx)("div",{className:"vps-detail-section node-connection-list",children:A.map(([n,o])=>(0,e.jsx)(tt,{routeName:n,links:o,routes:t},n))})}function tt({routeName:r,links:t,routes:A}){const[n,o]=(0,c.useState)(!0),a=A.find(u=>u.name===r),i=t.filter(u=>!u.endTime).length,l=a?.outServers?.some(u=>u.name===t[0].ss)??!1,p=i?a?l?"\u5F53\u524D\u51FA\u53E3":"\u5DF2\u5207\u6362":"\u672A\u5339\u914D":"\u5DF2\u65AD\u5F00",d=i?a?l?"current":"changed":"missing":"ended";return(0,e.jsxs)("section",{className:`node-connection-group ${n?"expanded":"collapsed"}`,children:[(0,e.jsxs)("button",{className:"node-connection-group-header",onClick:()=>o(!n),"aria-expanded":n,children:[(0,e.jsx)("i",{className:"node-connection-group-chevron",children:n?"\u2304":"\u203A"}),(0,e.jsx)("strong",{children:r}),d!=="current"&&(0,e.jsx)("span",{className:`route-state ${d}`,children:p}),(0,e.jsxs)("b",{children:[i," / ",t.length," \u6761\u8FDE\u63A5"]})]}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"node-connection-head",children:[(0,e.jsx)("span",{children:"\u76EE\u6807\u5730\u5740"}),(0,e.jsx)("span",{children:"\u5EF6\u8FDF"}),(0,e.jsx)("span",{children:"\u5B9E\u65F6\u901F\u5EA6"}),(0,e.jsx)("span",{children:"\u7D2F\u8BA1\u6D41\u91CF"})]}),t.map(u=>(0,e.jsx)(At,{link:u},u.id))]})]})}function At({link:r}){const[t,A]=(0,c.useState)(!1);return(0,e.jsxs)("div",{className:`node-connection-item ${t?"expanded":""}`,children:[(0,e.jsxs)("button",{className:`node-connection-row ${r.endTime?"ended":""}`,onClick:()=>A(!t),"aria-expanded":t,title:t?"\u6536\u8D77\u901F\u5EA6\u8BE6\u60C5":"\u67E5\u770B\u901F\u5EA6\u8BE6\u60C5",children:[(0,e.jsxs)("span",{className:"node-connection-target",children:[(0,e.jsx)("i",{className:r.endTime?"offline":"online"}),(0,e.jsxs)("strong",{children:[r.addr,":",r.port]}),(0,e.jsxs)("small",{title:`\u5F00\u59CB\u65F6\u95F4\uFF1A${new Date(r.linkTime).toLocaleString("zh-CN")}`,children:["#",r.id," \xB7 ",r.remote," \xB7 ",r.endTime?"\u6301\u7EED":"\u5DF2\u8FDE\u63A5"," ",j(r.linkTime,r.endTime||Date.now())]})]}),(0,e.jsx)("span",{className:"node-connection-delay",children:r.delay>=9999?"\u8D85\u65F6":`${r.delay} ms`}),(0,e.jsxs)("span",{className:"node-connection-speed",children:[(0,e.jsxs)("b",{className:`speed-value ${y(r.up)}`,children:["\u2191 ",E(r.up),"/s"]}),(0,e.jsxs)("b",{className:`speed-value ${y(r.dn)}`,children:["\u2193 ",E(r.dn),"/s"]})]}),(0,e.jsxs)("span",{className:"node-connection-traffic",children:[(0,e.jsxs)("b",{children:["\u2191 ",$(r.allUp)]}),(0,e.jsxs)("b",{children:["\u2193 ",$(r.allDn)]}),(0,e.jsx)("i",{"aria-hidden":"true",children:t?"\u2303":"\u203A"})]})]}),t&&(0,e.jsx)(Ne,{title:`${r.addr}:${r.port} \xB7 \u8FDE\u63A5\u901F\u5EA6`,up:r.ups??[],down:r.dns??[],compact:!0})]})}function Ne({title:r,up:t,down:A,compact:n=!1}){const o=(0,c.useRef)(null),a=(0,c.useRef)(null),i=n?90:180,l=t.slice(-i),p=A.slice(-i),d=Math.max(l.length,p.length),u=l.at(-1)??0,g=p.at(-1)??0,h=Math.max(0,...l,...p);return(0,c.useEffect)(()=>{if(!o.current)return;a.current=B.init(o.current,{renderer:"canvas",useDirtyRect:!1}),a.current.setOption({animation:!1,tooltip:{trigger:"axis",backgroundColor:"#10263f",borderWidth:0,padding:[7,9],textStyle:{color:"#fff",fontSize:11},valueFormatter:m=>E(m)},legend:{top:5,right:10,itemWidth:15,itemHeight:7,textStyle:{color:"#8996a8",fontSize:10}},grid:{top:34,left:12,right:14,bottom:8,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisLabel:{color:"#8996a8",fontSize:9,hideOverlap:!0}},yAxis:{type:"value",min:0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}},axisLabel:{color:"#8996a8",fontSize:9,formatter:m=>E(m).replace("/s","")}},series:[{name:"\u4E0A\u4F20",type:"line",data:[],showSymbol:!1,smooth:.15,itemStyle:{color:"#20bd92"},lineStyle:{color:"#20bd92",width:2},areaStyle:{color:"rgba(32,189,146,.08)"}},{name:"\u4E0B\u8F7D",type:"line",data:[],showSymbol:!1,smooth:.15,itemStyle:{color:"#1f73c9"},lineStyle:{color:"#1f73c9",width:2},areaStyle:{color:"rgba(31,115,201,.08)"}}]});const s=()=>a.current?.resize();return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),a.current?.dispose(),a.current=null}},[r]),(0,c.useEffect)(()=>{if(!a.current)return;const s=Array.from({length:d},(m,F)=>new Date(Date.now()-(d-1-F)*1e3).toLocaleTimeString("zh-CN",{hour12:!1}));a.current.setOption({xAxis:{data:s},series:[{data:l},{data:p}]})},[t,A]),(0,e.jsxs)("section",{className:`vps-detail-section speed-history-detail vps-traffic-chart-card ${n?"compact":""}`,children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{children:r}),(0,e.jsxs)("p",{children:["\u6700\u8FD1 ",d," \u79D2\uFF0C\u6BCF\u79D2\u66F4\u65B0"]})]}),(0,e.jsxs)("div",{className:"speed-history-stats",children:[(0,e.jsxs)("span",{children:["\u4E0A\u4F20 ",(0,e.jsx)("b",{className:`speed-value ${y(u)}`,children:E(u)})]}),(0,e.jsxs)("span",{children:["\u4E0B\u8F7D ",(0,e.jsx)("b",{className:`speed-value ${y(g)}`,children:E(g)})]}),(0,e.jsxs)("span",{children:["\u5CF0\u503C ",(0,e.jsx)("b",{className:`speed-value ${y(h)}`,children:E(h)})]})]})]}),(0,e.jsx)("div",{ref:o,className:"speed-history-canvas"})]})}function rt({name:r,history:t}){const A=(0,c.useRef)(null),n=(0,c.useRef)(null),o=t.slice(-180),a=o.filter(d=>d>0&&d<9999).sort((d,u)=>d-u),i=a.length?Math.round(a.reduce((d,u)=>d+u,0)/a.length):0,l=a.length?a[Math.min(a.length-1,Math.floor(a.length*.95))]:0,p=o.at(-1)??9999;return(0,c.useEffect)(()=>{if(!A.current)return;n.current=B.init(A.current,{renderer:"canvas",useDirtyRect:!1}),n.current.setOption({tooltip:{trigger:"axis",backgroundColor:"#10263f",borderWidth:0,padding:[7,9],textStyle:{color:"#fff",fontSize:11},formatter:u=>`${u[0].name}<br/>\u5EF6\u8FDF ${u[0].value>=2e3?"\u8D85\u65F6":`${u[0].value} ms`}`},grid:{top:16,left:12,right:14,bottom:8,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisLabel:{color:"#8996a8",fontSize:9,hideOverlap:!0}},yAxis:{type:"value",min:0,max:2e3,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}},axisLabel:{color:"#8996a8",fontSize:9,formatter:u=>`${u}ms`}},series:[{name:"\u5EF6\u8FDF",type:"line",data:[],showSymbol:!1,smooth:.16,itemStyle:{color:"#6b98ff"},lineStyle:{color:"#6b98ff",width:2},areaStyle:{color:"rgba(107,152,255,.10)"},markLine:{silent:!0,symbol:"none",data:[{yAxis:500}],lineStyle:{color:"rgba(229,155,34,.55)",type:"dashed"},label:{show:!1}}}]});const d=()=>n.current?.resize();return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d),n.current?.dispose(),n.current=null}},[r]),(0,c.useEffect)(()=>{if(!n.current)return;const d=o.map(s=>s>=9999?2e3:s),u=o.map((s,m)=>new Date(Date.now()-(o.length-1-m)*1e3).toLocaleTimeString("zh-CN",{hour12:!1})),g=Math.max(100,...d),h=Math.min(2e3,Math.max(100,Math.ceil(g*1.2/50)*50));n.current.setOption({xAxis:{data:u},yAxis:{max:h},series:[{data:d}]})},[t]),(0,e.jsxs)("section",{className:"vps-detail-section node-latency-detail vps-traffic-chart-card",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{children:[r," \xB7 \u5EF6\u8FDF\u5386\u53F2"]}),(0,e.jsxs)("p",{children:["\u6700\u8FD1 ",o.length," \u4E2A\u63A2\u6D4B\u6837\u672C\uFF0C\u865A\u7EBF\u4E3A 500 ms"]})]}),(0,e.jsxs)("div",{className:"node-latency-stats",children:[(0,e.jsxs)("span",{children:["\u5F53\u524D ",(0,e.jsx)("b",{children:p>=9999?"\u8D85\u65F6":`${p} ms`})]}),(0,e.jsxs)("span",{children:["\u5E73\u5747 ",(0,e.jsx)("b",{children:i?`${i} ms`:"--"})]}),(0,e.jsxs)("span",{children:["P95 ",(0,e.jsx)("b",{children:l?`${l} ms`:"--"})]})]})]}),(0,e.jsx)("div",{ref:A,className:"node-latency-detail-canvas"})]})}function $(r){const t=["B","KB","MB","GB","TB"];let A=Math.max(0,Number(r)||0),n=0;for(;A>=1024&&n<t.length-1;)A/=1024,n++;const o=A>=100?0:A>=10?1:2;return`${A.toFixed(o).replace(/\.0+$|(?<=\.[0-9])0$/,"")} ${t[n]}`}function We(r){return $(Math.max(0,r)*1024**3)}function qe({percent:r}){const t=Math.min(100,Math.max(0,r||0)),A=t>=90?"#e23d4f":t>=70?"#e59b22":"#10a276";return(0,e.jsx)("span",{className:"vps-usage-meter",children:(0,e.jsx)("i",{style:{width:`${t}%`,backgroundColor:A}})})}async function Ye(r,t){await fetch(`${re}speed_test/${encodeURIComponent(r)}/${t}`)}function nt({nodeName:r}){const[t,A]=(0,c.useState)();if((0,c.useEffect)(()=>{let l=!1;const p=async()=>{try{const u=await(await fetch(`${re}speed_test/status`)).json();l||A(u.find(g=>g.node===r))}catch{}};p();const d=setInterval(p,1e3);return()=>{l=!0,clearInterval(d)}},[r]),!t)return(0,e.jsx)("div",{className:"speed-test-detail empty",children:"\u6B63\u5728\u7B49\u5F85\u6D4B\u901F\u6570\u636E\u2026"});const n=t.samples??[],o=l=>l.length?l.reduce((p,d)=>p+d,0)/l.length:0,a=n.at(-1)??0,i=Math.max(0,...n);return(0,e.jsxs)("section",{className:"speed-test-detail",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("strong",{children:[t.threads," \u7EBF\u7A0B\u6D4B\u901F"]}),(0,e.jsx)("small",{children:t.state==="running"?`\u7B2C ${t.elapsedSeconds}/10 \u79D2`:t.state==="completed"?"\u6D4B\u901F\u5B8C\u6210":"\u6D4B\u901F\u5931\u8D25"})]}),(0,e.jsx)("span",{className:`speed-test-state ${t.state}`,children:t.state==="running"?"\u8FDB\u884C\u4E2D":t.state==="completed"?"\u5DF2\u5B8C\u6210":"\u5931\u8D25"})]}),(0,e.jsx)("div",{className:"speed-test-progress",children:(0,e.jsx)("i",{style:{width:`${Math.min(100,t.elapsedSeconds*10)}%`}})}),(0,e.jsxs)("div",{className:"speed-test-summary",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5F53\u524D"}),(0,e.jsxs)("strong",{children:[E(a),"/s"]}),(0,e.jsxs)("em",{children:[(a*8/1e6).toFixed(1)," Mbps"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5E73\u5747"}),(0,e.jsxs)("strong",{children:[E(o(n)),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5CF0\u503C"}),(0,e.jsxs)("strong",{children:[E(i),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5DF2\u4F20\u8F93"}),(0,e.jsx)("strong",{children:E(t.totalBytes)})]})]}),(0,e.jsx)("div",{className:"speed-test-bars",children:Array.from({length:10},(l,p)=>(0,e.jsxs)("span",{children:[(0,e.jsx)("i",{style:{height:`${i?(n[p]??0)/i*100:0}%`}}),(0,e.jsxs)("small",{children:[p+1,"s"]})]},p))}),t.threadSamples.length>1&&(0,e.jsxs)("div",{className:"speed-test-threads",children:[(0,e.jsxs)("div",{className:"head",children:[(0,e.jsx)("span",{children:"\u7EBF\u7A0B"}),(0,e.jsx)("span",{children:"\u5F53\u524D"}),(0,e.jsx)("span",{children:"\u5E73\u5747"}),(0,e.jsx)("span",{children:"\u5CF0\u503C"})]}),t.threadSamples.map((l,p)=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("span",{children:["#",p+1]}),(0,e.jsxs)("span",{children:[E(l.at(-1)??0),"/s"]}),(0,e.jsxs)("span",{children:[E(o(l)),"/s"]}),(0,e.jsxs)("span",{children:[E(Math.max(0,...l)),"/s"]})]},p))]}),t.error&&(0,e.jsx)("p",{className:"speed-test-error",children:t.error})]})}function it({traffic:r,onSaved:t}){const A=Le(r),n=`${A.day}/${A.hour}/${A.minute}/${A.timezoneOffsetMinutes}`,[o,a]=(0,c.useState)(A.day),[i,l]=(0,c.useState)(ye(A)),[p,d]=(0,c.useState)("idle"),[u,g]=(0,c.useState)(""),h=(0,c.useRef)(!1),s=(0,c.useRef)(!1);(0,c.useEffect)(()=>{h.current||s.current||(a(A.day),l(ye(A)))},[n]);const m=()=>{h.current=!0,d("idle"),g("")},F=async()=>{const[b,w]=i.split(":").map(Number);if(!Number.isInteger(b)||!Number.isInteger(w)){g("\u91CD\u7F6E\u65F6\u95F4\u683C\u5F0F\u65E0\u6548"),d("error");return}h.current=!1,s.current=!0,g(""),d("saving");try{const N=await fetch(`${re}vps/${encodeURIComponent(r.nodeName)}/reset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({day:o,hour:b,minute:w,timezoneOffsetMinutes:A.timezoneOffsetMinutes})}),Q=await ot(N);if(!N.ok||!Q.ok)throw new Error(Q.error||`\u4FDD\u5B58\u5931\u8D25\uFF08HTTP ${N.status}\uFF09`);const P=Q.resetConfig??{day:o,hour:b,minute:w,timezoneOffsetMinutes:A.timezoneOffsetMinutes};ke.set(r.nodeName,{config:P,expiresAt:Date.now()+6e4}),(0,C.runInAction)(()=>Ae.set(Ae.get().map(U=>U.nodeName===r.nodeName?Me(U,P):U))),a(P.day),l(ye(P)),d("saved"),t()}catch(N){h.current=!0,g(N instanceof Error?N.message:String(N)),d("error")}finally{s.current=!1}};return(0,e.jsxs)("div",{className:"traffic-reset-editor",children:[(0,e.jsx)("span",{children:"\u6BCF\u6708"}),(0,e.jsx)("input",{"aria-label":"\u6D41\u91CF\u91CD\u7F6E\u65E5\u671F",type:"number",min:"1",max:"31",value:o,onFocus:m,onChange:b=>{m(),a(Math.max(1,Math.min(31,Number(b.target.value))))}}),(0,e.jsx)("span",{children:"\u65E5"}),(0,e.jsx)("input",{"aria-label":"\u6D41\u91CF\u91CD\u7F6E\u65F6\u95F4",type:"time",value:i,onFocus:m,onChange:b=>{m(),l(b.target.value)}}),(0,e.jsx)("button",{disabled:p==="saving",onClick:F,children:p==="saving"?"\u4FDD\u5B58\u4E2D":"\u4FDD\u5B58\u91CD\u7F6E\u65F6\u95F4"}),p==="saved"&&(0,e.jsx)("small",{className:"success",children:"\u5DF2\u4FDD\u5B58\u5230\u8FDC\u7AEF"}),p==="error"&&(0,e.jsxs)("small",{className:"error",children:["\u4FDD\u5B58\u5931\u8D25\uFF1A",u||"\u672A\u77E5\u9519\u8BEF"]})]})}function Le(r){return r.traffic.precise?.resetConfig??{day:Number(r.resetDay)||1,hour:r.resetHour??0,minute:r.resetMinute??0,timezoneOffsetMinutes:r.timezoneOffsetMinutes??-new Date().getTimezoneOffset()}}function ye(r){return`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}`}function Me(r,t){return{...r,resetDay:String(t.day).padStart(2,"0"),resetHour:t.hour,resetMinute:t.minute,timezoneOffsetMinutes:t.timezoneOffsetMinutes,traffic:{...r.traffic,precise:r.traffic.precise?{...r.traffic.precise,resetConfig:t}:r.traffic.precise}}}async function ot(r){const t=await r.text();if(!t)return{ok:r.ok};try{return JSON.parse(t)}catch{return{ok:r.ok,error:t}}}function at({traffic:r,onSaved:t}){const A=r.mtcpConfig??{mtcpUpLinks:8,mtcpDownLinks:8,mtcpMaxUpLinks:8,mtcpMaxDownLinks:8,mtcpConnectionRotateIntervalMs:0,mtcpAckTimeoutMinMs:500,mtcpProbeDurationMs:2e3,mtcpLowSpeedBytesPerSecond:1048576,mtcpLowSpeedWindows:4},[n,o]=(0,c.useState)(A),[a,i]=(0,c.useState)("idle"),l=[["mtcpUpLinks","\u57FA\u7840\u4E0A\u884C\u8FDE\u63A5\u6570(1-16)"],["mtcpDownLinks","\u57FA\u7840\u4E0B\u884C\u8FDE\u63A5\u6570(1-16)"],["mtcpMaxUpLinks","\u6700\u5927\u4E0A\u884C\u8FDE\u63A5\u6570(1-16)"],["mtcpMaxDownLinks","\u6700\u5927\u4E0B\u884C\u8FDE\u63A5\u6570(1-16)"],["mtcpConnectionRotateIntervalMs","\u8F6E\u6362\u95F4\u9694(ms\uFF0C0\u5173\u95ED)"],["mtcpAckTimeoutMinMs","ACK\u6700\u4F4E\u8D85\u65F6(ms)"],["mtcpProbeDurationMs","\u63A2\u9488\u89C2\u5BDF(ms)"],["mtcpLowSpeedBytesPerSecond","\u4F4E\u901F\u9608\u503C(KB/s)"],["mtcpLowSpeedWindows","\u4F4E\u901F\u8FDE\u7EED\u7A97\u53E3"]],p=async()=>{i("saving");try{if(!(await fetch(`${re}vps/${encodeURIComponent(r.nodeName)}/mtcp-config`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)})).ok)throw new Error;i("saved"),t()}catch{i("error")}};return(0,e.jsxs)("div",{className:"mtcp-config-editor",children:[(0,e.jsx)("strong",{children:"MTCP \u8C03\u4F18"}),l.map(([d,u])=>{const g=d==="mtcpLowSpeedBytesPerSecond"?1024:1;return(0,e.jsxs)("label",{children:[u,(0,e.jsx)("input",{type:"number",value:n[d]/g,onChange:h=>o({...n,[d]:(Number(h.target.value)||0)*g})})]},d)}),(0,e.jsx)("button",{disabled:a==="saving",onClick:p,children:a==="saving"?"\u4FDD\u5B58\u4E2D":"\u4FDD\u5B58\u914D\u7F6E"}),a==="saved"&&(0,e.jsx)("small",{className:"success",children:"\u5DF2\u4FDD\u5B58\uFF0CLocal \u5C06\u81EA\u52A8\u70ED\u66F4\u65B0"}),a==="error"&&(0,e.jsx)("small",{className:"error",children:"\u4FDD\u5B58\u5931\u8D25"})]})}function _e({links:r}){const[t,A]=(0,c.useState)(null),[n]=(0,f.useAutoAnimate)(H),[o]=(0,f.useAutoAnimate)(H),a=(i,l)=>{const p=r.filter(s=>s.direction===i);if(!p.length)return null;const d=new Set(p.flatMap(s=>s.rotationOfId?[s.rotationOfId]:[])),u=p.filter(s=>!d.has(s.id)).sort((s,m)=>(s.rotationOfId??s.id)-(m.rotationOfId??m.id)),g=i==="up"?"#0d6efd":"#198754",h=u.reduce((s,m)=>s+(Number(m.speed)||0),0);return(0,e.jsxs)("div",{className:`mtcp-direction ${i}`,style:{flex:"1 1 360px",minWidth:0},children:[(0,e.jsxs)("div",{className:"mtcp-direction-title",style:{display:"grid",gridTemplateColumns:"1fr auto auto",alignItems:"baseline",gap:8,marginBottom:7},children:[(0,e.jsx)("span",{style:{fontWeight:700},children:l}),(0,e.jsxs)("span",{style:{color:"#6c757d",fontSize:"0.8em"},children:[u.length," \u6761"]}),(0,e.jsxs)("strong",{className:`speed-value ${y(h)}`,children:[E(h),"/s"]})]}),(0,e.jsx)("div",{ref:i==="up"?n:o,className:"mtcp-link-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:6},children:u.map(s=>{const m=`${s.clientIp}-${s.session}-${i}-${s.rotationOfId??s.id}`,F=s.lastTimeoutAt>0&&Date.now()-s.lastTimeoutAt<6e4,b=!!s.rotationOfId&&s.probe,w=!b&&!!s.rotationCompletedAt&&Date.now()-s.rotationCompletedAt<5e3,N=b?s.rotationOfId:s.id,Q=s.suspect?"\u5F02\u5E38":b?"\u8F6E\u6362\u4E2D":w?"\u5DF2\u8F6E\u6362":s.probe?"\u63A2\u9488":s.probeQueued?`\u5F85\u63A2\u9488 #${s.probeQueuePosition||1}`:F?"\u521A\u521A\u8D85\u65F6":s.adaptive?"\u6269\u5BB9":"\u57FA\u7840",P=s.suspect?"#dc3545":b||w?"#0d9b78":s.probe||s.probeQueued?"#fd7e14":F?"#e67e22":"#198754",U=s.admissionLimitBytes>0?Math.min(100,Math.round(s.admissionBytes/s.admissionLimitBytes*100)):100,D=[s.remoteAddress,s.remotePort].filter(Boolean).join(":")||"--";return(0,e.jsxs)("div",{tabIndex:0,role:"button","aria-expanded":t===m,"aria-label":`\u8FDE\u63A5 ${N}\uFF0C${Q}\uFF0C\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5`,onClick:()=>A(t===m?null:m),onKeyDown:Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),A(t===m?null:m))},className:`mtcp-link-card ${t===m?"detail-open":""} ${s.suspect?"suspect":F?"recent-timeout":""} ${b?"rotating":""} ${w?"rotation-complete":""}`,style:{border:`1px solid ${s.suspect?"#f1aeb5":"#dee2e6"}`,borderRadius:7,background:"#fff",padding:"6px 8px",boxShadow:"0 1px 2px rgba(0,0,0,.05)"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[(0,e.jsxs)("span",{className:"mtcp-link-identity",children:[(0,e.jsxs)("strong",{children:["\u8FDE\u63A5 #",N]}),(0,e.jsxs)("small",{children:["\u7269\u7406\u5E8F\u53F7 #",s.connectionSequence??"--"]})]}),(0,e.jsx)("span",{className:`mtcp-link-state ${b?"rotating-state":""} ${w?"completed-state":""}`,style:{color:P,fontSize:"0.78em"},children:Q})]}),(0,e.jsxs)("div",{className:`speed-value ${y(s.speed)}`,style:{fontSize:"1.08em",fontWeight:700,margin:"2px 0"},children:[E(s.speed),"/s"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",color:"#6c757d",fontSize:"0.75em"},children:[(0,e.jsx)("span",{children:s.direction==="up"?"\u672C\u7AEF\u63A5\u6536":`ACK ${s.ackRttMs?`${s.ackRttMs.toFixed(1)}ms`:"\u7B49\u5F85\u6837\u672C"}`}),(0,e.jsxs)("span",{children:["\u5728\u9014 ",E(s.inflightBytes)]})]}),(s.timeoutCount>0||s.retransmitCount>0)&&(0,e.jsxs)("div",{className:"mtcp-link-alerts",children:[(0,e.jsxs)("span",{children:["\u8D85\u65F6 ",s.timeoutCount]}),(0,e.jsxs)("span",{children:["\u91CD\u4F20 ",s.retransmitCount]})]}),(0,e.jsx)(st,{values:s.speedHistory??[],color:g}),U<100&&!s.rotationOfId&&(0,e.jsx)("div",{title:`\u6E10\u8FDB\u51C6\u5165 ${U}%`,style:{height:3,background:"#e9ecef",borderRadius:3,marginTop:5,overflow:"hidden"},children:(0,e.jsx)("div",{style:{width:`${U}%`,height:"100%",background:g}})}),(0,e.jsxs)("div",{className:"mtcp-link-hover-detail",children:[(0,e.jsxs)("strong",{children:["\u8FDE\u63A5 #",s.id]}),(0,e.jsxs)("dl",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u5DF2\u8FDE\u63A5"}),(0,e.jsx)("dd",{children:s.connectedAt?j(s.connectedAt):"--"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u7269\u7406\u8FDE\u63A5\u5E8F\u53F7"}),(0,e.jsxs)("dd",{children:["#",s.connectionSequence??"--"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u7D2F\u8BA1\u4E1A\u52A1\u6D41\u91CF"}),(0,e.jsx)("dd",{children:E(s.totalBytes??0)})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u4E1A\u52A1\u5E27\u8D85\u65F6"}),(0,e.jsx)("dd",{className:s.timeoutCount?"warn":"",children:s.timeoutCount??0})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u6362\u8DEF\u91CD\u4F20"}),(0,e.jsx)("dd",{className:s.retransmitCount?"warn":"",children:s.retransmitCount??0})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u63A2\u9488\u961F\u5217"}),(0,e.jsx)("dd",{children:s.probeQueued?`\u7B2C ${s.probeQueuePosition||1} \u4F4D`:s.probe?"\u89C2\u5BDF\u4E2D":"--"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u5F85\u786E\u8BA4\u5E27"}),(0,e.jsxs)("dd",{children:[s.pendingFrames??0," \xB7 ",E(s.inflightBytes??0)]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"Socket\u961F\u5217"}),(0,e.jsx)("dd",{children:E(s.writableBytes??0)})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"ACK\u6837\u672C"}),(0,e.jsx)("dd",{children:s.direction==="up"?"\u672C\u7AEF\u4E0D\u91C7\u6837":`${s.ackSamples??0} \xB7 \u6296\u52A8 ${s.ackRttVarMs?.toFixed(1)??"0.0"}ms`})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("dt",{children:"\u5BF9\u7AEF"}),(0,e.jsx)("dd",{children:D})]})]})]})]},m)})})]})};return(0,e.jsxs)("div",{className:"mtcp-pool",style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:7,padding:8,borderRadius:8,background:"#eef2f6"},children:[a("up","\u2191 \u4E0A\u884C\u8FDE\u63A5"),a("down","\u2193 \u4E0B\u884C\u8FDE\u63A5")]})}function st({values:r,color:t}){const[A,n]=(0,c.useState)(null),o=r.slice(-30);if(o.length<2)return(0,e.jsx)("div",{className:"mtcp-link-spark empty"});const a=Math.max(1,...o),i=A===null?0:A/(o.length-1)*120,l=A===null?0:22-o[A]/a*19;return(0,e.jsxs)("div",{className:"mtcp-link-spark",children:[(0,e.jsxs)("svg",{viewBox:"0 0 120 24",preserveAspectRatio:"none","aria-label":"\u8FDE\u63A5\u6700\u8FD1\u901F\u5EA6",onMouseMove:p=>{const d=p.currentTarget.getBoundingClientRect(),u=Math.min(1,Math.max(0,(p.clientX-d.left)/Math.max(1,d.width)));n(Math.round(u*(o.length-1)))},onMouseLeave:()=>n(null),children:[(0,e.jsx)("polyline",{points:o.map((p,d)=>`${d/(o.length-1)*120},${22-p/a*19}`).join(" "),style:{stroke:t}}),A!==null&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{className:"mtcp-spark-guide",x1:i,x2:i,y1:"1",y2:"23"}),(0,e.jsx)("circle",{className:"mtcp-spark-point",cx:i,cy:l,r:"2.2",style:{fill:t}})]})]}),A!==null&&(0,e.jsxs)("span",{className:"mtcp-spark-tooltip",style:{left:`${i/120*100}%`},children:[E(o[A]),"/s"]})]})}const lt=(0,x.observer)(function(){const[t,A]=(0,c.useState)(!1),n=Ae.get().filter(i=>(i.status?.mtcp2Links?.length??0)>0),o=n.flatMap(i=>i.status?.mtcp2Links??[]),a=o.filter(i=>i.suspect||i.lastTimeoutAt>0&&Date.now()-i.lastTimeoutAt<6e4);return(0,e.jsxs)("section",{className:"mtcp-diagnostics panel-card",children:[(0,e.jsxs)("button",{className:"mtcp-diagnostics-header",onClick:()=>A(!t),children:[(0,e.jsx)("span",{className:"speed-panel-chevron",children:t?I():v()}),(0,e.jsxs)("span",{children:[(0,e.jsx)("strong",{children:"MTCP \u7269\u7406\u8FDE\u63A5\u8BCA\u65AD"}),(0,e.jsxs)("small",{children:[n.length," \u4E2A\u8282\u70B9 \xB7 ",o.length," \u6761\u8FDE\u63A5 \xB7 ",a.length," \u6761\u8FD1\u671F\u5F02\u5E38 \xB7 \u7D2F\u8BA1 ",o.reduce((i,l)=>i+(l.timeoutCount||0),0)," \u6B21\u8D85\u65F6"]})]}),(0,e.jsx)("b",{children:t?"\u6536\u8D77":"\u67E5\u770B\u8FDE\u63A5"})]}),t&&(0,e.jsx)("div",{className:"mtcp-diagnostic-content",children:n.map(i=>(0,e.jsx)(dt,{traffic:i},i.nodeName))})]})});function dt({traffic:r}){const[t,A]=(0,c.useState)(!1),n=r.status?.mtcp2Links??[],o=n.filter(u=>u.direction==="up").length,a=n.filter(u=>u.direction==="down").length,i=n.some(u=>u.suspect||u.lastTimeoutAt>0&&Date.now()-u.lastTimeoutAt<6e4),l=Ce.get()[r.hostName]?.at(-1)??9999,p=l<200?"good":l<500?"warn":"bad",d=r.status?.speed??{rx:0,tx:0};return(0,e.jsxs)("div",{className:"mtcp-diagnostic-node",children:[(0,e.jsxs)("button",{onClick:()=>A(!t),"aria-expanded":t,children:[(0,e.jsxs)("span",{className:"mtcp-diagnostic-node-name",children:[(0,e.jsx)("strong",{children:r.hostName}),(0,e.jsxs)("small",{children:[o," \u4E0A\u884C \xB7 ",a," \u4E0B\u884C \xB7 ",n.reduce((u,g)=>u+(g.timeoutCount||0),0)," \u6B21\u8D85\u65F6"]})]}),(0,e.jsxs)("span",{className:`mtcp-diagnostic-metric latency ${p}`,children:[(0,e.jsx)("small",{children:"\u5EF6\u8FDF"}),(0,e.jsx)("strong",{children:l>=9999?"\u8D85\u65F6":`${Math.round(l)} ms`})]}),(0,e.jsxs)("span",{className:"mtcp-diagnostic-metric speed",children:[(0,e.jsx)("small",{children:"\u5B9E\u65F6\u7F51\u901F"}),(0,e.jsxs)("strong",{children:[(0,e.jsxs)("i",{className:`speed-value ${y(d.rx)}`,children:["\u2191 ",E(d.rx),"/s"]}),(0,e.jsxs)("i",{className:`speed-value ${y(d.tx)}`,children:["\u2193 ",E(d.tx),"/s"]})]})]}),(0,e.jsx)("b",{className:i?"warn":"",children:i?"\u9700\u5173\u6CE8":"\u6B63\u5E38"})]}),t&&(0,e.jsx)(_e,{links:n})]})}function pt(r){const t=Math.floor(r/86400),A=Math.floor(r%(3600*24)/3600),n=Math.floor(r%3600/60),o=Math.floor(r%60),a=t>0?`${t}\u5929 `:"",i=A>0?`${A}\u5C0F\u65F6 `:"",l=n>0?`${n}\u5206\u949F `:"",p=o>0?`${o}\u79D2`:"0\u79D2";return a+i+l+p}const ct=(0,x.observer)(function(t){const{traffic:A}=t,n=A.traffic.precise?.day.map(i=>({label:new Date(i.start).toLocaleDateString([],{month:"2-digit",day:"2-digit"}),up:i.up/1024**3,dn:i.dn/1024**3}))??A.traffic.day.map(i=>({label:i.date.substring(5),up:i.rx,dn:i.tx})),o=(0,c.useRef)(null),a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(o.current&&!a.current){a.current=B.init(o.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const i={tooltip:{trigger:"axis",backgroundColor:"#10263f",borderWidth:0,padding:[7,9],textStyle:{color:"#fff",fontSize:11},axisPointer:{type:"line",lineStyle:{color:"#9aa8ba",type:"dashed"}},formatter:function(l){const p=l[0].name,d=l[0].value.toFixed(2),u=l[1].value.toFixed(2);return`${p}<br/><span style="color:#1bc394">\u25CF</span> \u4E0A\u4F20 ${d} GB<br/><span style="color:#106dca">\u25CF</span> \u4E0B\u8F7D ${u} GB`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"],right:8,top:3,icon:"circle",itemWidth:9,itemHeight:9,textStyle:{color:"#6f7f93",fontSize:10}},grid:{top:38,left:10,right:12,bottom:8,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:n.map(l=>l.label),axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisTick:{show:!1},axisLabel:{color:"#8996a8",fontSize:9,hideOverlap:!0}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)",width:1}},axisLabel:{color:"#8996a8",fontSize:9,formatter:l=>`${l.toFixed(l<10?1:0)}G`}},series:[{name:"\u4E0A\u4F20",type:"line",data:n.map(l=>l.up),showSymbol:!1,smooth:.18,itemStyle:{color:"#1bc394"},lineStyle:{color:"#1bc394",width:2},areaStyle:{color:"rgba(27,195,148,.06)"}},{name:"\u4E0B\u8F7D",type:"line",data:n.map(l=>l.dn),showSymbol:!1,smooth:.18,itemStyle:{color:"#106dca"},lineStyle:{color:"#106dca",width:2},areaStyle:{color:"rgba(16,109,202,.07)"}}],backgroundColor:"transparent",textStyle:{color:"#56677c"}};a.current.setOption(i)}return a.current,()=>{a.current&&(a.current.dispose(),a.current=null)}},[]),(0,c.useEffect)(()=>{const i=()=>{a.current&&a.current.resize()};return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)}},[]),(0,e.jsxs)("section",{className:"vps-traffic-chart-card",onMouseDown:i=>i.stopPropagation(),children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{children:"\u6BCF\u65E5\u6D41\u91CF"}),(0,e.jsx)("p",{children:"\u6309\u81EA\u7136\u65E5\u7EDF\u8BA1\u4E0A\u4F20\u4E0E\u4E0B\u8F7D"})]}),(0,e.jsx)("span",{children:"GB"})]}),(0,e.jsx)("div",{ref:o,className:"vps-traffic-chart-canvas"})]})}),ut=(0,x.observer)(function(t){const{traffic:A}=t,n=A.traffic.precise?.hour.slice(-24).map(i=>({label:new Date(i.start).toLocaleString([],{month:"2-digit",day:"2-digit",hour:"2-digit"}),up:i.up/1024**2,dn:i.dn/1024**2}))??A.traffic.hour.map(i=>({label:i.hour.toString().padStart(2,"0")+":00",up:i.rx,dn:i.tx})),o=(0,c.useRef)(null),a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(o.current&&!a.current){a.current=B.init(o.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const i={tooltip:{trigger:"axis",backgroundColor:"#10263f",borderWidth:0,padding:[7,9],textStyle:{color:"#fff",fontSize:11},axisPointer:{type:"line",lineStyle:{color:"#9aa8ba",type:"dashed"}},formatter:function(l){const p=l[0].name,d=$(l[0].value*1024**2),u=$(l[1].value*1024**2);return`${p}<br/><span style="color:#1bc394">\u25CF</span> \u4E0A\u4F20 ${d}<br/><span style="color:#106dca">\u25CF</span> \u4E0B\u8F7D ${u}`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"],right:8,top:3,icon:"circle",itemWidth:9,itemHeight:9,textStyle:{color:"#6f7f93",fontSize:10}},grid:{top:38,left:10,right:12,bottom:8,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:n.map(l=>l.label),axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisTick:{show:!1},axisLabel:{color:"#8996a8",fontSize:9,hideOverlap:!0}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)",width:1}},axisLabel:{color:"#8996a8",fontSize:9,formatter:function(l){return l>=1024?`${(l/1024).toFixed(1)}G`:`${l.toFixed(0)}M`}}},series:[{name:"\u4E0A\u4F20",type:"line",data:n.map(l=>l.up),showSymbol:!1,smooth:.18,itemStyle:{color:"#1bc394"},lineStyle:{color:"#1bc394",width:2},areaStyle:{color:"rgba(27,195,148,.06)"}},{name:"\u4E0B\u8F7D",type:"line",data:n.map(l=>l.dn),showSymbol:!1,smooth:.18,itemStyle:{color:"#106dca"},lineStyle:{color:"#106dca",width:2},areaStyle:{color:"rgba(16,109,202,.07)"}}],backgroundColor:"transparent",textStyle:{color:"#56677c"}};a.current.setOption(i)}return()=>{a.current&&(a.current.dispose(),a.current=null)}},[]),(0,c.useEffect)(()=>{const i=()=>{a.current&&a.current.resize()};return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)}},[]),(0,e.jsxs)("section",{className:"vps-traffic-chart-card",onMouseDown:i=>i.stopPropagation(),children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{children:"24 \u5C0F\u65F6\u6D41\u91CF"}),(0,e.jsx)("p",{children:"\u6700\u8FD1 24 \u5C0F\u65F6\u4E0A\u4F20\u4E0E\u4E0B\u8F7D\u8D8B\u52BF"})]}),(0,e.jsx)("span",{children:"MB / GB"})]}),(0,e.jsx)("div",{ref:o,className:"vps-traffic-chart-canvas"})]})});function mt(r="07",t=!1){const A=new Date,n=t?A.getUTCDate():A.getDate(),o=parseInt(r);return n<o?o-n:new Date(A.getFullYear(),A.getMonth()+1,0).getDate()-n+o}const Et=(0,x.observer)(function(t){const{usedTraffic:A,totalTraffic:n}=t,o=n>0?Math.min(100,Math.max(0,A/n*100)):0,a=Math.max(0,n-A),i=a/Math.max(1,t.remDay);return(0,e.jsxs)("button",{className:`vps-traffic-progress ${t.expanded?"active":""}`,onClick:t.onToggle,"aria-expanded":t.expanded,title:"\u67E5\u770B\u6D41\u91CF\u8BE6\u60C5",children:[(0,e.jsxs)("div",{className:"vps-traffic-progress-labels",children:[(0,e.jsxs)("span",{children:["\u5DF2\u7528 ",(0,e.jsxs)("strong",{children:[A.toFixed(1)," GB"]})," / ",n," GB"]}),(0,e.jsxs)("span",{children:["\u5269\u4F59 ",(0,e.jsxs)("strong",{children:[a.toFixed(1)," GB"]})," \xB7 ",t.remDay," \u5929"]}),(0,e.jsxs)("span",{children:["\u9884\u8BA1\u6BCF\u65E5\u53EF\u7528 ",(0,e.jsxs)("strong",{children:[i.toFixed(1)," GB"]}),(0,e.jsx)("i",{children:t.expanded?"\u6536\u8D77":"\u8BE6\u60C5"})]})]}),(0,e.jsx)("div",{className:"vps-traffic-progress-track",children:(0,e.jsx)("div",{style:{width:`${o}%`,backgroundColor:o>90?"#e23d4f":o>70?"#e59b22":"#10a276"}})})]})});var q=(r=>(r[r.\u987A\u5E8F=0]="\u987A\u5E8F",r[r.\u5EF6\u8FDF=1]="\u5EF6\u8FDF",r[r.\u4E0A\u4F20\u603B\u91CF=2]="\u4E0A\u4F20\u603B\u91CF",r[r.\u4E0B\u8F7D\u603B\u91CF=3]="\u4E0B\u8F7D\u603B\u91CF",r[r.\u4E0A\u4F20\u901F\u5EA6=4]="\u4E0A\u4F20\u901F\u5EA6",r[r.\u4E0B\u8F7D\u901F\u5EA6=5]="\u4E0B\u8F7D\u901F\u5EA6",r[r.\u5B9E\u65F6\u901F\u5EA6=6]="\u5B9E\u65F6\u901F\u5EA6",r[r.\u7D2F\u8BA1\u6D41\u91CF=7]="\u7D2F\u8BA1\u6D41\u91CF",r))(q||{}),gt=z(72),Bt=z.n(gt),xt=z(825),ht=z.n(xt),ft=z(659),Ct=z.n(ft),bt=z(56),kt=z.n(bt),wt=z(540),vt=z.n(wt),yt=z(113),Ft=z.n(yt),Ee=z(208),ne={};ne.styleTagTransform=Ft(),ne.setAttributes=kt(),ne.insert=Ct().bind(null,"head"),ne.domAPI=ht(),ne.insertStyleElement=vt();var Kt=Bt()(Ee.A,ne);const Jt=Ee.A&&Ee.A.locals?Ee.A.locals:void 0;(0,C.configure)({enforceActions:"never"});let ge=C.observable.box("\u83B7\u53D6\u5269\u4F59\u6D41\u91CF\u4E2D!"),V=C.observable.box([]),M=C.observable.box([]),X=C.observable.box([]),Qe=C.observable.box({}),ae=C.observable.box(!0),se=C.observable.box(!0),R=C.observable.box(!0),Te=C.observable.box(!1),Be=C.observable.box(!1),L=C.observable.box(0),ie=C.observable.box(!0),G=C.observable.box(0),K=C.observable.box(0);const xe=180;let Z=C.observable.box([]),ee=C.observable.box([]),he=C.observable.box({source:"qsocket-business-sqlite",generatedAt:0,nodes:{}});async function He(){try{const t=await(await fetch(T+"traffic_history")).json();(0,C.runInAction)(()=>he.set(t))}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u7CBE\u786E\u6D41\u91CF\u5386\u53F2")}}setInterval(He,5e3);let le=C.observable.box({up:0,dn:0}),$e={};async function Ue(){try{let t=(await(await fetch("https://ct.qcad.cc:5443/bwh")).text()).replaceAll("\u5269\u4F59\u6D41\u91CF:","");ge.set(t)}catch{ge.set("\u83B7\u53D6\u5931\u8D25")}}setInterval(Ue,60*1e3*5),Ue();let T="/";async function Pe(){try{let t=await(await fetch(T+"allspeed")).json();Z.set(t[0]),ee.set(t[1])}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u901F\u5EA6")}}Pe(),He(),document.addEventListener("visibilitychange",function(){document.visibilityState==="visible"&&Pe()});const Oe=async()=>{(0,C.runInAction)(async()=>{try{let a=await(await fetch(T+"status")).json();X.set(a.routes),Qe.set(a.preServer);let i=new Map;for(let d of a.server)d.linkCount=0,d.upspeed=0,d.dnspeed=0,i.set(d.name,d);if(Be.get()){let d=Object.groupBy(a.links,u=>u.remote);a.links=[];for(let u in d)a.links.push(...d[u])}for(let d of a.links){let u=i.get(d.ss);u&&(u.linkCount++,d.upOp===1&&(u.upspeed+=d.up),d.dnOp===1&&(u.dnspeed+=d.dn))}L.get()===q.\u987A\u5E8F||(L.get()===q.\u5EF6\u8FDF?a.links.sort((d,u)=>u.delay-d.delay):L.get()===q.\u4E0A\u4F20\u603B\u91CF?a.links.sort((d,u)=>u.up-d.up):L.get()===q.\u4E0B\u8F7D\u603B\u91CF?a.links.sort((d,u)=>u.dn-d.dn):L.get()===q.\u4E0A\u4F20\u901F\u5EA6?a.links.sort((d,u)=>u.up*u.upOp-d.up*d.upOp):L.get()===q.\u4E0B\u8F7D\u901F\u5EA6?a.links.sort((d,u)=>u.dn*u.dnOp-d.dn*d.dnOp):L.get()===q.\u5B9E\u65F6\u901F\u5EA6?a.links.sort((d,u)=>d.up*d.upOp+d.dn*d.dnOp-(u.up*u.upOp+u.dn*u.dnOp)):L.get()===q.\u7D2F\u8BA1\u6D41\u91CF&&a.links.sort((d,u)=>d.allUp+d.allDn-(u.allUp+u.allDn))),ie.get()&&a.links.reverse(),M.set(a.links),V.set(a.server);let l=0,p=0;for(let d in a.traffic)l+=a.traffic[d].up,p+=a.traffic[d].dn;le.set({up:l,dn:p}),$e=a.traffic}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u6570\u636E",T+"status")}});let t=await(await fetch(T+"speed")).json();G.set(t[0]),K.set(t[1]),document.title=`${E(G.get())}|${E(K.get())}`;let A=Z.get().concat(),n=ee.get().concat();A.push(G.get()),n.push(K.get()),A.length>180&&(A=A.slice(10)),n.length>180&&(n=n.slice(10)),Z.set(A),ee.set(n)};function jt(){let r=M.get();L.get()===q.\u987A\u5E8F?r.sort((t,A)=>t.id-A.id):L.get()===q.\u5EF6\u8FDF?r.sort((t,A)=>A.delay-t.delay):L.get()===q.\u4E0A\u4F20\u603B\u91CF?r.sort((t,A)=>A.up-t.up):L.get()===q.\u4E0B\u8F7D\u603B\u91CF?r.sort((t,A)=>A.dn-t.dn):L.get()===q.\u4E0A\u4F20\u901F\u5EA6?r.sort((t,A)=>A.up-t.up):L.get()===q.\u4E0B\u8F7D\u901F\u5EA6?r.sort((t,A)=>A.dn-t.dn):L.get()===q.\u5B9E\u65F6\u901F\u5EA6?r.sort((t,A)=>t.up*t.upOp+t.dn*t.dnOp-(A.up*A.upOp+A.dn*A.dnOp)):L.get()===q.\u7D2F\u8BA1\u6D41\u91CF&&r.sort((t,A)=>t.allUp+t.allDn-(A.allUp+A.allDn)),ie.get()&&r.reverse(),M.set(r)}function Re(r){L.get()===r?ie.set(!ie.get()):(L.set(r),ie.set(!0)),jt()}function Ge(r){return L.get()===r?ie.get()?"\u2193":"\u2191":"\u2195"}setInterval(Oe,1e3),Oe();const Dt=(0,x.observer)(function(){const[t,A]=(0,c.useState)("overview"),[n,o]=(0,c.useState)(()=>{const i=localStorage.getItem("qsocket-theme");return i==="light"||i==="dark"?i:window.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light"}),a=Fe.find(i=>i.id===t);return(0,c.useEffect)(()=>{document.documentElement.dataset.theme=n,document.documentElement.style.colorScheme=n,localStorage.setItem("qsocket-theme",n)},[n]),(0,e.jsxs)("div",{className:"app-shell",children:[(0,e.jsxs)("aside",{className:"app-sidebar",children:[(0,e.jsxs)("div",{className:"brand-mark",children:[(0,e.jsx)("span",{className:"brand-pulse"}),(0,e.jsx)("span",{children:"\u7F51\u7EDC\u63A7\u5236\u53F0"})]}),(0,e.jsx)("nav",{className:"app-nav","aria-label":"\u4E3B\u5BFC\u822A",children:Fe.map(i=>(0,e.jsxs)("button",{className:t===i.id?"active":"",onClick:()=>A(i.id),children:[(0,e.jsx)("span",{className:"nav-icon",children:i.icon}),(0,e.jsx)("span",{children:i.label})]},i.id))}),(0,e.jsxs)("div",{className:"sidebar-foot",children:[(0,e.jsx)("span",{className:"online-dot"}),"\u72B6\u6001\u6BCF\u79D2\u66F4\u65B0"]})]}),(0,e.jsxs)("main",{className:"app-main",children:[(0,e.jsxs)("header",{className:"topbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"eyebrow",children:"QSocket \xB7 \u5B9E\u65F6\u7F51\u7EDC\u72B6\u6001"}),(0,e.jsx)("h1",{children:a.label})]}),(0,e.jsxs)("div",{className:"topbar-actions",children:[(0,e.jsxs)("button",{className:"theme-toggle",title:n==="dark"?"\u5207\u6362\u4E3A\u4EAE\u8272":"\u5207\u6362\u4E3A\u6697\u8272","aria-label":n==="dark"?"\u5207\u6362\u4E3A\u4EAE\u8272":"\u5207\u6362\u4E3A\u6697\u8272",onClick:()=>o(n==="dark"?"light":"dark"),children:[(0,e.jsx)("span",{children:n==="dark"?"\u2600":"\u263E"}),(0,e.jsx)("small",{children:n==="dark"?"\u4EAE\u8272":"\u6697\u8272"})]}),(0,e.jsxs)("div",{className:"topbar-route",children:[(0,e.jsx)("span",{children:"\u5F53\u524D\u8DEF\u7531"}),(0,e.jsxs)("strong",{children:[W(X.get().at(-1)?.outServers?.[0]?.name??""),X.get().at(-1)?.outServers?.[0]?.name??"\u7B49\u5F85\u6570\u636E"]})]})]})]}),(0,e.jsxs)("div",{className:"page-content",children:[t==="overview"&&(0,e.jsx)(zt,{onNavigate:A}),t==="routes"&&(0,e.jsxs)(de,{title:"\u8DEF\u7531\u4E0E\u8FDE\u63A5",description:"\u7BA1\u7406\u5168\u5C40\u51FA\u53E3\u3001\u8FDE\u63A5\u6392\u5E8F\u548C\u5B9E\u65F6\u4E1A\u52A1\u6D41\u3002",children:[(0,e.jsx)(Nt,{}),(0,e.jsx)(qt,{})]}),t==="nodes"&&(0,e.jsx)(de,{title:"\u8282\u70B9\u72B6\u6001",description:"\u67E5\u770B\u6BCF\u53F0 VPS\u3001\u4F1A\u8BDD\u6765\u6E90\u3001MTCP \u7269\u7406\u8FDE\u63A5\u6C60\u548C\u4E1A\u52A1\u8FDE\u63A5\u3002",children:(0,e.jsx)(Ve,{businessLinks:M.get(),routes:X.get()})}),t==="traffic"&&(0,e.jsxs)(de,{title:"\u6D41\u91CF\u5206\u6790",description:"\u6309\u5206\u949F\u3001\u5C0F\u65F6\u3001\u6BCF\u65E5\u548C VPS \u68C0\u67E5\u4E1A\u52A1\u6D41\u91CF\u4E0E\u7EBF\u8DEF\u8D8B\u52BF\u3002",children:[(0,e.jsx)(Lt,{}),(0,e.jsx)(je,{})]}),t==="config"&&(0,e.jsx)(It,{}),t==="diagnostics"&&(0,e.jsx)(St,{})]})]}),(0,e.jsx)("nav",{className:"mobile-nav","aria-label":"\u79FB\u52A8\u7AEF\u4E3B\u5BFC\u822A",children:Fe.map(i=>(0,e.jsxs)("button",{className:t===i.id?"active":"",onClick:()=>A(i.id),children:[(0,e.jsx)("span",{children:i.icon}),(0,e.jsx)("small",{children:i.shortLabel??i.label})]},i.id))})]})}),Fe=[{id:"overview",label:"\u7CFB\u7EDF\u603B\u89C8",shortLabel:"\u603B\u89C8",icon:"\u25A6"},{id:"routes",label:"\u8DEF\u7531\u4E0E\u8FDE\u63A5",shortLabel:"\u8DEF\u7531",icon:"\u21C4"},{id:"nodes",label:"\u8282\u70B9",icon:"\u25C9"},{id:"traffic",label:"\u6D41\u91CF",icon:"\u25A5"},{id:"config",label:"\u914D\u7F6E\u4E2D\u5FC3",shortLabel:"\u914D\u7F6E",icon:"\u2699"},{id:"diagnostics",label:"\u8BCA\u65AD",icon:"\u25CE"}];function It(){const[r,t]=(0,c.useState)(null),[A,n]=(0,c.useState)(!1),[o,a]=(0,c.useState)(!1),[i,l]=(0,c.useState)("idle");(0,c.useEffect)(()=>{fetch(T+"mtcp-defaults").then(g=>{if(!g.ok)throw new Error;return g.json()}).then(t).catch(()=>n(!0))},[]);const p=async()=>{if(r){a(!0),l("idle");try{if(!(await fetch(T+"mtcp-defaults",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error;l("saved")}catch{l("error")}finally{a(!1)}}},d=(g,h,s,m,F=0,b,w=1)=>(0,e.jsxs)("label",{className:"config-field",children:[(0,e.jsx)("span",{children:h}),(0,e.jsxs)("div",{className:"config-input-wrap",children:[(0,e.jsx)("input",{type:"number",min:F,max:b,value:r[g]/w,onChange:N=>{l("idle"),t({...r,[g]:(Number(N.target.value)||0)*w})}}),(0,e.jsx)("em",{children:s})]}),(0,e.jsx)("small",{children:m})]},g),u=[["\u8282\u70B9\u4E0E\u8FDE\u63A5\u6C60","\u8282\u70B9\u542F\u505C\u3001\u8FDE\u63A5\u6570\u4E0E\u5065\u5EB7\u68C0\u67E5","\u5373\u5C06\u5F00\u653E"],["\u8DEF\u7531\u4E0E\u8D1F\u8F7D\u5747\u8861","\u51FA\u53E3\u4F18\u5148\u7EA7\u3001\u5206\u6D41\u4E0E\u8FC1\u79FB\u7B56\u7565","\u5373\u5C06\u5F00\u653E"],["FRP \u4E0E\u5BA2\u6237\u7AEF\u8DEF\u7531","\u5BA2\u6237\u7AEF\u53D1\u73B0\u3001\u4EE3\u62E8\u53F7\u4E0E UDP","\u5373\u5C06\u5F00\u653E"],["\u65E5\u5FD7\u4E0E\u8BCA\u65AD","\u65E5\u5FD7\u7B49\u7EA7\u3001\u91C7\u6837\u4E0E\u544A\u8B66\u9608\u503C","\u5373\u5C06\u5F00\u653E"]];return(0,e.jsxs)(de,{title:"\u914D\u7F6E\u4E2D\u5FC3",description:"\u96C6\u4E2D\u7BA1\u7406\u5168\u5C40\u9ED8\u8BA4\u503C\u4E0E\u8282\u70B9\u8986\u76D6\u3002\u8282\u70B9\u7EA7 MTCP \u53C2\u6570\u53EF\u5728\u8282\u70B9\u9875\u9762\u5355\u72EC\u8C03\u6574\u3002",children:[(0,e.jsxs)("section",{className:"config-center-card config-center-mtcp",children:[(0,e.jsxs)("div",{className:"config-card-heading",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"config-badge",children:"\u5168\u5C40\u9ED8\u8BA4"}),(0,e.jsx)("h3",{children:"\u4F20\u8F93\u4E0E MTCP"}),(0,e.jsx)("p",{children:"\u5E94\u7528\u4E8E\u672A\u8BBE\u7F6E\u8282\u70B9\u8986\u76D6\u503C\u7684 MTCP \u8FDE\u63A5\uFF1B\u4FDD\u5B58\u540E\u81EA\u52A8\u70ED\u66F4\u65B0\u3002"})]}),(0,e.jsxs)("div",{className:"config-live",children:[(0,e.jsx)("i",{}),"\u8FD0\u884C\u65F6\u751F\u6548"]})]}),r?(0,e.jsxs)("div",{className:"mtcp-config-editor",children:[(0,e.jsxs)("section",{className:"config-group",children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("b",{children:"\u8FDE\u63A5\u6C60"}),(0,e.jsx)("small",{children:"\u63A7\u5236\u5E38\u9A7B\u8FDE\u63A5\u548C\u4E34\u65F6\u6269\u5BB9\u8FB9\u754C"})]}),(0,e.jsxs)("div",{className:"config-pairs",children:[(0,e.jsxs)("div",{className:"config-direction",children:[(0,e.jsx)("strong",{children:"\u2191 \u4E0A\u884C"}),d("mtcpUpLinks","\u57FA\u7840\u8FDE\u63A5","\u6761","\u5E73\u65F6\u7EF4\u6301\u7684\u8FDE\u63A5\u6570",1,16),d("mtcpMaxUpLinks","\u6700\u5927\u8FDE\u63A5","\u6761","\u81EA\u9002\u5E94\u6269\u5BB9\u4E0A\u9650",1,16)]}),(0,e.jsxs)("div",{className:"config-direction down",children:[(0,e.jsx)("strong",{children:"\u2193 \u4E0B\u884C"}),d("mtcpDownLinks","\u57FA\u7840\u8FDE\u63A5","\u6761","\u5E73\u65F6\u7EF4\u6301\u7684\u8FDE\u63A5\u6570",1,16),d("mtcpMaxDownLinks","\u6700\u5927\u8FDE\u63A5","\u6761","\u81EA\u9002\u5E94\u6269\u5BB9\u4E0A\u9650",1,16)]})]})]}),(0,e.jsxs)("section",{className:"config-group",children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("b",{children:"\u5065\u5EB7\u68C0\u6D4B"}),(0,e.jsx)("small",{children:"\u51B3\u5B9A\u4F55\u65F6\u5224\u5B9A\u7EBF\u8DEF\u5F02\u5E38\u5E76\u542F\u52A8\u63A2\u9488"})]}),(0,e.jsxs)("div",{className:"config-fields",children:[d("mtcpAckTimeoutMinMs","ACK \u6700\u4F4E\u8D85\u65F6","ms","\u6700\u4F4E 500ms\uFF0C\u907F\u514D\u8FC7\u65E9\u91CD\u4F20",500,6e4),d("mtcpProbeDurationMs","\u63A2\u9488\u89C2\u5BDF\u65F6\u95F4","ms","\u65B0\u8FDE\u63A5\u7684\u8D28\u91CF\u91C7\u6837\u7A97\u53E3",50,6e4),d("mtcpLowSpeedBytesPerSecond","\u4F4E\u901F\u9608\u503C","KB/s","\u4F4E\u4E8E\u8BE5\u541E\u5410\u65F6\u7D2F\u8BA1\u4F4E\u901F\u7A97\u53E3",1,1048576,1024),d("mtcpLowSpeedWindows","\u8FDE\u7EED\u4F4E\u901F\u7A97\u53E3","\u6B21","\u8FBE\u5230\u540E\u89E6\u53D1\u8FDE\u63A5\u63A2\u6D4B",1,60)]})]}),(0,e.jsxs)("section",{className:"config-group compact",children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("b",{children:"\u8FDE\u63A5\u8F6E\u6362"}),(0,e.jsx)("small",{children:"\u5468\u671F\u6027\u66FF\u6362\u6700\u8001\u8FDE\u63A5\uFF0C\u9519\u5CF0\u6267\u884C\u4EE5\u907F\u514D\u8FDE\u63A5\u98CE\u66B4"})]}),(0,e.jsx)("div",{className:"config-fields single",children:d("mtcpConnectionRotateIntervalMs","\u8F6E\u6362\u95F4\u9694","ms","\u8BBE\u7F6E\u4E3A 0 \u65F6\u5173\u95ED\u81EA\u52A8\u8F6E\u6362",0)})]}),(0,e.jsxs)("footer",{className:"config-actions",children:[(0,e.jsxs)("div",{children:[i==="saved"&&(0,e.jsx)("small",{className:"success",children:"\u2713 \u5DF2\u4FDD\u5B58\u5E76\u901A\u77E5 Local \u70ED\u66F4\u65B0"}),i==="error"&&(0,e.jsx)("small",{className:"error",children:"\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u6216\u670D\u52A1\u72B6\u6001"})]}),(0,e.jsx)("button",{onClick:p,disabled:o,children:o?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u5168\u5C40\u914D\u7F6E"})]})]}):(0,e.jsx)("div",{className:A?"config-loading error":"config-loading",children:A?"\u914D\u7F6E\u63A5\u53E3\u4E0D\u53EF\u7528\uFF0C\u8BF7\u90E8\u7F72\u5E76\u91CD\u542F local_slb":"\u6B63\u5728\u8BFB\u53D6\u914D\u7F6E\u2026"})]}),(0,e.jsx)("div",{className:"config-center-grid",children:u.map(([g,h,s])=>(0,e.jsxs)("section",{className:"config-center-card",children:[(0,e.jsx)("span",{className:s==="\u5373\u5C06\u5F00\u653E"?"config-badge pending":"config-badge",children:s==="\u5373\u5C06\u5F00\u653E"?"\u89C4\u5212\u4E2D":"\u53EF\u914D\u7F6E"}),(0,e.jsx)("h3",{children:g}),(0,e.jsx)("p",{children:h}),(0,e.jsx)("small",{children:s})]},g))})]})}function de(r){return(0,e.jsxs)("section",{className:"page-section",children:[(0,e.jsxs)("div",{className:"page-intro",children:[(0,e.jsx)("h2",{children:r.title}),(0,e.jsx)("p",{children:r.description})]}),r.children]})}const zt=(0,x.observer)(function({onNavigate:t}){const[A,n]=(0,c.useState)("delay"),o=M.get().filter(m=>!m.endTime),a=o.map(m=>m.delay).filter(m=>m>0&&m<1e4),i=a.length?Math.round(a.reduce((m,F)=>m+F,0)/a.length):0,l=V.get().filter(m=>(m.time??1/0)<3e3).length,p=V.get().filter(m=>(m.time??0)>=1e3).length,d=X.get().at(-1),u=Object.values(he.get().nodes),g=u.reduce((m,F)=>m+F.currentHour.up+F.currentHour.dn,0),h=u.reduce((m,F)=>m+F.currentDay.up+F.currentDay.dn,0),s=[...V.get()].sort((m,F)=>{const b=(m.upspeed??0)+(m.dnspeed??0),w=(F.upspeed??0)+(F.dnspeed??0);return A==="speed"?w-b||(m.time??1/0)-(F.time??1/0):(m.time??1/0)-(F.time??1/0)||w-b});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("section",{className:"hero-card",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("span",{className:"hero-kicker",children:[(0,e.jsx)("span",{className:"online-dot"}),"\u7CFB\u7EDF\u5728\u7EBF"]}),(0,e.jsx)("h2",{children:"\u5168\u5C40\u7F51\u7EDC\u8FD0\u884C\u5E73\u7A33"}),(0,e.jsxs)("p",{children:[d?.outServers?.[0]?`\u5F53\u524D\u4F18\u5148\u4F7F\u7528 ${d.outServers[0].name}`:"\u6B63\u5728\u7B49\u5F85\u8DEF\u7531\u72B6\u6001","\uFF0C\u72B6\u6001\u6BCF\u79D2\u81EA\u52A8\u5237\u65B0\u3002"]})]}),(0,e.jsx)("button",{className:"primary-action",onClick:()=>{fetch(T+"refresh")},children:"\u5237\u65B0\u8DEF\u7531"})]}),(0,e.jsxs)("section",{className:"metric-grid",children:[(0,e.jsx)(J,{label:"\u4E0A\u4F20\u901F\u5EA6",value:`${E(G.get())}/s`,tone:"speed",speed:G.get(),detail:"\u5168\u5C40\u5B9E\u65F6",spark:Z.get()}),(0,e.jsx)(J,{label:"\u4E0B\u8F7D\u901F\u5EA6",value:`${E(K.get())}/s`,tone:"speed",speed:K.get(),detail:"\u5168\u5C40\u5B9E\u65F6",spark:ee.get()}),(0,e.jsx)(J,{label:"\u6D3B\u8DC3\u8FDE\u63A5",value:o.length.toString(),tone:"violet",detail:`\u7D2F\u8BA1 ${M.get().length}`}),(0,e.jsx)(J,{label:"\u5728\u7EBF\u8282\u70B9",value:`${l}/${V.get().length||0}`,tone:"teal",detail:p?`${p} \u4E2A\u9700\u5173\u6CE8`:"\u5168\u90E8\u6B63\u5E38"}),(0,e.jsx)(J,{label:"\u5E73\u5747\u5EF6\u8FDF",value:i?`${i} ms`:"--",tone:"amber",detail:"\u6D3B\u8DC3\u8FDE\u63A5"}),(0,e.jsx)(J,{label:"\u5F53\u524D\u5C0F\u65F6",value:E(g),tone:"slate",detail:`\u4ECA\u65E5 ${E(h)}`})]}),(0,e.jsxs)("section",{className:"overview-grid",children:[(0,e.jsx)("div",{className:"overview-main",children:(0,e.jsx)(je,{})}),(0,e.jsx)("div",{className:"overview-side",children:(0,e.jsxs)("div",{className:"panel-card node-snapshot",children:[(0,e.jsxs)("div",{className:"panel-title",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u8282\u70B9\u72B6\u6001"}),(0,e.jsx)("p",{children:"\u5EF6\u8FDF\u4E0E\u5B9E\u65F6\u541E\u5410"})]}),(0,e.jsx)("button",{onClick:()=>t("nodes"),children:"\u67E5\u770B\u5168\u90E8"})]}),(0,e.jsxs)("div",{className:"node-sort-toolbar","aria-label":"\u8282\u70B9\u6392\u5E8F\u65B9\u5F0F",children:[(0,e.jsx)("span",{children:"\u6392\u5E8F"}),(0,e.jsx)("button",{className:A==="delay"?"active":"",onClick:()=>n("delay"),children:"\u5EF6\u8FDF"}),(0,e.jsx)("button",{className:A==="speed"?"active":"",onClick:()=>n("speed"),children:"\u901F\u5EA6"})]}),s.slice(0,6).map(m=>(0,e.jsxs)("div",{className:"node-row",children:[(0,e.jsx)("span",{className:`health-dot ${(m.time??1/0)<1e3?"ok":(m.time??1/0)<3e3?"warn":"bad"}`}),(0,e.jsxs)("strong",{children:[W(m.name)," ",m.name]}),(0,e.jsxs)("span",{className:"node-speed-cell",children:[(0,e.jsxs)("small",{className:`speed-value ${y(m.upspeed??0)}`,children:["\u2191 ",E(m.upspeed??0)]}),(0,e.jsxs)("small",{className:`speed-value ${y(m.dnspeed??0)}`,children:["\u2193 ",E(m.dnspeed??0)]})]}),(0,e.jsxs)("span",{className:"node-links-cell",children:[m.linkCount??0," \u8FDE\u63A5"]}),(0,e.jsxs)("span",{className:`node-latency-cell ${(m.time??1/0)<500?"good":(m.time??1/0)<1e3?"warn":"bad"}`,children:[m.time??"--"," ms"]})]},m.name))]})})]}),(0,e.jsxs)("section",{className:"overview-bottom",children:[(0,e.jsxs)("div",{className:"panel-card route-snapshot",children:[(0,e.jsxs)("div",{className:"panel-title",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u8DEF\u7531\u72B6\u6001"}),(0,e.jsx)("p",{children:"\u5404\u4E1A\u52A1\u8DEF\u7531\u7684\u5F53\u524D\u51FA\u53E3"})]}),(0,e.jsx)("button",{onClick:()=>t("routes"),children:"\u7BA1\u7406\u8DEF\u7531"})]}),X.get().slice(0,5).map(m=>{const F=o.filter(N=>N.routeName===m.name),b=F.reduce((N,Q)=>N+(Q.upOp===1?Q.up:0),0),w=F.reduce((N,Q)=>N+(Q.dnOp===1?Q.dn:0),0);return(0,e.jsxs)("div",{className:"route-row",children:[(0,e.jsx)("strong",{children:m.name}),(0,e.jsx)("span",{children:m.outServers?.[0]?.name??"\u672A\u9009\u62E9"}),(0,e.jsxs)("span",{children:[F.length," \u8FDE\u63A5"]}),(0,e.jsxs)("span",{className:`up-text speed-value ${y(b)}`,children:["\u2191 ",E(b)]}),(0,e.jsxs)("span",{className:`down-text speed-value ${y(w)}`,children:["\u2193 ",E(w)]})]},m.name)})]}),(0,e.jsxs)("div",{className:"panel-card alert-snapshot",children:[(0,e.jsxs)("div",{className:"panel-title",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u8FD0\u884C\u63D0\u793A"}),(0,e.jsx)("p",{children:"\u9700\u8981\u5173\u6CE8\u7684\u72B6\u6001"})]}),(0,e.jsx)("button",{onClick:()=>t("diagnostics"),children:"\u8FDB\u5165\u8BCA\u65AD"})]}),(0,e.jsxs)("div",{className:p?"alert-item warn":"alert-item ok",children:[(0,e.jsx)("span",{children:p?"!":"\u2713"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:p?`${p} \u4E2A\u8282\u70B9\u5EF6\u8FDF\u8F83\u9AD8`:"\u8282\u70B9\u54CD\u5E94\u6B63\u5E38"}),(0,e.jsx)("p",{children:p?"\u5EFA\u8BAE\u5728\u8BCA\u65AD\u9875\u67E5\u770B\u5EF6\u8FDF\u5386\u53F2":"\u5F53\u524D\u6CA1\u6709\u8282\u70B9\u7EA7\u544A\u8B66"})]})]}),(0,e.jsxs)("div",{className:"alert-item info",children:[(0,e.jsx)("span",{children:"i"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:ge.get()}),(0,e.jsx)("p",{children:"\u5957\u9910\u5269\u4F59\u6D41\u91CF\u72B6\u6001"})]})]})]})]})]})});function J({label:r,value:t,detail:A,tone:n,spark:o,speed:a}){const i=(o??[]).slice(-24),l=Math.max(1,...i);return(0,e.jsxs)("article",{className:`metric-card ${n} ${a===void 0?"":y(a)}`,children:[(0,e.jsx)("div",{className:"metric-label",children:r}),(0,e.jsx)("strong",{className:a===void 0?"":`speed-value ${y(a)}`,children:t}),(0,e.jsx)("span",{children:A}),i.length>1&&(0,e.jsx)("svg",{className:"mini-spark",viewBox:"0 0 120 28",preserveAspectRatio:"none",children:(0,e.jsx)("polyline",{points:i.map((p,d)=>`${d/(i.length-1)*120},${26-p/l*22}`).join(" ")})})]})}const Vt=(0,x.observer)(function(){const t=[...V.get()].sort((A,n)=>(A.time??1/0)-(n.time??1/0));return(0,e.jsxs)("section",{className:"node-latency-overview panel-card",children:[(0,e.jsx)("div",{className:"panel-title",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u8282\u70B9\u5EF6\u8FDF\u6982\u89C8"}),(0,e.jsx)("p",{children:"\u5F53\u524D\u5EF6\u8FDF\u3001\u53EF\u7528\u72B6\u6001\u4E0E\u4E1A\u52A1\u8FDE\u63A5"})]})}),(0,e.jsx)("div",{className:"node-latency-grid",children:t.map(A=>{const n=A.time??9999,o=M.get().filter(l=>!l.endTime&&l.ss===A.name).length,a=n<500?"\u826F\u597D":n<1e3?"\u504F\u9AD8":n<3e3?"\u8F83\u5DEE":"\u8D85\u65F6",i=n<500?"good":n<1e3?"warn":"bad";return(0,e.jsxs)("article",{className:`node-latency-card ${i}`,children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"node-latency-flag",children:W(A.name)}),(0,e.jsx)("strong",{children:A.name}),(0,e.jsx)("small",{children:a})]}),(0,e.jsx)("b",{children:n>=9999?"\u8D85\u65F6":`${Math.round(n)} ms`}),(0,e.jsxs)("span",{children:[o," \u6761\u4E1A\u52A1\u8FDE\u63A5"]})]},A.name)})})]})}),St=(0,x.observer)(function(){const t=M.get().filter(o=>!o.endTime),A=t.filter(o=>o.delay>=500).length,n=M.get().filter(o=>o.endTime).length;return(0,e.jsxs)(de,{title:"\u8BCA\u65AD\u4E2D\u5FC3",description:"\u96C6\u4E2D\u67E5\u770B\u5EF6\u8FDF\u3001\u5F02\u5E38\u8FDE\u63A5\u548C\u901F\u5EA6\u53D8\u5316\u3002",children:[(0,e.jsxs)("div",{className:"diagnostic-summary",children:[(0,e.jsx)(J,{label:"\u9AD8\u5EF6\u8FDF\u8FDE\u63A5",value:A.toString(),detail:"\u5EF6\u8FDF \u2265 500 ms",tone:"amber"}),(0,e.jsx)(J,{label:"\u5DF2\u65AD\u5F00\u8FDE\u63A5",value:n.toString(),detail:"\u5F53\u524D\u72B6\u6001\u5217\u8868",tone:"slate"}),(0,e.jsx)(J,{label:"\u5065\u5EB7\u8FDE\u63A5",value:Math.max(0,t.length-A).toString(),detail:"\u5EF6\u8FDF\u5728\u9608\u503C\u5185",tone:"green"})]}),(0,e.jsx)(Tt,{}),(0,e.jsx)(lt,{}),(0,e.jsx)(je,{})]})}),Nt=(0,x.observer)(function(){return(0,e.jsxs)("section",{className:`route-list-shell ${ae.get()?"expanded":"collapsed"}`,children:[(0,e.jsxs)("div",{className:"NodesHeader route-panel-header",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{ae.set(!ae.get())},children:[ae.get()?I():v(),(0,e.jsx)("span",{className:"panel-title-icon",children:(0,e.jsx)(pe,{type:"route"})}),(0,e.jsx)("span",{className:"section-name",children:"\u8DEF\u7531\u5217\u8868"}),(0,e.jsx)("span",{className:"section-spacer"}),(0,e.jsx)("button",{className:"simple-button",onClick:t=>{fetch(T+"refresh"),t.preventDefault(),t.stopPropagation()},children:"\u5237\u65B0"}),(0,e.jsx)("span",{className:"traffic-remaining",children:ge.get()})]}),ae.get()&&(0,e.jsx)(Wt,{})]})}),Wt=(0,x.observer)(function(){return(0,e.jsxs)("div",{className:"route-list-body",children:[(0,e.jsxs)("div",{className:"route-list-columns","aria-hidden":"true",children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{children:"\u8DEF\u7531"}),(0,e.jsx)("span",{children:"\u5B9E\u65F6\u6D41\u91CF"}),(0,e.jsx)("span",{children:"\u8FDE\u63A5"}),(0,e.jsx)("span",{children:"\u5F53\u524D\u51FA\u53E3"}),(0,e.jsx)("span",{children:"\u6A21\u5F0F"})]}),X.get().map(t=>(0,e.jsx)(Je,{...t},t.name)),(0,e.jsx)(Je,{name:"\u4F18\u5148",mode:"time",preServer:Qe.get(),outServers:V.get()},"\u4F18\u5148")]})});function pe({type:r}){if(r==="users")return(0,e.jsxs)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"9",cy:"8",r:"3"}),(0,e.jsx)("path",{d:"M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19"}),(0,e.jsx)("path",{d:"M16 5.5a3 3 0 0 1 0 5.8M17 14a4 4 0 0 1 3.5 4v1"})]});if(r==="id")return(0,e.jsx)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M9 3 7 21M17 3l-2 18M4 9h16M3 15h16"})});if(r==="disconnect")return(0,e.jsx)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"m8 12 8 8M16 12l-8 8M9 5V2M15 5V2M7 5h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5Z"})});if(r==="reverse")return(0,e.jsx)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M8 3v18M4.5 6.5 8 3l3.5 3.5M16 21V3m-3.5 14.5L16 21l3.5-3.5"})});if(r==="route")return(0,e.jsxs)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"6",cy:"6",r:"2.5"}),(0,e.jsx)("circle",{cx:"18",cy:"18",r:"2.5"}),(0,e.jsx)("path",{d:"M8.5 6H14a4 4 0 0 1 4 4v5.5M15 13l3 3 3-3"})]});if(r==="connections")return(0,e.jsxs)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("path",{d:"M9.5 14.5l5-5"}),(0,e.jsx)("path",{d:"M7.2 17.8l-1 1a3.5 3.5 0 0 1-5-5l3.2-3.2a3.5 3.5 0 0 1 5 0"}),(0,e.jsx)("path",{d:"M16.8 6.2l1-1a3.5 3.5 0 0 1 5 5l-3.2 3.2a3.5 3.5 0 0 1-5 0"})]});const t=r==="upSpeed"||r==="upTotal",A=r==="upTotal"||r==="downTotal";return(0,e.jsxs)("svg",{className:"toolbar-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[A?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("ellipse",{cx:"12",cy:"6",rx:"6",ry:"3"}),(0,e.jsx)("path",{d:"M6 6v7c0 1.7 2.7 3 6 3s6-1.3 6-3V6"})]}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("path",{d:"M5 17h3M5 13h5M5 9h7"})}),t?(0,e.jsx)("path",{d:"M17 20V9m-4 4 4-4 4 4"}):(0,e.jsx)("path",{d:"M17 8v11m-4-4 4 4 4-4"})]})}const qt=(0,x.observer)(function({title:t="\u8FDE\u63A5\u5217\u8868"}){return(0,e.jsxs)("section",{className:`links-panel-shell ${se.get()?"expanded":"collapsed"}`,children:[(0,e.jsxs)("div",{className:"LinksHeader",onClick:()=>se.set(!se.get()),children:[se.get()?I():v(),(0,e.jsx)("span",{className:"panel-title-icon",children:(0,e.jsx)(pe,{type:"connections"})}),(0,e.jsx)("span",{className:"section-name",children:t}),(0,e.jsxs)("span",{className:"connection-count",children:[M.get().filter(A=>!A.endTime).length," \u6761"]}),(0,e.jsxs)("div",{className:"aggregate-speed",children:[(0,e.jsx)("span",{className:`speed-value ${y(G.get())}`,children:"\u2191:"+E(G.get())}),(0,e.jsx)("span",{className:`speed-value ${y(K.get())}`,children:"\u2193:"+E(K.get())})]}),(0,e.jsxs)("div",{className:"link-toolbar",children:[(0,e.jsx)("button",{className:"simple-button",title:"\u6309\u7528\u6237\u5206\u7EC4",style:{background:Be.get()?"#01162a":""},onClick:A=>{Be.set(!Be.get()),A.stopPropagation(),A.target.blur()},"aria-label":"\u6309\u7528\u6237\u5206\u7EC4",children:(0,e.jsx)(pe,{type:"users"})}),(0,e.jsxs)("button",{className:"simple-button danger-button",title:"\u65AD\u5F00\u5168\u90E8\u8FDE\u63A5",onClick:A=>{M.set([]),fetch(T+"allclose"),A.stopPropagation(),A.target.blur()},children:[(0,e.jsx)(pe,{type:"disconnect"}),(0,e.jsx)("span",{children:"\u5168\u90E8\u65AD\u5F00"})]})]})]}),se.get()&&(0,e.jsx)(Ke,{links:M.get()})]})}),Ke=(0,x.observer)(function({links:t,showRoute:A=!0}){const[n,o]=(0,f.useAutoAnimate)({duration:250,easing:"ease-in-out",disrespectUserMotionPreference:!0});return(0,c.useEffect)(()=>{const a=()=>{o(!document.hidden)};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a)}},[o]),(0,e.jsxs)("ul",{ref:n,className:`links-list ${A?"show-route":"route-scoped"}`,children:[A&&(0,e.jsxs)("li",{className:"all-link-columns",children:[(0,e.jsx)("span",{children:"\u8282\u70B9\u4E0E\u94FE\u8DEF\u72B6\u6001"}),(0,e.jsx)("span",{children:"\u76EE\u6807\u5730\u5740"}),(0,e.jsxs)("span",{className:"all-link-speed-headings",children:[(0,e.jsxs)("button",{type:"button",className:`sortable-column ${L.get()===q.\u5B9E\u65F6\u901F\u5EA6?"active":""}`,onClick:()=>Re(q.\u5B9E\u65F6\u901F\u5EA6),title:"\u6309\u4E0A\u4E0B\u884C\u5B9E\u65F6\u901F\u5EA6\u5408\u8BA1\u6392\u5E8F",children:["\u5B9E\u65F6\u901F\u5EA6 ",(0,e.jsx)("b",{children:Ge(q.\u5B9E\u65F6\u901F\u5EA6)})]}),(0,e.jsxs)("button",{type:"button",className:`sortable-column ${L.get()===q.\u7D2F\u8BA1\u6D41\u91CF?"active":""}`,onClick:()=>Re(q.\u7D2F\u8BA1\u6D41\u91CF),title:"\u6309\u4E0A\u4E0B\u884C\u7D2F\u8BA1\u6D41\u91CF\u5408\u8BA1\u6392\u5E8F",children:["\u7D2F\u8BA1\u6D41\u91CF ",(0,e.jsx)("b",{children:Ge(q.\u7D2F\u8BA1\u6D41\u91CF)})]})]})]}),!A&&(0,e.jsxs)("li",{className:"route-link-columns","aria-hidden":"true",children:[(0,e.jsx)("span",{children:"\u8282\u70B9\u4E0E\u94FE\u8DEF\u72B6\u6001"}),(0,e.jsx)("span",{children:"\u76EE\u6807\u5730\u5740"}),(0,e.jsxs)("span",{className:"route-link-speed-headings",children:[(0,e.jsx)("span",{children:"\u5B9E\u65F6\u901F\u5EA6"}),(0,e.jsx)("span",{children:"\u7D2F\u8BA1\u6D41\u91CF"})]})]}),t.map(a=>(0,e.jsx)($t,{link:a,showRoute:A},a.id))]})}),Yt=(0,x.observer)(function(t){let{server:A,route:n}=t,o=n&&n.preServer[A.name]||0;const a=M.get().filter(h=>!h.endTime&&h.ss===A.name&&h.routeName===n.name).length,i=M.get().filter(h=>h.ss===A.name&&h.routeName===n.name).reduce((h,s)=>h+(s.upOp===1?s.up:0),0),l=M.get().filter(h=>h.ss===A.name&&h.routeName===n.name).reduce((h,s)=>h+(s.dnOp===1?s.dn:0),0);let p=(0,c.useRef)(0);const d=300,u=()=>{const h=new Date().getTime(),s=h-p.current;s<d&&s>0&&g(),p.current=h},g=()=>{if(!n)return;let h=prompt("\u8BF7\u8F93\u5165\u5EF6\u8FDF\u503C",o.toString());if(h){let s=parseInt(h);isNaN(s)||(n.name==="\u4F18\u5148"?fetch(T+`set_preServer/${A.name}/${s}`):fetch(T+`set_route_config/${n.name}/${A.name}/${s}`))}};return(0,e.jsxs)("div",{className:"sdiv",style:{margin:1,minWidth:160,height:30,flexGrow:1},onTouchEnd:u,onDoubleClick:h=>{p.current===0&&g(),p.current=0},children:[(0,e.jsxs)("span",{style:{width:77,textAlign:"left",marginRight:2,fontSize:"0.9rem"},children:[W(A.name),A.name," "]}),(0,e.jsx)("span",{style:{marginRight:2,fontSize:"0.8rem"},children:a}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[i?(0,e.jsx)("span",{className:`speed-value ${y(i)}`,style:{fontSize:"0.7rem"},children:"\u2191:"+E(i)}):null,l?(0,e.jsx)("span",{className:`speed-value ${y(l)}`,style:{fontSize:"0.7rem"},children:"\u2193:"+E(l)}):null]}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[(0,e.jsx)("span",{style:{color:A.time<500?"green":A.time<1e3?"blue":A.time<3e3?"red":"midnightblue"},children:A.time}),o?(0,e.jsxs)("span",{style:{color:"gray",fontSize:"0.6rem"},children:["-",o]}):null]})]},A.name)}),Je=(0,x.observer)(function(t){let[A,n]=(0,c.useState)(!1),[o,a]=(0,c.useState)(!1),[i,l]=(0,c.useState)(!1);const p=M.get().filter(s=>s.routeName===t.name),d=p.reduce((s,m)=>s+(m.upOp===1?m.up:0),0),u=p.reduce((s,m)=>s+(m.dnOp===1?m.dn:0),0),[g,h]=(0,c.useState)(t.mode);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:`NodesHeader route-item-header ${A?"expanded":""}`,style:{marginBottom:2,fontSize:"1rem",display:"flex"},onClick:()=>{n(!A)},children:[(0,e.jsx)("span",{className:"route-item-toggle",children:A?I():v()}),(0,e.jsx)("span",{className:"route-item-name",children:t.name}),(0,e.jsxs)("span",{className:"route-item-speeds",children:[(0,e.jsx)(te,{speed:d,tag:"\u2191:",opacity:1}),(0,e.jsx)(te,{speed:u,tag:"\u2193:",opacity:1})]}),(0,e.jsx)("span",{className:"route-item-count",title:"\u5F53\u524D\u4E1A\u52A1\u8FDE\u63A5\u6570",children:p.filter(s=>!s.endTime).length}),t.outServers[0]&&(0,e.jsxs)("span",{className:"route-item-exit",children:[W(t.outServers[0].name),t.outServers[0].name]}),(0,e.jsx)("select",{title:"m:",className:"route-item-mode",id:"fruit-select",value:g,onClick:s=>{s.stopPropagation()},onChange:s=>{h(s.target.value),fetch(T+`set_route_slb/${t.name}/${s.target.value}`)},children:t.outServers.map((s,m)=>(0,e.jsx)("option",{value:m+1,children:m===0?"time":`slb${m+1}`},m))})]}),A&&(0,e.jsxs)("div",{className:"route-item-details",children:[(0,e.jsxs)("div",{className:`Header route-detail-toggle ${o?"expanded":""}`,style:{fontSize:"1rem",display:"flex"},onClick:()=>{a(!o)},children:[(0,e.jsx)("span",{className:"route-detail-chevron",children:o?I():v()}),(0,e.jsxs)("span",{className:"route-detail-label",children:[(0,e.jsxs)("svg",{className:"route-detail-icon node-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("rect",{x:"3",y:"4",width:"18",height:"6",rx:"2"}),(0,e.jsx)("rect",{x:"3",y:"14",width:"18",height:"6",rx:"2"}),(0,e.jsx)("circle",{cx:"7",cy:"7",r:"1"}),(0,e.jsx)("circle",{cx:"7",cy:"17",r:"1"})]}),(0,e.jsx)("span",{children:"\u8282\u70B9"}),(0,e.jsx)("b",{children:t.outServers.length})]})]}),o&&(0,e.jsx)("div",{style:{overflow:"auto",display:"grid",margin:3,gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))"},children:t.outServers.map(s=>{let m=V.get().find(F=>F.name===s.name);return(0,e.jsx)(Yt,{server:m,route:t},s.name)})}),(0,e.jsxs)("div",{className:`Header route-detail-toggle ${i?"expanded":""}`,style:{fontSize:"1rem",display:"flex"},onClick:()=>{l(!i)},children:[(0,e.jsx)("span",{className:"route-detail-chevron",children:i?I():v()}),(0,e.jsxs)("span",{className:"route-detail-label",children:[(0,e.jsxs)("svg",{className:"route-detail-icon connection-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("path",{d:"M9.5 14.5l5-5"}),(0,e.jsx)("path",{d:"M7.2 17.8l-1 1a3.5 3.5 0 0 1-5-5l3.2-3.2a3.5 3.5 0 0 1 5 0"}),(0,e.jsx)("path",{d:"M16.8 6.2l1-1a3.5 3.5 0 0 1 5 5l-3.2 3.2a3.5 3.5 0 0 1-5 0"})]}),(0,e.jsx)("span",{children:"\u8FDE\u63A5"}),(0,e.jsxs)("b",{children:[p.filter(s=>!s.endTime).length,"/",p.length]})]}),(0,e.jsxs)("button",{type:"button",className:"route-disconnect-all",title:"\u65AD\u5F00\u8BE5\u8DEF\u7531\u7684\u5168\u90E8\u8FDE\u63A5",disabled:!p.some(s=>!s.endTime),onClick:s=>{s.stopPropagation();const m=p.filter(b=>!b.endTime),F=new Set(m.map(b=>b.id));M.set(M.get().filter(b=>!F.has(b.id))),m.forEach(b=>fetch(`${T}close/${b.id}`))},children:[(0,e.jsx)(pe,{type:"disconnect"}),(0,e.jsx)("span",{children:"\u5168\u90E8\u65AD\u5F00"})]})]}),i&&(0,e.jsx)(Ke,{links:p,showRoute:!1})]})]})}),Lt=(0,x.observer)(function(){const[t,A]=(0,c.useState)("hour"),[n,o]=(0,c.useState)("all"),a=he.get(),i=Object.keys(a.nodes).filter(g=>g&&g!=="undefined").sort((g,h)=>g.localeCompare(h,"zh-CN")),l=n==="all"?Object.values(a.nodes):[a.nodes[n]].filter(Boolean),p=g=>l.reduce((h,s)=>h+s[g].up+s[g].dn,0),d=new Map;l.forEach(g=>g[t].forEach(h=>{const s=d.get(h.start)??{up:0,dn:0};s.up+=h.up,s.dn+=h.dn,d.set(h.start,s)}));const u=[...d.entries()].sort((g,h)=>g[0]-h[0]);return(0,e.jsxs)("section",{className:"traffic-analytics panel-card",children:[(0,e.jsxs)("div",{className:"analytics-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u4E1A\u52A1\u6D41\u91CF\u5386\u53F2"}),(0,e.jsx)("p",{children:"\u6570\u636E\u7531 SLB \u7CBE\u786E\u7EDF\u8BA1\u5E76\u6301\u4E45\u5316\u5230 SQLite"})]}),(0,e.jsxs)("div",{className:"analytics-controls",children:[(0,e.jsxs)("select",{value:n,onChange:g=>o(g.target.value),"aria-label":"\u9009\u62E9 VPS",children:[(0,e.jsx)("option",{value:"all",children:"\u5168\u90E8 VPS"}),i.map(g=>(0,e.jsx)("option",{value:g,children:g},g))]}),(0,e.jsx)("div",{className:"range-tabs",children:["minute","hour","day"].map(g=>(0,e.jsx)("button",{className:t===g?"active":"",onClick:()=>A(g),children:g==="minute"?"\u5206\u949F":g==="hour"?"\u5C0F\u65F6":"\u6BCF\u65E5"},g))})]})]}),(0,e.jsxs)("div",{className:"traffic-summary-grid",children:[(0,e.jsx)(fe,{label:"\u5F53\u524D\u5206\u949F",value:p("currentMinute")}),(0,e.jsx)(fe,{label:"\u5F53\u524D\u5C0F\u65F6",value:p("currentHour")}),(0,e.jsx)(fe,{label:"\u4ECA\u65E5\u6D41\u91CF",value:p("currentDay")}),(0,e.jsx)(fe,{label:"\u672C\u8D26\u671F",value:p("billing")})]}),(0,e.jsx)(Mt,{points:u,range:t,nodes:a.nodes,nodeNames:n==="all"?i:i.filter(g=>g===n)}),(0,e.jsxs)("div",{className:"traffic-node-table",children:[(0,e.jsxs)("div",{className:"traffic-node-row head",children:[(0,e.jsx)("span",{children:"VPS"}),(0,e.jsx)("span",{children:"\u5F53\u524D\u5C0F\u65F6"}),(0,e.jsx)("span",{children:"\u4ECA\u65E5"}),(0,e.jsx)("span",{children:"\u672C\u8D26\u671F"})]}),i.map(g=>{const h=a.nodes[g];return(0,e.jsxs)("div",{className:"traffic-node-row",children:[(0,e.jsxs)("strong",{children:[W(g)," ",g]}),(0,e.jsx)("span",{children:E(h.currentHour.up+h.currentHour.dn)}),(0,e.jsx)("span",{children:E(h.currentDay.up+h.currentDay.dn)}),(0,e.jsx)("span",{children:E(h.billing.up+h.billing.dn)})]},g)}),!i.length&&(0,e.jsx)("div",{className:"traffic-empty",children:"\u6B63\u5728\u7B49\u5F85\u6D41\u91CF\u5386\u53F2\u6570\u636E\u2026"})]})]})});function fe({label:r,value:t}){return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:r}),(0,e.jsx)("strong",{children:E(t)})]})}function oe(r){const t=["B","KB","MB","GB","TB"];let A=Math.max(0,Number(r)||0),n=0;for(;A>=1024&&n<t.length-1;)A/=1024,n++;const o=A>=100?0:A>=10?1:2;return`${A.toFixed(o).replace(/\.0+$|(?<=\.[0-9])0$/,"")} ${t[n]}`}function Mt({points:r,range:t,nodes:A,nodeNames:n}){const o=(0,c.useRef)(null),a=(0,c.useRef)(null),i=t==="hour"&&n.length>1;return(0,c.useEffect)(()=>{if(!o.current)return;a.current=B.init(o.current);const l=()=>a.current?.resize();return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),a.current?.dispose(),a.current=null}},[]),(0,c.useEffect)(()=>{const l=a.current;if(!l)return;const p=t==="minute"?s=>new Date(s).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):t==="hour"?s=>new Date(s).toLocaleString([],{month:"2-digit",day:"2-digit",hour:"2-digit"}):s=>new Date(s).toLocaleDateString([],{month:"2-digit",day:"2-digit"}),d=["#2563eb","#10b981","#8b5cf6","#f59e0b","#ef5b78","#06a4bc","#64748b","#84cc16"],u=new Map;n.forEach(s=>u.set(s,new Map(A[s]?.hour.map(m=>[m.start,m])??[])));const g=n.map((s,m)=>({name:s,type:"bar",stack:"\u8282\u70B9\u6D41\u91CF",barMaxWidth:46,emphasis:{focus:"series"},itemStyle:{color:d[m%d.length],borderRadius:m===n.length-1?[3,3,0,0]:0},data:r.map(([F])=>{const b=u.get(s)?.get(F);return{value:(b?.up??0)+(b?.dn??0),up:b?.up??0,dn:b?.dn??0}})})),h=[{name:"\u4E0A\u4F20",type:"line",showSymbol:!1,smooth:.18,data:r.map(([,s])=>s.up),lineStyle:{width:2,color:"#2563eb"},areaStyle:{color:"rgba(37,99,235,.08)"}},{name:"\u4E0B\u8F7D",type:"line",showSymbol:!1,smooth:.18,data:r.map(([,s])=>s.dn),lineStyle:{width:2,color:"#10b981"},areaStyle:{color:"rgba(16,185,129,.08)"}}];l.setOption({animation:!1,tooltip:i?{trigger:"axis",axisPointer:{type:"shadow"},formatter:s=>{const m=s.filter(b=>Number(b.data?.value??0)>0),F=m.reduce((b,w)=>b+Number(w.data.value),0);return`${s[0]?.axisValue??""}<br/>${m.map(b=>`${b.marker}${b.seriesName} <b>${oe(b.data.value)}</b> <small>\u2191${oe(b.data.up)} \u2193${oe(b.data.dn)}</small>`).join("<br/>")}<br/><b>\u5C0F\u65F6\u5408\u8BA1 ${oe(F)}</b>`}}:{trigger:"axis",valueFormatter:s=>oe(s)},legend:{type:"scroll",data:i?n:["\u4E0A\u4F20","\u4E0B\u8F7D"],top:4,right:8,left:i?8:void 0,textStyle:{color:"#68778c"}},grid:{top:42,left:58,right:16,bottom:34},xAxis:{type:"category",boundaryGap:i,data:r.map(([s])=>p(s)),axisLabel:{color:"#8996a8"},axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}}},yAxis:{type:"value",axisLabel:{color:"#8996a8",formatter:s=>oe(s)},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}}},series:i?g:h},{notMerge:!0,lazyUpdate:!0})},[r.map(([l,p])=>`${l}:${p.up}:${p.dn}`).join("|"),t,n.join("|"),n.map(l=>A[l]?.hour.map(p=>`${p.start}:${p.up}:${p.dn}`).join(",")).join("|")]),(0,e.jsx)("div",{className:"traffic-history-chart",ref:o})}const je=(0,x.observer)(function(){const[t,A]=(0,c.useState)("realtime");return(0,e.jsxs)("section",{className:`speed-panel ${R.get()?"expanded":"collapsed"}`,children:[(0,e.jsxs)("button",{className:"speed-panel-header",onClick:()=>{R.set(!R.get())},children:[(0,e.jsx)("span",{className:"speed-panel-chevron",children:R.get()?I():v()}),(0,e.jsxs)("span",{className:"speed-panel-heading",children:[(0,e.jsx)("strong",{children:"\u8FDE\u63A5\u901F\u5EA6"}),(0,e.jsx)("small",{children:t==="realtime"?"\u6700\u8FD1 180 \u79D2":t==="minute"?"\u6700\u8FD1 3 \u5C0F\u65F6\u7684\u5206\u949F\u5747\u901F":"\u6700\u8FD1 30 \u5929\u7684\u5C0F\u65F6\u5747\u901F"})]}),(0,e.jsx)("span",{className:"range-tabs speed-range-tabs",onClick:n=>n.stopPropagation(),children:["realtime","minute","hour"].map(n=>(0,e.jsx)("span",{role:"button",tabIndex:0,className:t===n?"active":"",onClick:()=>A(n),children:n==="realtime"?"\u5B9E\u65F6":n==="minute"?"\u5206\u949F":"\u5C0F\u65F6"},n))}),(0,e.jsxs)("span",{className:"speed-panel-live up",children:[(0,e.jsx)("small",{children:"\u4E0A\u4F20"}),(0,e.jsxs)("strong",{className:`speed-value ${y(G.get())}`,children:[E(G.get()),"/s"]})]}),(0,e.jsxs)("span",{className:"speed-panel-live down",children:[(0,e.jsx)("small",{children:"\u4E0B\u8F7D"}),(0,e.jsxs)("strong",{className:`speed-value ${y(K.get())}`,children:[E(K.get()),"/s"]})]})]}),(R.get()||Te.get())&&(t==="realtime"?(0,e.jsx)(Qt,{}):(0,e.jsx)(_t,{range:t}))]})}),_t=(0,x.observer)(function({range:t}){const A=(0,c.useRef)(null),n=t==="minute"?60:3600,o=new Map;Object.values(he.get().nodes).forEach(l=>l[t].forEach(p=>{const d=o.get(p.start)??{up:0,dn:0};d.up+=p.up,d.dn+=p.dn,o.set(p.start,d)}));const a=[...o.entries()].sort((l,p)=>l[0]-p[0]),i=a.map(([l,p])=>`${l}:${p.up}:${p.dn}`).join("|");return(0,c.useEffect)(()=>{if(!A.current)return;const l=B.init(A.current);l.setOption({tooltip:{trigger:"axis",valueFormatter:d=>`${E(d)}/s`},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"],top:4,right:8,textStyle:{color:"#68778c",fontSize:11}},grid:{top:50,left:58,right:16,bottom:34},xAxis:{type:"category",boundaryGap:!1,data:a.map(([d])=>new Date(d).toLocaleString([],t==="minute"?{hour:"2-digit",minute:"2-digit"}:{month:"2-digit",day:"2-digit",hour:"2-digit"})),axisLabel:{color:"#8996a8",fontSize:10},axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}}},yAxis:{type:"value",axisLabel:{color:"#8996a8",formatter:d=>E(d)},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",type:"line",showSymbol:!1,smooth:.18,data:a.map(([,d])=>d.up/n),lineStyle:{width:2,color:"#1bc394"},areaStyle:{color:"rgba(27,195,148,.07)"}},{name:"\u4E0B\u8F7D\u901F\u5EA6",type:"line",showSymbol:!1,smooth:.18,data:a.map(([,d])=>d.dn/n),lineStyle:{width:2,color:"#106dca"},areaStyle:{color:"rgba(16,109,202,.08)"}}]});const p=()=>l.resize();return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p),l.dispose()}},[i,t]),(0,e.jsx)("div",{className:"speed-chart-body",children:(0,e.jsx)("div",{ref:A,className:"speed-chart-canvas"})})});function ce(r){const t=Date.now();return Array.from({length:r},(A,n)=>new Date(t-(r-n-1)*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))}const Qt=(0,x.observer)(function(){const t=(0,c.useRef)(null),A=(0,c.useRef)(null);return Te.set(!0),(0,c.useEffect)(()=>{R.get()&&A.current&&A.current.resize()},[R.get()]),(0,c.useEffect)(()=>{if(t.current&&!A.current){A.current=B.init(t.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const n={backgroundColor:"transparent",tooltip:{trigger:"axis",formatter:function(o){let[a,i]=o,l=Z.get()[a.dataIndex],p=ee.get()[i.dataIndex];return`\u4E0A\u4F20\u901F\u5EA6:${E(l)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${E(p)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"],top:4,right:8,textStyle:{color:"#68778c",fontSize:11}},xAxis:{type:"category",data:ce(xe),axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisTick:{show:!1},axisLabel:{color:"#8996a8",fontSize:10},splitLine:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}},axisLabel:{color:"#8996a8",fontSize:10,formatter:function(o){return E(o)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:2},areaStyle:{color:"rgba(27, 195, 148, .07)"},smooth:.18},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:2},areaStyle:{color:"rgba(16, 109, 202, .08)"},smooth:.18}]};A.current.setOption(n)}if(A.current){const n=Math.max(Z.get().length,ee.get().length);A.current.setOption({xAxis:{data:ce(n)},series:[{data:Z.get()},{data:ee.get()}]})}return()=>{A.current&&(A.current.dispose(),A.current=null)}},[]),(0,c.useEffect)(()=>(0,C.autorun)(()=>{let n=Z.get(),o=ee.get();document.hidden||R.get()&&A.current&&A.current.setOption({xAxis:{data:ce(Math.max(n.length,o.length))},series:[{data:n.map(a=>a)},{data:o.map(a=>a)}]})})),(0,c.useEffect)(()=>{const n=()=>{A.current&&A.current.resize()};return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),(0,e.jsx)("div",{className:"speed-chart-body",style:{display:R.get()?"block":"none"},children:(0,e.jsx)("div",{ref:t,className:"speed-chart-canvas"})})}),Tt=(0,x.observer)(function(){const[t,A]=(0,c.useState)(!0);return(0,e.jsxs)("section",{className:`latency-panel ${t?"expanded":"collapsed"}`,children:[(0,e.jsxs)("button",{className:"latency-panel-header",onClick:()=>A(!t),children:[(0,e.jsx)("span",{className:"speed-panel-chevron",children:t?I():v()}),(0,e.jsxs)("span",{className:"speed-panel-heading",children:[(0,e.jsx)("strong",{children:"\u8282\u70B9\u5EF6\u8FDF"}),(0,e.jsx)("small",{children:"\u6700\u8FD1 180 \u4E2A\u63A2\u6D4B\u6837\u672C\uFF0C\u77ED\u6682\u65AD\u7EBF\u4FDD\u7559\u5386\u53F2\u66F2\u7EBF"})]}),(0,e.jsxs)("span",{className:"latency-health",children:[(0,e.jsx)("span",{className:"online-dot"}),"\u5B9E\u65F6\u63A2\u6D4B"]})]}),t&&(0,e.jsx)(Ht,{showPings:t})]})}),Ht=(0,x.observer)(function({showPings:t}){const A=(0,c.useRef)(null),n=(0,c.useRef)(null),o=(0,c.useRef)(!1),[a,i]=(0,c.useState)({});return(0,c.useEffect)(()=>{let l=setInterval(()=>{document.hidden||t&&fetch(`${T}pings`).then(p=>p.json()).then(p=>{for(let u of Object.keys(p))p[u]=p[u].map(g=>g>=2e3?2e3:g);i(p)}).catch(p=>{console.log("\u65E0\u6CD5\u83B7\u53D6ping")})},1e3);return()=>clearInterval(l)},[]),o.current=!0,(0,c.useEffect)(()=>{t&&n.current&&n.current.resize()},[t]),(0,c.useEffect)(()=>{if(A.current&&!n.current){n.current=B.init(A.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const l={backgroundColor:"transparent",animation:!1,tooltip:{trigger:"axis",formatter:function(p){return p.map(d=>d.seriesName+":"+d.value+"ms").join("<br/>")},axisPointer:{animation:!1}},xAxis:{type:"category",data:ce(xe),axisLine:{lineStyle:{color:"rgba(137,150,168,.20)"}},axisLabel:{color:"#8996a8",fontSize:10,hideOverlap:!0},splitLine:{show:!1}},yAxis:{type:"value",splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}},axisLabel:{color:"#8996a8",formatter:function(p){return`${p}ms`}}}};n.current.setOption(l)}return n.current&&n.current.setOption({series:[{data:a.bwh},{data:a.yxvm},{data:a.yxvm_cu},{data:a.claw}]}),()=>{n.current&&(n.current.dispose(),n.current=null)}},[]),(0,c.useEffect)(()=>{if(t&&n.current){const l=Object.keys(a).filter(u=>a[u].length<xe||a[u].some(g=>g<2e3)),p=new Set(l.filter(u=>!a[u].length||a[u].slice(-3).every(g=>g>=2e3))),d=document.documentElement.dataset.theme==="dark";n.current.setOption({xAxis:{data:ce(xe)},legend:{data:l,top:5,textStyle:{rich:{online:{color:d?"#cbd6e5":"#4f5f73",fontWeight:650},offline:{color:d?"#617086":"#9aa5b4"}}},formatter:u=>`{${p.has(u)?"offline":"online"}|${u}}`},series:l.map(u=>{const g=p.has(u);return{id:u,name:u,animation:!1,showSymbol:!1,type:"line",itemStyle:g?{color:d?"#536176":"#a3acb8"}:void 0,lineStyle:{width:1,color:g?d?"#536176":"#a3acb8":void 0},data:a[u].map(h=>h>=2e3?0:h)}})},{lazyUpdate:!0,replaceMerge:["series"]})}},[a,t]),(0,c.useEffect)(()=>{const l=()=>{n.current&&n.current.resize()};return window.addEventListener("resize",l),window.addEventListener("orientationchange",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("orientationchange",l)}},[]),(0,e.jsx)("div",{className:"latency-chart-body",style:{display:t?"flex":"none"},children:(0,e.jsx)("div",{ref:A,className:"latency-chart-canvas"})})}),$t=(0,x.observer)(function({link:t,showRoute:A=!0}){const[n,o]=(0,c.useState)(!1),a=(0,c.useRef)(0),i=300,l=(0,c.useRef)(null),p=(0,c.useRef)(null),d=X.get().find(w=>w.name===t.routeName),u=d?.outServers?.some(w=>w.name===t.ss)??!1,g=t.endTime?"\u5DF2\u65AD\u5F00":d?u?"\u5F53\u524D\u51FA\u53E3":"\u5DF2\u5207\u6362":"\u672A\u5339\u914D",h=t.endTime?"ended":d?u?"current":"changed":"missing";function s(w){o(w),t.details=w}(0,c.useEffect)(()=>{if(n&&l.current){p.current=B.init(l.current,{renderer:"canvas",useDirtyRect:!1});const w={tooltip:{trigger:"axis",formatter:function(N){let[Q,P]=N;return`\u4E0A\u4F20\u901F\u5EA6:${E(Q.value)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${E(P.value)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"],top:8,right:12},grid:{top:44,right:18,bottom:28,left:54},xAxis:{type:"category",data:[...Array(60).keys()].map(N=>N),splitLine:{show:!1},axisLine:{lineStyle:{color:"rgba(137,150,168,.25)"}},axisTick:{show:!1},min:0,max:60},yAxis:{type:"value",splitLine:{lineStyle:{color:"rgba(137,150,168,.10)"}},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(N){return E(N)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",smooth:!0,data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:2},areaStyle:{color:"rgba(27,195,148,.08)"}},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",smooth:!0,data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:2},areaStyle:{color:"rgba(16,109,202,.08)"}}]};return p.current.setOption(w),()=>{p.current.dispose()}}},[n]),(0,c.useEffect)(()=>{n&&l.current&&p.current&&p.current.setOption({series:[{data:t.ups},{data:t.dns}]})},[t.ups,t.dns]),(0,c.useEffect)(()=>{n&&l.current&&p.current.resize()},[window.innerWidth,window.innerHeight]);const m=()=>{const w=new Date().getTime(),N=w-a.current;N<i&&N>0&&F(),a.current=w},F=()=>{n||(fetch(`${T}close/${t.id}`),M.set(M.get().filter(w=>w.id!==t.id)))},b=t.upOp===1&&t.up>0||t.dnOp===1&&t.dn>0;return(0,e.jsxs)("li",{style:{margin:3,padding:1,display:"flex",flexDirection:"column"},className:t.endTime?"link-end":"",onClick:w=>{w.detail>1&&F()},onTouchEnd:m,children:[(0,e.jsxs)("div",{className:"link-summary-row",style:{display:"flex",cursor:"pointer",justifyContent:"center",alignItems:"center"},children:[(0,e.jsxs)("span",{className:"link-identity-group",children:[(0,e.jsxs)("span",{className:"link-identity-top",children:[(0,e.jsxs)("span",{className:"link-server",children:[W(t.ss),(0,e.jsx)("b",{children:t.ss})]}),(0,e.jsxs)("span",{className:`link-delay ${t.delay<500?"good":t.delay<1e3?"warn":"bad"}`,children:[t.delay," ms"]}),(0,e.jsxs)("span",{className:"link-time",children:["\u5DF2\u8FDE\u63A5 ",j(t.linkTime,t.endTime)]})]}),A&&(0,e.jsx)("span",{className:"link-identity-meta",children:(0,e.jsxs)("span",{className:`link-route-state ${h}`,title:`\u8DEF\u7531\uFF1A${t.routeName}`,children:[(0,e.jsx)("b",{children:t.routeName||"\u672A\u547D\u540D\u8DEF\u7531"}),h!=="current"&&(0,e.jsx)("small",{children:g})]})})]}),(0,e.jsxs)("span",{className:"link-target-address",style:{textAlign:"center",color:t.endTime?"#acacac":"var(--text)"},onClick:w=>{s(!n),w.detail>1&&w.stopPropagation()},children:[t.addr,":",t.port]}),(0,e.jsxs)("div",{className:"link-speed-groups",children:[(0,e.jsxs)("div",{className:`link-current-speed ${b?"live-active":"live-idle"}`,"aria-label":"\u5B9E\u65F6\u901F\u5EA6",style:{padding:0,margin:0,display:"flex",flexDirection:"column",height:30},children:[(0,e.jsx)(te,{speed:t.up,tag:"\u2191",opacity:1}),(0,e.jsx)(te,{speed:t.dn,tag:"\u2193",opacity:1})]}),(0,e.jsxs)("div",{className:"link-total-speed","aria-label":"\u7D2F\u8BA1\u6D41\u91CF",style:{padding:0,margin:0,display:"flex",marginLeft:15,height:30,flexDirection:"column"},children:[(0,e.jsx)(te,{speed:t.allUp,tag:"\u2191",opacity:1}),(0,e.jsx)(te,{speed:t.allDn,tag:"\u2193",opacity:1})]})]})]}),n&&(0,e.jsxs)("section",{className:"link-detail-panel",onTouchEnd:w=>w.stopPropagation(),onClick:w=>w.stopPropagation(),children:[(0,e.jsxs)("header",{className:"link-detail-header",children:[(0,e.jsx)("span",{className:"link-detail-header-icon",children:(0,e.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M4 12h3l2-6 4 12 2-6h5"})})}),(0,e.jsxs)("span",{className:"link-detail-heading",children:[(0,e.jsx)("strong",{children:"\u8FDE\u63A5\u8BE6\u60C5"}),(0,e.jsxs)("small",{children:["ID #",t.id]})]}),(0,e.jsx)("span",{className:`link-detail-status ${h}`,children:g})]}),(0,e.jsxs)("div",{className:"link-detail-grid",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8DEF\u7531"}),(0,e.jsx)("strong",{children:t.routeName||"\u672A\u547D\u540D\u8DEF\u7531"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u670D\u52A1\u5668"}),(0,e.jsxs)("strong",{children:[W(t.ss)," ",t.ss]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u76EE\u6807\u5730\u5740"}),(0,e.jsxs)("strong",{children:[t.addr,":",t.port]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8FDC\u7A0B\u5730\u5740"}),(0,e.jsx)("strong",{children:t.remote})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u8FDE\u63A5\u65F6\u95F4"}),(0,e.jsx)("strong",{children:new Date(t.linkTime).toLocaleString()})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5F53\u524D\u5EF6\u8FDF"}),(0,e.jsxs)("strong",{className:"link-detail-delay",children:[t.delay," ms"]})]})]}),(0,e.jsxs)("div",{className:"link-detail-chart",children:[(0,e.jsxs)("div",{className:"link-detail-chart-title",children:[(0,e.jsx)("strong",{children:"\u8FDE\u63A5\u901F\u5EA6"}),(0,e.jsx)("span",{children:"\u6700\u8FD1 60 \u4E2A\u91C7\u6837\u70B9"})]}),(0,e.jsx)("div",{ref:l,className:"link-detail-chart-canvas"})]})]})]})}),te=(0,x.observer)(function(t){let{speed:A,opacity:n,style:o}=t;return(0,e.jsx)("span",{className:`fade-out speed-value ${y(A)}`,style:{...o,opacity:n},children:t.tag+E(A)})}),Xt=(0,x.observer)(function(){const[t,A]=(0,c.useState)(!0),[n,o]=(0,c.useState)([]);return(0,c.useEffect)(()=>{t&&fetch(`${T}traffics`).then(i=>i.json()).then(i=>o(i.reverse()));let a=setInterval(()=>{t&&fetch(`${T}traffics`).then(i=>i.json()).then(i=>o(i.reverse()))},2e3);return()=>clearInterval(a)},[t]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{!t&&n.length===0&&o([$e]),A(!t)},children:[t?I():v(),(0,e.jsx)("span",{children:"\u6D41\u91CF"}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("span",{className:`speed-value ${y(le.get().up)}`,children:["\u2191:",E(le.get().up)]}),(0,e.jsx)("span",{style:{width:30}}),(0,e.jsxs)("span",{className:`speed-value ${y(le.get().dn)}`,children:["\u2193:",E(le.get().dn)]}),(0,e.jsx)("span",{style:{flex:1}})]}),t&&(0,e.jsx)(Ut,{traffics:n})]})}),Ut=(0,x.observer)(function(t){let{traffics:A}=t;return(0,e.jsx)("div",{children:A.map((n,o)=>(0,e.jsx)(Pt,{traffic:n},o))})}),Pt=(0,x.observer)(function(t){let{traffic:A}=t,[n,o]=(0,c.useState)(!1),a=Object.values(A).reduce((l,p)=>l+p.up,0),i=Object.values(A).reduce((l,p)=>l+p.dn,0);return(0,e.jsxs)("li",{style:{margin:3,display:"flex",flexDirection:"column"},onClick:l=>{o(!n)},children:[(0,e.jsxs)("div",{style:{display:"flex",cursor:"pointer"},children:[(0,e.jsx)(te,{speed:a,tag:"\u2191:",opacity:1,style:{width:90}}),(0,e.jsx)(te,{speed:i,tag:"\u2193:",opacity:1})]}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsx)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"5px 0"},children:Object.entries(A).map(([l,p])=>(0,e.jsxs)("div",{children:[l,": ",(0,e.jsxs)("span",{className:`speed-value ${y(p.up)}`,children:[E(p.up)," \u2191"]})," ",(0,e.jsxs)("span",{className:`speed-value ${y(p.dn)}`,children:[E(p.dn)," \u2193"]})]},l))})]})]})}),Ot=document.getElementById("root");(0,k.H)(Ot).render((0,e.jsx)(Dt,{})),document.addEventListener("mousedown",function(r){r.detail>1&&r.preventDefault()})})()})();

//# sourceMappingURL=19a37344c5f9b25133a2.main.js.map