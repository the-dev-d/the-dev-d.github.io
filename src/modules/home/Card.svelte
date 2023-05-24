<script lang="ts">
    export let name = "";
    export let favourite = false;
</script>

<div class:favourite="{favourite}" class="flex w-full flex-col border-2 backdrop-blur-md border-highlight-primary border-opacity-60 aspect-square">
    <div class="w-full relative flex-auto grid place-items-center">
        {#if favourite}
            <span class="absolute top-0 font-semibold right-0  m-2 px-3 grid rounded-xl bg-highlight-accent">FAV</span>
        {/if}
        <slot></slot>
    </div>
    <span class="text-sm tracking-widest text-center h-fit m-2 font-semibold">{name}</span>
</div>

<style>
    .favourite {
        @apply bg-highlight-primary;
        @apply bg-opacity-60;
        @apply border-highlight-accent;
    }
</style>