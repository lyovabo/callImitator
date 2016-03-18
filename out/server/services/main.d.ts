/// <reference path="../server.d.ts" />
import { WsServer } from "http/ws/server";
import { WsConnection } from "http/ws/connection";
export declare class MainConnection extends WsConnection {
    constructor();
    onCommand(command: any): void;
    sendCommand(command: any): void;
    toJSON(): {
        id: string;
        key: string;
        hash: string;
        headers: any;
        address: {
            port: number;
            family: string;
            address: string;
        };
    };
}
export declare class MainService extends WsServer {
    private Server;
    constructor();
    protected newConnection(): WsConnection;
    protected admins: MainConnection[];
    broadcast(message: any): void;
    start(): void;
}
