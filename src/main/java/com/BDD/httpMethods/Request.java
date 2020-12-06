package com.BDD.httpMethods;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;

public class Request {
	public String requestPayload;

	public void setRequestPayload(String requestPayload) {
		this.requestPayload = requestPayload;
	}

	public String getRequestPayload() {
		return requestPayload;
	}

	/**
	 * Convenience method to update value in json using JsonPath
	 * 
	 * @param path
	 * @param value
	 */
	public void updateJsonRequest(String path, String value) {

		DocumentContext jsonContext = JsonPath.parse(requestPayload);
		jsonContext.set(path, value);
		setRequestPayload(jsonContext.jsonString());
	}

}
