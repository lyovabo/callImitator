import * as crypto from "./crypto";
import * as net from "./net";
import * as stream from "./stream";

declare var CLIENT_RENEG_LIMIT: number;
declare var CLIENT_RENEG_WINDOW: number;

export interface TlsOptions {
    pfx?: any;   //string or buffer
    key?: any;   //string or buffer
    passphrase?: string;
    cert?: any;
    ca?: any;    //string or buffer
    crl?: any;   //string or string array
    ciphers?: string;
    honorCipherOrder?: any;
    requestCert?: boolean;
    rejectUnauthorized?: boolean;
    NPNProtocols?: any;  //array or Buffer;
    SNICallback?: (servername: string) => any;
}

export interface ConnectionOptions {
    host?: string;
    port?: number;
    socket?: net.Socket;
    pfx?: any;   //string | Buffer
    key?: any;   //string | Buffer
    passphrase?: string;
    cert?: any;  //string | Buffer
    ca?: any;    //Array of string | Buffer
    rejectUnauthorized?: boolean;
    NPNProtocols?: any;  //Array of string | Buffer
    servername?: string;
}

export interface Server extends net.Server {
    // Extended base methods
    listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
    listen(path: string, listeningListener?: Function): Server;
    listen(handle: any, listeningListener?: Function): Server;

    listen(port: number, host?: string, callback?: Function): Server;
    close(): Server;
    address(): { port: number; family: string; address: string; };
    addContext(hostName: string, credentials: {
        key: string;
        cert: string;
        ca: string;
    }): void;
    maxConnections: number;
    connections: number;
}

export interface ClearTextStream extends stream.Duplex {
    authorized: boolean;
    authorizationError: Error;
    getPeerCertificate(): any;
    getCipher: {
        name: string;
        version: string;
    };
    address: {
        port: number;
        family: string;
        address: string;
    };
    remoteAddress: string;
    remotePort: number;
}

export interface SecurePair {
    encrypted: any;
    cleartext: any;
}

export interface SecureContextOptions {
    pfx?: any;   //string | buffer
    key?: any;   //string | buffer
    passphrase?: string;
    cert?: any;  // string | buffer
    ca?: any;    // string | buffer
    crl?: any;   // string | string[]
    ciphers?: string;
    honorCipherOrder?: boolean;
}

export interface SecureContext {
    context: any;
}

export declare function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
export declare function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
export declare function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
export declare function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
export declare function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
export declare function createSecureContext(details: SecureContextOptions): SecureContext;