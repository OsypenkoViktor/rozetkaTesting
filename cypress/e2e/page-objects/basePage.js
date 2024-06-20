import HeaderComponent from "./components/HeaderComponent";

export default class BasePage extends HeaderComponent {

    openMainPage() {
        cy.visit(Cypress.env('baseUrl'));
    }
    openNotebooksCategoryPage(){
        cy.visit(Cypress.env("notebooksCategoryUrl"))
    }

}
