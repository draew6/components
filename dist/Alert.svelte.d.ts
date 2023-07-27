import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        message?: string | undefined;
        color: any;
        showAlert?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
    get showAlert(): () => void;
}
export {};
