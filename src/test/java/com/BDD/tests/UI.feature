Feature: UI Functional Test

  Background: 
    Given I want to retrieve terminal details from UI

  @manish
  Scenario: User want to retrieved terminal related details
    #When I want to update terminal details
    Then verify all coressponding device id displayed correctly in UI
      | ATM 2 |
