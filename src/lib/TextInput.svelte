<script lang="ts">
    export let placeholder = ''
    export let value = ''
</script>
<input type="text" bind:value {placeholder} class="input input-bordered w-full max-w-xs py-2 px-3 mt-4" />
