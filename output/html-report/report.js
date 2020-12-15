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
  "line": 8,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I want to update terminal details"
    },
    {
      "line": 10,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 11,
      "value": "#| \u003cterminalId\u003e |"
    },
    {
      "line": 12,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 13,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 14,
  "name": "I want to updated request with terminal details from excel sheet",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#When i want to post request"
    },
    {
      "line": 17,
      "value": "#Then verify user received 200 ok response"
    },
    {
      "line": 18,
      "value": "#And i want to validate result against database"
    },
    {
      "line": 19,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 22,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 23,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I want to update terminal details"
    },
    {
      "line": 10,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 11,
      "value": "#| \u003cterminalId\u003e |"
    },
    {
      "line": 12,
      "value": "#And I want to updated request with terminal id from excel sheet"
    },
    {
      "line": 13,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 14,
  "name": "I want to updated request with terminal details from excel sheet",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_details_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 927146800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "#\t\t| ATM 2      |"
    },
    {
      "line": 26,
      "value": "#\t\t| ATM 3      |"
    },
    {
      "line": 27,
      "value": "#\t\t| ATM 4      |"
    }
  ],
  "line": 29,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details",
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
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to updated request with terminal id",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
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
  "name": "verify user received 400 bad request",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;",
  "rows": [
    {
      "cells": [
        "terminalId"
      ],
      "line": 37,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;1"
    },
    {
      "cells": [
        "ATM 1"
      ],
      "line": 38,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;2",
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
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to updated request with terminal id",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
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
  "name": "verify user received 400 bad request",
  "keyword": "Then "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 2961694300,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id(String\u003e)"
});
formatter.result({
  "duration": 83445000,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_post_request()"
});
formatter.result({
  "duration": 759636200,
  "status": "passed"
});
formatter.match({
  "location": "HttpCodeSteps.verify_user_received_bad_request()"
});
formatter.result({
  "duration": 5116100,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c400\u003e\n     but: was \u003c404\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.BDD.testSteps.HttpCodeSteps.verify_user_received_bad_request(HttpCodeSteps.java:44)\r\n\tat ✽.Then verify user received 400 bad request(Post_Terminal.feature:34)\r\n",
  "status": "failed"
});
});