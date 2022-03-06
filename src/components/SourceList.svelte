<script type="ts">
  import { fade } from 'svelte/transition'
  import { getErrorMessage } from '~/modules/util/errors'

  const urlLength = 30

  export let sources: URL[]

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

  function cleanUrl(url: string, max = 30) {
    const value = url.replace(/https?\:\/\//i, '').replace('www.', '')
    return value.slice(0, max) + (value.length > max ? '...' : '')
  }
</script>

<section class="sources">
  <h2>Sources</h2>
  <div>
    <input
      bind:value={sourceInput}
      on:change={() => (errorMessage = '')}
      placeholder="Add a new source"
      autocomplete="url"
    />
    <button class="add" on:click={addSource}>Add</button>
  </div>
  <span class="error">{errorMessage}</span>
  <ul>
    {#each sources as source}
      <li transition:fade={{ duration: 100 }} title={source.toString()}>
        <button class="remove" on:click={() => remove(source)}>x</button>
        {cleanUrl(source.toString())}
      </li>
    {/each}
  </ul>
</section>

<style>
  .sources {
    grid-area: sources;

    padding-left: 5px;
  }

  .error {
    color: #ff0f0f;
    font-weight: bold;
  }

  .remove {
    background-color: rgb(145, 145, 145);
    color: white;
    font-size: 20px;
    border-radius: 0.2em;

    padding: 3px 8px 4px;
    line-height: 18px;
    text-align: center;
  }

  .add {
    background-color: rgb(145, 145, 145);
    color: white;
    font-size: 20px;
    border-radius: 0.2em;

    padding: 6px 8px 7px;
    line-height: 19px;
    text-align: center;
  }

  input {
    box-sizing: border-box;
    background: #ccc;
    border-radius: 5px;
    max-width: 250px;
    padding: 4px;
  }

  ul {
    list-style-type: none;
    margin: 10px 0px;
    padding: 0;
  }

  li {
    padding: 5px 0px;
  }
</style>
