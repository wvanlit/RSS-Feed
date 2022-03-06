<script type="ts">
  import { debug } from 'svelte/internal'

  export let item: IRssItem

  function formatDate(date: Date) {
    return date.toLocaleString('en-UK', {
      hour12: false,

      day: 'numeric',
      month: 'short',
      year: '2-digit',

      hour: '2-digit',
      minute: '2-digit',
    })
  }
</script>

<article>
  <h3><a href={item.link} target="_blank">{@html item.title}</a></h3>
  {@html item.description}
  <time>{formatDate(item.publishDate)}</time>
</article>

<style>
  article {
    margin: 0.5em;
    padding: 1em 2em;
    background-color: #ccc;
    color: #333;
    border-radius: 10px;
  }

  a {
    color: #111;
  }

  a:hover {
    color: rgb(255, 122, 13);
  }

  a:visited {
    color: #999;
  }
</style>
