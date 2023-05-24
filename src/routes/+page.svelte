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
        if(key === "CSS") return acc;
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
<section class="w-full md:h-screen snap-start">
    <div class="container md:my-auto mx-auto flex flex-col-reverse gap-10 md:flex-row p-3 h-full items-center justify-around">
        <div class="w-full grid content-center gap-2  md:h-full">
            <h4 class="font-semibold text-2xl">Hi, I'm</h4>
            <h1 class="text-5xl font-semibold">Dhaivath Lal</h1>
            <h3 class="text-2xl tracking-widest">I'm a <span id="typed-text" class="font-semibold text-highlight-primary">Developer</span> </h3>
            <p class="my-3">I'm a student and freelance developer with extreme curiosity and
                enthusiasm for programming. It is my passion, and I never get tired of
                exploring new methods to achieve the best results </p>
            <span class="w-fit my-6">
                <Button>Know More</Button>
            </span>
            <div class="w-fit flex gap-6 my-3">
                <a href="https://www.instagram.com/dhaivath_lal/"><Icon fas="fa-brands fa-instagram fa-2x"></Icon></a>
                <a href="https://github.com/the-dev-d/"><Icon fas="fa-brands fa-github fa-2x"></Icon></a>
                <a href="https://discordapp.com/users/devD#7236"><Icon fas="fa-brands fa-discord fa-2x"></Icon></a>
            </div>
        </div>
        <div class="w-full">
            <div class="w-5/6 md:w-2/3 mx-auto md:mx-0 md:ml-auto h-full flex items-center justify-center bg-opacity-70">
                <Hex outlined={true} glow={true}>
                    <img class="w-full object-cover" src="/profile.webp" alt="">
                </Hex>
            </div>
        </div>
    </div>
</section>

<section class="w-full md:h-screen snap-start grid place-items-center my-10">
    <div class="container md:h-2/3 mx-auto flex justify-center">
        <div class="w-full p-2 grid content-between">
            <h3 class="text-3xl font-semibold text-highlight-primary mb-10">GitHub Projects Report</h3>
            <div class="grid gap-12">
                {#each Object.entries(totalLangShare) as [language, percentage] }
                    <div>
                        <div> 
                            <span class="font-semibold text-xl">{language}</span>
                            <span class="text-sm">{percentage}%</span>
                        </div>
                        <div class="w-full rounded-md bg-highlight-primary bg-opacity-50 overflow-hidden">
                            <div style={`width:${percentage}%`} class="p-1 bg-highlight-primary animation-hidden"></div>
                        </div>
                    </div>
            {/each}
            </div>
            <p class="text-xs opacity-70 my-6">This only shows projects done GitHub. Projects under company repositories other than GitHub is not included</p>
        </div>
    </div>
</section>

<section class="w-full h-screen snap-start grid md:place-items-center">
    <div class="container mx-auto p-2">
        <h3 class="text-3xl font-semibold text-highlight-primary mb-5">Operating Systems</h3>
        <p class="mb-6 text-highlight-text">These are the operating systems that I've used as my daily driver over my tech journy.</p>
        <div class="cards grid-cols-2 gap-2 gap-x-2 grid md:flex md:justify-between items-end">
            {#each osList as os }
            <a class="w-full hover:scale-90 transition-all" href={os.url}>
                <Card name={os.name.toUpperCase()} favourite={os.favourite}>
                    <i class={`${os.class} text-6xl text-highlight-accent`}></i>
                </Card>
            </a>
            {/each}
        </div>
    </div>
</section>