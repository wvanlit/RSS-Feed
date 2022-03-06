<script type="ts">
  import { fade } from 'svelte/transition'
  import { getErrorMessage } from '~/modules/util/errors'

  export let sources: URL[]
  export let classes: string

  export let addNew: (url: URL) => Promise<void>
  export let remove: (url: URL) => Promise<void>

  let sourceInput: string = ''
  let errorMessage: string = ''

  async function addSource() {
    errorMessage = ''

    try {
      const sourceUrl = new URL(sourceInput)
      await addNew(sourceUrl)
      sourceInput = ''
    } catch (error) {
      if (error instanceof TypeError) errorMessage = error.message.split(':')[1]
      else errorMessage = getErrorMessage(error)
    }
  }
</script>

<section class="sources">
  <h2>Sources</h2>
  <div>
    <input
      bind:value={sourceInput}
      placeholder="Add a new source"
      autocomplete="url"
    />
    <button on:click={addSource}>Add</button>
  </div>
  <span class="error">{errorMessage}</span>
  <ul>
    {#each sources as source}
      <li transition:fade={{ duration: 100 }}>
        <button on:click={() => remove(source)}>x</button>
        {source}
      </li>
    {/each}
  </ul>
</section>

<style>
  .sources {
    grid-area: sources;
  }

  .error {
    color: red;
  }

  ul {
    list-style-type: none;
    margin: 10px 10px;
    padding: 0;
  }

  li {
    padding: 5px 0px;
  }
</style>
