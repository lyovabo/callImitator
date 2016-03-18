import {Cached} from "common/decorators";
import {Config} from "./config";


import {MainService} from "./services/main";
import {HttpService} from "./services/http";


import 'http/handlers/files';
import 'http/handlers/rest';








export class CIServer {
    @Cached
    static get instance():CIServer{
        return new CIServer();
    }
    @Cached
    public get config():Config {
        return new Config();
    }
    @Cached
    public get http():HttpService{
        return new HttpService();
    }
    @Cached
    public get main():MainService {
        return new MainService();
    }

    public run():Promise<CIServer>{
          return this.config.load().then(c=>{
                         this.http.start();
                         this.main.start();
                         return this;
          })
    }
}
CIServer.instance.run().then(
    (s)=>{console.info("aaaaa Started")},
    (e)=>{console.info(e.stack||e)}
);
//export default CIServer.instance;