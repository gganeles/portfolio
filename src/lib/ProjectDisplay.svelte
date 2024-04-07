<script lang="ts">
    export let title = "";
    export let src;
    export let desc;
    export let url;
    let w: number;
</script>


<a class="group w-full class0 relative hover:cursor-pointer" href={url} bind:clientWidth={w} style="--height:{w}px">
    <div class="absolute w-full h-full group-hover:bg-black group-hover:bg-opacity-50 transition">
    </div>
    <div class="absolute bottom-0 p-1 text-pretty text-slate-200 bg-black bg-opacity-50 w-full">
        <h3>
            {title}
        </h3>
        {#if $$props.desc}
            <p class="text-sm">
                {desc}
            </p>
        {/if}
    </div>
    <!--<img {src} alt="{title}"/>-->
    <div class="picture w-full h-full" style="--src:url({src})">
    </div>
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