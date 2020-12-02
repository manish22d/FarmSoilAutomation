package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.util.Map;

import org.apache.http.HttpStatus;

import com.BDD.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WeatherSteps {

	TestBase testBase;

	@Given("^I want to current weather related data$")
	public void i_want_to_current_weather_related_data() {
		testBase = new TestBase();
		testBase.setAPIEndpoint("/data/2.5/weather");
	}

	@Given("^I want to request data with query param$")
	public void i_want_to_request_data_with_query_param(Map<String, String> queryParam) {
		testBase.setQueryParam(queryParam);
	}

	@When("^i request get resource$")
	public void i_request_get_resource() {
		testBase.getResource();
	}

	@Then("^Verify user received 200 ok response$")
	public void verify_user_received_ok_response() {
		assertThat(testBase.response.getStatusCode(), is(equalTo(HttpStatus.SC_OK)));
	}
}
