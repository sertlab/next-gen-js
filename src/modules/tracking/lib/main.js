import {Tracker} from './common/tracker.js';
import {processQueue,loadEndpoint,postEndpoint} from './common/utils.js';

export function init(endpointDomainResolver) {
    
    var publicName = window.dmtrackingobjectname;
    var queue = window[publicName].q;
    var insightVersion = 'webInsight v1.0';
    var profileCode;
    var profileCookieDomains;

    window[publicName] = function (command) {
        var params = arguments;
        console.log(params)
        switch (command) {
            case 'create': create(params[1], params[2]); break;
            case 'track': trackRequest(params[1]); break;
            case 'identify': identifyUser(params[1]); break;
            case 'cartInsight': trackCart(params[1]); break;
            case 'version': getInsightVersion(); break;
        }
    };

    processQueue(queue, window[publicName]);

    function create(code, cookieDomains) {
        profileCode = code
        profileCookieDomains = cookieDomains;
    }

    function newTracker() {
        return Tracker(profileCookieDomains)
    }

    function trackRequest(customVars) {
        var t = newTracker();
        t.setQueryValues();
        t.addPageVars();
        t.addTrackingVars();
        t.addCustomVars(customVars);
        t.addRecordId();
        t.addSessionId();
        loadEndpoint(t.buildUrl(buildUrlBase('pagevisit')));
    }

    function identifyUser(email) {
         var t = newTracker();
        t.addRecordId();
        t.addCurrentDomain();
        t.addEmail(email);
        t.addSessionId();
        loadEndpoint(t.buildUrl(buildUrlBase('identify')));
    }

    function trackCart(param) {
         var t = newTracker();
        t.addRecordId();
        t.addSessionId();
        postEndpoint(t.buildUrl(buildUrlBase('cartInsight')), param);
    }

    function getInsightVersion() {
        console.log(insightVersion);
    }

    function buildUrlBase(endpoint) {
        var accountId = profileCode || window.dm_insight_id; 
        return endpointDomainResolver(accountId) + endpoint + '?accountID=' + accountId;
    }
};