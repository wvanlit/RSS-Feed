var ghpages = require('gh-pages')

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/wvanlit/RSS-Feed.git',
    user: {
      name: 'Wessel van Lit',
      email: 'wessel@litdev.nl',
    },
  },
  () => {
    console.log('Deploy Complete!')
  }
)
