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
formatter.step({
  "line": 12,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i want to validate result against database",
  "rows": [
    {
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
formatter.step({
  "line": 12,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i want to validate result against database",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
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
  "duration": 934896500,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 54521000,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 516684300,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 2282227900,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 1784700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:17)\r\n\tat ✽.Then verify user received 200 ok response(Post_Terminal.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_validate_result_against_database(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
});