System.register(["mangular/annotate", "./data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var annotate_1, annotate_2, data_1;
    var ApiService;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                function ApiService(config) {
                    var _this = this;
                    window['Api'] = this;
                    this.socket = new WebSocket(config.api.url, ['wcb']);
                    this.socket.addEventListener("open", function (e) {
                        console.info(e);
                    });
                    this.socket.addEventListener("close", function (e) {
                        console.info(e);
                    });
                    this.socket.addEventListener("message", function (e) {
                        _this.onCommand(JSON.parse(e.data));
                    });
                }
                ApiService.prototype.onCommand = function (command) {
                    switch (command.type) {
                        case 'user':
                            this.data.createUser(command.user);
                            break;
                        case 'statusUpdate':
                            console.log(command.status);
                            this.data.updateStatus(command.status);
                            break;
                    }
                };
                __decorate([
                    annotate_2.Inject('$rootScope'), 
                    __metadata('design:type', Object)
                ], ApiService.prototype, "root", void 0);
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', data_1.DataService)
                ], ApiService.prototype, "data", void 0);
                ApiService = __decorate([
                    annotate_1.Service,
                    __param(0, annotate_2.Inject('config')), 
                    __metadata('design:paramtypes', [Object])
                ], ApiService);
                return ApiService;
            })();
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=api.js.map