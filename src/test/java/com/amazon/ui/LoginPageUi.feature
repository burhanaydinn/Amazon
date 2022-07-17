Feature: LoginPageUi
  Background:
    * configure driver = {type: 'chrome'}
    * configure retry = {count: 10, interval: 1000}

  Scenario: LoginPageUi
    * retry().click(loginPage)
    * retry().input(loginUsername,email)
    * click(loginContinueButton)
    * retry().input(loginPassword,password)
    * click(loginButton)