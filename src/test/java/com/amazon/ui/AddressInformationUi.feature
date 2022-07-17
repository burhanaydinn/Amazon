Feature: AddressInformationUi
  Background:
    * configure driver = {type: 'chrome'}
    * configure retry = {count: 10, interval: 1000}

  Scenario: AddressInformationUi
    * retry().input(loginNameAndLastname,nameAndLastname)
    * retry().input(loginMobilePhoneNumber,mobilePhoneNumber)
    * retry().input(enterAddressLine1,AddressLine1)
    * retry().input(enterAddressLine2,AddressLine2)
    * retry().value(selectCıtyButton,'İzmir')
    * retry().value(enterAddressStateButton,'Güzelbahçe')
    * retry().value(enterAddressRegionButton,'Maltepe Mh.')
    * retry().value('#address-ui-widgets-enterAddressPostalCode','35310')
    * delay(100)
    * retry().click(clickDefault)
    * retry().click(inputSubmitButton)
