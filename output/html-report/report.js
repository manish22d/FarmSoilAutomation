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
    },
    {
      "comments": [
        {
          "line": 11,
          "value": "#When i want to post request"
        },
        {
          "line": 12,
          "value": "#Then verify user received 200 ok response"
        },
        {
          "line": 13,
          "value": "#And i want to validate result against database"
        }
      ],
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.examples({
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
    },
    {
      "comments": [
        {
          "line": 11,
          "value": "#When i want to post request"
        },
        {
          "line": 12,
          "value": "#Then verify user received 200 ok response"
        },
        {
          "line": 13,
          "value": "#And i want to validate result against database"
        }
      ],
      "cells": [
        "ATM 1"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 855645900,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 456165200,
  "status": "passed"
});
});