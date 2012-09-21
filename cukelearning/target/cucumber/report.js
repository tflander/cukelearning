$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('craftDay\blah\blah.feature');
formatter.feature({
  "id": "blah",
  "description": "",
  "name": "blah",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "blah;",
  "description": "",
  "name": "",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "blah",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "blargh",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "yada",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "BlahStepDefs.blah()"
});
formatter.result({
  "duration": 368121476,
  "status": "passed"
});
formatter.match({
  "location": "BlahStepDefs.blargh()"
});
formatter.result({
  "duration": 9132,
  "status": "passed"
});
formatter.match({
  "location": "BlahStepDefs.yada()"
});
formatter.result({
  "duration": 9131,
  "status": "passed"
});
});