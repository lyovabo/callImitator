import * as events from "./events";

interface RemoteInfo {
    address: string;
    port: number;
    size: number;
}

interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

interface Socket extends events.EventEmitter {
    send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
    bind(port: number, address?: string, callback?: () => void): void;
    close(): void;
    address(): AddressInfo;
    setBroadcast(flag: boolean): void;
    setMulticastTTL(ttl: number): void;
    setMulticastLoopback(flag: boolean): void;
    addMembership(multicastAddress: string, multicastInterface?: string): void;
    dropMembership(multicastAddress: string, multicastInterface?: string): void;
}