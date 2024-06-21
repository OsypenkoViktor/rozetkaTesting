import ProductCardPage from "./page-objects/productCardPage";

const productCardPage = new ProductCardPage();

describe("Product card tests",()=>{
    beforeEach(()=>{
        productCardPage.openProductCardPage();
    })

    it("Every image on the page has an alt attribute",()=>{
        cy.get("img").each(($img)=>{
            cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
        })
    })

    it("The 'Купити' button adds the item to the cart",()=>{
        cy.get(productCardPage.buyButton).click();
        cy.get(productCardPage.cartModal).should("exist");
        cy.get(productCardPage.orderSubmitBtn).should("exist").and("be.visible");
    })

    it("Selected additional services are added to the cart after clicking the 'buy' button",()=>{
        cy.get(productCardPage.additionalServices.OS.checkbox).check({force:true});
        cy.get(productCardPage.additionalServices.warranty.checkbox).check({force:true});
        cy.get(productCardPage.buyButton).click();
        cy.get(productCardPage.additionalServices.OS.cartCheckbox).should("exist").and("be.checked")
        cy.get(productCardPage.additionalServices.warranty.cartCheckbox).should("exist").and("be.checked")
    })
})