Feature: Post Terminal Details Functional Test
  Validation against get API

  @manish
  Scenario Outline: User want to retrieved terminal related details
    Given I want to update terminal details
    And I want to updated request with terminal id
      | <terminalId> |
    When i want to post request
    Then verify user received 200 ok response
    And Verify terminal details got updated
      | <terminalId> |

    Examples: 
      | terminalId |
      | ATM 1      |
