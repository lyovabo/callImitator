import {Cached} from "common/decorators";
import {Server} from "http/server";

import {CIServer} from "../server"


export class HttpService extends Server {

    @Cached
    private get CI():CIServer{
        return CIServer.instance;
    }
    constructor(){
        //console.log(this.CI.config.http);
        super(this.CI.config.http);
    }
    start():any{
        super.start();
        console.info('Starting HTTP Service');
        console.info(` remote : http://${this.config.host}:${this.config.port}`);
        console.info(` local  : ${this.config.files.path}`);
    }
}