import * as pages from '../fixtures/pages.json'

// redirects can go here
const redirects = {}

describe('canonical urls', () => {
  pages.forEach((page) => {
    it(`Should test page ${page} for correct canonical url`, () => {
      cy.visit(page)

      cy.get('link[rel="canonical"]')
        .invoke('attr', 'href')
        .should('equal', `http://localhost:3000${redirects[page] || page}`)

      cy.get('meta[property="og:url"]')
        .invoke('attr', 'content')
        .should('equal', `http://localhost:3000${redirects[page] || page}`)
    })
  })
})
