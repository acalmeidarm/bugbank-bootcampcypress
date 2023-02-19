/// <reference types="cypress" />
describe("Cadastro", () => {
  it("Dado que realizo o cadastro de um novo cliente Quando o cadastro é realizado com sucesso Então eu consigo realizar login E acessar extrato da conta", () => {
    cy.acessaPagina();

    var cliente = {
      email: "serafina_davie@yahoo.com",
      nome: "SERAFINA FERNANDES MEDEIROS",
      senha: "pwd123",
      confSenha: "pwd123",
    };

    cy.realizaCadastro(cliente);
    cy.realizaLogin(cliente);
    cy.validaExtrato();
  });
});
