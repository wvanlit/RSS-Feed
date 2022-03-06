<script type="ts">
  import { getErrorMessage } from '~/modules/util/errors'

  export let sources: URL[]
  export let addNew: (url: URL) => void
  export let remove: (url: URL) => void

  let sourceInput: string = ''
  let errorMessage: string = ''

  function addSource() {
    errorMessage = ''

    try {
      const sourceUrl = new URL(sourceInput)
      addNew(sourceUrl)
    } catch (error) {
      if (error instanceof TypeError) errorMessage = error.message.split(':')[1]
      else errorMessage = getErrorMessage(error)
    }
  }
</script>

<section>
  <h2>Sources</h2>
  <ul>
    {#each sources as source}
      <li>
        {source} <button on:click={() => remove(source)}>x</button>
      </li>
    {/each}
  </ul>
  <div>
    <input
      bind:value={sourceInput}
      placeholder="Add a new source"
      autocomplete="url"
    />
    <button on:click={addSource}>Add</button>
  </div>
  <span class="error">{errorMessage}</span>
</section>

<style>
  .error {
    color: red;
  }
</style>
