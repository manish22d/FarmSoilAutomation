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
  "comments": [
    {
      "line": 9,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 10,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
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
  "line": 16,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 17,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 18,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    },
    {
      "cells": [
        "ATM 2"
      ],
      "line": 19,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
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
  "comments": [
    {
      "line": 9,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 10,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
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
  "duration": 3310611100,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 50698800,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 984009700,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 4948000,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(Post_Terminal.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_validate_result_against_database(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;3",
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
        "ATM 2"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 10,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
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
        "ATM 2"
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
  "duration": 921524200,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 2639300,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 1001831500,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 243000,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(Post_Terminal.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_validate_result_against_database(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
});