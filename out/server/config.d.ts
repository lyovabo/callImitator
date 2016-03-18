export declare class Config {
    load(): Promise<Config>;
    http: {
        host: string;
        port: number;
        files: {
            path: string;
        };
    };
    constructor();
}
