$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cukeKoan\step003\HelloCucumber.feature');
formatter.feature({
  "id": "modifying-regular-expressions-to-make-parameterized-step-definitions",
  "description": "\r\nAs a learner\r\nI want to be able to parameterize my step definitions\r\nSo I can re-use them for different data in a scenario outline\r\n\r\nHint:  \r\n- Run the JUnit test src/java/cukeKoan/step003/RunCukesTest.java\r\n- Open src/java/cukeKoan/step003/HelloCucumberStepDefs.java \r\n\tand modify them to run as skipped tests rather than red\r\n\r\nGo on to src/test/resources/step004/HelloCucumber.feature",
  "name": "Modifying regular expressions to make parameterized step definitions",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "modifying-regular-expressions-to-make-parameterized-step-definitions;run-a-simple-scenario",
  "description": "",
  "name": "Run a simple scenario",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I am hungry for knowledge",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I start learning",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "the result is no one can stop me",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_am_hungry_for_knowledge()"
});
formatter.result({
  "duration": 184312817,
  "status": "failed",
  "error_message": "java.lang.UnsupportedOperationException: Delete this step and replace it with the more generic commented-out step def.\r\n\tat cukeKoan.step003.HelloCucumberStepDefs.I_am_hungry_for_knowledge(HelloCucumberStepDefs.java:17)\r\n\tat ✽.Given I am hungry for knowledge(cukeKoan\\step003\\HelloCucumber.feature:16)\r\n"
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_start_learning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "no one can stop me",
      "offset": 14
    }
  ],
  "location": "HelloCucumberStepDefs.the_result_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "modifying-regular-expressions-to-make-parameterized-step-definitions;run-a-more-complex-scenario;;2",
  "description": "",
  "name": "Run a more complex scenario",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I am hungry for knowledge",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I start learning",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "the result is no one can stop me",
  "keyword": "Then ",
  "line": 24,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_am_hungry_for_knowledge()"
});
formatter.result({
  "duration": 146867,
  "status": "failed",
  "error_message": "java.lang.UnsupportedOperationException: Delete this step and replace it with the more generic commented-out step def.\r\n\tat cukeKoan.step003.HelloCucumberStepDefs.I_am_hungry_for_knowledge(HelloCucumberStepDefs.java:17)\r\n\tat ✽.Given I am hungry for knowledge(cukeKoan\\step003\\HelloCucumber.feature:22)\r\n"
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_start_learning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "no one can stop me",
      "offset": 14
    }
  ],
  "location": "HelloCucumberStepDefs.the_result_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "modifying-regular-expressions-to-make-parameterized-step-definitions;run-a-more-complex-scenario;;3",
  "description": "",
  "name": "Run a more complex scenario",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "I am dazed and confused",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I start learning",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "the result is no one can help me",
  "keyword": "Then ",
  "line": 24,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_am_dazed_and_confused()"
});
formatter.result({
  "duration": 119853,
  "status": "failed",
  "error_message": "java.lang.UnsupportedOperationException: Delete this step and replace it with the more generic commented-out step def.\r\n\tat cukeKoan.step003.HelloCucumberStepDefs.I_am_dazed_and_confused(HelloCucumberStepDefs.java:22)\r\n\tat ✽.Given I am dazed and confused(cukeKoan\\step003\\HelloCucumber.feature:22)\r\n"
});
formatter.match({
  "location": "HelloCucumberStepDefs.I_start_learning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "no one can help me",
      "offset": 14
    }
  ],
  "location": "HelloCucumberStepDefs.the_result_is(String)"
});
formatter.result({
  "status": "skipped"
});
});