import { allDocs } from '@/content'

const URL = 'https://nitric.io/docs'

interface SitemapItem {
  loc: string
  lastmod: string
  changefreq: string
  priority: number
}

// Function to construct the XML structure of the sitemap index.
export async function GET() {
  const pages: SitemapItem[] = allDocs.map((page) => ({
    loc: page.slug === '' ? URL : `${URL}/${page.slug}`,
    lastmod: new Date(page.lastModified).toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }))

  const allPagesSorted = [...pages].sort((a, b) => (a.loc < b.loc ? -1 : 1))

  const sitemapIndexXML = buildSitemap(allPagesSorted)

  // Return the sitemap index XML with the appropriate content type.
  return new Response(sitemapIndexXML, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

function buildSitemap(items: SitemapItem[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  for (const pageURL of items) {
    xml += '<url>'
    xml += `<loc>${pageURL.loc}</loc>`
    xml += `<lastmod>${pageURL.lastmod}</lastmod>` // Set the <lastmod> to the current date in IST
    xml += '</url>'
  }

  xml += '</urlset>'
  return xml
}
