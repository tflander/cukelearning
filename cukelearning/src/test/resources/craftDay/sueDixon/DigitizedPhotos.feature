Feature: Digitized Photos

	As a 
	I want 
	So 
	
	TODO: We need to flush this out further with the product owner.
	
Background:
	Given I'm in NCCO

Scenario: Successful basic search for photos

	Given On home page	
	
	When I search for a term with images
	
	Then I see gallery view on the result list page
		And the gallery view has a "more results" link
		And we have photo content type limiter
		

Scenario: Unsuccessful basic search for photos

	Given On home page	
	
	When I search for term with no images
	
	Then I don't see gallery view on the result list page
		And we have no "more results" link
		And we have no photo content type limiter
		
Scenario:  Navigate to full list view of photographs

	Given On the results list with gallery view
	
	When I navigate to the full list view of photographs
	
	Then I see more photographs
	

	