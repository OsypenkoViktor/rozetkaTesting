import HeaderComponent from "./components/HeaderComponent";

export default class ProductCardPage extends HeaderComponent{

    currentProductHeader = "h1"
    buyButton = ".mode-slim > .buy-button"
    cartModal = ".modal__holder"
    orderSubmitBtn = ".rz-checkout-button > .button";
    productPrice= 69999;
    additionalServices={
        OS:{
            checkbox:"#serviceGroup2614_0",
            cartCheckbox:"#serviceGroup2614_3",
            label:"ОС Windows та окремо встановлення ОС Windows"
        },
        warranty:{
            checkbox:"#serviceGroup20015_1",
            cartCheckbox: "#serviceGroup20015_4",
            label:"Сервіси гарантії"
        }
    }

    openProductCardPage(){
        cy.visit("/asus-90nr0fi5-m00350/p414981141/")
    }

    checkProductName(productName){
        cy.get(this.currentProductHeader).should("contain",`${productName}`)
    }
}