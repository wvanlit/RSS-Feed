<script lang="ts">
  import { onMount } from 'svelte'
  import RssFeed from './components/rss/RssFeed.svelte'
  import { RssProvider } from './modules/rss/RssProvider'

  const url = new URL('https://hnrss.org/frontpage')

  const feedPromise = new RssProvider().getFeed(url)
</script>

<div class="App">
  {#await feedPromise}
    Loading Feed...
  {:then feed}
    <RssFeed {feed} />
  {/await}
</div>

<style>
</style>
