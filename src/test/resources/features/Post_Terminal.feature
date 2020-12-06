Feature: Post Terminal Details Functional Test
  I want insert terminal id in db

  @manish
  Scenario Outline: User want to retrieved terminal related details
    Given I want to update terminal details
    And I want to updated request with terminal id
      | <terminalId> |
    When i want to post request
    #Then verify user received 200 ok response

    Examples: 
      | terminalId |
      | ATM 1      |

  #| ATM 2      |
  Scenario Outline: User want to retrieved terminal related details
    Given I want to update terminal details
    And I want to updated request with terminal id
      | <terminalId> |
    When i want to post request
    Then verify user received 400 bad request

    Examples: 
      | terminalId |
      | ATM 1      |

  Scenario Outline: User want to retrieved terminal related details
    Given I want to update terminal details
    And I want to updated request with terminal id
      | <terminalId> |
    When i want to post request
    Then verify user received server error

    Examples: 
      | terminalId |
      | ATM 1      |
