System.register(["common/decorators", "http/server", "../server"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var decorators_1, server_1, server_2;
    var HttpService;
    return {
        setters:[
            function (decorators_1_1) {
                decorators_1 = decorators_1_1;
            },
            function (server_1_1) {
                server_1 = server_1_1;
            },
            function (server_2_1) {
                server_2 = server_2_1;
            }],
        execute: function() {
            HttpService = (function (_super) {
                __extends(HttpService, _super);
                function HttpService() {
                    //console.log(this.CI.config.http);
                    _super.call(this, this.CI.config.http);
                }
                Object.defineProperty(HttpService.prototype, "CI", {
                    get: function () {
                        return server_2.CIServer.instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                HttpService.prototype.start = function () {
                    _super.prototype.start.call(this);
                    console.info('Starting HTTP Service');
                    console.info(" remote : http://" + this.config.host + ":" + this.config.port);
                    console.info(" local  : " + this.config.files.path);
                };
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', server_2.CIServer)
                ], HttpService.prototype, "CI", null);
                return HttpService;
            })(server_1.Server);
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=http.js.map