package com.BDD.util;

import com.BDD.testBase.TestBase;

public class GenerateToken {

	public static String getAuthToken() {
		TestBase tb = new TestBase();
		tb.setAPIEndpoint("");
		tb.getResource();
		return tb.getResponseString();
	}

}
