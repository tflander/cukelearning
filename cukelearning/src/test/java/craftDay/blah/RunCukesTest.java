package craftDay.blah;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

// @Cucumber.Options(format = {"html:target/cucumber"}, glue={"craftDay.blah.BlahStepDefs"})

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"html:target/cucumber"})
public class RunCukesTest {
}