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
      "name": "@Test"
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
  "name": "Verify user received 200 ok response",
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
      "name": "@Test"
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
  "name": "Verify user received 200 ok response",
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
  "duration": 468025000,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_request_data_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 12203800,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 2005683400,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 4724400,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:15)\r\n\tat ✽.Then Verify user received 200 ok response(getTerminalDetails.feature:10)\r\n",
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
      "name": "@Test"
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
  "name": "Verify user received 204 No Content response",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 27,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 28,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Test"
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
  "name": "Verify user received 204 No Content response",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_retrieve_terminal_details()"
});
formatter.result({
  "duration": 1393600,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_request_data_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 179000,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 693820400,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_No_Content_response()"
});
formatter.result({
  "duration": 181000,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c204\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_No_Content_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then Verify user received 204 No Content response(getTerminalDetails.feature:24)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want to request data with terminal id",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Verify user received 404 not found response",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 39,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 40,
      "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "get-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to retrieve terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want to request data with terminal id",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i request get resource",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Verify user received 404 not found response",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_retrieve_terminal_details()"
});
formatter.result({
  "duration": 1124200,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_request_data_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 122700,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_request_get_resource()"
});
formatter.result({
  "duration": 673087000,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_not_found_response()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
});