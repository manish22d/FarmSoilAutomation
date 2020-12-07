$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post_Terminal.feature");
formatter.feature({
  "line": 1,
  "name": "Post Terminal Details Functional Test",
  "description": "I want insert terminal id in db",
  "id": "post-terminal-details-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 8,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 9,
  "name": "I want to updated request with terminal id from excel sheet",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#Then verify user received 200 ok response"
    },
    {
      "line": 13,
      "value": "#And i want to validate result against database"
    },
    {
      "line": 14,
      "value": "#\t\t\t| \u003cterminalId\u003e |"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 16,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 17,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 8,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 9,
  "name": "I want to updated request with terminal id from excel sheet",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 870008300,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 560200600,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 3453078800,
  "status": "passed"
});
});