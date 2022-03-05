interface IRssChannel {
  readonly title: string
  readonly link: string
  readonly description: string
}

interface IRssItem {
  readonly title: string
  readonly description: string
  readonly publishDate: Date
  readonly link: string
}

interface IRssFeed {
  readonly channel: IRssChannel
  readonly items: IRssItem[]
}

interface IRssProvider {
  getFeed: (url: URL) => Promise<IRssFeed>
}
