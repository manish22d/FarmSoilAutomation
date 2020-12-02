package com.BDD.httpMethods;

import java.util.Map;

public class HttpHelper extends BaseClass{

	public void setAPIEndpoint(String basePath) {
		request.basePath(basePath);
	}
	
	public void setQueryParam(Map<String,String> queryParam) {
		request.queryParams(queryParam);
	}
}
