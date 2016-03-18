System.register(["common/decorators", "./config", "./services/main", "./services/http", 'http/handlers/files', 'http/handlers/rest'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var decorators_1, config_1, main_1, http_1;
    var CIServer;
    return {
        setters:[
            function (decorators_1_1) {
                decorators_1 = decorators_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            CIServer = (function () {
                function CIServer() {
                }
                Object.defineProperty(CIServer, "instance", {
                    get: function () {
                        return new CIServer();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CIServer.prototype, "config", {
                    get: function () {
                        return new config_1.Config();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CIServer.prototype, "http", {
                    get: function () {
                        return new http_1.HttpService();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CIServer.prototype, "main", {
                    get: function () {
                        return new main_1.MainService();
                    },
                    enumerable: true,
                    configurable: true
                });
                CIServer.prototype.run = function () {
                    var _this = this;
                    return this.config.load().then(function (c) {
                        _this.http.start();
                        _this.main.start();
                        return _this;
                    });
                };
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', config_1.Config)
                ], CIServer.prototype, "config", null);
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', http_1.HttpService)
                ], CIServer.prototype, "http", null);
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', main_1.MainService)
                ], CIServer.prototype, "main", null);
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', CIServer)
                ], CIServer, "instance", null);
                return CIServer;
            })();
            exports_1("CIServer", CIServer);
            CIServer.instance.run().then(function (s) { console.info("aaaaa Started"); }, function (e) { console.info(e.stack || e); });
        }
    }
});
//export default CIServer.instance; 
//# sourceMappingURL=server.js.map