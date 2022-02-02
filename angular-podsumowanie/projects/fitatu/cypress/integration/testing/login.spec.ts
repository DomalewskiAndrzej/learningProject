/// <reference types="cypress" />

describe('Login', () => {
  it('should failed', () => {
    cy.visit('http://localhost:4200/');
    cy.get("input[test-data='email-input']")
      .type('failtest123@wp.pl')
      .should('have.value', 'failtest123@wp.pl');
    cy.get("input[test-data='password-input']")
      .type('1231231231')
      .should('have.value', '1231231231');
    cy.get("button[test-data='submit-button-login']").click();
    cy.get('mat-error#mat-error-0')
      .should('be.visible')
      .contains('Podany e-mail lub hasło jest nieprawidłowy!')
      .should('have.css', 'color')
      .and('eq', 'rgb(244, 67, 54)');
    cy.url().should('include', '/auth');
  });

  it('should success', () => {
    cy.login('test@wp.pl','1231231231');
  });
});
