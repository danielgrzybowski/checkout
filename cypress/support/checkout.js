export function addProductToBasket(product, key){
    cy.get(".shop-menu .card_travel").click();
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
    cy.get(".productinfo").find("h2").invoke("text").then((text) => {
        const amount = Number(text.slice(4));
        Cypress.env(key, amount);
    });
    cy.get(".fa-plus-square").click();
    cy.get(".btn-default.cart").click();
    cy.get(".btn-success").click();
}

export function clearBasket(){
    cy.get(".nav .fa-shopping-cart").click();
    cy.get(".cart_quantity_delete").each(($row) => {
        cy.wrap($row).within(() => {
            cy.get(".fa-times").first().click();
        });
    });
}

export function getCartTotal(key){
    cy.get(".cart_total_price").last().invoke("text").then((text) => {
        const amount = Number(text.slice(4));
        Cypress.env(key, amount);
    });
}

export function goToCheckout(){
    cy.get(".nav .fa-shopping-cart").click();
    cy.get(".check_out").click();
}