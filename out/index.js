System.register(["mangular/annotate", "mangular/angular/material", "mangular/angular/ui-router", "mangular/angular/table"], function(exports_1) {
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
    var annotate_1, annotate_2, annotate_3, annotate_4, annotate_5;
    var MyApp;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
                annotate_3 = annotate_1_1;
                annotate_4 = annotate_1_1;
                annotate_5 = annotate_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                }
                MyApp.setup = function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
                    $urlRouterProvider.otherwise('/phonesys');
                    $stateProvider
                        .state('phoneSys', {
                        url: '/phonesys',
                        template: "<wc-phonesys></wc-phonesys>",
                        data: {
                            title: 'phonesys'
                        }
                    });
                    this.config.api.url = "ws://" + window.location.host + "/admin";
                };
                MyApp.run = function (rootScope, $state) {
                    console.log('index');
                    rootScope.title = "None";
                    rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        rootScope.title = toState.data.title || "No Title";
                        //if(toState.data.access == 'AUTHORIZED' &&  !rootScope.globals.currentUser){
                        //    $state.go('/login');
                        //}
                        //if(toState.data.access =='UNAUTHORIZED' &&  rootScope.globals.currentUser){
                        //    $state.go(fromState.name);
                        //}
                    });
                };
                MyApp.config = {
                    api: {
                        url: 'ws://localhost:3001/'
                    }
                };
                __decorate([
                    annotate_5.Value, 
                    __metadata('design:type', Object)
                ], MyApp, "config", void 0);
                __decorate([
                    annotate_2.Config,
                    __param(0, annotate_4.Inject('$urlRouterProvider')),
                    __param(1, annotate_4.Inject('$stateProvider')),
                    __param(2, annotate_4.Inject('$mdThemingProvider')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "setup", null);
                __decorate([
                    annotate_3.Run,
                    __param(0, annotate_4.Inject('$rootScope')),
                    __param(1, annotate_4.Inject('$state')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "run", null);
                return MyApp;
            })();
            annotate_1.default.start('client/index');
        }
    }
});
//# sourceMappingURL=index.js.map