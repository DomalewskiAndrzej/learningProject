// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, pw) => {
  cy.visit("http://localhost:4200/");
  cy.get("input[test-data='email-input']")
    .type(email)
    .should("have.value", email);
  cy.get("input[test-data='password-input']").type(pw).should("have.value", pw);
  cy.get("button[test-data='submit-button-login']").click();
  cy.get("div#toast-container").should("be.visible");
  cy.get(".toast-title").contains("Sukces");
  cy.get(".toast-message").contains("Zalogowano pomyślnie.");
  cy.wait(1000);
  cy.url().should("include", "");
});

Cypress.Commands.add("ingredient", () => {
  cy.url().should("include", "/meal");
  cy.get("button[test-data='button-add-ingredient']")
    .contains("Składnik+")
    .click();
  cy.wait(1000);
  cy.url().should("include", "/filter");
  cy.get("input[test-data='input-ingredient-name']")
    .type("Cytryna")
    .should("have.value", "Cytryna");
  cy.get("input[test-data='input-ingredient-weight']")
    .type("100")
    .should("have.value", "100");
  cy.get(".container__message--green")
    .contains("Ten produkt jest dostępny!")
    .should("have.css", "color")
    .and("eq", "rgb(0, 128, 0)");
  cy.get('button[test-data="button-save-ingredient"]').click();
  cy.wait(1000);
  cy.url().should("include", "/meal");
  cy.get("mat-row.mat-row").should("have.length", "1");
  cy.get('button[test-data="button-save-meal"]').should("be.disabled", false);
});

Cypress.Commands.add("start", () => {
  cy.url().should("include", "");
  cy.get('button[test-data="button-create"').click();
  cy.get(".container__info").should("be.visible", true);
  cy.get('button[test-data="button-create"').click();
  cy.wait(1000);
  cy.url().should("include", "/meal");
});
