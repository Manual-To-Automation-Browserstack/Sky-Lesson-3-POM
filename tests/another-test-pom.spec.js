const { SearchPage } = require('../models/Search');
const { CookieConsent } = require("../models/CookieConsent");
const {test, expect } = require('@playwright/test');


test('Consent to Cookie', async({page}) => {
  const searchPage = new SearchPage(page);
  const cookieConsent = new CookieConsent(page);
  await searchPage.navigate();
  await cookieConsent.agree();
  await searchPage.clickSearchIcon();
  await searchPage.search('search query');
});