package com.BDD.util;

import com.BDD.httpMethods.Request;
import com.BDD.testBase.TestBase;

/**
 * Use this class to perform all security token related operation
 * 
 * @author Manish
 *
 */
public class GenerateToken {

	/**
	 * Generate auth token
	 * 
	 * @return
	 */
	public static String getAuthToken() {

		System.out.println(TestUtility.getConfigProperty("userID"));

		TestBase tb = new TestBase();
		tb.initiateTest();
		Request requestPayload = new Request();

		tb.setAPIEndpoint("AuthToken");
		tb.setHeader("manish", "value");
		requestPayload.setRequestPayload("request");
		tb.PostRequest(requestPayload.getRequestPayload());
//		return tb.getResponseString();
		return "";
	}
}
