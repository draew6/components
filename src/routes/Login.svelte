<script lang="ts">
    import TextInput from '../lib/TextInput.svelte';
    import PasswordInput from '../lib/PasswordInput.svelte';
    import LoadingButton from '../lib/LoadingButton.svelte';

    import {post} from '../lib/request'
    import {autologin} from '../lib/data'

    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    const dispatch = createEventDispatcher();

    let username = '';
    let password = '';

    let isLogedIn = false;
    let isVisible = false

    onMount( async () => {
        const response = await autologin();
        isLogedIn = response;
        isVisible = !response;
    })
  
    $: {
        if (isLogedIn) {
            isVisible = false;
            dispatch('loggedIn');
        }  
    }

    const login = async () => {
        const response = await post('/login', {
            body: {username, password}
        });
        
        if (response.response.ok) {            
            await autologin();
            isLogedIn = true
        } else {
            alert('Wrong username or password');
        };
    }
    
</script>
{#if !isVisible}
<!-- Nothing to render -->
{:else}
<div class="h-screen flex flex-col">
    <div class="mx-auto py-32">
        <div class="w-full max-w-md">
        <div class="flex flex-col items-center py-8">
            <TextInput placeholder="Username" bind:value={username} />
            <PasswordInput placeholder="Password" bind:value={password} />
            <LoadingButton handler={login} text="Log In"/>
        </div>
        </div>
    </div>  
</div>
{/if}