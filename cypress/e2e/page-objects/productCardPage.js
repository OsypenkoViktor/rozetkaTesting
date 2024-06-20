import HeaderComponent from "./components/HeaderComponent";

export default class ProductCardPage extends HeaderComponent{
    currentProductHeader = "h1"

    checkProductName(productName){
        cy.get(this.currentProductHeader).should("contain",`${productName}`)
    }
}