import 'reflect-metadata'
import { expect } from 'chai'
import { RssProvider } from './RssProvider'

describe('Rss Feed Provider', () => {
  it('Returns a valid RSS Feed from an RSS URL', async () => {
    const url = new URL('https://hnrss.org/frontpage')
    const provider = new RssProvider()

    const feed = await provider.getFeed(url)

    expect(feed).to.not.be.undefined
    expect(feed.channel.title).to.equal('Hacker News: Front Page')
  })
})
