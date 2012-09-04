package craftDay.support;

public class StubbedTestHarness {

	public String search(String book, String term) {
		if (book.equals("medical")) {
			if(term.equals("cancer")) {
				return ("blah Luke-emia blah");
			}
			if(term.equals("acne")) {
				return ("blah pipmple blah");
			}
			return "medical term not found";
		}
		return null;
	}

	public void verifyYada() {
		// TODO Auto-generated method stub
		
	}

}
