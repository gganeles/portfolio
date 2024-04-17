<script>
    import ProjectDisplay from "$lib/ProjectDisplay.svelte";
    import Typewriter, { cascade } from "svelte-typewriter";
    import { dev } from "$app/environment";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import ChevronDownSmallSvgrepoCom from "$lib/chevron-down-small-svgrepo-com.svelte";

    function generateProject(
        title,
        src = "images/e44d5f00-6bed-4075-bb5c-c2f91fbe77b4.jpeg",
        desc = "",
        url = "",
        codeLang = "",
        program,
    ) {
        return {
            src: dev ? src : "../../../" + src,
            title,
            desc,
            url,
            codeLang,
            program,
        };
    }
    let fadeTrig = false;
    let fadeTrig2 = false;
    let fadeTrig1 = false;
    let nameTrig = false;

    let selectedInd = 0;
    let selectedInd2 = 0;
    onMount(() => {
        setTimeout(() => {
            fadeTrig = true;
        }, 3700);
        setTimeout(() => {
            fadeTrig1 = true;
        }, 5000);
        setTimeout(() => {
            fadeTrig2 = true;
        }, 7000);
        setTimeout(()=>{
            nameTrig = true;
        }, 2000)
    });

    let projects = {
        Programming: [
            generateProject(
                "ShabBOT",
                "images/93b13e09-5dad-4fab-b131-a5488a0df60b.jpeg",
                "Shabbat Whatsapp Assistant",
                "https://github.com/gganeles/shabBOT#readme-ov-file",
                "Node.js",
            ),
            generateProject(
                "Formula Technion Website",
                "images/formulaSite.png",
                "Interactive formula team site",
                "https://formulatechnion.com",
                "Svelte+Cloudflare Pages",
            ),
            generateProject(
                "Set and Other Games",
                "images/setGame.png",
                "Realtime multiplayer card game website",
                "https://setgame-4508c.web.app",
                "Svelte+Firebase",
            ),
            generateProject(
                "CERN ATLAS' New Small Wheel",
                "images/newSmallWheel.png",
                "sTGC pad triggers algorithm",
                "https://indico.cern.ch/event/354058/contributions/832493/attachments/701559/963190/NSW_ELX_overview_for_Feb2015review.pdf",
                "Python",
            ),
            generateProject(
                "sEEG/ECoG to Speech Decoder",
                "images/NY917_T1_D_left_both_label.png",
                "Data preperation and analysis pipeline",
                "https://www.nature.com/articles/s42256-024-00824-8",
                "MATLAB",
            ),
        ],
        Design: [
            generateProject(
                "Parachute Mechanism",
                "images/parachuteLauncher.png",
                "Spring-based launcher",
                undefined,
                undefined,
                "Onshape",
            ),
            generateProject(
                "Hybrid Solid-Gas Model Rocket",
                "images/rocketDesign.png",
                undefined,
                undefined,
                undefined,
                "Onshape",
            ),
            generateProject(
                "Formula Student PCB Design",
                "images/pcb3d.png",
                "CANbus sensor modules",
                undefined,
                undefined,
                "Altium",
            ),

            generateProject(
                "Robotic Gripper Design",
                "images/fishGripper.png",
                "Robotic gripper for fish pick and place",
                undefined,
                undefined,
                "Onshape",
            ),
        ],
    };
</script>

<svelte:head>
    <title>Gabriel Ganeles</title>
</svelte:head>
<div class="flex items-center w-full flex-col text-center text-white">
    <div class="relative flex h-screen w-full flex flex-col items-center">
            <div
                class="pt-40 md:pt-96 transition-all w-full"
            >
            {#if nameTrig}
                <h1 use:cascade={{interval:50}} class="text-7xl pl-2 drop-shadow-2xl">Gabriel Ganeles</h1>
            {/if}
            </div>
        <div transition:fade={{ duration: 500 }} class="">
            <h2 class="text-3xl p-2 gap-2 flex flex-row">
                {#if fadeTrig}
                    <span use:cascade={{interval:33}}>Biomedical Engineering Student, </span
                    >
                {/if}
                {#if fadeTrig1}
                    <span use:cascade={{interval:30}}> Freelance Programmer </span>
                {/if}
            </h2>
        </div>

        {#if fadeTrig2}
            <div transition:fade class="absolute bottom-20">
                <div class="text-md">Scroll</div>
                <div class="bouncy">
                    <ChevronDownSmallSvgrepoCom />
                </div>
            </div>
        {/if}
        <div class="absolute overflow-hidden top-0 -z-10">
            <div class="h-screen w-full bg-thin absolute z-10"></div>
            <video
                autoplay
                muted
                loop
                class="h-screen w-screen object-cover blur-sm"
            >
                <source src="vids/mainBg.mp4" type="video/mp4" />
            </video>
            <div class="h-screen w-full bg-black absolute top-0 -z-10"></div>
        </div>
    </div>
    <div class="p-0 w-full max-w-[1000px]">
        <div class="p-2">
            <div class="min-h-96">
                <div class="pt-8 text-3xl">Programming</div>
                <div class="pb-8">Click on a project to explore</div>
                <div class="flex w-full gap-1 max-sm:gap-1 projs">
                    {#each projects["Programming"] as proj, ind}
                        <ProjectDisplay
                            {proj}
                            selected={ind == selectedInd}
                            index={ind}
                            on:hovered={(e) => (selectedInd = e.detail)}
                        />
                    {/each}
                </div>
            </div>
            <div class="py-8 text-3xl">Design</div>
            <div class="gap-1 flex w-full max-sm:gap-1 pb-10 projs">
                {#each projects["Design"] as proj, ind}
                    <ProjectDisplay
                        {proj}
                        selected={ind == selectedInd2}
                        index={ind}
                        on:hovered={(e) => (selectedInd2 = e.detail)}
                    />
                {/each}
            </div>
        </div>
    </div>
    <div class="py-52 px-8 bg-slate-800 w-full flex items-center">
        <div class="m-auto">
            Contact me at: <a
                href="https://wa.me/qr/EWMOYZYAUGN6D1"
                class="text-blue-500">+972 58-712-0601</a
            >
        </div>
    </div>
</div>

<style>
    :root {
        background: rgb(34, 34, 34);
    }

    .bouncy {
        animation-name: bounce;
        animation-duration: 800ms;
        animation-iteration-count: 4;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
        animation-delay: 200ms;
    }

    @keyframes bounce {
        0% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-5px);
        }
    }

    .projs {
        overflow: hidden;
    }

    .bg-thin {
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
