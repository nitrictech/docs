import * as pages from '../fixtures/pages.json'
import { XMLParser } from 'fast-xml-parser'
const parser = new XMLParser()

const CORRECT_CODES = [200]
// site should not return internal redirects
const REDIRECT_CODES = [301, 302, 304, 307, 308]
// other non standard codes, like 999 from linkedin
const OTHER_CODES = [999]

const IGNORED_URLS = [
  'googleads.g.doubleclick.net',
  'youtube.com/api',
  'localhost:49152',
  'app.supabase.io',
  'docs.planetscale.com',
  'turborepo.org',
  'prisma.io',
  'jestjs.io',
  'github.com/nitrictech/go-sdk',
  'https://account.region.auth0.com',
  'https://scoop-docs.vercel.app/',
  'https://vercel.com/new/clone?repository-url=https://github.com/nitrictech/nitric-todo&env=API_BASE_URL',
  'http://localhost:4000',
  'http://localhost:4001',
  'http://localhost:4321',
  'https://www.gutenberg.org/cache/epub/42671/pg42671.txt',
  'https://stackoverflow.com/help/minimal-reproducible-example',
  'https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks',
]

const isExternalUrl = (url: string) => {
  return !url.includes('localhost')
}

const req = (url: string, retryCount = 0): any => {
  return cy
    .request({
      url,
      followRedirect: false,
      failOnStatusCode: false,
      gzip: false,
    })
    .then((resp) => {
      // retry on timeout and too many requests
      if ([408, 429].includes(resp.status) && retryCount < 3) {
        cy.log(`request ${url} timed out, retrying again...`)
        cy.wait(500)
        return req(url, retryCount + 1)
      }

      return resp
    })
}

describe('Broken links test suite', () => {
  const VISITED_SUCCESSFUL_LINKS = {}

  pages.forEach((page) => {
    it(`Should visit page ${page} and check all links`, () => {
      cy.viewport('macbook-16')
      cy.visit(page)

      const links = cy.get("a:not([href*='mailto:']),img")

      links
        .filter((_i, link) => {
          return !IGNORED_URLS.some(
            (l) =>
              //@ts-ignore
              (link.getAttribute('href') &&
                link.getAttribute('href')?.includes(l)) ||
              //@ts-ignore
              (link.getAttribute('src') &&
                link.getAttribute('src').includes(l)),
          )
        })
        .each((link) => {
          cy.log(`link: ${link[0].textContent}`)
          const baseUrl = link.prop('href') || link.prop('src')

          const url = baseUrl.split('#')[0]

          if (VISITED_SUCCESSFUL_LINKS[url]) {
            cy.log(`link already checked`)
            expect(VISITED_SUCCESSFUL_LINKS[url]).to.be.true
          } else {
            cy.wait(100)

            req(url).then((res: Cypress.Response<any>) => {
              let acceptableCodes = CORRECT_CODES
              if (REDIRECT_CODES.includes(res.status) && !isExternalUrl(url)) {
                assert.fail(
                  `${url} returned ${res.status} to ${res.headers['location']}`,
                )
              } else {
                acceptableCodes = [
                  ...CORRECT_CODES,
                  ...REDIRECT_CODES,
                  ...OTHER_CODES,
                ]
              }

              if (acceptableCodes.includes(res.status)) {
                VISITED_SUCCESSFUL_LINKS[url] = true
              }

              expect(res.status).oneOf(
                acceptableCodes,
                `${url} returned ${res.status}`,
              )
            })
          }
        })
    })
  })
})

describe('Current links test suite', () => {
  let paths: string[]

  beforeEach(() => {
    const PROD_BASE_URL = 'https://nitric.io/docs'

    cy.request(`${PROD_BASE_URL}/sitemap-0.xml`).then((response) => {
      const jsonObj = parser.parse(response.body, false)

      paths = jsonObj.urlset.url.map((p) =>
        p.loc === PROD_BASE_URL
          ? '/docs'
          : `/docs${p.loc
              .substring(PROD_BASE_URL.length, p.loc.length)
              .replace('/_index', '')}`,
      )
    })
  })

  it(`should visit all pages in the current prod sitemap`, function () {
    paths.forEach((path) => {
      cy.log(`visiting page: ${path}`)
      cy.visit(path)
    })
  })
})
