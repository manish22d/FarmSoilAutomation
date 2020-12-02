package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import org.apache.http.HttpStatus;

import cucumber.api.java.en.Then;

public class HttpCodeSteps {

	@Then("^Verify user received 200 ok response$")
	public void verify_user_received_ok_response() {
		assertThat(TerminalDetailsSteps.testBase.response.getStatusCode(), is(equalTo(HttpStatus.SC_OK)));
	}

	@Then("^Verify user received 204 No Content response$")
	public void verify_user_received_No_Content_response() {
		assertThat(TerminalDetailsSteps.testBase.response.getStatusCode(), is(equalTo(HttpStatus.SC_NO_CONTENT)));
	}

	@Then("^Verify user received 404 not found response$")
	public void verify_user_received_not_found_response() {
		assertThat(TerminalDetailsSteps.testBase.response.getStatusCode(), is(equalTo(HttpStatus.SC_NOT_FOUND)));
	}
}
