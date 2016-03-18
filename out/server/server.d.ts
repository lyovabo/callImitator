import { Config } from "./config";
import { MainService } from "./services/main";
import { HttpService } from "./services/http";
export declare class CIServer {
    static instance: CIServer;
    config: Config;
    http: HttpService;
    main: MainService;
    run(): Promise<CIServer>;
}
