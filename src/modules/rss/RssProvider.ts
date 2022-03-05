import { RssFeed } from './RssFeed'

export class RssProvider implements IRssProvider {
  public async getFeed(url: URL): Promise<IRssFeed> {
    const content = await fetch(url.toString())
    const response = new DOMParser().parseFromString(
      await content.text(),
      'text/xml'
    )

    return new RssFeed(response)
  }
}
