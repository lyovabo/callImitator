export interface NodeStringDecoder {
    write(buffer: Buffer): string;
    detectIncompleteChar(buffer: Buffer): number;
}
export declare var StringDecoder: {
    new (encoding: string): NodeStringDecoder;
};