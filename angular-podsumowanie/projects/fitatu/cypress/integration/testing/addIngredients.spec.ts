/// <reference types="cypress" />

describe('add ingredient', () => {
  it('should not found & and come back to /meal', () => {
    cy.login('test@wp.pl','1231231231');
    cy.url().should('include', '/meal');
    cy.get("button[test-data='button-add-ingredient']")
      .contains('Składnik+')
      .click();
    cy.wait(1000);
    cy.url().should('include', '/filter');
    cy.get("input[test-data='input-ingredient-name']")
      .type('Cytrynaa')
      .should('have.value', 'Cytrynaa');
    cy.get("input[test-data='input-ingredient-weight']")
      .type('100')
      .should('have.value', '100');
    cy.get('.container__message--red')
      .contains('Ten produkt jest niedostępny!')
      .should('have.css', 'color')
      .and('eq', 'rgb(255, 0, 0)');
    cy.get('button[test-data="button-save-ingredient"]').should(
      'be.disabled',
      true
    );
    cy.get('button[test-data="button-come-back"]').click();
    cy.wait(1000);
    cy.url().should('include', '/meal');
    cy.get('mat-table.mat-table').should('have.length', '1');
    cy.get('button[test-data="button-save-meal"]').should('be.disabled', true);
  });

  it('should found & add ingredient', () => {
    cy.login('test@wp.pl','1231231231');
    cy.ingredient();
  });
});
