$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('craftDay\ncco\DigitizedPhotos.feature');
formatter.feature({
  "id": "digitized-photos",
  "description": "\r\nAs a \r\nI want \r\nSo \r\n\r\nTODO: We need to flush this out further with the product owner.",
  "name": "Digitized Photos",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 9,
  "type": "background"
});
formatter.step({
  "name": "I\u0027m in NCCO",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_m_in_NCCO()"
});
formatter.result({
  "duration": 120889791,
  "status": "passed"
});
formatter.scenario({
  "id": "digitized-photos;successful-basic-search-for-photos",
  "description": "",
  "name": "Successful basic search for photos",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "On home page",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "I search for a term with images",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I see gallery view on the result list page",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "the gallery view has a \"more results\" link",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "we have photo content type limiter",
  "keyword": "And ",
  "line": 20
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.On_home_page()"
});
formatter.result({
  "duration": 14458,
  "status": "passed"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_search_for_a_term_with_images()"
});
formatter.result({
  "duration": 10653,
  "status": "passed"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_see_gallery_view_on_the_result_list_page()"
});
formatter.result({
  "duration": 39570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more results",
      "offset": 24
    }
  ],
  "location": "DigitizedPhotosStepDefs.the_gallery_view_has_a_link(String)"
});
formatter.result({
  "duration": 1256367,
  "status": "passed"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.we_have_photo_content_type_limiter()"
});
formatter.result({
  "duration": 258731,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\r\n\tat craftDay.ncco.DigitizedPhotosStepDefs.we_have_photo_content_type_limiter(DigitizedPhotosStepDefs.java:49)\r\n\tat ✽.And we have photo content type limiter(craftDay\\ncco\\DigitizedPhotos.feature:20)\r\n"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 9,
  "type": "background"
});
formatter.step({
  "name": "I\u0027m in NCCO",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_m_in_NCCO()"
});
formatter.result({
  "duration": 48321,
  "status": "passed"
});
formatter.scenario({
  "id": "digitized-photos;unsuccessful-basic-search-for-photos",
  "description": "",
  "name": "Unsuccessful basic search for photos",
  "keyword": "Scenario",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "On home page",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "I search for term with no images",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "I don\u0027t see gallery view on the result list page",
  "keyword": "Then ",
  "line": 29
});
formatter.step({
  "name": "we have no \"more results\" link",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "we have no photo content type limiter",
  "keyword": "And ",
  "line": 31
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.On_home_page()"
});
formatter.result({
  "duration": 7990,
  "status": "passed"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_search_for_term_with_no_images()"
});
formatter.result({
  "duration": 81424,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\r\n\tat craftDay.ncco.DigitizedPhotosStepDefs.I_search_for_term_with_no_images(DigitizedPhotosStepDefs.java:55)\r\n\tat ✽.When I search for term with no images(craftDay\\ncco\\DigitizedPhotos.feature:27)\r\n"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_don_t_see_gallery_view_on_the_result_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "more results",
      "offset": 12
    }
  ],
  "location": "DigitizedPhotosStepDefs.we_have_no_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.we_have_no_photo_content_type_limiter()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 9,
  "type": "background"
});
formatter.step({
  "name": "I\u0027m in NCCO",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_m_in_NCCO()"
});
formatter.result({
  "duration": 38048,
  "status": "passed"
});
formatter.scenario({
  "id": "digitized-photos;navigate-to-full-list-view-of-photographs",
  "description": "",
  "name": "Navigate to full list view of photographs",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "On the results list with gallery view",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "I navigate to the full list view of photographs",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "I see more photographs",
  "keyword": "Then ",
  "line": 39
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.On_the_results_list_with_gallery_view()"
});
formatter.result({
  "duration": 79902,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\r\n\tat craftDay.ncco.DigitizedPhotosStepDefs.On_the_results_list_with_gallery_view(DigitizedPhotosStepDefs.java:79)\r\n\tat ✽.Given On the results list with gallery view(craftDay\\ncco\\DigitizedPhotos.feature:35)\r\n"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_navigate_to_the_full_list_view_of_photographs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DigitizedPhotosStepDefs.I_see_more_photographs()"
});
formatter.result({
  "status": "skipped"
});
});