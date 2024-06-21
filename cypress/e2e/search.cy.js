import BasePage from "./page-objects/basePage";
import SearchResultsPage from "./page-objects/searchResultsPage";
import ProductCardPage from "./page-objects/productCardPage";
import constants from "../fixtures/constants.json";

const basePage = new BasePage();
const searchResultsPage = new SearchResultsPage();
const productCardPage = new ProductCardPage();

describe("Rozetka tests", () => {
  beforeEach(() => {
    basePage.openMainPage();
  });

  it("check the ability to search for a product using valid data", () => {
    const testProductName = constants.searchProduct;
    basePage.searchProduct(testProductName);
    searchResultsPage.closePopUp();
    searchResultsPage.openFoundProduct(testProductName, 1);
    productCardPage.checkProductName(testProductName);
  });

  it("Verification of no search results when using invalid data", () => {
    const invalidSearchString = constants.invalidSearchString;
    basePage.searchProduct(invalidSearchString);
    searchResultsPage.closePopUp();
    searchResultsPage.checkNoResultsPage();
  });

  it("check the ability to search for a product category using catalog features", () => {
    basePage.showCatalogDropdown();
    basePage.showSubcatalogDropdown(constants.categoryLinkText);
    basePage.openSubcategory(constants.categoryHeading);
    searchResultsPage.checkCategoryName(constants.categoryHeading);
  });

  basePage.menuCategoriesLinks.forEach((menuCatLink) => {
    it(`The link "${menuCatLink}" in the sidebar on the main page lead to the corresponding catalog page`, () => {
      cy.get(basePage.navigationSidebar).contains(menuCatLink).click();
      cy.get(searchResultsPage.currentCategoryHeader).contains(menuCatLink).should("be.visible");
    });
  });
});