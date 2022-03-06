import { container } from 'tsyringe'
import { RssFeedManager, RssProvider } from '~/modules/rss'

export function addDependencies() {
  container.register<IRssProvider>('rss.provider', RssProvider)
  container.register<IRssFeedManager>('rss.feedmanager', RssFeedManager)
}
