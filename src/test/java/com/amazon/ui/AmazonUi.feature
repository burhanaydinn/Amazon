Feature: AmazonWebTest

  Background:
    * configure driver = {type: 'chrome'}
    * configure retry = {count: 10, interval: 1000}
    * def random = function(max){ return Math.floor(Math.random() * max) + 1 }

  Scenario: AmazonUiTest
    * driver webUrl
    * driver.send({"method":"Browser.setWindowBounds","params":{"windowId":1,"bounds":{"windowState":"fullscreen"}}})
    * call read('LoginPageUi.feature')
    * waitFor(computersSelectButton)
    * select(computersSelectButton, '{}Bilgisayarlar')
    * click(searchButton)
    * waitFor(laptopComputersButton)
    * def element = locateAll(laptopComputersButton)
    * delay(3000)
    * element[5].click()
    * waitFor(byAmazonSendSelect)
    * def element = locateAll(byAmazonSendSelect)
    * delay(2000)
    * element[133].click()
    * waitFor(selectComputers)
    * def element = locateAll(selectComputers)
    * delay(1000)
    * element[random(element.length)].click()
    * retry().click(addToBasket)
    * retry().click(basketSelectButton)
    * retry().click(completeShopping)
    * call read('AddressInformationUi.feature')
    * waitFor(continueButton)
    * def element = locateAll(continueButton)
    * delay(2000)
    * element[0].click()
    * retry().input(inputCardNumber,cardNumber)
    * retry().click(cardInnerButton)
    * waitFor(continueButton)
    * def element = locateAll(continueButton)
    * delay(2000)
    * element[0].click()
    * waitFor(takeProductButton)
    * def element = locateAll(takeProductButton)
    * delay(2000)
    * element[0].click()
    * delay(20000)
