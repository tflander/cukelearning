package craftDay.ncco;

public class NccoComputerTestHarness implements NccoTestHarness {
	
	GenericTestHarness genericTestHarness = new GenericTestHarness();

	public void launchNcco() {
		System.out.println("Launch NCCO in Computer Browser");
	}

	public void verifyGalleryViewOnResults() {
		System.out.println("Check Gallery View in Sidebar");
		
	}

	public void navigateToHomePage() {
		// TODO Auto-generated method stub
		
	}

	public void searchForTermWithImages() {
		// TODO Auto-generated method stub
		
	}

	public void validateGalleryViewLink() {
		genericTestHarness.validateGalleryViewLink();
		
	}

}
