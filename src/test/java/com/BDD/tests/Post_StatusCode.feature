Feature: Post Terminal Details Functional Test
  I want insert terminal id in db

  #Background:
  #Given I want to retrieve terminal details from UI
  @manish
  Scenario Outline: User want to retrieved terminal related details
    Given I want to get status code
      #And I want to updated request with terminal id
      | <terminalId> | 
    And I want to updated request with terminal id from excel sheet
      | <terminalId> |

    #And I want to updated request with terminal details from excel sheet
    #| <terminalId> |
    #When i want to post request
    #Then verify user received 200 ok response
    #And i want to validate result against database
    #| <terminalId> |
    Examples: 
      | terminalId |
      | ATM 1      |
      | ATM 2      |

  #		| ATM 3      |
  #		| ATM 4      |
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
