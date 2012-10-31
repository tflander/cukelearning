package craftDay.ncco;

import static org.junit.Assert.*;
import cucumber.junit.Cucumber;

import org.junit.Test;
import org.junit.runner.RunWith;

//@Cucumber.Options(format = {"html:target/cucumber"}, glue={"craftDay.mindtap.MindtapSearchStepDefs"})

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"html:target/cucumber"})
public class RunCukesTest {
}