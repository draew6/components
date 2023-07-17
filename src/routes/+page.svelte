<script lang="ts">
  import Button from '$lib/Button.svelte'

  async function delay() {
    console.log("started")
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log("Delayed for 10 seconds");
}
</script>
<Button handler={delay} text="TEXTT" color="blue" additionClass={"w-96"}/>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>