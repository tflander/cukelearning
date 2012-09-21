package org.cubanForCuke;

import java.util.Calendar;
import java.util.Locale;

public class FunctionalityLateException extends Exception {

	public FunctionalityLateException() {}
	
	public FunctionalityLateException(int expectedYear, int expectedMonth, int expectedDate) {
		super(getMessage(expectedYear, expectedMonth, expectedDate));
		
	}

	private static String getMessage(int expectedYear, int expectedMonth, int expectedDate) {
		Calendar cal = Calendar.getInstance(Locale.ENGLISH);
		
		cal.set(expectedYear, expectedMonth, expectedDate, 0, 0, 0);
		return "Functionality is Late!  Expected completion by " + cal.getTime();
	}
}
