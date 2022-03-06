<script type="ts">
  import { createEventDispatcher } from 'svelte'

  export let feeds: IRssFeed[]
  export let filter: IRssFeedFilter

  const dispatch = createEventDispatcher<{ updated: IRssFeedFilter }>()

  function toggleEnabled(feed: IRssFeed) {
    if (!filter.urls) {
      filter.urls = []
    }

    const index =
      filter?.urls?.findIndex(u => u.toString() === feed.url.toString()) ?? -1

    if (index >= 0) {
      filter.urls.splice(index, 1)
    } else {
      filter.urls.push(feed.url)
    }

    filter = filter
    dispatch('updated', filter)
  }
</script>

<section class="filter">
  <h2>Filter Feed</h2>
  <ul>
    {#each feeds as feed}
      {@const title =
        feed.channel.title !== '' ? feed.channel.title : feed.url.toString()}
      <li class="feed-title">
        <input
          type="checkbox"
          checked={filter.urls?.includes(feed.url)}
          bind:value={feed.url}
          on:click={() => toggleEnabled(feed)}
        />

        <span {title} class="feed-title">
          {@html title}
        </span>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style-type: none;
    margin: 0px 10px;
    padding: 0;
  }

  li {
    padding: 2px 0px;
  }

  .filter {
    grid-area: filter;

    padding-left: 5px;
  }

  input[type='checkbox'] {
    /* change "blue" browser chrome to yellow */
    filter: invert(100%) hue-rotate(18deg) brightness(1.7);
  }
</style>
