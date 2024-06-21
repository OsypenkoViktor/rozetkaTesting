import BasePage from "./page-objects/basePage";
import SearchResultsPage from "./page-objects/searchResultsPage";
import constants from "../fixtures/constants.json";

const basePage = new BasePage();
const searchResultsPage = new SearchResultsPage();

const { minPrice, maxPrice, cancelFilterLinkText, LenovoBrand } = constants;

const contractor = {
  req: {
    method: "GET",
  },
  res: {
    statusCode: 200,
    minLenght: 1,
    productData: {
      brandKey: "brand",
      property: ["brand_id", "href", "title"],
    },
  },
};

describe("Testing search results filtering", () => {

  it("check the ability to search for a product using price and brand filters", () => {
    basePage.openNotebooksCategoryPage();
    searchResultsPage.clickBrandFilter(LenovoBrand);
    searchResultsPage.setMinMaxPriceFilter(minPrice, maxPrice);
    searchResultsPage.checkPricesBetweenLimits(minPrice, maxPrice);
    searchResultsPage.checkCancelFilterButtonVisibility(cancelFilterLinkText);
  });

  it("check server response when using brand filter", () => {
    cy.intercept("GET", /product_ids/).as("testRequest");
    basePage.openNotebooksCategoryPage();
    searchResultsPage.clickBrandFilter(LenovoBrand);
    //receiving network data
    cy.wait("@testRequest").should(({ request, response }) => {
      searchResultsPage.checkIsResponseOk(request, response, contractor);
      //validation network response
      const productExample = response.body.data[0];
      expect(productExample).to.have.property(
        contractor.res.productData.brandKey,
        LenovoBrand
      );
      searchResultsPage.checkIsPropsExist(
        productExample,
        contractor.res.productData.property
      );
    });
  });
});
