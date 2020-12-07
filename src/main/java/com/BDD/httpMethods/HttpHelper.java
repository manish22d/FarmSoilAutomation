package com.BDD.httpMethods;

import java.util.Map;

import com.google.gson.JsonObject;

/**
 * Helper class for http methods
 * 
 * @author Manish
 *
 */
public class HttpHelper extends BaseClass {

	/**
	 * This method is use to update endpoint
	 * 
	 * @param basePath
	 */
	public void setAPIEndpoint(String basePath) {
		request.basePath(basePath);
	}

	/**
	 * set header to request
	 * 
	 * @param headerKey
	 * @param headerValue
	 */
	public void setHeader(String headerKey, String headerValue) {
		request.headers(headerKey, headerValue);
	}

	/**
	 * update query param in map
	 * 
	 * @param queryParam
	 */
	public void setQueryParam(Map<String, String> queryParam) {
		request.queryParams(queryParam);
	}

	/**
	 * update path param
	 * 
	 * @param paramName
	 * @param paramValue
	 */
	public void updatePathParam(String paramName, String paramValue) {
		request.pathParam(paramName, paramValue);
	}

	/**
	 * returns response body
	 * 
	 * @return
	 */
	public String getResponseString() {
		return response.getBody().asString();
	}

	/**
	 * update request body
	 * 
	 * @param requestPayload
	 */
	public void updateRequest(JsonObject requestPayload) {
		request.body(requestPayload);
	}
}
