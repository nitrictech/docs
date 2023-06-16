/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nitric.io/docs',
  generateRobotsTxt: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production',
}
