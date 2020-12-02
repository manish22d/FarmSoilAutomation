$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherData.feature");
formatter.feature({
  "line": 1,
  "name": "Weather Data Functional Test",
  "description": "I want get weather related data",
  "id": "weather-data-functional-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User is able to city specific data",
  "description": "",
  "id": "weather-data-functional-test;user-is-able-to-city-specific-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to current weather related data",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I want to request data with query param",
  "rows": [
    {
      "cells": [
        "q",
        "pune"
      ],
      "line": 8
    },
    {
      "cells": [
        "appid",
        "f83bbf767574a87bf452097943741d6b"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify user received 200 ok response",
  "keyword": "Then "
});
formatter.match({
  "location": "WeatherSteps.i_want_to_current_weather_related_data()"
});
formatter.result({
  "duration": 457198000,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.i_want_to_request_data_with_query_param(String,String\u003e)"
});
formatter.result({
  "duration": 32391200,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 1782929000,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 4204700,
  "status": "passed"
});
});