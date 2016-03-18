import { Emitter } from "common/events";
export declare class DataService extends Emitter {
    private root;
    scope: any;
    private allOnlineUsers;
    constructor();
    updateStatus(res: any): void;
    createGroup(group: any): any;
    returnItemFromScope(arrayName: string, itemId: string): any;
    createUser(user: any): void;
}
