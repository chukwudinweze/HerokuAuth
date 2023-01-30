describe("Form Authentication", () => {
  it("valid login", () => {
    // Visit the website
    cy.visit("https://the-internet.herokuapp.com/");
    // Click on the link "Form Authentication"
    cy.contains("Form Authentication").click();
    // Type the username in the input field
    cy.get("#username").type("tomsmith");
    // Type the password in the input field
    cy.get("#password").type("SuperSecretPassword!");
    // Click on the login button
    cy.get(".radius").click();
    // Assert that the success message is displayed
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });
});
