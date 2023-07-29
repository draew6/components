<script>export let options = [];
export let label = "";
export let value = "";
</script>
<select bind:value class="select w-full max-w-xs">
    <option disabled selected>{label}</option>
    {#each options as option}
        <option value={option.id || option.value}>
            {option.value}
        </option>    
    {/each}
  </select>


