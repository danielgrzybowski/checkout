import { addProductToBasket, clearBasket, getCartTotal, goToCheckout } from "../support/checkout"
import { mail, password } from "../fixtures/loginData.json";
import { signIn } from "../support/settings";

describe("Checkout", () => {
    before(() => {
        signIn(mail, password);
    });

    after(() => {
        clearBasket();
    });

    it("adds items to the basket and checks if total on checkout page matches the sum price of the items", () => {
        addProductToBasket("Frozen Tops", "amount1");
        addProductToBasket("Panda Shirt", "amount2");
        goToCheckout();
        getCartTotal("amount3");

        cy.then(() => {
            cy.log(Cypress.env('amount3'))
            const total = Cypress.env("amount1") + Cypress.env("amount2");
            const checkoutSum = Cypress.env("amount3");

            expect(total).to.equal(checkoutSum);
        });
    });
});
