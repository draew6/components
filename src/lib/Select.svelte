<script lang="ts">
    type SelectOption = {
        value: string | number,
        id: number | string | undefined
    }

    export let options: SelectOption[] = []
    export let label: string | number = ''
    export let value: string | number = ''

    

</script>
<select bind:value class="select w-full max-w-xs">
    <option disabled selected>{label}</option>
    {#each options as option}
        <option value={option.id || option.value}>
            {option.value}
        </option>    
    {/each}
  </select>


