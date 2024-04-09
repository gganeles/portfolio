<script>
    import ProjectDisplay from "$lib/ProjectDisplay.svelte";

    import { dev } from "$app/environment";

    function generateProject(
        title,
        src = "images/e44d5f00-6bed-4075-bb5c-c2f91fbe77b4.jpeg",
        desc = "",
        url = "",
    ) {
        return {
            src: dev ? src : "../../../" + src,
            title,
            desc,
            url,
        };
    }

    let projects = {
        Programming: [
            generateProject(
                "ShabBOT",
                "images/93b13e09-5dad-4fab-b131-a5488a0df60b.jpeg",
                "Shabbat Whatsapp Assistant",
                "https://github.com/gganeles/shabBOT#readme-ov-file",
            ),
            generateProject(
                "Formula Technion Website",
                "images/formulaSite.png",
                "formulatechnion.com",
                "https://formulatechnion.com",
            ),
            generateProject(
                "Set and Other Games",
                "images/setGame.png",
                "Realtime card game website",
                "https://setgame-4508c.web.app",
            ),
            generateProject(
                "CERN ATLAS Detector Algorithm",
                "images/newSmallWheel.png",
                "sTGC muon detector software",
            ),
            generateProject(
                "sEEG-to-Speech Data Analysis Pipeline",
                "images/NY917_T1_D_left_both_label.png",
                "",
            ),
        ],
        Design: [
            generateProject(
                "Parachute Mechanism",
                "images/parachuteLauncher.png",
            ),
            generateProject(
                "Hybrid Solid-Gas Model Rocket",
                "images/rocketDesign.png",
            ),
            generateProject("Formula Student PCB Design", "images/pcb3d.png","CANbus sensor modules"),

            generateProject(
                "Robotic Gripper Design",
                "images/fishGripper.png",
                "Robotic gripper for fish pick and place",
            ),
        ],
    };
</script>

<svelte:head>
    <title>Gabriel Ganeles</title>
</svelte:head>
<div class="flex items-center w-full flex-col">
    <div class="p-0 pt-10 w-full max-w-[1000px]">
        <div class="py-72 px-2 max-sm:py-40">
            <h1 class="text-7xl">Gabriel Ganeles</h1>
            <h2 class="text-3xl">Biomedical Engineering Student</h2>
        </div>
        <div class="p-2 pb-8">
            <h1 class="text-5xl">Experience</h1>
            {#each Object.keys(projects) as projectType}
                <div class="py-8 text-3xl">
                    {projectType}
                </div>
                <div
                    class="grid grid-cols-3 max-sm:grid-cols-2 gap-2 max-sm:gap-1"
                >
                    {#each projects[projectType] as proj}
                        <ProjectDisplay
                            src={proj.src}
                            title={proj.title}
                            desc={proj.desc}
                            url={proj.url}
                        />
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="py-52 px-8 bg-slate-200 w-full flex items-center">
        <div class="m-auto">
            Contact me at: <a
                href="https://wa.me/qr/EWMOYZYAUGN6D1"
                class="text-blue-500">+972 58-712-0601</a
            >
        </div>
    </div>
</div>
