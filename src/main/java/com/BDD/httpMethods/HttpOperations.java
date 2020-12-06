package com.BDD.httpMethods;

import com.google.gson.JsonObject;

public class HttpOperations extends HttpHelper {

	/**
	 * trigger Get Request
	 */
	public void getResource() {
		response = request.get();
		response.then().log().all();
	}

	/**
	 * trigger POST Request
	 * 
	 * @param requestPayload
	 */
	public void PostRequest(String requestPayload) {
		response = request.body(requestPayload).post();
		response.then().log().all();
	}
}
