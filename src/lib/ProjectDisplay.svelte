<script lang="ts">
    interface Project {
        url: string;
        title: string;
        desc: string;
        codeLang: string;
        src: string;
        program: string;
    }

    export let proj: Project;
    let w: number;
</script>

<a
    class="group w-full class0 relative {!Boolean(proj.url) &&
        'hover:cursor-default'}"
    href={proj.url ? proj.url : ""}
    bind:clientWidth={w}
    style="--height:{w}px;"
>
    <div
        class="absolute w-full h-full group-hover:bg-black group-hover:bg-opacity-50 transition"
    ></div>
    <div
        class="absolute bottom-0 p-1 text-pretty text-slate-200 bg-black bg-opacity-50 w-full"
    >
        <h3 class="max-sm:text-xs">
            {proj.title}
        </h3>
        {#if proj.desc}
            <p class="text-sm max-sm:text-[8pt] max-sm:leading-3 max-sm:pt-0.5">
                {proj.desc}
            </p>
        {/if}
        {#if proj.codeLang}
            <p class="text-xs max-sm:text-[8pt] max-sm:leading-3 max-sm:pt-0.5">
                Language: {proj.codeLang}
            </p>
        {/if}
        {#if proj.program}
            <p class="text-xs max-sm:text-[8pt] max-sm:leading-3 max-sm:pt-0.5">
                Program: {proj.program}
            </p>
        {/if}
    </div>
    <!--<img {src} alt="{title}"/>-->
    <div class="picture w-full h-full" style="--src:url({proj.src})"></div>
</a>

<style>
    .picture {
        background-image: var(--src);
        background-size: cover;
        background-position: center;
    }
    .class0 {
        height: var(--height);
    }
</style>
