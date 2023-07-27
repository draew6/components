<script lang="ts">
  import Button from '$lib/Button.svelte'
  import toast from '$lib/toast'

  async function delay() {
    console.log("started")
    toast("Delayed for 10 seconds")
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log("Delayed for 10 seconds");
}
</script>
<Button handler={delay} text="TEXTT" color="blue" additionalClass={"w-96"}/>
<Button handler={delay} text="Log In" additionalClass=w-96/>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>