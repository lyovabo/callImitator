import * as events from "./events";

export class Domain extends events.EventEmitter {
    run(fn: Function): void;
    add(emitter: events.EventEmitter): void;
    remove(emitter: events.EventEmitter): void;
    bind(cb: (err: Error, data: any) => any): any;
    intercept(cb: (data: any) => any): any;
    dispose(): void;

    addListener(event: string, listener: Function): Domain;
    on(event: string, listener: Function): Domain;
    once(event: string, listener: Function): Domain;
    removeListener(event: string, listener: Function): Domain;
    removeAllListeners(event?: string): Domain;
}

export function create(): Domain;