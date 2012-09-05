Feature:  Enforcer

	As development team, when a product owner acts up
	I want Selva's enforcement team to knock on their door
	So that the team's velocity will increase

	TODO: Product owner doesn't groom backlog
	TODO: Product owner defers defect

Scenario: Behaving Product Owner

	Given  Product owner is behaving
	When   We check to see if enforcing is necessary
	Then   Enforcement is not necessary
	
Scenario: Product Owner not in team room

	Given Product owner is absent
	When  we need product owner input
	Then  Go knock on product owner's door 

Scenario:  QA not in team room

	Given QA is not in team room
	When we need to test
	Then we talk to TC