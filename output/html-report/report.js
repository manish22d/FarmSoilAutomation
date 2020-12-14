$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post_Terminal.feature");
formatter.feature({
  "line": 1,
  "name": "Post Terminal Details Functional Test",
  "description": "I want insert terminal id in db",
  "id": "post-terminal-details-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Background:"
    },
    {
      "line": 5,
      "value": "#Given I want to retrieve terminal details from UI"
    }
  ],
  "line": 7,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 10,
      "value": "#| \u003cterminalId\u003e |"
    },
    {
      "line": 11,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 12,
      "value": "#| \u003cterminalId\u003e |"
    },
    {
      "line": 13,
      "value": "#And I want to updated request with terminal details from excel sheet"
    },
    {
      "line": 14,
      "value": "#| \u003cterminalId\u003e |"
    },
    {
      "line": 15,
      "value": "#When i want to post request"
    },
    {
      "line": 16,
      "value": "#Then verify user received 200 ok response"
    },
    {
      "line": 17,
      "value": "#And i want to validate result against database"
    },
    {
      "line": 18,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 21,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 22,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 731873600,
  "status": "passed"
});
});