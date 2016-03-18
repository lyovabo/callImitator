System.register(['node/path'], function(exports_1) {
    var PATH;
    var Config;
    return {
        setters:[
            function (PATH_1) {
                PATH = PATH_1;
            }],
        execute: function() {
            Config = (function () {
                function Config() {
                    this.http = {
                        host: '0.0.0.0',
                        port: 3001,
                        files: {
                            path: PATH.resolve(__filename, '../../../')
                        }
                    };
                    //console.info(this);
                }
                Config.prototype.load = function () {
                    return Promise.resolve(this);
                };
                return Config;
            })();
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.js.map