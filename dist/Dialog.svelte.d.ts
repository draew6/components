import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        heading?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
