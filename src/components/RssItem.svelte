<script type="ts">
  import { debug } from 'svelte/internal'

  export let item: IRssItem

  function formatDate(date: Date) {
    return date.toLocaleString('en-UK', {
      hour12: false,

      day: '2-digit',
      month: 'short',
      year: '2-digit',

      hour: '2-digit',
      minute: '2-digit',
    })
  }
</script>

<article>
  <time>[{formatDate(item.publishDate)}]</time><br />
  <h3>
    <a href={item.link} target="_blank">{@html item.title}</a>
  </h3>
  <div>
    {@html item.description}
  </div>
</article>

<style>
  time {
    font-family: 'monospace';
  }

  article {
    margin: 0.5em;
    padding: 1em 2em;
    background-color: #ccc;
    color: var(--feed-item-bg);
    border-radius: 10px;
  }

  a {
    color: var(--feed-item-text);
  }

  a:hover,
  a:visited:hover {
    color: var(--primary);
  }

  a:visited {
    color: var(--feed-item-text-visited);
  }
</style>
