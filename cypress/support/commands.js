/// <reference types="cypress" />
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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add("acessaPagina", () => {
  cy.visit("/");
  cy.title().should("eq", "BugBank | O banco com bugs e falhas do seu jeito");
  cy.contains("button", "Registrar").click();
  cy.contains("#btnBackButton", "Voltar ao login");
});

Cypress.Commands.add("realizaCadastro", (cliente) => {
  cy.get(":nth-child(2) > .input__default")
    .click({ force: true })
    .type(cliente.email);
  cy.get(":nth-child(3) > .input__default")
    .click({ force: true })
    .type(cliente.nome);
  cy.get(
    ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
  )
    .click({ force: true })
    .type(cliente.senha);
  cy.get(
    ":nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
  )
    .click({ force: true })
    .type(cliente.confSenha);

  cy.get("#toggleAddBalance").click({ force: true });
  cy.contains(
    ".styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0",
    "Cadastrar"
  ).click({ force: true });

  cy.get("#modalText").should("be.visible");
  cy.get("#btnCloseModal").click();
});

Cypress.Commands.add("realizaLogin", (cliente) => {
  cy.get(
    ".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
  )
    .click({ force: true })
    .type(cliente.email);
  cy.get(
    ".style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
  )
    .click({ force: true })
    .type(cliente.senha);
});

Cypress.Commands.add("validaExtrato", () => {
  cy.get(".otUnI").click({ force: true });
  cy.get("#btn-EXTRATO").click({ force: true });

  cy.contains("#textTransferValue", "R$ 1.000,00").should(
    "have.css",
    "color",
    "rgb(0, 128, 0)"
  );
});
