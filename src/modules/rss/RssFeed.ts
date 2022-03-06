export class RssFeed implements IRssFeed {
  channel: IRssChannel
  items: IRssItem[]
  url: URL

  constructor(url: URL, rss: Document) {
    this.channel = new RssChannel(rss)
    this.url = url

    this.items = Array.from(rss.querySelectorAll('item')).map(
      item => new RssItem(item)
    )
  }
}

export class RssChannel implements IRssChannel {
  title: string
  link: string
  description: string

  constructor(rss: Document) {
    this.title = queryOrDefault(rss, 'channel title')
    this.link = queryOrDefault(rss, 'channel link')
    this.description = queryOrDefault(rss, 'channel description')
  }
}

export class RssItem implements IRssItem {
  title: string
  description: string
  publishDate: Date
  link: string

  constructor(rssItem: Element) {
    this.title = queryOrDefault(rssItem, 'title')
    this.description = queryOrDefault(rssItem, 'description')
    this.link = queryOrDefault(rssItem, 'link')
    this.publishDate = new Date(queryOrDefault(rssItem, 'pubDate')) // todo
  }
}

function queryOrDefault(
  node: Document | Element,
  query: string,
  defaultValue = ''
): string {
  const queryResult =
    node.querySelector(query)?.innerHTML?.trim() ?? defaultValue

  if (!queryResult.includes('CDATA')) return queryResult

  const matchedResult = queryResult.match(/<!\[CDATA\[(.*)\]\]\>/)

  if (matchedResult === null) return defaultValue
  return matchedResult[1]
}
