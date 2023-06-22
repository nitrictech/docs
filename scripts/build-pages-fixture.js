const { XMLParser } = require('fast-xml-parser')
const fs = require('fs/promises')
const FIXTURE_PATH = 'cypress/fixtures/pages.json'
const SITEMAP_PATH = 'public/sitemap-0.xml'
const BASE_URL = 'https://nitric.io'

const parser = new XMLParser()

async function run() {
  try {
    await fs.mkdir('cypress/fixtures', {
      recursive: true,
    })

    const xmlData = await fs.readFile(SITEMAP_PATH, 'utf-8')
    let jsonObj = parser.parse(
      xmlData,
      {
        ignoreAttributes: true,
      },
      true
    )

    const paths = jsonObj.urlset.url.map((p) =>
      p.loc === BASE_URL
        ? '/'
        : p.loc.substring(BASE_URL.length, p.loc.length).replace('/_index', '')
    )

    console.log(`${paths.length} paths found. Generating fixture`)

    await fs.writeFile(FIXTURE_PATH, JSON.stringify(paths))
  } catch (error) {
    console.log(error.message)
  }
}

run()
