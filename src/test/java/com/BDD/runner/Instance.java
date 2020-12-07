package com.BDD.runner;

import com.BDD.httpMethods.Request;
import com.BDD.testBase.TestBase;
import com.BDD.util.Files;

/**
 * supper class of all step def class
 * 
 * @author manish
 *
 */
public class Instance {

	public TestBase testBase = new TestBase();
	public Files file = new Files();
	public Request requestPayload = new Request();

	public void setTestBase(TestBase testBase) {
		this.testBase = testBase;
	}

}
