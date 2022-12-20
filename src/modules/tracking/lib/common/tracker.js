export const Tracker = function (cookieDomains) {
    var recordIdName = 'recordID',
        sessionIdName = 'dmSessionID',
        dmCookieName = 'dm_i',
        sessionCookies = ['utm_medium', 'utm_source', 'utm_campaign'],
        queries = [],
        trackingQueries = {},
        recordIdExpiryDays = 365,
        sessionExpiryDays = 0.01389,
        dmExpiryDays = 0.04167,
        profileCookieDomains = cookieDomains;

    return {
        addPageVars: addPageVars,
        addTrackingVars: addTrackingVars,
        addRecordId: addRecordId,
        addSessionId: addSessionId,
        addCustomVars: addCustomVars,
        addCurrentDomain: addCurrentDomain,
        addEmail: addEmail,
        setQueryValues: setQueryValues,
        buildUrl: buildUrl
    };

    function addPageVars() {
        trackingQueries.page_url = encode(getCurrentUrl());
        trackingQueries.page_title = encode(document.title);
        trackingQueries.page_time = getIsoDate(new Date());
        trackingQueries.user_agent = navigator.userAgent;
    }

    function addTrackingVars() {
        if (queries[dmCookieName]) {
            setCookie(dmCookieName, queries[dmCookieName], dmExpiryDays);
        }

        trackingQueries[dmCookieName] = encode(getCookie(dmCookieName));
        for (var i = 0; i < sessionCookies.length; i++) {
            addSessionCookie(sessionCookies[i]);
        }
    }

    function addRecordId() {
        var recordId = getCookie(recordIdName);
        if (!recordId) recordId = generateUUID();
        setCookie(recordIdName, recordId, recordIdExpiryDays);
        trackingQueries.recordID = encode(recordId);
    }

    function addSessionId() {
        var sessionId = getCookie(sessionIdName);
        if (!sessionId) sessionId = generateUUID();
        setCookie(sessionIdName, sessionId, sessionExpiryDays);
        trackingQueries.sessionID = encode(sessionId);
    }

    function addCustomVars(vars) {
        var params = [];
        if (vars && typeof vars === 'object') for (var key in vars) {
            var value = (vars[key].toString() || '').replace(/&/g, ' ');
            params.push(key.replace(/&/g, ' ') + '=' + value);
        }
        params.length && (trackingQueries.custom_page_values = encode(params.join('&')));
    }

    function addSessionCookie(name) {
        var value = queries[name];
        if (value) {
            setCookie(name, value);
        }
        else {
            value = getCookie(name);
        }
        trackingQueries[name] = encode(value);
    }

    function getCurrentUrl() {
        var url = document.location.href;
        if (queries[dmCookieName]) {
            var queryString = globalThis.location.search.substring(1);
            var urlParts = queryString.split("&");
            var nonDmParts = [];
            for (var i = 0; i < urlParts.length; i++) {
                if (urlParts[i].indexOf(dmCookieName + '=') == -1)
                    nonDmParts.push(urlParts[i]);
            }
            url = (nonDmParts.length == 0)
                ? url.substring(0, url.indexOf("?"))
                : url.substring(0, url.indexOf("?") + 1) + nonDmParts.join("&");
        }
        return url;
    }

    function addCurrentDomain() {
        trackingQueries.domain = encode(getCurrentDomain());
    }

    function getCurrentDomain() {
        return document.location.protocol + '//' + document.location.hostname;
    }

    function addEmail(email) {
        trackingQueries.email = encode(email);
    }

    function setQueryValues() {
        var queryString = globalThis.location.search;
        if (queryString) parseQueryString(queryString);
    }

    function parseQueryString(queryString) {
        var queryList = queryString.substr(1).split(/&/g);
        for (var i = 0; i < queryList.length; i++) {
            addQueryParam(queryList[i]);
        }
    }

    function addQueryParam(param) {
        var parts = param.split(/=/);
        queries[parts[0]] = parts.length === 2 ? decode(parts[1]) : null;
    }

    function buildUrl(baseUrl) {
        var params = [];
        for (var key in trackingQueries) {
            params.push(key + '=' + trackingQueries[key]);
        }
        return baseUrl + (baseUrl.indexOf('?') !== -1 ?
            '&' : '?') + params.join('&');
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        var cookieDomain = getCookieDomain();
        document.cookie = name + "=" + encode(value) + expires + "; path=/" + cookieDomain;
    }

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length >= 2) return decode(parts.pop().split(";").shift());
    }

    function getCookieDomain() {
        var domainSet = "";
        if (profileCookieDomains) {
            var domains = profileCookieDomains.split(",");
            domains.forEach(function (domain) {
                if (globalThis.location.hostname.indexOf(domain) !== -1) {
                    domainSet = ";domain=" + domain;
                }
            });
        }
        return domainSet;
    }

    function generateUUID() {
        if (typeof (globalThis.crypto) != 'undefined' &&
            typeof (globalThis.crypto.getRandomValues) != 'undefined') {
            var buf = new Uint32Array(4);
            globalThis.crypto.getRandomValues(buf);
            var idx = -1;
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                idx++;
                var r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15;
                var v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function getIsoDate(date) {
        return date.toISOString ? date.toISOString().slice(0, 19) : calcIsoString(date);
    }

    function calcIsoString(date) {
        function pad(number) {
            return (number < 10 ? '0' : '') + String(number);
        }
        return date.getUTCFullYear()
            + '-' + pad(date.getUTCMonth() + 1)
            + '-' + pad(date.getUTCDate())
            + 'T' + pad(date.getUTCHours())
            + ':' + pad(date.getUTCMinutes())
            + ':' + pad(date.getUTCSeconds());
    }

    function decode(value) {
        return decodeURIComponent(value);
    }

    function encode(value) {
        return encodeURIComponent(value);
    }
};