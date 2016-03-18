import * as stream from "./stream";
import * as events from "./events";

export interface ReplOptions {
    prompt?: string;
    input?: NodeJS.ReadableStream;
    output?: NodeJS.WritableStream;
    terminal?: boolean;
    eval?: Function;
    useColors?: boolean;
    useGlobal?: boolean;
    ignoreUndefined?: boolean;
    writer?: Function;
}
export function start(options: ReplOptions): events.EventEmitter;