<script>import TextInput from "./TextInput.svelte";
import PasswordInput from "./PasswordInput.svelte";
export let isPassword = false;
export let placeholder = "";
export let value = "";
</script>
{#if isPassword}
    <PasswordInput {placeholder} {value}/>
{:else}
    <TextInput {placeholder} {value}/>
{/if}