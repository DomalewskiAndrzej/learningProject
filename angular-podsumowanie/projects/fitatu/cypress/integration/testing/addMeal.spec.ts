/// <reference types="cypress" />

describe('add meal', () => {
  it('should add & delete meal', () => {
    cy.login('test@wp.pl', '1231231231');
    cy.start();
    cy.ingredient();
    cy.get('input[test-data="input-meal-name"]').type('test');
    cy.get('button[test-data="button-save-meal"]').click();
    cy.get('button[test-data="button-show-meals"]').click();
    cy.wait(500);
    cy.url().should('include', '/meals');
    cy.get('div[test-data="container-for-meals"]').should('have.length', 1);
    cy.get('button[test-data="button-meal-details"]').click();
    cy.get('mat-row.mat-row').should('have.length', 1);
    cy.get('button[test-data="button-meal-delete"]').click();
    cy.get('div[test-data="container-for-meals"]').should('have.length', 0);
    cy.get('button[test-data="button-come-back"]').click();
    cy.wait(500);
    cy.url().should('include', '/meal');
  });

  it('should add meal & create day', () => {
    cy.login('test@wp.pl', '1231231231');
    cy.ingredient();
    cy.url().should('include', '/meal');
    cy.get('input[test-data="input-meal-name"]').type('test');
    cy.get('button[test-data="button-save-meal"]').click();
    cy.get('button[test-data="button-show-meals"]').click();
    cy.wait(500);
    cy.url().should('include', '/meals');
    cy.get('input[test-data="input-day-name"]').type('test day');
    cy.get('button[test-data="button-day-create"]').click();
    cy.get('button[test-data="button-days-show"]').click();
    cy.wait(500);
    cy.url().should('include', '/history');
    cy.get('span[test-data="span-day-details"]').contains('Podgląd').should('have.css','color').and('eq','rgb(0, 0, 255)');
    cy.get('button[test-data="calendar-history-clear"]').click();
    cy.get('mat-list-item[test-data="nav-homepage"]').click();
    cy.url().should('include', '');
  });
});
