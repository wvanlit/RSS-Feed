import { expect } from 'chai'
import { RssChannel, RssFeed, RssItem } from './RssFeed'

const rss = new DOMParser().parseFromString(
  `
  <channel>
    <title>RSS Test Feed</title>
    <description>
      <![CDATA[<p>A test feed for my RSS Viewer</p>]]>
    </description>
    <link>https://github.com/wvanlit/RSS-Feed/</link>
    <item>
      <title>Test #1</title>
      <description><![CDATA[<p>This is a test!</p>]]></description>
      <pubDate>Sat, 5 Mar 2022 10:00:00 +1000</pubDate>
    </item>
    <item>
      <title>Test #2</title>
      <description><![CDATA[<p>This is also a test!</p>]]></description>
      <pubDate>Sat, 5 Mar 2022 11:00:00 -0000</pubDate>
    </item>
    <item>
      <title>Test #3</title>
      <description><![CDATA[<p>This is still a test!</p>]]></description>
      <pubDate>Sat, 5 Mar 2022 12:00:00 -0000</pubDate>
    </item>
  </channel>
`,
  'text/xml'
)

describe('Rss Feed', () => {
  describe('Rss Channel', () => {
    it('Parses data correctly', () => {
      const channel = new RssChannel(rss)

      expect(channel.title).to.equal('RSS Test Feed')
      expect(channel.link).to.equal('https://github.com/wvanlit/RSS-Feed/')
      expect(channel.description).to.equal(
        '<p>A test feed for my RSS Viewer</p>'
      )
    })
  })

  describe('Rss Item', () => {
    const rssItem = rss.querySelector('item')! // Get first item from feed
    const item = new RssItem(rssItem)

    expect(item.title).to.equal('Test #1')
    expect(item.description).to.equal('<p>This is a test!</p>')
    expect(item.link).to.equal('')

    const targetDate = new Date('05 Mar 2022 10:00:00 +1000')
    expect(item.publishDate).to.deep.eq(targetDate)
  })

  describe('Rss Feed', () => {
    const feed = new RssFeed(new URL('http://localhost'), rss)

    expect(feed.channel.title).to.equal('RSS Test Feed')
    expect(feed.items.length).to.equal(3)

    expect(feed.items[0].title).to.equal('Test #1')
    expect(feed.items[1].title).to.equal('Test #2')
    expect(feed.items[2].title).to.equal('Test #3')
  })
})
