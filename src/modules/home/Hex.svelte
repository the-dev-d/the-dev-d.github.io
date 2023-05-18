<script>
    export let outlined = false;
    export let glow = false;

</script>

<div class={`w-full aspect relative grid place-items-center ${glow ? "cover": ""}`}>
    <div class="hex w-full aspect-square bg-emerald-300 cover">
        {#if outlined}
        <div class="hex absolute w-full h-full scale-95 bg-background-accent shadow-highlight-primary"></div>
        {/if}
    </div>
    <div class="absolute w-full h-full pic-hex scale-95">
        <div class="hover:scale-110 scale-105 transition-transform"><slot></slot></div>
    </div>
</div>

<style>
.hex {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.pic-hex {
    clip-path: polygon(50% -20%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
}
.cover {
    animation: 3s glow infinite;
}
.in-shadow {
    box-shadow: inset 0 0 10px #f8a100;
}
@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0px 0px 10px #02cb90);
    }
    50% {
        filter: drop-shadow(0px 0px 5px #02cb90);
    }
}
</style>