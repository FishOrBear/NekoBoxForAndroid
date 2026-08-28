(function () {
    const nativeFetch = window.fetch.bind(window);

    window.fetch = async function (input, init) {
        const response = await nativeFetch(input, init);
        const url = typeof input === "string" ? input : input && input.url;
        if (!url || !/(^|\/)traffic_history(?:[?#]|$)/.test(url)) return response;

        const payload = await response.clone().json();
        for (const node of Object.values(payload.nodes || {})) {
            for (const range of ["minute", "hour", "day"]) {
                node[range] = Array.isArray(node[range]) ? node[range].map(bucket => ({
                    ...bucket,
                    start: finite(bucket.start),
                    up: finite(bucket.up),
                    dn: finite(bucket.dn)
                })) : [];
            }
        }
        return new Response(JSON.stringify(payload), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    };

    function finite(value) {
        const number = Number(value);
        return Number.isFinite(number) ? number : 0;
    }
})();
