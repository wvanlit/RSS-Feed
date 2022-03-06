<script lang="ts">
  import { onMount } from 'svelte'

  import { container } from 'tsyringe'
  import FeedFilter from './components/FeedFilter.svelte'
  import RssMultiFeed from './components/RssMultiFeed.svelte'
  import SourceList from './components/SourceList.svelte'
  import { createLocalStore } from './modules/util/localStorageStore'

  let configStore = createLocalStore<IUserConfig>('config', {
    sources: [],
    filter: {},
  })

  let config: IUserConfig
  configStore.subscribe(c => (config = c))

  let manager = container.resolve<IRssFeedManager>('rss.feedmanager')

  let initialLoadPromise: Promise<void>
  onMount(async () => {
    try {
      initialLoadPromise = manager.loadInitial(config.sources)
      return
    } catch (err) {
      console.error('Error during loading initial sources:', err)
    }

    initialLoadPromise = Promise.resolve()
  })

  const updateState = () => {
    manager = manager
    configStore.set(config)
  }

  async function addNewSource(url: URL) {
    await manager.add(url)

    config.sources = manager.feeds.map(f => f.url)
    updateState()
  }

  async function removeSource(url: URL) {
    manager.delete(url)

    config.sources = manager.feeds.map(f => f.url)
    updateState()
  }
</script>

<div class="App">
  <header class="header">
    <h1>RSS Feed Viewer</h1>
  </header>
  {#await initialLoadPromise}
    Loading initial feed...
  {:then}
    <SourceList
      classes="sources"
      sources={manager.feeds.map(feed => feed.url)}
      addNew={addNewSource}
      remove={removeSource}
    />
    <FeedFilter
      feeds={manager.feeds}
      bind:filter={config.filter}
      on:updated={message => {
        config.filter = message.detail
        configStore.set(config)
      }}
    />
    <RssMultiFeed items={manager.showItems(config.filter)} />
  {/await}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  .App {
    font-family: 'Poppins', sans-serif;

    padding: 25px;
    min-height: calc(100vh - 50px);

    display: grid;
    grid-template:
      'header feed' 50px
      'sources feed' auto
      'filter feed' 1fr;

    grid-template-columns: auto 1fr;
  }

  .header {
    grid-area: header;
  }
</style>
