package com.BDD.testBase;

import com.BDD.httpMethods.BaseClass;

/**
 * This class is used to store instace all class which will be used in test
 * class
 * 
 * @author Manish
 *
 */
public class TestBase {

	BaseClass base;

	public void initiateTest() {
		base = new BaseClass();
	}

	public void setAPIEndpoint(String endpoint) {
		this.base.setAPIEndpoint(endpoint);
	}

	public void setHeader(String headerKey, String headerValue) {
		this.base.setHeader(headerKey, headerValue);
	}

	public void updatePathParam(String paramName, String paramValue) {
		this.base.updatePathParam(paramName, paramValue);
	}

	public void getResource() {
		this.base.getResource();
	}

	public void PostRequest(String requestPayload) {
		this.base.PostRequest(requestPayload);
	}

	public String getResponseString() {
		return this.base.getResponseString();
	}

	public int getResponseStatusCode() {
		return this.base.response.getStatusCode();
	}

}
