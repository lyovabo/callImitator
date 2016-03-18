import * as stream from "./stream";
export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

export interface Gzip extends stream.Transform { }
export interface Gunzip extends stream.Transform { }
export interface Deflate extends stream.Transform { }
export interface Inflate extends stream.Transform { }
export interface DeflateRaw extends stream.Transform { }
export interface InflateRaw extends stream.Transform { }
export interface Unzip extends stream.Transform { }

export function createGzip(options?: ZlibOptions): Gzip;
export function createGunzip(options?: ZlibOptions): Gunzip;
export function createDeflate(options?: ZlibOptions): Deflate;
export function createInflate(options?: ZlibOptions): Inflate;
export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
export function createInflateRaw(options?: ZlibOptions): InflateRaw;
export function createUnzip(options?: ZlibOptions): Unzip;

export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

// Constants
export var Z_NO_FLUSH: number;
export var Z_PARTIAL_FLUSH: number;
export var Z_SYNC_FLUSH: number;
export var Z_FULL_FLUSH: number;
export var Z_FINISH: number;
export var Z_BLOCK: number;
export var Z_TREES: number;
export var Z_OK: number;
export var Z_STREAM_END: number;
export var Z_NEED_DICT: number;
export var Z_ERRNO: number;
export var Z_STREAM_ERROR: number;
export var Z_DATA_ERROR: number;
export var Z_MEM_ERROR: number;
export var Z_BUF_ERROR: number;
export var Z_VERSION_ERROR: number;
export var Z_NO_COMPRESSION: number;
export var Z_BEST_SPEED: number;
export var Z_BEST_COMPRESSION: number;
export var Z_DEFAULT_COMPRESSION: number;
export var Z_FILTERED: number;
export var Z_HUFFMAN_ONLY: number;
export var Z_RLE: number;
export var Z_FIXED: number;
export var Z_DEFAULT_STRATEGY: number;
export var Z_BINARY: number;
export var Z_TEXT: number;
export var Z_ASCII: number;
export var Z_UNKNOWN: number;
export var Z_DEFLATED: number;
export var Z_NULL: number;
