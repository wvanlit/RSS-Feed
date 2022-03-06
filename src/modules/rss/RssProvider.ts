import { injectable } from 'tsyringe'
import { RssFeed } from './RssFeed'

@injectable()
export class RssProvider implements IRssProvider {
  public async getFeed(url: URL): Promise<IRssFeed> {
    const content = await fetch(url.toString())
    const response = new DOMParser().parseFromString(
      await content.text(),
      'text/xml'
    )

    return new RssFeed(url, response)
  }

  public async getAllFeeds(urls: URL[]): Promise<IRssFeed[]> {
    return await Promise.all(urls.map(this.getFeed))
  }
}
