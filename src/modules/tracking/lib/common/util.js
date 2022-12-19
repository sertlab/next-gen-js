module.exports.processQueue = function (queue, trackingObj) {
    if (queue) for (var i = 0; i < queue.length; i++) {
        var args = queue[i];
        if (args.length) trackingObj(args[0], args.length > 1 ? args[1] : null, args.length > 2 ? args[2] : null);
    }
};

module.exports.loadEndpoint = function (url) {
    if (!navigator.sendBeacon || !navigator.sendBeacon(url)) {
        // fallback to legacy tracking method
        var img = new Image(1, 1);
        img.src = url;
        img.onload = function () { return; };
    }
};

module.exports.postEndpoint = function (url, param) {
    var xhttp = getXmlHttp();

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(param));
};

function getXmlHttp() {
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
}