export  function init() {

    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    };
    
    /**
     * 
     */
    var WidgetBootStrap = (function () {
        /**
         * constructor
         */
        function WidgetBootStrap() {
            this.prefix = "comapi.hub.";
            var localLogLevel = parseInt(this.getItem("logLevel"));
            this.logLevel = Number.isInteger(localLogLevel) ? localLogLevel : 1;
        }

        Object.defineProperty(WidgetBootStrap.prototype, "logLevel", {
            set: function (logLevel) {
                if(Number.isInteger(logLevel)){
                    this._logLevel = logLevel;
                }
            },
            get: function () {
                return this._logLevel;
            },
            enumerable: true,
            configurable: true
        });

        WidgetBootStrap.prototype.info = function(){
            if(this.logLevel > 3){
                console.info.apply(null, arguments);
            }            
        }
        
        WidgetBootStrap.prototype.log = function(){
            if(this.logLevel > 2){
                console.log.apply(null, arguments);
            }            
        }

        WidgetBootStrap.prototype.error = function(){
            if(this.logLevel > 0){
                console.error.apply(null, arguments);
            }            
        }

        WidgetBootStrap.prototype.warn = function(){
            if(this.logLevel > 1){
                console.warn.apply(null, arguments);
            }
        }        
        /**
         * 
         */
        WidgetBootStrap.prototype.removeItem = function (key) {
            if (_ddgChatConfig.storage && _ddgChatConfig.storage.removeItem) {
                return _ddgChatConfig.storage.removeItem(this.prefix + key);
            } else {
                return localStorage.removeItem(this.prefix + key);
            }
        }
        /**
         * 
         */
        WidgetBootStrap.prototype.getItem = function (key) {
            if (_ddgChatConfig.storage && _ddgChatConfig.storage.getItem) {
                return _ddgChatConfig.storage.getItem(this.prefix + key);
            } else {
                return localStorage.getItem(this.prefix + key);
            }
        }

        /**
         * 
         */
        WidgetBootStrap.prototype.setItem = function (key, value) {
            if (_ddgChatConfig.storage && _ddgChatConfig.storage.setItem) {
                _ddgChatConfig.storage.setItem(this.prefix + key, value);
            } else {
                localStorage.setItem(this.prefix + key, value);
            }
        }

        /**
         * Local storage helper function
         */
        WidgetBootStrap.prototype.getObject = function (key) {
            var obj = null;
            var raw = this.getItem(key);
            try {
                obj = JSON.parse(raw);
            }
            catch (e) {
                this.error("caught exception in utilsService.getObject(" + key + "): " + e);
            }
            return obj;
        }

        /**
         * Local storage helper function
         */
        WidgetBootStrap.prototype.setObject = function (key, value) {
            var succeeded = true;
            try {
                var stringified = JSON.stringify(value);
                this.setItem(key, stringified);
            }
            catch (e) {
                this.log("caught exception in utilsService.setObject(" + key + "): " + e);
                succeeded = false;
            }
            return succeeded;
        }
        /**
         * 
         */
        WidgetBootStrap.prototype.initialise = function () {
            var self = this;

            if (!_ddgChatConfig.urlBase) {
                _ddgChatConfig.urlBase = "https://webchat.dotdigital.com";
            }

            // do we have a cached config
            var cached = this.getObject("config");

            if (cached) {
                if (cached.version && cached.cacheMinutes && cached.teams) {
                    var minutes = Math.abs(new Date(cached.cachedOn) - new Date()) / (60 * 1000);
                    if (minutes < cached.cacheMinutes &&
                        _ddgChatConfig.apiSpace === cached.apiSpace) {
                        self.log("Running off cached widget config", minutes);
                        self.bootstrap(cached);
                    } else {
                        cached = null;
                    }
                } else {
                    cached = null;
                }
            }

            if (!cached) {
                self.log("Querying widget config");
                this.getConfig(function (config) {
                    self.log("getConfig() =>", config);
                    if (config.version && config.cacheMinutes && config.teams) {
                        config.cachedOn = new Date().toISOString();
                        config.apiSpace = _ddgChatConfig.apiSpace;
                        self.setObject("config", config);
                        self.bootstrap(config);
                    }
                });
            }
        }

        /**
         * 
         */
        WidgetBootStrap.prototype.getUrlBase = function () {
            var name = "bootstrap.js";
            var element;
            if(document.getElementById("comapi-widget")){
                element = document.getElementById("comapi-widget");
            } else {
                element = document.getElementById("ddg-chat-widget");
            }
            var src = element.src;
            var l = src.length;
            var length = name.length;
            if (src.substr(l - length) == name) {
                return src.substr(0, l - length);
            }
        }

        /**
         * 
         */
        WidgetBootStrap.prototype.appendScript = function (src, id) {
            var js = document.createElement("script");
            js.src = src;
            js.id = id;
            var cjs = document.getElementsByTagName("script")[0];
            cjs.parentNode.insertBefore(js, cjs);
        }

        /**
         * 
         */
        WidgetBootStrap.prototype.getConfig = function (callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var config = JSON.parse(this.responseText);
                    callback(config);
                }
            };
            xhr.open("GET", _ddgChatConfig.urlBase + "/apispaces/" + _ddgChatConfig.apiSpace + "/widget/config/combined", true);
            xhr.send();
        }

        /**
         * 
         */
        WidgetBootStrap.prototype.bootstrap = function (config) {
            this.log("bootstrap()", config);
            var urlBase = _ddgChatConfig.urlBase + "/widgets/";
            this.log("urlBase: " + urlBase);
            document.head.appendScript(urlBase + config.version + '/bridge.js', "comapi-widget-bridge");

        }

        return WidgetBootStrap;
    }());

    if(window.comapiConfig){
        window._ddgChatConfig = window.comapiConfig;
    }
    var widgetBootstrap = new WidgetBootStrap();

    setTimeout(function () {
        widgetBootstrap.initialise();
    }, _ddgChatConfig.launchTimeout === undefined ? 5000 : _ddgChatConfig.launchTimeout);


};