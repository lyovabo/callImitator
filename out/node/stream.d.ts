import * as events from "node/events";

export interface Stream extends events.EventEmitter {
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
}

export interface ReadableOptions {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
}

export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
    readable: boolean;
    constructor(opts?: ReadableOptions);
    _read(size: number): void;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
    unshift(chunk: any): void;
    wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    push(chunk: any, encoding?: string): boolean;
}

export interface WritableOptions {
    highWaterMark?: number;
    decodeStrings?: boolean;
    objectMode?: boolean;
}

export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
    writable: boolean;
    constructor(opts?: WritableOptions);
    _write(chunk: any, encoding: string, callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
}

export interface DuplexOptions extends ReadableOptions, WritableOptions {
    allowHalfOpen?: boolean;
}

// Note: Duplex extends both Readable and Writable.
export class Duplex extends Readable implements NodeJS.ReadWriteStream {
    writable: boolean;
    constructor(opts?: DuplexOptions);
    _write(chunk: any, encoding: string, callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
}

export interface TransformOptions extends ReadableOptions, WritableOptions {}

// Note: Transform lacks the _read and _write methods of Readable/Writable.
export class Transform extends events.EventEmitter implements NodeJS.ReadWriteStream {
    readable: boolean;
    writable: boolean;
    constructor(opts?: TransformOptions);
    _transform(chunk: any, encoding: string, callback: Function): void;
    _flush(callback: Function): void;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
    unshift(chunk: any): void;
    wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    push(chunk: any, encoding?: string): boolean;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
}

export class PassThrough extends Transform {}