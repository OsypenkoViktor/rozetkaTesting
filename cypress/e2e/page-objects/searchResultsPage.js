import HeaderComponent from "./components/HeaderComponent";

export default class SearchResultsPage extends HeaderComponent {
  filterPriceSubmitButton =  ".slider-filter__button";
  pricesValue = ".goods-tile__price-value";
  categoryHeader = ".catalog-heading";
  maxPriceInput = "input[formcontrolname='max'";
  minPriceInput = "input[formcontrolname='min'";
  spinner = "main.preloader_type_element";
  activeFiltersLinks = ".catalog-selection__link";
  
  confirm18Popup = '[data-test="popup18-button"]';

  openFoundProduct(productName, index) {
    cy.get(`a[title*="${productName}"]`).eq(index).click({ force: true });
  }
  closePopUp() {
    cy.get(this.confirm18Popup).click();
  }
  checkCategoryName(categoryName) {
    cy.get(this.categoryHeader).should("contain", categoryName);
  }

  clickBrandFilter(brand) {
    cy.get(`a[data-id="${brand}"]`).click();
  }
  setMinMaxPriceFilter(minPrice, maxPrice) {
    cy.get(this.minPriceInput).clear();
    cy.get(this.minPriceInput).type(minPrice, { force: true });
    cy.get(this.maxPriceInput).clear();
    cy.get(this.maxPriceInput).type(maxPrice);
    cy.get(this.filterPriceSubmitButton).click();
    cy.get(this.spinner).should("be.visible");
    cy.get(this.spinner).should("not.exist");
  }
  checkPricesBetweenLimits(minLimit, maxLimit) {
    cy.get(this.pricesValue).each(($card) => {
      cy.wrap($card)
        .invoke("text")
        .then((price) => {
          expect(parseFloat(price.replace(/\s/g, "")))
            .to.be.lt(maxLimit)
            .to.be.gt(minLimit);
        });
    });
  }
  checkCancelFilterButtonVisibility(innerText) {
    cy.get(this.activeFiltersLinks).contains(innerText).should("be.visible");
  }
}
