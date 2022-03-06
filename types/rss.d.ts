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
  readonly url: URL
  readonly channel: IRssChannel
  readonly items: IRssItem[]
}

interface IRssProvider {
  getFeed(url: URL): Promise<IRssFeed>
  getAllFeeds(urls: URL[]): Promise<IRssFeed[]>
}

interface IRssFeedManager {
  readonly feeds: IRssFeed[]

  loadInitial(url: URL[]): Promise<void>

  // CRUD
  get(url: URL): IRssFeed | undefined
  add(url: URL): Promise<void>
  update(current: URL, update: URL): Promise<void>
  delete(url: URL): void

  // Display
  showItems(filter: IRssFeedFilter): IRssItem[]
}

interface IRssFeedFilter {
  urls?: URL[]
  beforeDate?: Date
  afterDate?: Date
}
