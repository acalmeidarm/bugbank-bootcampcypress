/// <reference types="cypress" />
describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('/')
    cy.title().should('eq', 'BugBank | O banco com bugs e falhas do seu jeito')
    
    
  })
})