const { expect } = require('@playwright/test');

class SearchPage {
    
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
      this.searchIcon = page.locator("data-test-id=masthead-search-toggle-button");
      this.searchTermInput = page.locator("data-test-id=input-box");
    }
    async navigate() {
      await this.page.goto('https://sky.com');
    }

    async clickSearchIcon() {
      await this.searchIcon.click();
    }

    async search(text) {
      await this.searchTermInput.fill(text);
      await this.searchTermInput.press('Enter');
    }

    async verifySearchResults(text) {
        expect(text)
    }
  }
  module.exports = { SearchPage };