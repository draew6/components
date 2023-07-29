<script lang="ts">
    import TextInput from "./TextInput.svelte";
    import PasswordInput from "./PasswordInput.svelte";
    export let isPassword = false;
    export let placeholder = '';
    export let value = '';
</script>
{#if isPassword}
    <PasswordInput {placeholder} bind:value={value}/>
{:else}
    <TextInput {placeholder} bind:value={value}/>
{/if}