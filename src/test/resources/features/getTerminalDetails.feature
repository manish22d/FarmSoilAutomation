Feature: Get Terminal Details Functional Test
  I want get data related to terminal id

  @Test
  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then Verify user received 200 ok response
    And verify all coressponding device id displayed in response
      | <terminalId> |

    Examples: 
      | terminalId |
      | ATM 1      |

  @Test
  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then Verify user received 204 No Content response

    Examples: 
      | terminalId |
      | ATM 1      |

  @Test
  Scenario Outline: User want to retrieved terminal related details
    Given I want to retrieve terminal details
    And I want to request data with terminal id
      | <terminalId> |
    When i request get resource
    Then Verify user received 404 not found response

    Examples: 
      | terminalId |
      | ATM 1      |