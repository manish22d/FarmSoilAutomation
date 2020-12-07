package com.BDD.httpMethods;

import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

/**
 * 
 * @author Manish
 * Execution is suppose to start from base class. 
 *
 */
public class BaseClass {
	public RequestSpecification request;
	public Response response;
	public static Properties property;
	
	public BaseClass() {
		RestAssured.baseURI = System.getenv("URL");
		request = RestAssured.given();
		request.log().all();
	}
	
	public void updateRequest() {
	}
}
