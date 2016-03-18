System.register(["common/events", "mangular/annotate"], function(exports_1) {
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
    var events_1, annotate_1, annotate_2;
    var DataService;
    return {
        setters:[
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            }],
        execute: function() {
            DataService = (function (_super) {
                __extends(DataService, _super);
                function DataService() {
                    _super.call(this);
                    this.allOnlineUsers = 0;
                    this.scope = this.root.$new(true);
                    this.scope.statuses = [
                        {
                            name: 'All',
                            id: 'all'
                        },
                        {
                            name: 'Online',
                            id: 'online'
                        },
                        {
                            name: 'Offline',
                            id: 'offline'
                        },
                        {
                            name: 'Is Talking',
                            id: 'istalking'
                        }
                    ];
                }
                //get users():User[]{
                //    return <User[]>User.all();
                //}
                //
                //getUser(id:string):User{
                //    return <User>User.get(id);
                //}
                DataService.prototype.updateStatus = function (res) {
                    res.forEach(function (s) {
                        //var user = this.getUser(s.id);
                        //var d = (s.status.isOnline == user.status.isOnline)?false:true;
                        //user.set('status', s.status);
                        //if(d){
                        //    user.groups.map(group=>{
                        //        if(s.status.isOnline) {
                        //            var onlineUsers = group.get('onlineUsers');
                        //            group.set('onlineUsers',onlineUsers+1);
                        //            this.allOnlineUsers++;
                        //        } else {
                        //            var onlineUsers = group.get('onlineUsers');
                        //            group.set('onlineUsers',onlineUsers-1)
                        //            this.allOnlineUsers--;
                        //        }
                        //        this.scope.groups.map((g:any)=>{
                        //            if(g.id == 'All') {
                        //                g.onlineUsers = this.allOnlineUsers;
                        //            }
                        //            if(g.id == group.id) {
                        //                g.onlineUsers = group.get('onlineUsers');
                        //            }
                        //        });
                        //    });
                        //}
                    });
                    this.scope.users.forEach(function (u) {
                        res.forEach(function (s) {
                            if (u.id == s.userId) {
                                u.status.type = s.status.type;
                                u.status.isOnline = s.status.isOnline;
                                u.status.isTalking = s.status.isTalking;
                                u.status.changedAt = s.status.changedAt;
                                u.status.talkingAt = s.status.talkingAt;
                                u.status.servers = s.status.servers;
                                u.status.stations = s.status.stations;
                            }
                        });
                    });
                    this.scope.$apply();
                };
                DataService.prototype.createGroup = function (group) {
                    //return Group.new(group);
                };
                DataService.prototype.returnItemFromScope = function (arrayName, itemId) {
                    return this.scope[arrayName].filter(function (r) {
                        if (r.id == itemId) {
                            return true;
                        }
                    });
                };
                DataService.prototype.createUser = function (user) {
                    //var user = User.new({id:user.id}).set(user);
                    //user.groups.map(group=>{
                    //    var gr  = this.createGroup(group);
                    //    var users = gr.get('users');
                    //    gr.set('users',users+1);
                    //    if(user.hasOwnProperty('status') && user.status.isOnline) {
                    //        var onlineUsers = gr.get('onlineUsers');
                    //        gr.set('onlineUsers',onlineUsers+1);
                    //        this.allOnlineUsers++;
                    //    }
                    //});
                    //var groups = [{
                    //    'id':'All',
                    //    'name':'All',
                    //    'users':User.all().length,
                    //    'onlineUsers': this.allOnlineUsers
                    //}]
                    //Group.all().forEach((r:any,index:number)=>{
                    //    groups.push({
                    //        'id'          : r.id,
                    //        'name'        : r.name,
                    //        'users'       : r.users,
                    //        'onlineUsers' : r.onlineUsers
                    //    });
                    //})
                    //this.scope.users = User.list;
                    //this.scope.groups = groups;
                    this.scope.$apply();
                };
                __decorate([
                    annotate_2.Inject('$rootScope'), 
                    __metadata('design:type', Object)
                ], DataService.prototype, "root", void 0);
                DataService = __decorate([
                    annotate_1.Service, 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            })(events_1.Emitter);
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.js.map