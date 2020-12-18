Feature: Post Status codes Functional Test

  @manish
  Scenario Outline: User want to retrieved status related details
    Given I want to get status of different status codes
    And I want to updated request with status codes
      | <statusCodes> |
    When i want to post request
    Then verify user received 200 ok response

    Examples: 
      | statusCodes  |
      | ekStatusCode |
      | doStatusCode |

  Scenario Outline: User want to retrieved status related details
    Given I want to get status of different status codes
    And I want to updated request with status codes
      | <statusCodes> |
    When i want to post request
    Then verify user received 400 bad request

    Examples: 
      | statusCodes  |
      | ekStatusCode |

  Scenario Outline: User want to retrieved status related details
    Given I want to get status of different status codes
    And I want to updated request with status codes
      | <statusCodes> |
    When i want to post request
    Then verify user received server error

    Examples: 
      | statusCodes  |
      | ekStatusCode |
