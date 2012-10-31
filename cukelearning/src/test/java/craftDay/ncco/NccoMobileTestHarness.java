package craftDay.ncco;

public class NccoMobileTestHarness implements NccoTestHarness {
	
	GenericTestHarness genericTestHarness = new GenericTestHarness();

	public void launchNcco() {
		System.out.println("Launch NCCO on IOS device");		
	}

	public void verifyGalleryViewOnResults() {
		System.out.println("swipe to expose gallery view");
		
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
