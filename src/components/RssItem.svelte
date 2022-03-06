<script type="ts">
  export let item: IRssItem
</script>

<article>
  <h3><a href={item.link} target="_blank">{item.title}</a></h3>
  {@html item.description}
  <time>{item.publishDate.toLocaleString()}</time>
</article>

<style>
  /* your styles go here */
</style>
