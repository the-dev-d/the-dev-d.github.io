<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import Nav from '../modules/home/Nav.svelte';
    import Footer from '../modules/home/Footer.svelte';

    onMount(() => {
        //window.alert("This is a very early deployment at 18/5/2023/. Hence components may look broken in many screens")
    })
</script>

<main class="max-h-screen overflow-y-scroll">
    <div class="py-2">
        <Nav></Nav>
    </div>
    <slot />
    <Footer>
        
    </Footer>
</main>