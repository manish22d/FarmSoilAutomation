package com.BDD.httpMethods;

import java.util.Map;

import com.google.gson.JsonObject;

public class HttpHelper extends BaseClass {

	/**
	 * This method is use to update endpoint
	 * @param basePath
	 */
	public void setAPIEndpoint(String basePath) {
		request.basePath(basePath);
	}

	/**
	 * set  header to request
	 *  
	 * @param headerKey
	 * @param headerValue
	 */
	public void setHeader(String headerKey, String headerValue) {
		request.headers(headerKey, headerValue);
	}

	public void setQueryParam(Map<String, String> queryParam) {
		request.queryParams(queryParam);
	}

	public void updatePathParam(String paramName, String paramValue) {
		request.pathParam(paramName, paramValue);
	}

	public String getResponseString() {
		return response.getBody().asString();
	}

	public void updateRequest(JsonObject requestPayload) {
		request.body(requestPayload);
	}
}
