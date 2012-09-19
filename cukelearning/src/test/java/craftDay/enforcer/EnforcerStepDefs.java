package craftDay.enforcer;

import craftDay.enforcer.support.Testharness;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;

public class EnforcerStepDefs {
	private Testharness testharness;

	@Before
	public void setup() {
		testharness = new Testharness();
	}


	@Given("^Product owner is behaving$")
	public void Product_owner_is_behaving() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Given("^QA is not in team room$")
	public void QA_is_not_in_team_room() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@When("^We check to see if enforcing is necessary$")
	public void We_check_to_see_if_enforcing_is_necessary() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}
	
	@When("^we need to test$")
	public void we_need_to_test() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Then("^Enforcement is not necessary$")
	public void Enforcement_is_not_necessary() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}
	
	@Given("^Product owner is absent$")
	public void Product_owner_is_absent() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}
	
	@When("^we need product owner input$")
	public void we_need_product_owner_input() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}
	
	@Then("^Go knock on product owner's door$")
	public void Go_knock_on_product_owner_s_door() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}


	@Then("^we talk to TC$")
	public void we_talk_to_TC() {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}}
