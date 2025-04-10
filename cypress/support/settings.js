const loginIcon = ".fa-lock";

export function signIn(email, password) {
    cy.visit("/");
    cy.get(loginIcon).click();
    cy.get("[data-qa='login-email']").type(email);
    cy.get("[data-qa='login-password']").type(password);
    cy.get("[data-qa='login-button']").click();
    cy.get (loginIcon).parent().should("contain", "Logout");
}