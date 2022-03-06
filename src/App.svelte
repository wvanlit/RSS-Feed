<script lang="ts">
  import { container } from 'tsyringe'
  import RssItem from './components/rss/RssItem.svelte'
  import SourceList from './components/SourceList.svelte'

  let manager = container.resolve<IRssFeedManager>('rss.feedmanager')

  $: feeds = manager.feeds
  $: itemsPromise = manager.showItems()

  const updateView = () => {
    manager = manager
  }

  async function addNewSource(url: URL) {
    await manager.add(url)
    updateView()
  }

  async function removeSource(url: URL) {
    manager.delete(url)
    updateView()
  }
</script>

<div class="App">
  <h1>RSS Feed Viewer</h1>
  <SourceList
    sources={feeds.map(feed => feed.url)}
    addNew={addNewSource}
    remove={removeSource}
  />
  {#await itemsPromise}
    Loading Feed...
  {:then feed}
    {#each feed as item}
      <RssItem {item} />
    {/each}
  {/await}
</div>

<style>
</style>
