<script type="ts">
  import RssItem from './RssItem.svelte'
  import { fade } from 'svelte/transition'

  export let feed: IRssFeed
</script>

<main>
  <header>
    <h1>{feed.channel.title}</h1>
  </header>
  <ul>
    {#each feed.items as item}
      <li transition:fade>
        <RssItem {item} />
      </li>
    {/each}
  </ul>
</main>

<style>
  /* your styles go here */
</style>
