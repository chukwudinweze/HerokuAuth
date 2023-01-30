describe("Form Authentication", () => {
  it("invalid login", () => {
    // Visit the website
    cy.visit("https://the-internet.herokuapp.com/");
    // Click on the link "Form Authentication"
    cy.contains("Form Authentication").click();
    // Type the username in the input field
    cy.get("#username").type("thomas");
    // Type the password in the input field
    cy.get("#password").type("SecretPassword!");
    // Click on the login button
    cy.get(".radius").click();
    // Assert that the error message is displayed
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
});
