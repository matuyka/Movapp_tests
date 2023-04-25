/// <reference types="Cypress" />

describe("Test Movapp.cz", () => {
  beforeEach(() => {
    cy.visit("https://www.movapp.cz/");
  });

  it("Test that page should have the correct h1", () => {
    cy.get("h1").should("be.visible").and("have.length", 1).and("contain.text", "Naučte se základy češtiny a ukrajinštiny pro běžné životní situace");
    cy.title().should("be.eq", "Movapp.cz – aby se Češi a Ukrajinci snadno domluvili")

  });
});

       
