import { DataService } from "./data";
export declare class ApiService {
    private root;
    private socket;
    data: DataService;
    constructor(config: any);
    onCommand(command: any): void;
}
