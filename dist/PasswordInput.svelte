<script>export let placeholder = "";
export let value = "";
export let disabled = false;
</script>
<input type="password" bind:value {placeholder} class="input input-bordered w-full max-w-xs py-2 px-3 mt-4 disabled:text-gray-500" {disabled}/>
