package craftDay.mindtap;

import craftDay.support.StubbedTestHarness;
import cucumber.annotation.Before;
import cucumber.annotation.en.*;
import cucumber.runtime.PendingException;

public class MindtapSearchStepDefs {


	private String book;
	private StubbedTestHarness stubbedTestHarness;
	
	@Before
	public void setup() {
		stubbedTestHarness = new StubbedTestHarness();
	}

	@Given("^I'm in (.*)$")
	public void I_m_in(String book) {
		this.book = book;
	}

	@When("^I execute a search for(.*)$")
	public void I_execute_a_search_for(String term) {
	    String results = stubbedTestHarness.search(book, term);
	}

	@Then("^I get (.*)$")
	public void I_get(String stringInResult) {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}	
	

	@Given("^not ready for prime time$")
	public void not_ready_for_prime_time() {
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
	}

	@When("^unknown$")
	public void unknown() {
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
		System.out.println("MT");
	}

	
	@Then("^yada$")
	public void yada() {
		System.out.println("MT");
		stubbedTestHarness.verifyYada();
	}
	
}
