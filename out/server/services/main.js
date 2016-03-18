System.register(["common/decorators", "http/ws/server", "http/ws/connection", "../server"], function(exports_1) {
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
    var decorators_1, server_1, connection_1, server_2;
    var MainConnection, MainService;
    return {
        setters:[
            function (decorators_1_1) {
                decorators_1 = decorators_1_1;
            },
            function (server_1_1) {
                server_1 = server_1_1;
            },
            function (connection_1_1) {
                connection_1 = connection_1_1;
            },
            function (server_2_1) {
                server_2 = server_2_1;
            }],
        execute: function() {
            MainConnection = (function (_super) {
                __extends(MainConnection, _super);
                function MainConnection() {
                    var _this = this;
                    _super.call(this, true);
                    this.on('text', function (text) {
                        _this.onCommand(JSON.parse(text));
                    });
                }
                MainConnection.prototype.onCommand = function (command) {
                };
                MainConnection.prototype.sendCommand = function (command) {
                    this.sendText(JSON.stringify(command));
                };
                MainConnection.prototype.toJSON = function () {
                    return {
                        id: this.id,
                        key: this.key,
                        hash: this.hash,
                        headers: this.headers,
                        address: this.socket.address()
                    };
                };
                return MainConnection;
            })(connection_1.WsConnection);
            exports_1("MainConnection", MainConnection);
            MainService = (function (_super) {
                __extends(MainService, _super);
                function MainService() {
                    _super.call(this, this.Server.http.server, 'ws');
                }
                Object.defineProperty(MainService.prototype, "Server", {
                    get: function () {
                        return server_2.CIServer.instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                MainService.prototype.newConnection = function () {
                    return new MainConnection();
                };
                Object.defineProperty(MainService.prototype, "admins", {
                    get: function () {
                        var _this = this;
                        return Object.keys(this.connections).map(function (k) {
                            return _this.connections[k];
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                MainService.prototype.broadcast = function (message) {
                    this.admins.forEach(function (admin) {
                        admin.sendCommand(message);
                    });
                };
                MainService.prototype.start = function () {
                    console.info('Starting ADMIN Service');
                    this.on('connect', function (connection) {
                        console.info("CONNECT", connection.id);
                    });
                    this.on('disconnect', function (connection) {
                        console.info("DISCONNECT", connection.id);
                    });
                };
                __decorate([
                    decorators_1.Cached, 
                    __metadata('design:type', server_2.CIServer)
                ], MainService.prototype, "Server", null);
                return MainService;
            })(server_1.WsServer);
            exports_1("MainService", MainService);
        }
    }
});
//# sourceMappingURL=main.js.map