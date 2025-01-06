/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: '/vercel/.cache/puppeteer',
  executablePath:
    '/vercel/.cache/puppeteer/chrome/linux-131.0.6778.204/chrome-linux64/chrome',
  chrome: {
    skipDownload: true,
  },
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
}
