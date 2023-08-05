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
export type PasswordInputProps = typeof __propDef.props;
export type PasswordInputEvents = typeof __propDef.events;
export type PasswordInputSlots = typeof __propDef.slots;
export default class PasswordInput extends SvelteComponentTyped<PasswordInputProps, PasswordInputEvents, PasswordInputSlots> {
}
export {};
