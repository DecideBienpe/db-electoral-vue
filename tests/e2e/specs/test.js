// https://docs.cypress.io/api/introduction/api.html

describe("Visita el app", () => {
  it("Visita el root url", () => {
    cy.visit("/");
    cy.contains("h1", "Decide Bien");
  });
});
