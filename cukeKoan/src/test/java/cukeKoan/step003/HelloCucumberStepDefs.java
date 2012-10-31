package cukeKoan.step003;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;

public class HelloCucumberStepDefs {
	
//	@Given("^I am (.*)$")
//	public void I_am(String mood) {
//	    throw new PendingException();
//	}

	@Given("^I am hungry for knowledge$")
	public void I_am_hungry_for_knowledge() {
		throw new UnsupportedOperationException("Delete this step and replace it with the more generic commented-out step def.");
	}

	@Given("^I am dazed and confused$")
	public void I_am_dazed_and_confused() {
		throw new UnsupportedOperationException("Delete this step and replace it with the more generic commented-out step def.");
	}
	
	@When("^I start learning$")
	public void I_start_learning() {
	    throw new PendingException();
	}
	
	@Then("^the result is (.*)$")
	public void the_result_is(String result) {
	    throw new PendingException();
	}
}
