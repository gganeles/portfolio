<script>
    import ProjectDisplay from "./ProjectDisplay.svelte";
    ;
    import { onMount } from "svelte";
    export let projects = [];
    let displayed_projects = [projects[projects.length-2], projects[projects.length-1], ...projects, projects[0]]
    export let title = ""
    export let subtitle = ""
    export let scrollDeets = [0,0,projects.length]
    let selectedInd = 0;
    let scrollContainer;
    let scrollTarg=0;
    onMount(() => {
        const container = scrollContainer
        scrollToNumber(scrollDeets[0], container, projects.length)
    });


    function scrollToNumber(n, scrollElement, listLen) {
        if (!scrollElement || listLen === 0) return;
        const wrappedIndex = (n) % (listLen + 2);
        const targetElement = scrollElement.children[wrappedIndex]
        console.log(targetElement)
        targetElement.scrollIntoView({ behavior: 'instant', inline: 'start', block: 'nearest' });
    }


    function handleScroll() {
        const scrollX = scrollContainer.scrollLeft;
        const lowerBoundInd = scrollDeets[1]
        const upperBoundInd = scrollDeets[2]
        const gap = 8;
        if (scrollContainer.children.length===0) return
        let lowerBound = scrollContainer.children[lowerBoundInd].offsetLeft - (gap);
        lowerBound-=.5*(scrollContainer.clientWidth-scrollContainer.children[lowerBoundInd].getBoundingClientRect().width)
        let upperBound = scrollContainer.children[upperBoundInd].offsetLeft - (gap);
        upperBound-=.5*(scrollContainer.clientWidth-scrollContainer.children[upperBoundInd].getBoundingClientRect().width)

        if (scrollX<lowerBound-1.5) {
            scrollContainer.scrollLeft = upperBound
        } else if (scrollX>upperBound+1.5){
            scrollContainer.scrollLeft = lowerBound
        }
    }
</script>

<div class="min-h-96">
    <div class="pt-8 {subtitle.length == 0 ? "py-8" : ""} text-3xl">{title}</div>
    {#if subtitle.length>0}
    <div class="pb-8">{subtitle}</div>
    {/if}
    <div class="flex scrollCont scroll-container scrollbar-hide flex-row w-full snap-x overflow-x-scroll" bind:this={scrollContainer} on:scroll={handleScroll}>
        {#if projects.length>0}
            {#each displayed_projects as proj, ind}
                    <ProjectDisplay
                        {proj}
                        selected={ind == selectedInd}
                        index={ind}
                        on:hovered={(e) => (selectedInd = e.detail)}
                    />
            {/each}
        {/if}
    </div>
</div>

<style>
    .scrollCont {
    scrollbar-width: none;         /* Firefox */
    -ms-overflow-style: none;      /* IE/Edge */
    }
</style>