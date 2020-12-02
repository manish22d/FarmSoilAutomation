Feature: Weather Data Functional Test
  I want get weather related data

  @Test
  Scenario: User is able to city specific data
    Given I want to current weather related data
    And I want to request data with query param
      | q     | pune                             |
      | appid | f83bbf767574a87bf452097943741d6b |
    When i request get resource
    Then Verify user received 200 ok response
