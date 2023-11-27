<script>
    export let outlined = false;
    export let glow = false;

</script>

<div class={`w-full aspect relative grid place-items-center ${glow ? "cover": ""}`}>
    <div style="animation-duration: 25s;" class="w-full hex aspect-square animation-bg-move bg-emrald">
        {#if outlined}
        <div class="absolute w-full h-full scale-95 hex bg-background-accent shadow-highlight-primary"></div>
        {/if}
    </div>
    <div class="absolute w-full h-full scale-95 pic-hex">
        <div class="transition-transform scale-105 hover:scale-110"><slot></slot></div>
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
    animation: 10s glow linear infinite;
}
.in-shadow {
    box-shadow: inset 0 0 10px #f8a100;
}
@keyframes glow {
    0%, 100% {
        background-position: 10% 0%;
        filter: drop-shadow(0px 0px 10px #02cb90);
    }
    33% {
        background-position: 50% 30%;
        filter: drop-shadow(0px 0px 5px #02cb90);
    }
    66% {
        background-position: 20% 50%;
        filter: drop-shadow(0px 0px 10px #02cb90);
    }
}
</style>