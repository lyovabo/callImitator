import * as PATH from 'node/path';

export class Config {

    load():Promise<Config>{
        return Promise.resolve(this);
    }

    public http = {
        host  : '0.0.0.0',
        port  : 3001,

        files : {
            path :  PATH.resolve(__filename,'../../../')
        }
    };
    constructor(){
        //console.info(this);
    }
}