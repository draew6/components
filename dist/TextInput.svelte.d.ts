import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        placeholder?: string | undefined;
        value?: string | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextInputProps = typeof __propDef.props;
export type TextInputEvents = typeof __propDef.events;
export type TextInputSlots = typeof __propDef.slots;
export default class TextInput extends SvelteComponentTyped<TextInputProps, TextInputEvents, TextInputSlots> {
}
export {};
