<script>export let heading = "";
</script>
<!-- Open the modal using ID.showModal() method -->
<dialog id="response_modal" class="modal">
    <form method="dialog" class="modal-box">
      <h3>{heading}</h3>
        <slot/>
    </form>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
  </dialog>