<script lang="ts">
    import TextInput from "./TextInput.svelte";
    import PasswordInput from "./PasswordInput.svelte";
    export let isPassword = false;
    export let placeholder = '';
    export let value = '';
    export let disabled = false;
</script>
{#if isPassword}
    <PasswordInput {placeholder} bind:value={value} {disabled}/>
{:else}
    <TextInput {placeholder} bind:value={value} {disabled}/>
{/if}