Feature:  Some Mindtap Thingy

As a student
I want to search for a concept
So I can understand it better

TODO:  consider "no results" case

	@craftday
	Scenario Outline:
	
		Given I'm in <textbook>
		When I execute a search for <term>
		Then I get <results>
		
		Examples:
		
		| textbook | term   | results   |
		| medical  | cancer | Luke-emia |
		| medical  | acne   | pimple    |
	
	Scenario:
	
		Given not ready for prime time
		When unknown
		Then yada			