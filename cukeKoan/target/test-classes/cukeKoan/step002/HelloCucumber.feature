Feature:  Defining a stubbed step defs file

	As a learner
	I want to be able to stub out java code for my tests
	So I can implement them later 
		
	Hint:  
		- Run the JUnit test src/java/cukeKoan/step002/RunCukesTest.java
		- Open HelloCucumberStepDefs.java and modify them to run as skipped tests rather than red
		
	Go on to src/test/resources/step003/HelloCucumber.feature
	
Scenario:  Run a simple scenario

	Given I am hungry for knowledge
	When I start learning
	Then no one can stop me
	
Scenario Outline:  Run a more complex scenario

	Given I am <mood>
	When I start learning
	Then <result>
	
	Examples:
	
	| mood                 | result             |
	| hungry for knowledge | no one can stop me |
	| dazed and confused   | no one can help me |
	
	