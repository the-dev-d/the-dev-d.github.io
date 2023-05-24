<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import Nav from '../modules/home/Nav.svelte';

    onMount(() => {
        //window.alert("This is a very early deployment at 18/5/2023/. Hence components may look broken in many screens")
    })
</script>

<main class="md:snap-y md:snap-mandatory max-h-screen overflow-y-scroll p-3">
    <div class="snap-start py-3">
        <Nav></Nav>
    </div>
    <slot />
</main>