$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getTerminalDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Get Terminal Details Functional Test",
  "description": "I want get data related to terminal id",
  "id": "get-terminal-details-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
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
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I want to request data with terminal id",
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
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify all coressponding device id displayed in response",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 15,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 16,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
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
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I want to request data with terminal id",
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
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify all coressponding device id displayed in response",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_retrieve_terminal_details()"
});
formatter.result({
  "duration": 3136557200,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_request_data_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 3579600,
  "status": "passed"
});
formatter.match({
  "location": "HttpOperationSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 762522000,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 8513000,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(getTerminalDetails.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TerminalDetailsSteps.verify_all_coressponding_device_id_displayed_in_response(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I want to request data with terminal id",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify all coressponding device id displayed in response",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 29,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 30,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I want to request data with terminal id",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify all coressponding device id displayed in response",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_retrieve_terminal_details()"
});
formatter.result({
  "duration": 774555400,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_request_data_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.match({
  "location": "HttpOperationSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 682934000,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 212400,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(getTerminalDetails.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TerminalDetailsSteps.verify_all_coressponding_device_id_displayed_in_response(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
});