<script>
    export let title = "";
    export let src;
    export let desc;
</script>

<div class="group w-full h-full relative hover:cursor-pointer">
    <!-- <div class="picture w-full h-full">
         text
     </div>-->
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
    <img {src} alt="{title}"/>
</div>

<style>
    .picture {
        background-image: var(--src);
        background-size: cover;
    }
</style>