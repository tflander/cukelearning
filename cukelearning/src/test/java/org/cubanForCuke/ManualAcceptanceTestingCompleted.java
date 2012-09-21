package org.cubanForCuke;

public @interface ManualAcceptanceTestingCompleted {
	String comment() default "";
	String by() default "";
	String dateCompleted() default "";
}
