package craftDay.enforcer;

import static org.cubanForCuke.Cuban.timeBombUntil;

import java.util.Calendar;

import org.cubanForCuke.FunctionalityLateException;

import craftDay.enforcer.support.Testharness;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class EnforcerStepDefs {
	@SuppressWarnings("unused")
	private Testharness testharness;

	@Before
	public void setup() {
		testharness = new Testharness();
	}


	@Given("^Product owner is behaving$")
	public void Product_owner_is_behaving() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}

	@Given("^QA is not in team room$")
	public void QA_is_not_in_team_room() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}

	@When("^We check to see if enforcing is necessary$")
	public void We_check_to_see_if_enforcing_is_necessary() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}
	
	@When("^we need to test$")
	public void we_need_to_test() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}

	@Then("^Enforcement is not necessary$")
	public void Enforcement_is_not_necessary() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}
	
	@Given("^Product owner is absent$")
	public void Product_owner_is_absent() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}
	
	@When("^we need product owner input$")
	public void we_need_product_owner_input() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}
	
	@Then("^Go knock on product owner's door$")
	public void Go_knock_on_product_owner_s_door() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}


	@Then("^we talk to TC$")
	public void we_talk_to_TC() throws FunctionalityLateException {
	    timeBombUntil(2012, Calendar.OCTOBER, 1);
	}}
