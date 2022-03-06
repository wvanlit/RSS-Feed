import 'reflect-metadata'
import { expect } from 'chai'
import { container } from 'tsyringe'
import { RssChannel } from './RssFeed'
import { RssFeedManager } from './RssFeedManager'

class FakeRssProvider implements IRssProvider {
  feed: IRssFeed | undefined

  async getFeed(url: URL): Promise<IRssFeed> {
    return this.feed!
  }

  setFeed(feed: IRssFeed): void {
    this.feed = feed
  }
}

class FakeUrlFeed implements IRssFeed {
  url: URL
  channel: IRssChannel
  items: IRssItem[]

  constructor(url: URL) {
    this.url = url
    this.channel = new RssChannel(document)
    this.items = []
  }
}

const provider = new FakeRssProvider()

container.register<IRssProvider>('rss.provider', { useValue: provider })
container.register<IRssFeedManager>('rss.feedmanager', {
  useClass: RssFeedManager,
})

describe('Rss Feed Manager', () => {
  it('can add feeds', async () => {
    const url = new URL('http://localhost')

    provider.setFeed(new FakeUrlFeed(url))

    const manager = container.resolve<IRssFeedManager>('rss.feedmanager')

    await manager.add(url)

    expect(manager.feeds[0].url).to.eq(url)
    expect(manager.feeds.length).to.eq(1)
  })

  it('can update feeds', async () => {})

  it('can delete feeds', () => {})

  it('can retrieve specific feeds', () => {})

  it('can show items from multiple feeds', () => {})

  it('can filter items from multiple feeds based on their feed', () => {})

  it('can filter items from multiple feeds based on the date', () => {})
})
