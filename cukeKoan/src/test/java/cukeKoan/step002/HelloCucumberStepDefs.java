package cukeKoan.step002;

import cucumber.annotation.en.*;
import cucumber.runtime.PendingException;

public class HelloCucumberStepDefs {
	@Given("^I am hungry for knowledge$")
	public void I_am_hungry_for_knowledge() {
		throw new UnsupportedOperationException("For each step, throw a new PendingException so tests are skipped and don't run red.");
//	    throw new PendingException();
	}

	@When("^I start learning$")
	public void I_start_learning() {
		throw new UnsupportedOperationException("Throw PendingException here too.");
	}

	@Then("^no one can stop me$")
	public void no_one_can_stop_me() {
		throw new UnsupportedOperationException("Throw PendingException here too.");
	}

	@Given("^I am dazed and confused$")
	public void I_am_dazed_and_confused() {
		throw new UnsupportedOperationException("Throw PendingException here too.");
	}

	@Then("^no one can help me$")
	public void no_one_can_help_me() {
		throw new UnsupportedOperationException("Throw PendingException here too.");
	}

}
