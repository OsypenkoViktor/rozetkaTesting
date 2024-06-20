export default class HeaderComponent {
  searchInput = "input[rzsearchinput]";
  catalogButton = "#fat-menu";

  searchProduct(productName) {
    cy.get(this.searchInput).type(`${productName}{enter}`);
  }
  showCatalogDropdown() {
    cy.get(this.catalogButton).click();
  }
  showSubcatalogDropdown(subcatalogName) {
    cy.contains("a", `${subcatalogName}`).focus();
  }
  openSubcategory(subcategoryText) {
    const regex = new RegExp(`^${subcategoryText}$`);
    cy.contains("a",regex).click();
  }
}
