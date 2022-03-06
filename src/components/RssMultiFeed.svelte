<script type="ts">
  import RssItem from './RssItem.svelte'
  import { fade } from 'svelte/transition'

  export let items: IRssItem[]
</script>

<main class="feed">
  {#if items.length === 0}
    <h2>No results</h2>
  {:else}
    <ul>
      {#each items as item, i (item.link)}
        {#key item}
          <li in:fade={{ delay: i * 30 }}>
            <RssItem {item} />
          </li>
        {/key}
      {/each}
    </ul>
  {/if}
</main>

<style>
  .feed {
    grid-area: feed;

    box-sizing: border-box;
    margin-left: 1em;
    padding-right: 8px;
    max-height: calc(100vh - 4em);

    background: #efefef;
    box-shadow: inset 0px 0px 15px #2225;
    border-radius: 20px 20px;
  }

  ul {
    height: 100%;
    padding: 10px 10px;
    list-style: none;
    overflow-y: scroll;
  }

  h2 {
    text-align: center;
    margin-top: 35vh;
  }
</style>
