$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('craftDay\enforcer\enforcer.feature');
formatter.feature({
  "id": "enforcer",
  "description": "\r\nAs development team, when a product owner acts up\r\nI want Selva\u0027s enforcement team to knock on their door\r\nSo that the team\u0027s velocity will increase\r\n\r\nTODO: Product owner doesn\u0027t groom backlog\r\nTODO: Product owner defers defect",
  "name": "Enforcer",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "enforcer;behaving-product-owner",
  "description": "",
  "name": "Behaving Product Owner",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "Product owner is behaving",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "We check to see if enforcing is necessary",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "Enforcement is not necessary",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "location": "EnforcerStepDefs.Product_owner_is_behaving()"
});
formatter.result({
  "duration": 136679474,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.We_check_to_see_if_enforcing_is_necessary()"
});
formatter.result({
  "duration": 56312,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.Enforcement_is_not_necessary()"
});
formatter.result({
  "duration": 46419,
  "status": "passed"
});
formatter.scenario({
  "id": "enforcer;product-owner-not-in-team-room",
  "description": "",
  "name": "Product Owner not in team room",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "Product owner is absent",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "we need product owner input",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "Go knock on product owner\u0027s door",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "EnforcerStepDefs.Product_owner_is_absent()"
});
formatter.result({
  "duration": 47941,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.we_need_product_owner_input()"
});
formatter.result({
  "duration": 41473,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.Go_knock_on_product_owner_s_door()"
});
formatter.result({
  "duration": 46419,
  "status": "passed"
});
formatter.scenario({
  "id": "enforcer;qa-not-in-team-room",
  "description": "",
  "name": "QA not in team room",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "QA is not in team room",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "we need to test",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "we talk to TC",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "location": "EnforcerStepDefs.QA_is_not_in_team_room()"
});
formatter.result({
  "duration": 60498,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.we_need_to_test()"
});
formatter.result({
  "duration": 45278,
  "status": "passed"
});
formatter.match({
  "location": "EnforcerStepDefs.we_talk_to_TC()"
});
formatter.result({
  "duration": 42615,
  "status": "passed"
});
});