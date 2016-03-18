System.register(["./angular/angular", "./module"], function(exports_1) {
    var angular_1, module_1;
    var Definition, Method, Module, Param, Field, Class, Mangular;
    function decorate(args, fn) {
        var def;
        switch (typeof args[0]) {
            case 'function':
            case 'object':
                def = Definition.for(args[0], args[1], args[2]);
                break;
        }
        return def ? fn(def) : function (target, key, desc) {
            fn.apply(void 0, [def = Definition.for(target, key, desc)].concat(args));
        };
    }
    function Run() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, option) {
            return module_1.MangularModule.get(def).addRun(def);
        });
    }
    exports_1("Run", Run);
    function Config() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, option) {
            module_1.MangularModule.get(def).addConfig(def);
        });
    }
    exports_1("Config", Config);
    function Service() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, option) {
            if (def instanceof Class) {
                def.setMetadata("angular:service", option);
            }
            module_1.MangularModule.get(def).addService(def);
        });
    }
    exports_1("Service", Service);
    function Controller() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, option) {
            if (def instanceof Class) {
                def.setMetadata("angular:controller", option);
                module_1.MangularModule.get(def).addController(def);
            }
        });
    }
    exports_1("Controller", Controller);
    function Inject() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, service) {
            if (def instanceof Param) {
                def.setMetadata("angular:inject", service);
            }
            else if (def instanceof Field) {
                def.setMetadata("angular:inject", service);
            }
            else {
                throw new Error("Wrong target for 'Inject' " + def.name);
            }
        });
    }
    exports_1("Inject", Inject);
    function Provider() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, service) {
            if (def instanceof Class) {
                def.setMetadata("angular:provider", service);
                module_1.MangularModule.get(def).addProvider(def);
            }
            else if (def instanceof Method) {
                def.setMetadata("angular:provider", service);
            }
        });
    }
    exports_1("Provider", Provider);
    function Directive() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name, options) {
            if (def instanceof Class) {
                def.setMetadata("angular:directive", name);
                def.setMetadata("angular:directive:options", options);
                module_1.MangularModule.get(def).addDirective(def);
            }
            else if (def instanceof Method) {
                def.setMetadata("angular:directive", name);
                module_1.MangularModule.get(def).addDirective(def);
            }
        });
    }
    exports_1("Directive", Directive);
    function Component() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name, options) {
            if (def instanceof Class) {
                def.setMetadata("angular:component", name);
                def.setMetadata("angular:component:options", options);
                module_1.MangularModule.get(def).addComponent(def);
            }
        });
    }
    exports_1("Component", Component);
    function Filter() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name, options) {
            if (def instanceof Class) {
                def.setMetadata("angular:filter", name);
                def.setMetadata("angular:filter:options", options);
                module_1.MangularModule.get(def).addFilter(def);
            }
        });
    }
    exports_1("Filter", Filter);
    function Value() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name) {
            if (def instanceof Field) {
                def.setMetadata("angular:value", name);
                module_1.MangularModule.get(def).addValue(def);
            }
        });
    }
    exports_1("Value", Value);
    function Const() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name) {
            if (def instanceof Field) {
                def.setMetadata("angular:const", name);
                module_1.MangularModule.get(def).addConst(def);
            }
        });
    }
    exports_1("Const", Const);
    function Factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return decorate(args, function (def, name) {
            if (def instanceof Method) {
                def.setMetadata("angular:factory", name);
                module_1.MangularModule.get(def).addFactory(def);
            }
        });
    }
    exports_1("Factory", Factory);
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            Definition = Reflect.Definition;
            Method = Reflect.Method;
            Param = Reflect.Param;
            Field = Reflect.Field;
            Class = Reflect.Class;
            Mangular = (function () {
                function Mangular() {
                }
                Mangular.start = function (module) {
                    module_1.MangularModule.run(module, angular_1.default);
                };
                return Mangular;
            })();
            exports_1("Mangular", Mangular);
            exports_1("default",Mangular);
        }
    }
});
//# sourceMappingURL=annotate.js.map