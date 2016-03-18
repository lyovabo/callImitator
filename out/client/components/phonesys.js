System.register(["mangular/annotate", "../template/phonesys", "../services/data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotate_1, phonesys_1, data_1;
    var phonesysComponent;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            },
            function (phonesys_1_1) {
                phonesys_1 = phonesys_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            phonesysComponent = (function () {
                function phonesysComponent() {
                    this.scope.users = [{ id: 'aaa' }, { id: 'aa1' }, { id: 'aa2' }, { id: 'aa3' },
                        { id: 'aaa' }, { id: 'aa1' }, { id: 'aa2' }, { id: 'aa3' },
                        { id: 'aaa' }, { id: 'aa1' }, { id: 'aa2' }, { id: 'aa3' }];
                }
                phonesysComponent.prototype.refresh = function () {
                    console.log('refresh was called');
                    this.state.go(this.state.current, this.state.params);
                };
                __decorate([
                    annotate_1.Inject('$state'), 
                    __metadata('design:type', Object)
                ], phonesysComponent.prototype, "state", void 0);
                __decorate([
                    annotate_1.Inject('$scope'), 
                    __metadata('design:type', Object)
                ], phonesysComponent.prototype, "scope", void 0);
                __decorate([
                    annotate_1.Inject('$rootScope'), 
                    __metadata('design:type', Object)
                ], phonesysComponent.prototype, "root", void 0);
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', data_1.DataService)
                ], phonesysComponent.prototype, "data", void 0);
                phonesysComponent = __decorate([
                    annotate_1.Component('ciPhonesys', {
                        template: phonesys_1.default
                    }), 
                    __metadata('design:paramtypes', [])
                ], phonesysComponent);
                return phonesysComponent;
            })();
        }
    }
});
//# sourceMappingURL=phonesys.js.map