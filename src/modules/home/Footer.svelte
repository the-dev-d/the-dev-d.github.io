<script lang="ts">
    import { onMount } from "svelte";
    import Typed from "typed.js";


    onMount(() => {
        const typed = new Typed(
        document.getElementById('type'), {
            strings: ["DHAIVATH", "THE DEV-D"],
            typeSpeed: 100,
            backSpeed: 70,
            loop: true
        }
    )
    })
</script>

<section class="grid py-20 pb-0 place-items-center">
    <div class="flex flex-col w-[90%] overflow-hidden bg-opacity-50 border-2 border-gray-900 lg:w-4/6 rounded-t-xl">
        <div class="flex items-center justify-end w-full gap-2 p-4 bg-gray-900">
            <span class="bg-gray-700 icon"><i class=" fa-solid fa-window-minimize fa-xs"></i> </span>
            <span class="bg-gray-700 icon"><i class="fa-regular fa-window-maximize fa-xs"></i> </span>
            <span class="bg-blue-900 icon"><i class="fa-solid fa-x fa-xs"></i> </span>
        </div>
        <div class="flex-auto px-2 py-3 leading-6 bg-opacity-50 bg-indigo-950 pb-28 text-highlight-accent">
            ┌──(<span class="text-blue-500">devd㉿DEVD</span>)-[~] <br>
            └─$ <span>Made by and for <span id="type" class="font-semibold tracking-widest text-cyan-500"></span></span>
        </div>
    </div>
</section>

<style>
    .icon {
        position: relative;
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        text-align: center;
   }
   i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   }
</style>