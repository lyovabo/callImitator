export declare function decode(string: string): string;
export declare function encode(string: string): string;
export declare function toUnicode(domain: string): string;
export declare function toASCII(domain: string): string;
export declare var ucs2: ucs2;
declare interface ucs2 {
    decode(string: string): number[];
    encode(codePoints: number[]): string;
}
export declare var version: any;