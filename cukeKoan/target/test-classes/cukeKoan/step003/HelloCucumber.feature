Feature:  Modifying regular expressions to make parameterized step definitions

	As a learner
	I want to be able to parameterize my step definitions
	So I can re-use them for different data in a scenario outline
		
	Hint:  
		- Run the JUnit test src/java/cukeKoan/step003/RunCukesTest.java
		- Open src/java/cukeKoan/step003/HelloCucumberStepDefs.java 
			and modify them to run as skipped tests rather than red
		
	Go on to src/test/resources/step004/HelloCucumber.feature
	
Scenario:  Run a simple scenario

	Given I am hungry for knowledge
	When I start learning
	Then the result is no one can stop me
	
Scenario Outline:  Run a more complex scenario

	Given I am <mood>
	When I start learning
	Then the result is <result>
	
	Examples:
	
	| mood                 | result             |
	| hungry for knowledge | no one can stop me |
	| dazed and confused   | no one can help me |
	
	