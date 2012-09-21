package craftDay.blah;

import org.cubanForCuke.ManualAcceptanceTestingCompleted;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class BlahStepDefs {

	
	@Given("^blah$")
	@ManualAcceptanceTestingCompleted(by="Me")
	public void blah() {
	}

	@When("^blargh$")
	@ManualAcceptanceTestingCompleted(dateCompleted="20-Sept-2012")
	public void blargh() {
	}

	@Then("^yada$")
	@ManualAcceptanceTestingCompleted(comment="tested and approved through the user interface")
	public void yada() {
	}

}
