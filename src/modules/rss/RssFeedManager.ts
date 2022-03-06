import { inject, injectable } from 'tsyringe'

@injectable()
export class RssFeedManager implements IRssFeedManager {
  feeds: IRssFeed[] = []

  private provider: IRssProvider

  constructor(@inject('rss.provider') provider: IRssProvider) {
    this.provider = provider
  }

  //#region CRUD Methods
  get(url: URL): IRssFeed | undefined {
    return this.feeds.find(feed => feed.url === url)
  }

  async add(url: URL): Promise<void> {
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

  showItems(filter?: IRssFeedFilter | undefined): IRssItem[] {
    // TODO filter
    return this.feeds.flatMap(feed => feed.items)
  }
}
