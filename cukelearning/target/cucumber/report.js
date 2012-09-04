$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('craftDay\mindtap\mindtapSearch.feature');
formatter.feature({
  "id": "some-mindtap-thingy",
  "description": "\r\nAs a student\r\nI want to search for a concept\r\nSo I can understand it better\r\n\r\nTODO:  consider \"no results\" case",
  "name": "Some Mindtap Thingy",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "some-mindtap-thingy;;;2",
  "tags": [
    {
      "name": "@craftday",
      "line": 9
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I\u0027m in medical",
  "keyword": "Given ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I execute a search for cancer",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I get Luke-emia",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "medical",
      "offset": 7
    }
  ],
  "location": "MindtapSearchStepDefs.I_m_in(String)"
});
formatter.result({
  "duration": 18033553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " cancer",
      "offset": 22
    }
  ],
  "location": "MindtapSearchStepDefs.I_execute_a_search_for(String)"
});
formatter.result({
  "duration": 44517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke-emia",
      "offset": 6
    }
  ],
  "location": "MindtapSearchStepDefs.I_get(String)"
});
formatter.result({
  "duration": 164751,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\r\n\tat craftDay.mindtap.MindtapSearchStepDefs.I_get(MindtapSearchStepDefs.java:32)\r\n\tat ✽.Then I get Luke-emia(craftDay\\mindtap\\mindtapSearch.feature:14)\r\n"
});
formatter.scenario({
  "id": "some-mindtap-thingy;;;3",
  "tags": [
    {
      "name": "@craftday",
      "line": 9
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I\u0027m in medical",
  "keyword": "Given ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I execute a search for acne",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I get pimple",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "medical",
      "offset": 7
    }
  ],
  "location": "MindtapSearchStepDefs.I_m_in(String)"
});
formatter.result({
  "duration": 30820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " acne",
      "offset": 22
    }
  ],
  "location": "MindtapSearchStepDefs.I_execute_a_search_for(String)"
});
formatter.result({
  "duration": 19785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pimple",
      "offset": 6
    }
  ],
  "location": "MindtapSearchStepDefs.I_get(String)"
});
formatter.result({
  "duration": 157902,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\r\n\tat craftDay.mindtap.MindtapSearchStepDefs.I_get(MindtapSearchStepDefs.java:32)\r\n\tat ✽.Then I get pimple(craftDay\\mindtap\\mindtapSearch.feature:14)\r\n"
});
formatter.scenario({
  "id": "some-mindtap-thingy;",
  "description": "",
  "name": "",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "not ready for prime time",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "unknown",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "yada",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "location": "MindtapSearchStepDefs.not_ready_for_prime_time()"
});
formatter.result({
  "duration": 18644,
  "status": "passed"
});
formatter.match({
  "location": "MindtapSearchStepDefs.unknown()"
});
formatter.result({
  "duration": 83326,
  "status": "passed"
});
formatter.match({
  "location": "MindtapSearchStepDefs.yada()"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
});