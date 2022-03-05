import chai, { expect } from 'chai'
import { RssProvider } from './RssProvider'

describe('Rss Feed Provider', () => {
  it.skip('Returns a valid RSS Feed from an RSS URL', async () => {
    const url = new URL('https://hnrss.org/frontpage')
    const provider = new RssProvider()

    const feed = await provider.getFeed(url)

    expect(feed).to.not.be.undefined
    expect(feed).to.have.property('channel')
    expect(feed).to.have.property('items')
  })
})
