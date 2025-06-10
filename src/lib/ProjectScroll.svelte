<script>
  import ProjectDisplay from "./ProjectDisplay.svelte";
  import { onMount } from "svelte";

  export let projects = [];
  export let title = "";
  export let subtitle = "";

  let scrollContainer;
  let selectedInd = 0;
  const repeat = (arr, n) => Array(n).fill(arr).flat();

  const projectChunkSize = projects.length;
  let displayed_projects = repeat(projects, 3); // middle chunk is the visible one

  let chunkPixelWidth = 0;
  onMount(() => {
    // Wait for layout, then jump to middle chunk
    scrollContainer.children[projectChunkSize].scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });

    chunkPixelWidth = scrollContainer.children&&Array.from(scrollContainer.children).slice(0,5).map(card => {
    const style = getComputedStyle(card);
    return card.offsetWidth+
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight);
  }).reduce((a, b) => a + b, 0);
    console.log(chunkPixelWidth)
  });

  function scrollByChunk(index) {
    const card = scrollContainer.children[0];
    if (!card) return;

    scrollContainer.scrollLeft =
      scrollContainer.scrollLeft +
      index * chunkPixelWidth;
    //scrollContainer.scrollTo({left: scrollContainer.scrollLeft + index * chunkPixelWidth,behavior: "instant" });  
  }



  function handleScroll() {
    const cards = scrollContainer.children;
    if (!cards || cards.length === 0) return;
    const lowerBound = 2;
    const upperBound = cards.length - 4;

    const cardPositions = []
    let cardPos = 0;
    for (const card of cards) {
        const style = getComputedStyle(card);
        const prevCardPos = cardPos;
        cardPos += card.getBoundingClientRect().width +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight);
        cardPositions.push(cardPos);
    } 
    // Adjust positions to center each card
    for (let i=0; i<cardPositions.length; i++) {
        cardPositions[i] -= (scrollContainer.getBoundingClientRect().width-cardPositions[i<cardPositions.length?i+1:cardPositions.length]+cardPositions[i])/2
    }
    const scrollX = scrollContainer.scrollLeft;
    console.log(scrollContainer.scrollLeft);
    // Reset to middle if looping ends
    console.log(cardPositions[lowerBound-1])
    console.log(cardPositions[upperBound])
    if (scrollX <= cardPositions[lowerBound-1]) {
      cards[lowerBound+projectChunkSize].scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center",
      });
    } else if (scrollX >= cardPositions[upperBound]) {
      cards[upperBound-projectChunkSize+1].scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center"
      });
    }

    handleActiveList(cardPositions);
  }

  let showActive = [];


  function handleActiveList(cardPositions) {
    let index = 0;

    while(scrollContainer.scrollLeft >= (cardPositions[index]+cardPositions[index+1])/2 && index < cardPositions.length-1) {
        index++;
    }
    console.log("Index before: ", index);

    index = index+1
    // Normalize to original project indices (0–4)
    index = ((index - projects.length) % projects.length + projects.length) % projects.length;

    showActive = new Array(projects.length).fill(0);
    showActive[index] = 1;

    console.log("Index: ", index);
    }


</script>




<div class="min-h-96">
    <div class="pt-8 {subtitle.length == 0 ? "py-8" : ""} text-3xl">{title}</div>
    {#if subtitle.length>0}
    <div class="pb-8">{subtitle}</div>
    {/if}
    <div class="flex scrollCont scroll-container scrollbar-hide flex-row w-full snap-x overflow-x-scroll snap-mandatory" bind:this={scrollContainer} on:scroll={handleScroll}>
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
    <div class='w-full flex justify-center items-center gap-10 mt-4'>
        {#key showActive}
        {#each showActive as active, ind}
            <div class="w-1 h-2 rounded-full {active ? 'bg-white' : 'bg-slate-500'} transition-all duration-300"></div>
        {/each}
        {/key}
    </div>
</div>

<style>
    .scrollCont1 {
    scrollbar-width: none;         /* Firefox */
    -ms-overflow-style: none;      /* IE/Edge */ 
    
    }
</style>