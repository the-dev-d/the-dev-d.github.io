<script lang="ts">
  import { onMount } from "svelte";
  import Button from "../modules/home/Button.svelte";
  import Hex from "../modules/home/Hex.svelte";
  import Icon from "../modules/home/Icon.svelte";
  import Typed from 'typed.js';
  import Card from "../modules/home/Card.svelte";

  export let data;
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

  const osList: {class:string, name:string, favourite:boolean, url?:string}[] = [
    {class: "fl-kali-linux", name: "Kali Linux", favourite: true, url: "https://www.kali.org/"},
    {class: "fl-parrot", name: "Parrot Security", favourite: false, url: "https://www.parrotsec.org/"},
    {class: "fl-ubuntu", name: "Ubuntu", favourite: false, url: "https://ubuntu.com/"},
    {class: "fl-linuxmint", name: "Linux Mint", favourite: false, url: "https://linuxmint.com/"},
    {class: "fl-pop-os", name: "Pop!_OS", favourite: false, url: "https://pop.system76.com/"},
    {class: "fl-manjaro", name: "Manjaro", favourite: false, url: "https://manjaro.org/"},
    {class: "devicon-windows8-original", name: "Windows", favourite: false, url: "https://www.microsoft.com/en-in/software-download/windows10ISO"}
  ]

  onMount(async () => {
    const typing = new Typed(document.getElementById('typed-text'), {
        strings: ["Student", "Developer", "PC Builder", "Techie"],
        typeSpeed: 100,
        loop: true
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                console.log("here");
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
<section class="w-full p-10 my-44">
    <div class="container flex flex-col-reverse items-center justify-around h-full gap-10 mx-auto md:my-auto md:flex-row">
        <div class="grid content-center w-full gap-2 md:h-full">
            <h4 class="text-2xl font-semibold">Hi, I'm</h4>
            <h1 class="text-5xl font-semibold">Dhaivath Lal</h1>
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

<section class="grid w-full p-10 my-44 ">
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
                        <div class="w-full overflow-hidden bg-opacity-50 rounded-md bg-highlight-primary">
                            <div style={`width:${percentage}%`} class="p-1 bg-highlight-primary animation-hidden"></div>
                        </div>
                    </div>
            {/each}
            </div>
            <p class="my-6 text-xs opacity-70">This only shows projects done GitHub. Projects under company repositories other than GitHub is not included</p>
        </div>
    </div>
</section>

<section class="grid w-full p-10 my-44">
    <div class="container p-2 mx-auto">
        <h3 class="mb-5 text-3xl font-semibold text-highlight-primary">Operating Systems</h3>
        <p class="mb-6 text-highlight-text">These are the operating systems that I've used as my daily driver over my tech journey.</p>
        <div class="grid items-end grid-cols-2 gap-2 cards gap-x-2 lg:flex lg:justify-between">
            {#each osList as os }
            <a class="w-full transition-all hover:scale-90" href={os.url}>
                <Card name={os.name.toUpperCase()} favourite={os.favourite}>
                    <i class={`${os.class} text-6xl text-highlight-accent`}></i>
                </Card>
            </a>
            {/each}
        </div>
    </div>
</section>