package com.BDD.httpMethods;

public class HttpOperations extends HttpHelper{

	public void getResource() {
		response = request.get();
		response.then().log().all();
	}
	
	public void PostRequest() {
		response = request.post();
		response.then().log().all();
	}
}
