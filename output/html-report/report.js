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
  "line": 9,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 11,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 12,
  "name": "I want to updated request with terminal id from excel sheet",
  "rows": [
    {
      "cells": [
        "\u003cterminalId\u003e"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#And I want to updated request with terminal details from excel sheet"
    },
    {
      "line": 15,
      "value": "#| \u003cterminalId\u003e |"
    },
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
    },
    {
      "cells": [
        "ATM 2"
      ],
      "line": 24,
      "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;3"
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
  "line": 9,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 11,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 12,
  "name": "I want to updated request with terminal id from excel sheet",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 1"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 735007000,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 705190000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User want to retrieved terminal related details",
  "description": "",
  "id": "post-terminal-details-functional-test;user-want-to-retrieved-terminal-related-details;;3",
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
  "line": 9,
  "name": "I want to update terminal details",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And I want to updated request with terminal id"
    },
    {
      "line": 11,
      "value": "#| \u003cterminalId\u003e |"
    }
  ],
  "line": 12,
  "name": "I want to updated request with terminal id from excel sheet",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "ATM 2"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_update_terminal_details()"
});
formatter.result({
  "duration": 9442200,
  "status": "passed"
});
formatter.match({
  "location": "TerminalDetailsSteps.i_want_to_updated_request_with_terminal_id_from_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 41261400,
  "status": "passed"
});
});