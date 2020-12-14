Feature: Get Terminal Details Functional Test
  I want get data related to terminal id

  Background: 
    Given I want to retrieve terminal details from UI


  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then verify user received 200 ok response
    And verify all coressponding device id displayed in response
      | <terminalId> |
    And verify all coressponding device id displayed correctly in UI
      | <terminalId> |

    Examples: 
      | terminalId |
      | ATM 1      |
      | ATM 2      |

  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then verify user received 200 ok response
    And verify all sub-device id displayed in response
      | <terminalId> |

    Examples: 
      | terminalId |
      | ATM 1      |

  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then verify user received 204 No Content response

    Examples: 
      | terminalId |
      | ATM 1      |

  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then verify user received 404 not found response

    Examples: 
      | terminalId |
      | ATM 1      |
