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
  "line": 7,
  "name": "I want to updated request with terminal id",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#Then verify user received 200 ok response"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 13,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 14,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
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
  "line": 7,
  "name": "I want to updated request with terminal id",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 661512500,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 40305600,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 2057413900,
  "status": "passed"
});
});