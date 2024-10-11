import fs from 'fs/promises'

import { allDocs } from '../.contentlayer/generated/index.mjs'
import pages from '../src/assets/sitemap.json' with { type: 'json' }

const FIXTURE_PATH = 'cypress/fixtures/pages.json'

async function run() {
  try {
    const basePages = pages.map((p) => p.replace('https://nitric.io', ''))

    const docPages = allDocs.map((doc) => {
      return doc.slug === '/' ? '/docs' : `/docs/${doc.slug}`
    })

    const paths = [...basePages, ...docPages].sort((a, b) => a.localeCompare(b))

    console.log(`${paths.length} paths found. Generating fixture`)

    await fs.writeFile(FIXTURE_PATH, JSON.stringify(paths))
  } catch (error) {
    console.log(error.message)

    process.exit(1)
  }
}

run()
