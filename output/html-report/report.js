$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UI.feature");
formatter.feature({
  "line": 1,
  "name": "UI Functional Test",
  "description": "",
  "id": "ui-functional-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to retrieve terminal details from UI",
  "keyword": "Given "
});
formatter.match({
  "location": "UITestSteps.i_want_to_retrieve_terminal_details_UI()"
});
formatter.result({
  "duration": 2393842800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "ui-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#When I want to update terminal details"
    }
  ],
  "line": 9,
  "name": "verify all coressponding device id displayed correctly in UI",
  "rows": [
    {
      "cells": [
        "ATM 2"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UITestSteps.verify_all_coressponding_device_id_displayed_correctly_in_UI(String\u003e)"
});
formatter.result({
  "duration": 331302000,
  "status": "passed"
});
});