/// <reference types="Cypress" />

describe("movapp.cz", () => {
  beforeEach(() => {
    cy.visit("https://www.movapp.cz/");
  });

  it("should have the correct h1", () => {
    cy.get("h1").should("contain.text", "Naučte se základy češtiny a ukrajinštiny pro běžné životní situace");
  });
});
