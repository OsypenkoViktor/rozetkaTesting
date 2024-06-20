import BasePage from "./page-objects/basePage";
import SearchResultsPage from "./page-objects/searchResultsPage";
import ProductCardPage from "./page-objects/productCardPage";
import constants from "../fixtures/constants.json";

const basePage = new BasePage();
const searchResultsPage = new SearchResultsPage();
const productCardPage = new ProductCardPage();

describe("Rozetka tests", () => {
  context("simple search", () => {
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

    it("check the ability to search for a product category using catalog features", () => {
      basePage.showCatalogDropdown();
      basePage.showSubcatalogDropdown(constants.categoryLinkText);
      basePage.openSubcategory("Ноутбуки");
      searchResultsPage.checkCategoryName(constants.categoryHeading);
    });
  });

  it("check the ability to search for a product using the functionality of products filters", () => {
    basePage.openNotebooksCategoryPage();
    searchResultsPage.clickBrandFilter(constants.LenovoBrand);
    searchResultsPage.setMinMaxPriceFilter("10000", "35000");
    searchResultsPage.checkPricesBetweenLimits(10000, 35000);
    searchResultsPage.checkCancelFilterButtonVisibility(constants.cancelFilterLinkText);
  });
});
