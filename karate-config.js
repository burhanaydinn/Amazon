function fn() {
  var env = karate.env;
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env : env,
    webUrl : 'https://www.amazon.com.tr/',
    email : 'baydiniu@gmail.com',
    password : '1a2s3d4f',
    loginPage : "//*[@data-nav-ref='nav_custrec_signin']",
    loginUsername : "#ap_email",
    loginContinueButton: "//input[@id='continue']",
    loginPassword : "#ap_password",
    loginButton : "#signInSubmit",
    computersSelectButton : "//*[@aria-describedby='searchDropdownDescription']",
    searchButton : "#nav-search-submit-button",
    laptopComputersButton : "//a[@class='a-color-base a-link-normal']",
    byAmazonSendSelect : "//i[@class='a-icon a-icon-checkbox']",
    selectComputers : "//*[@class='a-section aok-relative s-image-square-aspect']",
    addToBasket : "//*[@title='Alışveriş Sepetine Ekle']",
    basketSelectButton : "//a[@class='a-button-text']",
    completeShopping : "//input[@data-feature-id='proceed-to-checkout-action']",
    clickChangeAddress : "//*[@class='change-address-popover-link a-declarative a-size-mini']",
    newAddressToAdd : "//div[@class='add-address-button-text']",

    // #addToAdressInformation
    goToBasket : "#nav-cart",
    nameAndLastname : 'Burhan Aydın',
    loginNameAndLastname : "#address-ui-widgets-enterAddressFullName",
    mobilePhoneNumber : '555 555 5555',
    loginMobilePhoneNumber : "#address-ui-widgets-enterAddressPhoneNumber",
    AddressLine1 : 'Mithatpaşa Cad. Maltepe Mah. No:101 Güzelbahçe/İzmir',
    enterAddressLine1 : "#address-ui-widgets-enterAddressLine1",
    AddressLine2 : '2009',
    enterAddressLine2 : "#address-ui-widgets-enterAddressLine2",
    selectCıtyButton : "#address-ui-widgets-enterAddressCity",
    city : 'İzmir',
    enterAddressStateButton : "#address-ui-widgets-enterAddressStateOrRegion",
    state : 'Güzelbahçe',
    enterAddressRegionButton : "#address-ui-widgets-enterAddressDistrictOrCounty",
    clickDefault : "#address-ui-widgets-use-as-my-default",
    inputSubmitButton : "//*[@type='submit']",

    // #addToAdressInformation
    continueButton : "//input[@name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']",
    takeAllProduct : "//*[@class='a-button-text place-your-order-button']",
    inputCardNumber : "//input[@placeholder='Son 4 hane: 8015']",
    cardNumber : '4282209004348015',
    cardInnerButton : "//button[text()='Kartı doğrula']",
    radioCardButton : "//input[@type='radio']",

    // #creditOrdebitCard
    creditOrdebitCardButton : "//input[@class='a-button-input a-button-text']",
    cardNumberAdd : "//*[@class='a-section a-spacing-none apx-add-credit-card-number']/input[@type='tel']",
    cardNameAdd : "//input[@name='ppw-accountHolderName']",
    expiryDateMonthSelect : "(//span[@data-action='a-dropdown-button'])[1]",
    expiryDateYearSelect : "(//span[@data-action='a-dropdown-button'])[2]",
    addCreditCard : "",
    takeProductButton: "//input[@class='a-button-text place-your-order-button']",

}
  if (env == 'dev') {
  } else if (env == 'e2e') {
  }
  return config;
}