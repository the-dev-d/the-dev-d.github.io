<script lang="ts">
  import { onMount } from "svelte";
  import Button from "../modules/home/Button.svelte";
  import Hex from "../modules/home/Hex.svelte";
  import Icon from "../modules/home/Icon.svelte";
  import Typed from 'typed.js';
  import Card from "../modules/home/Card.svelte";
import { PUBLIC_API } from "$env/static/public";

  export let data;
  let selectedOS: number|null = null;

  let response: Promise<{recommendation: string, downloadURL: string}>|null = null;

  $: {
    if(selectedOS)
        response = loadDescription(selectedOS);
  }

  async function loadDescription(osId: number) {
    const res = await fetch( PUBLIC_API+'/os/'+selectedOS);
    const response = await res.json();
    return response;
  }
  

  let totalLangShare:any[] = [];
  if(data.repoAndLanguages) {
    totalLangShare = data.repoAndLanguages.reduce((acc, val) => {
    for(let key in val){
        if(key === "CSS" || key==="SCSS") return acc;
        if(acc[key]) acc[key]+=val[key]
        else acc[key] = val[key]
    }
    return acc
    },{});
    let total = 0;
    for( let k in totalLangShare) total+=totalLangShare[k];
    for( let k in totalLangShare) totalLangShare[k] = Math.round(totalLangShare[k]/total * 100);
  }
    
  onMount(async () => {
    const typing = new Typed(document.getElementById('typed-text'), {
        strings: ["Student", "Developer", "PC Builder", "Techie"],
        typeSpeed: 100,
        loop: true
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animation-sl-show');
            }
        })
    })
    const animateHiddenLS = document.querySelectorAll(".animation-hidden");
    animateHiddenLS.forEach((el) => observer.observe(el));
  })
  
</script>
<svelte:head>
    <title>DHAIVATH LAL | THE DEV D</title>
    <meta name="description" content="Personal Portfolio website of Dhaivath Lal">
</svelte:head>
<section class="w-full p-10 my-12 md:my-32 lg:my-40">
    <div class="container flex flex-col-reverse items-center justify-around h-full gap-10 mx-auto md:my-auto md:flex-row">
        <div class="grid content-center w-full gap-2 md:h-full">
            <h4 class="text-2xl font-semibold">Hi, I'm</h4>
            <h1 class="text-5xl font-bold lg:text-6xl animation-bg-move glow">Dhaivath Lal</h1>
            <h3 class="text-2xl tracking-widest">I'm a <span id="typed-text" class="font-semibold text-highlight-primary">Developer</span> </h3>
            <p class="my-3">I'm a student and freelance developer with extreme curiosity and
                enthusiasm for programming. It is my passion, and I never get tired of
                exploring new methods to achieve the best results </p>
            <span class="my-6 w-fit">
                <Button>Know More</Button>
            </span>
            <div class="flex gap-6 my-3 w-fit">
                <a href="https://www.instagram.com/dhaivath_lal/"><Icon fas="fa-brands fa-instagram fa-2x"></Icon></a>
                <a href="https://github.com/the-dev-d/"><Icon fas="fa-brands fa-github fa-2x"></Icon></a>
                <a href="https://discordapp.com/users/devD#7236"><Icon fas="fa-brands fa-discord fa-2x"></Icon></a>
            </div>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-center w-5/6 h-full mx-auto md:w-2/3 md:mx-0 md:ml-auto bg-opacity-70">
                <Hex outlined={true} glow={true}>
                    <img class="object-cover w-full" src="/profile.webp" alt="">
                </Hex>
            </div>
        </div>
    </div>
</section>

<section class="grid w-full p-5 my-20 lg:p-10 md:my-32 lg:my-44 ">
    <div class="container flex justify-center mx-auto md:h-2/3">
        <div class="grid content-between w-full p-2">
            <h3 class="mb-10 text-3xl font-semibold text-highlight-primary">GitHub Projects Report</h3>
            <div class="grid gap-12">
                {#each Object.entries(totalLangShare) as [language, percentage] }
                    <div>
                        <div> 
                            <span class="text-xl font-semibold">{language}</span>
                            <span class="text-sm">{percentage}%</span>
                        </div>
                        <div class="w-full overflow-hidden bg-opacity-50 border-2 rounded-md border-highlight-primary border-opacity-60">
                            <div style={`width:${percentage}%`} class="object-fill p-1 animation-bg-move bg-emrald bg-highlight-primary animation-hidden"></div>
                        </div>
                    </div>
            {/each}
            </div>
            <p class="my-6 text-xs opacity-70">This only shows projects done GitHub. Projects under company repositories other than GitHub is not included</p>
        </div>
    </div>
</section>

<section class="grid w-full p-3 my-20 lg:p-10 md:my-32 lg:my-44">
    <div class="container p-2 mx-auto">
        <h3 class="mb-5 text-3xl font-semibold text-highlight-primary">Operating Systems</h3>
        <p class="mb-6 text-highlight-text">These are the operating systems that I've used as my daily driver over my tech journey.</p>
        <div class="grid grid-rows-menu lg:grid-rows-none mt-9 overflow-hidden h-[75vh] lg:h-[65vh] border-2 rounded-md lg:grid-cols-menu border-opacity-70 border-highlight-primary">
            <div class="grid gap-2 overflow-y-auto grid-cols-fit lg:grid-cols-1 menu">
                {#each data.menu as item (item.id) }
                    <button on:click={() => {selectedOS = item.id}} class:bg-highlight-accent={selectedOS === item.id} class="grid items-center lg:gap-3 lg:flex grid-m-f justify-items-center bg-opacity-20 place-items-center" >
                        <i class={`${item.iconTag ? 'fl-'+item.iconTag : 'fa-brands fa-windows'} text-2xl text-highlight-primary`}></i>
                        <span class="hidden lg:block">{item.name}</span>
                    </button>
                {/each}
            </div>
            <div class="w-full h-full p-3 overflow-y-auto leading-8 lg:p-10 bg-background-accent content">
                {#if selectedOS === null}
                    <p class="text-background-text">
                        Click to see my opinion about OS you want to know.
                    </p>
                {:else}
                    {#await response}
                        Loading...
                    {:then {recommendation, downloadURL}} 
                        <p class="mb-10">
                            {@html recommendation.replaceAll('\n', '<br><br>')}
                        </p>
                        <a class="p-3 font-semibold rounded-md bg-highlight-primary"  target="_blank" href={`https://${downloadURL}`} >Download</a>
                    {/await}
               {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .glow {
        background: url('/glow.webp');
        background-clip: text;
        color: transparent;
    }
    .g-t-c {
        grid-template-columns: 30% 70%;
        grid-template-areas: "menu" "content";
    }
    .v-menu {
        grid-template-rows: min-content 1fr;
    }
    .menu button {
        text-align: start;
        outline: none;
        padding: 1rem;
    }

</style>