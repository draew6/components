import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        loadStore: Writable<boolean>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoadingBarProps = typeof __propDef.props;
export type LoadingBarEvents = typeof __propDef.events;
export type LoadingBarSlots = typeof __propDef.slots;
export default class LoadingBar extends SvelteComponentTyped<LoadingBarProps, LoadingBarEvents, LoadingBarSlots> {
}
export {};
