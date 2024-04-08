<script lang="ts">
    import ProjectDisplay from "$lib/ProjectDisplay.svelte";

    import {dev } from "$app/environment"

    function generateProject(title: string, src = 'images/e44d5f00-6bed-4075-bb5c-c2f91fbe77b4.jpeg', desc = "",url = "") {
        return {
            src: dev?src:"../../../"+src, title, desc, url
        }
    }

    let projects = [
        generateProject("ShabBOT", "images/93b13e09-5dad-4fab-b131-a5488a0df60b.jpeg", "Shabbat Whatsapp Assistant","https://gganeles.github.io/portfolio/folder"),
        generateProject("Formula Technion Website", "images/formulaSite.png","formulatechnion.com","https://formulatechnion.com"),
        generateProject("Set and Other Games","images/setGame.png","Realtime card game website","https://setgame-4508c.web.app"),
        generateProject("Formula Student PCB Design","images/pcb3d.png"),
        generateProject("Parachute Mechanism","images/parachuteLauncher.png"),
        generateProject("Hybrid Solid-Gas Model Rocket","images/rocketDesign.png"),
        generateProject("CERN ATLAS Detector","images/newSmallWheel.png","New Small Wheel student engineer",),
        generateProject("sEEG Data Analysis Pipeline"),
        generateProject("Robotic Gripper Design","images/fishGripper.png","Robotic gripper for fish pick and place"),
    ]
</script>


<svelte:head>
    <title>Gabriel Ganeles</title>
</svelte:head>
<div class="flex justify-center w-full">
<div class="p-4 pt-10 w-full max-w-[1000px]">
    <h1 class="text-7xl pb-2">
        Gabriel Ganeles
    </h1>
    <h2 class="py-2">
        Age: 22
    </h2>
    <div class="pb-2">
        Skills: software development, mechanical design, electrical design
    </div>
    <div>
        <div class="text-3xl pb-2">
            Projects:
        </div>
        <div class="grid grid-cols-3 gap-1">
            {#each projects as proj}
                <ProjectDisplay src={proj.src} title={proj.title} desc={proj.desc} url={proj.url}/>
            {/each}
        </div>
    </div>
</div>
</div>