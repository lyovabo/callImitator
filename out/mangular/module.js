System.register([], function(exports_1) {
    var Definition, Method, Module, Class, Param, Member, Scope, Field, Path, modules, MangularModule;
    return {
        setters:[],
        execute: function() {
            Method = Reflect.Method;
            Class = Reflect.Class;
            Param = Reflect.Param;
            Member = Reflect.Member;
            Scope = Reflect.Scope;
            Field = Reflect.Field;
            Path = Runtime.Path;
            modules = {};
            MangularModule = (function () {
                function MangularModule(module) {
                    this.module = module;
                    this.configs = [];
                    this.runs = [];
                    this.services = [];
                    this.providers = [];
                    this.controllers = [];
                    this.components = [];
                    this.directives = [];
                    this.filters = [];
                    this.constants = [];
                    this.factories = [];
                    this.values = [];
                    this.initialized = false;
                }
                MangularModule.loadCss = function (url) {
                    var link = document.createElement('link');
                    link.href = url;
                    link.rel = "stylesheet";
                    document.head.appendChild(link);
                };
                MangularModule.getClassFunction = function (clazz, modifier) {
                    var fields = clazz.members(function (f) { return ((f instanceof Field) && f.scope == Scope.INSTANCE && f.hasMetadata("angular:inject")); });
                    var instanceParams = fields.map(function (f) {
                        return f.getMetadata("angular:inject") || (f.type == Object ? f.name : f.type.name);
                    });
                    var instanceFields = fields.map(function (f) {
                        return f.name;
                    });
                    var constructParams = clazz.params.map(function (p) {
                        return p.getMetadata("angular:inject") || (p.type == Object ? p.name : p.type.name);
                    });
                    var closure = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        var instance = Object.create(clazz.constructor.prototype);
                        for (var i = 0; i < instanceFields.length; i++) {
                            instance[instanceFields[i]] = args.shift();
                        }
                        clazz.constructor.apply(instance, args);
                        if (modifier) {
                            instance = modifier(instance) || instance;
                        }
                        return instance;
                    };
                    closure['$inject'] = instanceParams.concat(constructParams);
                    return closure;
                };
                MangularModule.getMethodFunction = function (method) {
                    var target = method.owner.constructor;
                    if (method.scope == Scope.INSTANCE) {
                        target = target.prototype;
                    }
                    var fn = Object.getOwnPropertyDescriptor(target, method.name).value;
                    if (method.scope == Scope.STATIC) {
                        fn = fn.bind(target);
                    }
                    fn['$inject'] = method.params.map(function (p, i) {
                        var injection = p.getMetadata("angular:inject");
                        if (!injection) {
                            injection = p.type === Object ? p.name : p.type.name;
                        }
                        return injection;
                    });
                    return fn;
                };
                MangularModule.getFieldValue = function (field) {
                    var target = field.owner.constructor;
                    if (field.scope == Scope.INSTANCE) {
                        throw new Error('Value should be static field');
                    }
                    else {
                        return Object.getOwnPropertyDescriptor(target, field.name).value;
                    }
                };
                MangularModule.run = function (main, angular) {
                    for (var m in modules) {
                        modules[m].init(angular);
                    }
                    modules[main].run(angular);
                };
                MangularModule.get = function (def) {
                    var module;
                    if (def instanceof Param) {
                        var owner = def.owner;
                        if (owner instanceof Method) {
                            module = owner.owner.owner;
                        }
                        else if (owner instanceof Class) {
                            module = owner.owner;
                        }
                    }
                    else if (def instanceof Member) {
                        module = def.owner.owner;
                    }
                    else if (def instanceof Class) {
                        module = def.owner;
                    }
                    var mModule = modules[module.name];
                    if (!mModule) {
                        module.setMetadata("angular", mModule = modules[module.name] = new MangularModule(module));
                    }
                    return mModule;
                };
                Object.defineProperty(MangularModule.prototype, "name", {
                    get: function () {
                        return this.module.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                MangularModule.prototype.addConfig = function (def) {
                    this.configs.push(def);
                };
                MangularModule.prototype.addFactory = function (def) {
                    this.factories.push(def);
                };
                MangularModule.prototype.addRun = function (def) {
                    this.runs.push(def);
                };
                MangularModule.prototype.addProvider = function (def) {
                    this.providers.push(def);
                };
                MangularModule.prototype.addService = function (def) {
                    this.services.push(def);
                };
                MangularModule.prototype.addController = function (def) {
                    this.controllers.push(def);
                };
                MangularModule.prototype.addDirective = function (def) {
                    this.directives.push(def);
                };
                MangularModule.prototype.addComponent = function (def) {
                    this.components.push(def);
                };
                MangularModule.prototype.addFilter = function (def) {
                    this.filters.push(def);
                };
                MangularModule.prototype.addValue = function (def) {
                    this.values.push(def);
                };
                MangularModule.prototype.addConst = function (def) {
                    this.constants.push(def);
                };
                MangularModule.prototype.create = function (angular) {
                    var _this = this;
                    this.dependencies = ['ng'];
                    this.module.dependencies.forEach(function (d) {
                        switch (d) {
                            case 'mangular/angular/animate':
                                _this.dependencies.push('ngAnimate');
                                break;
                            case 'mangular/angular/aria':
                                _this.dependencies.push('ngAria');
                                break;
                            case 'mangular/angular/material':
                                _this.dependencies.push('ngMaterial');
                                break;
                            case 'mangular/angular/route':
                                _this.dependencies.push('ngRoute');
                                break;
                            case 'mangular/angular/table':
                                _this.dependencies.push('md.data.table');
                                break;
                            case 'mangular/angular/ui-router':
                                _this.dependencies.push('ui.router');
                                break;
                            default:
                                if (modules[d]) {
                                    modules[d].init(angular);
                                    _this.dependencies.push(d);
                                }
                                break;
                        }
                    });
                    this.dependencies = this.dependencies.filter(function (e, i, a) { return a.indexOf(e) == i; });
                    return angular.module(this.name, this.dependencies);
                };
                MangularModule.prototype.init = function (angular) {
                    if (!this.initialized) {
                        this.initialized = true;
                        //console.info("INIT",this.name);
                        var aModule = this.create(angular);
                        for (var _i = 0, _a = this.constants; _i < _a.length; _i++) {
                            var constant = _a[_i];
                            this.initConst(aModule, constant);
                        }
                        for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
                            var value = _c[_b];
                            this.initValue(aModule, value);
                        }
                        for (var _d = 0, _e = this.configs; _d < _e.length; _d++) {
                            var config = _e[_d];
                            this.initConfig(aModule, config);
                        }
                        for (var _f = 0, _g = this.runs; _f < _g.length; _f++) {
                            var run = _g[_f];
                            this.initRun(aModule, run);
                        }
                        for (var _h = 0, _j = this.providers; _h < _j.length; _h++) {
                            var provider = _j[_h];
                            this.initProvider(aModule, provider);
                        }
                        for (var _k = 0, _l = this.factories; _k < _l.length; _k++) {
                            var factory = _l[_k];
                            this.initFactory(aModule, factory);
                        }
                        for (var _m = 0, _o = this.services; _m < _o.length; _m++) {
                            var service = _o[_m];
                            this.initService(aModule, service);
                        }
                        for (var _p = 0, _q = this.controllers; _p < _q.length; _p++) {
                            var controller = _q[_p];
                            this.initController(aModule, controller);
                        }
                        for (var _r = 0, _s = this.directives; _r < _s.length; _r++) {
                            var directive = _s[_r];
                            this.initDirective(aModule, directive);
                        }
                        for (var _t = 0, _u = this.components; _t < _u.length; _t++) {
                            var component = _u[_t];
                            this.initComponent(aModule, component);
                        }
                        for (var _v = 0, _w = this.filters; _v < _w.length; _v++) {
                            var filter = _w[_v];
                            this.initFilter(aModule, filter);
                        }
                    }
                };
                MangularModule.prototype.initConfig = function (module, service) {
                    var fn = MangularModule.getMethodFunction(service);
                    module.config(fn);
                };
                MangularModule.prototype.initRun = function (module, service) {
                    var fn = MangularModule.getMethodFunction(service);
                    module.run(fn);
                };
                MangularModule.prototype.initConst = function (module, service) {
                    var field = service;
                    var name = field.getMetadata("angular:const") || field.name;
                    var value = MangularModule.getFieldValue(field);
                    module.constant(name, value);
                };
                MangularModule.prototype.initValue = function (module, service) {
                    var field = service;
                    var name = field.getMetadata("angular:value") || field.name;
                    var value = MangularModule.getFieldValue(field);
                    module.value(name, value);
                };
                MangularModule.prototype.initProvider = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var metadata = clazz.getMetadata("angular:provider");
                        var name = metadata || clazz.name;
                        var provide = clazz.instance['provide'];
                        module.provider(name, MangularModule.getClassFunction(clazz, function (instance) {
                            instance.$get = provide ? MangularModule.getMethodFunction(provide) : instance.provide || instance.$get;
                        }));
                    }
                };
                MangularModule.prototype.initFactory = function (module, service) {
                    if (service instanceof Method) {
                        var method = service;
                        var name = method.getMetadata("angular:factory") || method.name;
                        module.factory(name, MangularModule.getMethodFunction(method));
                    }
                };
                MangularModule.prototype.initService = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var metadata = clazz.getMetadata("angular:service");
                        var name = metadata || clazz.name;
                        module.service(name, MangularModule.getClassFunction(clazz));
                    }
                };
                MangularModule.prototype.initController = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var metadata = clazz.getMetadata("angular:controller");
                        var name = metadata || clazz.name;
                        module.controller(name, MangularModule.getClassFunction(clazz));
                    }
                };
                MangularModule.prototype.initDirective = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var name = clazz.getMetadata("angular:directive") || clazz.name;
                        var options = clazz.getMetadata("angular:directive:options") || {};
                        options.controller = MangularModule.getClassFunction(clazz);
                        options.controllerAs = options.controllerAs || '$ctrl';
                        var compile = clazz.constructor['compile'];
                        var link = clazz.constructor['link'];
                        options.compile = options.compile || compile;
                        if (!options.compile) {
                            options.link = options.link || link;
                            if (!options.link) {
                                var preLink = clazz.constructor['preLink'];
                                var postLink = clazz.constructor['postLink'];
                                if (preLink || postLink) {
                                    options.link = {};
                                    if (preLink) {
                                        options.pre = preLink.bind(clazz.constructor);
                                    }
                                    if (postLink) {
                                        options.post = postLink.bind(clazz.constructor);
                                    }
                                }
                            }
                            else {
                                options.link = options.link.bind(clazz.constructor);
                            }
                        }
                        else {
                            options.compile = options.compile.bind(clazz.constructor);
                        }
                        module.directive(name, function () {
                            return options;
                        });
                    }
                    else if (service instanceof Method) {
                        module.directive(service.name, MangularModule.getMethodFunction(service));
                    }
                };
                MangularModule.prototype.initComponent = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var name = clazz.getMetadata("angular:component") || clazz.name;
                        var options = clazz.getMetadata("angular:component:options") || {};
                        options.controller = MangularModule.getClassFunction(clazz);
                        module.component(name, options);
                    }
                };
                MangularModule.prototype.initFilter = function (module, service) {
                    if (service instanceof Class) {
                        var clazz = service;
                        var name = clazz.getMetadata("angular:filter") || clazz.name;
                        var options = clazz.getMetadata("angular:filter:options") || {};
                        var closure = MangularModule.getClassFunction(clazz, function (instance) {
                            instance = instance.filter.bind(instance);
                            instance.$stateful = options.stateful;
                            instance.$digest = options.digest;
                            return instance;
                        });
                        module.filter(name, closure);
                    }
                };
                MangularModule.prototype.run = function (angular) {
                    var _this = this;
                    angular.element(document).ready(function () {
                        console.info("Mangular.start", _this.module.name);
                        var mMaterials = System.modules['mangular/angular/material'];
                        var mTable = System.modules['mangular/angular/table'];
                        if (mMaterials) {
                            MangularModule.loadCss(Path.dirname(mMaterials.url) + '/material.css');
                        }
                        if (mTable) {
                            MangularModule.loadCss(Path.dirname(mTable.url) + '/table.css');
                        }
                        angular.bootstrap(document, [_this.module.name]);
                    });
                };
                return MangularModule;
            })();
            exports_1("MangularModule", MangularModule);
        }
    }
});
//# sourceMappingURL=module.js.map