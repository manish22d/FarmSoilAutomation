package com.BDD.util;

import com.BDD.testBase.TestBase;

public class GenerateToken {

	/**
	 * Generate auth token
	 * @return
	 */
	public static String getAuthToken() {
		
		System.out.println(TestUtility.getConfigProperty("userID"));
		
		TestBase tb = new TestBase();
		tb.setAPIEndpoint("");
//		tb.getResource();
//		return tb.getResponseString();
		return "";
	}
}
