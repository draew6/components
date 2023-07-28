import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        loadStore: Writable<boolean>;
        autologin: Function;
        login: (username: string, password: string) => Promise<boolean>;
    };
    events: {
        loggedIn: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoginProps = typeof __propDef.props;
export type LoginEvents = typeof __propDef.events;
export type LoginSlots = typeof __propDef.slots;
export default class Login extends SvelteComponentTyped<LoginProps, LoginEvents, LoginSlots> {
}
export {};
