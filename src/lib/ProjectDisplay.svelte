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

<button
    class="group class0 relative transition-all h-[500px] max-sm:h-[230px] {selected
        ? 'w-5/6'
        : 'w-1/6'}  {!Boolean(proj.url) && 'hover:cursor-default'}"
    on:click={(e) => {
        console.log(e);
        if (e.pointerType == "mouse") {
            window.location = proj.url;
        } else if (shield) {
            window.location = proj.url;
        } else {
            shield = true;
        }
    }}
    on:mouseenter={() => dispatch("hovered", index)}
    on:mouseleave={()=>shield=false}
>
    <div
        class="absolute h-full group-hover:bg-black group-hover:bg-opacity-70 transition"
    ></div>
    {#if selected}
        <div
            class="absolute h-full flex flex-col justify-center bottom-0 p-1 text-pretty text-white bg-black bg-opacity-50 w-full"
            in:fade={{duration:230,delay:300}}
            out:fade={{duration:50}}
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
    {/if}
    <!--<img {src} alt="{title}"/>-->
    <div class="picture w-full h-full" style="--src:url({proj.src})"></div>
</button>

<style>
    .picture {
        background-image: var(--src);
        background-size: cover;
        background-position: center;
    }
</style>
