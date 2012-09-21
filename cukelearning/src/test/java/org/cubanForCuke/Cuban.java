package org.cubanForCuke;

import java.util.Locale;
import java.util.Date;

import java.util.Calendar;

public class Cuban {

	public static void timeBombUntil(int year, int month, int date) throws FunctionalityLateException {
		Calendar cal = Calendar.getInstance(Locale.ENGLISH);
		
		cal.set(year, month, date, 0, 0, 0);
		Date whenToFail = cal.getTime();
		
		Date now = new Date();
		
		if(now.after(whenToFail)) {
			throw new FunctionalityLateException(year, month, date);
		}
	}
	
	public static void main(String[] args) throws FunctionalityLateException {
		timeBombUntil(2012, Calendar.SEPTEMBER, 21);
	}
}
