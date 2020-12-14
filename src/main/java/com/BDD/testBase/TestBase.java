package com.BDD.testBase;

import org.apache.log4j.Logger;

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
	public Logger log = Logger.getLogger(TestBase.class.getClass());

	public void initiateTest() {
		log.info("initialized baseClass");
		base = new BaseClass();
	}

	public void setAPIEndpoint(String endpoint) {
		log.info("Setting Endpoint to : " + endpoint);
		this.base.setAPIEndpoint(endpoint);
	}

	public void setHeader(String headerKey, String headerValue) {
		log.info("updating header  : " + headerKey + " with " + headerValue);
		this.base.setHeader(headerKey, headerValue);
	}

	public void updatePathParam(String paramName, String paramValue) {
		log.info("updating path param  : " + paramName + " to " + paramValue);
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
