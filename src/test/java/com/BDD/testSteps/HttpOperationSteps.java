package com.BDD.testSteps;

import com.BDD.runner.Instance;

import cucumber.api.java.en.When;

public class HttpOperationSteps extends Instance {

	/**
	 * step to trigger get request
	 */
	@When("^i request get resource$")
	public void i_request_get_resource() {
		testBase.getResource();
	}

}
