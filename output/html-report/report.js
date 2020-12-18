$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post_StatusCode.feature");
formatter.feature({
  "line": 1,
  "name": "Post Status codes Functional Test",
  "description": "",
  "id": "post-status-codes-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to updated request with status codes",
  "rows": [
    {
      "cells": [
        "\u003cstatusCodes\u003e"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;",
  "rows": [
    {
      "cells": [
        "statusCodes"
      ],
      "line": 12,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;1"
    },
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 13,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2"
    },
    {
      "cells": [
        "doStatusCode"
      ],
      "line": 14,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to updated request with status codes",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_get_status_of_different_status_codes()"
});
formatter.result({
  "duration": 1066464100,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_status_codes(String\u003e)"
});
formatter.result({
  "duration": 22320100,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 2200430100,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 47963900,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(Post_StatusCode.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to updated request with status codes",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "doStatusCode"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify user received 200 ok response",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_get_status_of_different_status_codes()"
});
formatter.result({
  "duration": 51961700,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_status_codes(String\u003e)"
});
formatter.result({
  "duration": 7205700,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 766223200,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_ok_response()"
});
formatter.result({
  "duration": 25333300,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c200\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_ok_response(HttpCodeSteps.java:20)\r\n\tat ✽.Then verify user received 200 ok response(Post_StatusCode.feature:9)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to updated request with status codes",
  "rows": [
    {
      "cells": [
        "\u003cstatusCodes\u003e"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify user received 400 bad request",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;",
  "rows": [
    {
      "cells": [
        "statusCodes"
      ],
      "line": 25,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;1"
    },
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 26,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to updated request with status codes",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify user received 400 bad request",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_get_status_of_different_status_codes()"
});
formatter.result({
  "duration": 28365800,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_status_codes(String\u003e)"
});
formatter.result({
  "duration": 4070700,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 768953800,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_bad_request()"
});
formatter.result({
  "duration": 31662400,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c400\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_bad_request(HttpCodeSteps.java:44)\r\n\tat ✽.Then verify user received 400 bad request(Post_StatusCode.feature:22)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to updated request with status codes",
  "rows": [
    {
      "cells": [
        "\u003cstatusCodes\u003e"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "verify user received server error",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;",
  "rows": [
    {
      "cells": [
        "statusCodes"
      ],
      "line": 37,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;1"
    },
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 38,
      "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "User want to retrieved status related details",
  "description": "",
  "id": "post-status-codes-functional-test;user-want-to-retrieved-status-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I want to get status of different status codes",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to updated request with status codes",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ekStatusCode"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i want to post request",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "verify user received server error",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_get_status_of_different_status_codes()"
});
formatter.result({
  "duration": 36632400,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_status_codes(String\u003e)"
});
formatter.result({
  "duration": 5805500,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 784426400,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_server_error()"
});
formatter.result({
  "duration": 17091800,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c500\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_server_error(HttpCodeSteps.java:60)\r\n\tat ✽.Then verify user received server error(Post_StatusCode.feature:34)\r\n",
  "status": "failed"
});
});