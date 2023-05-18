<script>
  import { onMount } from "svelte";
  import Button from "../modules/home/Button.svelte";
  import Hex from "../modules/home/Hex.svelte";
  import Icon from "../modules/home/Icon.svelte";
  import Typed from 'typed.js';

  export let data;
  console.log("processing");

  const totalLangShare = data.repoAndLanguages.reduce((acc, val) => {
    for(let key in val){
        if(key === "CSS") return acc;
        if(acc[key]) acc[key]+=val[key]
        else acc[key] = val[key]
    }
    return acc
  },{});
  let total = 0;
  for( let k in totalLangShare) total+=totalLangShare[k];
  for( let k in totalLangShare) totalLangShare[k] = Math.round(totalLangShare[k]/total * 100);

  onMount(async () => {
    const typing = new Typed(document.getElementById('typed-text'), {
    strings: ["Student", "Developer", "PC Builder", "Techie"],
    typeSpeed: 100,
    loop: true
  })
  })
  
</script>
<section class="w-full h-screen snap-start">
    <div class="container mx-auto flex p-3 h-full">
        <div class="w-full grid content-center gap-2  h-full">
            <h4 class="font-semibold text-2xl">Hi, I'm</h4>
            <h1 class="text-5xl font-semibold">Dhaivath Lal</h1>
            <h3 class="text-2xl tracking-widest">I'm a <span id="typed-text" class="font-semibold text-highlight-primary">Developer</span> </h3>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut maxime eius necessitatibus! Officia obcaecati repellendus velit dolor modi quo quibusdam </p>
            <span class="w-fit my-6">
                <Button>Some button</Button>
            </span>
            <div class="w-fit flex gap-6 my-3">
                <Icon fas="fa-brands fa-instagram fa-2x"></Icon>
                <Icon fas="fa-brands fa-github fa-2x"></Icon>
                <Icon fas="fa-brands fa-discord fa-2x"></Icon>
            </div>
        </div>
        <div class="w-full">
            <div class="w-2/3 ml-auto h-full flex items-center justify-center bg-background-accent bg-opacity-70">
                <Hex outlined={true} glow={true}>
                    <img class="w-full object-cover" src="/profile.webp" alt="">
                </Hex>
            </div>
        </div>
    </div>
</section>

<section class="w-full h-screen snap-start grid place-items-center">
    <div class="container h-2/3 mx-auto p-6 flex justify-center gap-12">
        <div class="w-full p-2 grid content-between">
            <h3 class="text-3xl font-semibold text-highlight-primary">GitHub Projects Report</h3>
            <div class="grid gap-12">
                {#each Object.entries(totalLangShare) as [language, percentage] }
                    <div>
                        <div> 
                            <span class="font-semibold text-xl">{language}</span>
                            <span class="text-sm">{percentage}%</span>
                        </div>
                        <div class="w-full rounded-md bg-highlight-primary bg-opacity-50 overflow-hidden">
                            <div style={`width:${percentage}%`} class="p-1 bg-highlight-primary"></div>
                        </div>
                    </div>
            {/each}
            </div>
            <p class="text-xs opacity-70">This only shows projects done GitHub. Projects under company repositories other than GitHub is not included</p>
        </div>
    </div>
</section>