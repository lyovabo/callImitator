import * as stream from "./stream";
import * as events from "./events";

interface Stats {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}

interface FSWatcher extends events.EventEmitter {
    close(): void;
}

export interface ReadStream extends stream.Readable {
    close(): void;
}
export interface WriteStream extends stream.Writable {
    close(): void;
    bytesWritten: number;
}

/**
 * Asynchronous rename.
 * @param oldPath
 * @param newPath
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Synchronous rename
 * @param oldPath
 * @param newPath
 */
export function renameSync(oldPath: string, newPath: string): void;
export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function truncateSync(path: string, len?: number): void;
export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function ftruncateSync(fd: number, len?: number): void;
export function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function chownSync(path: string, uid: number, gid: number): void;
export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function fchownSync(fd: number, uid: number, gid: number): void;
export function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function lchownSync(path: string, uid: number, gid: number): void;
export function chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function chmodSync(path: string, mode: number): void;
export function chmodSync(path: string, mode: string): void;
export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function fchmodSync(fd: number, mode: number): void;
export function fchmodSync(fd: number, mode: string): void;
export function lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function lchmodSync(path: string, mode: number): void;
export function lchmodSync(path: string, mode: string): void;
export function stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function statSync(path: string): Stats;
export function lstatSync(path: string): Stats;
export function fstatSync(fd: number): Stats;
export function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function linkSync(srcpath: string, dstpath: string): void;
export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
export function readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
export function readlinkSync(path: string): string;
export function realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
export function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) =>any): void;
export function realpathSync(path: string, cache?: { [path: string]: string }): string;
/*
 * Asynchronous unlink - deletes the file specified in {path}
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
/*
 * Synchronous unlink - deletes the file specified in {path}
 *
 * @param path
 */
export function unlinkSync(path: string): void;
/*
 * Asynchronous rmdir - removes the directory specified in {path}
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
/*
 * Synchronous rmdir - removes the directory specified in {path}
 *
 * @param path
 */
export function rmdirSync(path: string): void;
/*
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
/*
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param mode
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
/*
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param mode
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
/*
 * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param mode
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdirSync(path: string, mode?: number): void;
/*
 * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param mode
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdirSync(path: string, mode?: string): void;
export function readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
export function readdirSync(path: string): string[];
export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function closeSync(fd: number): void;
export function open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
export function open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
export function open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
export function openSync(path: string, flags: string, mode?: number): number;
export function openSync(path: string, flags: string, mode?: string): number;
export function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function utimesSync(path: string, atime: number, mtime: number): void;
export function utimesSync(path: string, atime: Date, mtime: Date): void;
export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function futimesSync(fd: number, atime: number, mtime: number): void;
export function futimesSync(fd: number, atime: Date, mtime: Date): void;
export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
export function fsyncSync(fd: number): void;
export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
/*
 * Asynchronous readFile - Asynchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param encoding
 * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
 */
export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
/*
 * Asynchronous readFile - Asynchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
 * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
 */
export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
/*
 * Asynchronous readFile - Asynchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
 * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
 */
export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
/*
 * Asynchronous readFile - Asynchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
 */
export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
/*
 * Synchronous readFile - Synchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param encoding
 */
export function readFileSync(filename: string, encoding: string): string;
/*
 * Synchronous readFile - Synchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
 */
export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
/*
 * Synchronous readFile - Synchronously reads the entire contents of a file.
 *
 * @param fileName
 * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
 */
export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
export function exists(path: string, callback?: (exists: boolean) => void): void;
export function existsSync(path: string): boolean;
/** Constant for fs.access(). File is visible to the calling process. */
export var F_OK: number;
/** Constant for fs.access(). File can be read by the calling process. */
export var R_OK: number;
/** Constant for fs.access(). File can be written by the calling process. */
export var W_OK: number;
/** Constant for fs.access(). File can be executed by the calling process. */
export var X_OK: number;
/** Tests a user's permissions for the file specified by path. */
export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void;
export function access(path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
/** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
export function accessSync(path: string, mode ?: number): void;
export function createReadStream(path: string, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
}): ReadStream;
export function createWriteStream(path: string, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
}): WriteStream;
