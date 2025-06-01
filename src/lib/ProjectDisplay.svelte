<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import {fade} from "svelte/transition"

    interface Project {
        url: string;
        title: string;
        desc: string;
        codeLang: string;
        src: string;
        program: string;
    }

    const dispatch = createEventDispatcher();
    export let proj: Project;
    export let selected = false;
    export let index: number;
    export let shield = false;
    let w: number;
</script>

<div class="min-w-fit snap-center mx-2 rounded-lg overflow-hidden">

<button
    class="w-full group class0 relative transition-all h-[500px] max-sm:h-[230px] flex flex-row {!Boolean(proj.url) && 'hover:cursor-default'}"
    on:click={window.location=proj.url}
>
    <!--<div
        class="relative h-full group-hover:bg-black group-hover:bg-opacity-70 transition w-[100vw]"
    ></div>-->
        <div
            class="h-full w-full flex flex-col justify-center bottom-0 p-1 text-pretty text-white bg-black bg-opacity-50"
            in:fade={{duration:230,delay:300}}
            out:fade={{duration:100}}
        >
            <h3 class="max-sm:text-lg text-2xl">
                {proj.title}
            </h3>
            {#if proj.desc}
                <p
                    class="pt-2 text-md max-sm:text-xs max-sm:leading-3 max-sm:pt-0.5"
                >
                    {proj.desc}
                </p>
            {/if}
            {#if proj.codeLang}
                <p
                    class="text-sm max-sm:text-[8pt] max-sm:leading-3 max-sm:pt-0.5"
                >
                    Language: {proj.codeLang}
                </p>
            {/if}
            {#if proj.program}
                <p
                    class="text-sm max-sm:text-[8pt] max-sm:leading-3 max-sm:pt-0.5"
                >
                    Program: {proj.program}
                </p>
            {/if}
        </div>
    <!--<img {src} alt="{titleq}"/>-->
        <div class="w-full picture">
            <img
                src={proj.src}
                alt={proj.title}
                style="--src: url('{proj.src}');"
                class="w-full h-full object-cover"
            />
        </div>
 
</button>
   </div>

<style>
    .picture {
        background-image: var(--src);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

</style>
