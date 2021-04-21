const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/static',
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/instruction',
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/how-it-works',
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/webar',
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'weekly'
  },
];

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'http://seq.killercode.site', paths, options: {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'weekly',
          priority: 0.8
        }
      })
    ]
  }
}