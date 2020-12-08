package com.BDD.httpMethods;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

/**
 * 
 * Execution is suppose to start from base class.
 * 
 * @author Manish
 *
 */
public class BaseClass {
	public RequestSpecification request;

	public static String basePath;
	public static String endPoint;
	public Response response;
	public Map<String, String> headers;
	public Map<String, String> queryParams;
	public Map<String, String> pathParams;
	public static Properties property;

	public BaseClass() {
		headers = new HashMap<String, String>();
		queryParams = new HashMap<String, String>();
		pathParams = new HashMap<String, String>();
		RestAssured.baseURI = System.getenv("URL");
	}

	public void initiateRequest() {
		request = RestAssured.given();
		request.log().all();
		request.basePath(basePath);
		request.queryParams(queryParams);
		request.headers(headers);
	}

}
