package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import org.apache.http.HttpStatus;

import com.BDD.runner.Instance;

import cucumber.api.java.en.Then;

public class HttpCodeSteps extends Instance {

	/**
	 * Step to validate 200 ok response
	 */
	@Then("^verify user received 200 ok response$")
	public void verify_user_received_ok_response() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_OK)));
	}

	/**
	 * Step to validate 201 created response
	 */
	@Then("^verify user received 201 create response$")
	public void verify_user_received_created_response() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_CREATED)));
	}

	/**
	 * Step to validate 204 no content response
	 */
	@Then("^verify user received 204 No Content response$")
	public void verify_user_received_No_Content_response() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_NO_CONTENT)));
	}

	/**
	 * Step to validate 400 response
	 */
	@Then("^verify user received 400 bad request$")
	public void verify_user_received_bad_request() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_BAD_REQUEST)));
	}

	/**
	 * Step to validate 400 not found response
	 */
	@Then("^verify user received 404 not found response$")
	public void verify_user_received_not_found_response() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_NOT_FOUND)));
	}

	/**
	 * Step to validate 500 server error response
	 */
	@Then("^verify user received server error$")
	public void verify_user_received_server_error() {
		assertThat(testBase.getResponseStatusCode(), is(equalTo(HttpStatus.SC_INTERNAL_SERVER_ERROR)));
	}
}
