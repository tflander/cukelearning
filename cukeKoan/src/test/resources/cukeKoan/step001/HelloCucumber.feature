Feature:  Running Cucumber JVM

	As a learner
	I want to know that I can run cucumber JVM
	So I can do the cucumber koans 
		And master Behavior Driven Development
		
	Hint:  
	   	- Run the JUnit test src/java/cukeKoan/step001/RunCukesTest.java
		- Verify that 9 tests are run, and all nine are ignored.
		
	Go on to src/test/resources/step002/HelloCucumber.feature
	
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
	
	