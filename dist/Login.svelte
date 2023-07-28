<script>import Input from "./Input.svelte";
import Button from "./Button.svelte";
import toast from "./toast";
import { createEventDispatcher } from "svelte";
import { onMount } from "svelte";
export let loadStore;
export let autologin;
export let login;
const dispatch = createEventDispatcher();
let username = "";
let password = "";
let isLogedIn = false;
let isVisible = false;
onMount(async () => {
  const response = await autologin();
  isLogedIn = response;
  isVisible = !response;
});
$: {
  if (isLogedIn) {
    isVisible = false;
    dispatch("loggedIn");
  }
}
const handleLogin = async () => {
  const isLoginSuccesful = await login(username, password);
  if (isLoginSuccesful) {
    await autologin();
    isLogedIn = true;
  } else {
    toast("Wrong username or password", "red");
  }
  ;
};
</script>
{#if !isVisible}
<!-- Nothing to render -->
{:else}
<div class="h-screen flex flex-col">
    <div class="mx-auto py-32">
        <div class="w-full max-w-md">
        <div class="flex flex-col items-center py-8">
            <Input placeholder="Username" bind:value={username} />
            <Input placeholder="Password" bind:value={password} isPassword={true}/>
            <div class="flex justify-around mt-4">
                <Button handler={handleLogin} text="Log In" {loadStore} additionalClass=w-20/>
            </div>
        </div>
        </div>
    </div>  
</div>
{/if}