<script>export let placeholder = "";
export let value = "";
export let disabled = false;
</script>
<input type="text" bind:value {placeholder} class="input input-bordered w-full max-w-xs py-2 px-3 mb-4 disabled:text-gray-500" {disabled} />
