import * as pages from '../fixtures/pages.json'

describe('a11y accessiblity test suite', () => {
  pages.forEach((page) => {
    it(`Should test page ${page} for a11y violations`, () => {
      cy.viewport('macbook-16')
      cy.visit(page)
      cy.injectAxe()
      cy.wait(150)
      cy.checkA11y(
        undefined,
        {
          includedImpacts: ['critical'],
        },
      );
    })
  })
})
