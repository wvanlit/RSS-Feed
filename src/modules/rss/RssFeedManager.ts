import { inject, injectable } from 'tsyringe'

@injectable()
export class RssFeedManager implements IRssFeedManager {
  feeds: IRssFeed[] = []

  private provider: IRssProvider

  constructor(@inject('rss.provider') provider: IRssProvider) {
    this.provider = provider
  }

  async loadInitial(urls: URL[]): Promise<void> {
    this.feeds = await this.provider.getAllFeeds(urls)
  }

  //#region CRUD Methods
  get(url: URL): IRssFeed | undefined {
    return this.feeds.find(feed => feed.url === url)
  }

  async add(url: URL): Promise<void> {
    if (this.feeds.find(f => f.url.toString() === url.toString()))
      throw new Error('URL already in feed')
    this.feeds.push(await this.provider.getFeed(url))
    this.feeds = [...this.feeds]
  }

  async update(current: URL, update: URL): Promise<void> {
    const itemIndex = this.feeds.findIndex(feed => feed.url === current)
    this.feeds[itemIndex] = await this.provider.getFeed(update)
  }

  delete(url: URL): void {
    const itemIndex = this.feeds.findIndex(feed => feed.url === url)
    this.feeds.splice(itemIndex, 1)
  }
  //#endregion

  showItems(filter: IRssFeedFilter): IRssItem[] {
    return this.feeds
      .filter(feed => filter.urls?.includes(feed.url))
      .flatMap(feed => feed.items)
      .sort(
        (itemA, itemB) =>
          itemB.publishDate.getTime() - itemA.publishDate.getTime()
      )
  }
}
