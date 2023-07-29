import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            value: string | number;
            id: number | string | undefined;
        }[] | undefined;
        label?: string | number | undefined;
        value?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
