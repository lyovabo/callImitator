///<reference path="../server.ts"/>
import {Cached} from "common/decorators";

import {WsServer} from "http/ws/server";
import {WsConnection} from "http/ws/connection";



import {CIServer} from "../server"





export class MainConnection extends WsConnection {

    constructor(){
        super(true);
        this.on('text',(text)=>{
            this.onCommand(JSON.parse(text));
        });
    }
    onCommand(command:any){

    }
    sendCommand(command:any){
        this.sendText(JSON.stringify(command));
    }
    toJSON(){
        return {
            id      :this.id,
            key     :this.key,
            hash    :this.hash,
            headers :this.headers,
            address :this.socket.address()
        }
    }
}

export class MainService extends WsServer {

    @Cached
    private get Server():CIServer{
        return CIServer.instance;
    }
    constructor(){
        super(this.Server.http.server,'ws');
    }

    protected newConnection():WsConnection{
        return new MainConnection();
    }
    protected get admins():MainConnection[]{//function that return all connections
        return  Object.keys(this.connections).map(k=>{

            return <MainConnection>this.connections[k]
        });
    }

    public broadcast(message){// function that sends the message to connections
        this.admins.forEach(admin=>{
            admin.sendCommand(message);
        })
    }

    public start(){
        console.info('Starting ADMIN Service');
        this.on('connect',(connection:MainConnection)=>{
            console.info("CONNECT",connection.id);

        });
        this.on('disconnect',(connection:WsConnection)=>{
            console.info("DISCONNECT",connection.id)
        });

    }

}