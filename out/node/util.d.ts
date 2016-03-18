export interface InspectOptions {
    showHidden?: boolean;
    depth?: number;
    colors?: boolean;
    customInspect?: boolean;
}

export function format(format: any, ...param: any[]): string;
export function debug(string: string): void;
export function error(...param: any[]): void;
export function puts(...param: any[]): void;
export function print(...param: any[]): void;
export function log(string: string): void;
export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
export function inspect(object: any, options: InspectOptions): string;
export function isArray(object: any): boolean;
export function isRegExp(object: any): boolean;
export function isDate(object: any): boolean;
export function isError(object: any): boolean;
export function inherits(constructor: any, superConstructor: any): void;
export function debuglog(key:string): (msg:string,...param: any[])=>void;