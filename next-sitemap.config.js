/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vasudexim.com', // your website URL
  generateRobotsTxt: true, // (optional) will generate robots.txt as well
  sitemapSize: 5000, // optional, split if too many pages
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ["/admin/*", "/private/*"], // exclude sensitive pages
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://vasudexim.com/sitemap.xml',
    ],
  },
}
