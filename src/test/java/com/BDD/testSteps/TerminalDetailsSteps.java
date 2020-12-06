package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.util.ArrayList;
import java.util.List;

import com.BDD.Constant.Endpoint;
import com.BDD.Constant.Flatfile;
import com.BDD.runner.Instance;
import com.BDD.util.ConfigProvider;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.typesafe.config.Config;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TerminalDetailsSteps extends Instance {

	Config testConf = ConfigProvider.getConfig();

	@Given("^I want to retrieve terminal details$")
	public void i_want_to_retrieve_terminal_details() {
		testBase.setAPIEndpoint(Endpoint.GET_TERMINAL_DETAILS);
		testBase.setHeader("Accept", "application/json");
		testBase.setHeader("Content-Type", "application/json");
//		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
	}

	/**
	 * 
	 * @param terminalId
	 */
	@Given("^I want to request data with terminal id$")
	public void i_want_to_request_data_with_terminal_id(List<String> terminalId) {
		testBase.updatePathParam("terminalid", terminalId.get(0));
	}

	@Given("^I want to update terminal details$")
	public void i_want_to_update_terminal_details() {
		testBase.setAPIEndpoint(Endpoint.POST_TERMINAL_DETAILS);
		testBase.setHeader("Accept", "application/json");
		testBase.setHeader("Content-Type", "application/json");
//		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
		requestPayload.setRequestPayload(file.readJson(Flatfile.TERMINAL_REQUEST));
		System.out.println(requestPayload.getRequestPayload());
	}

	@Given("^I want to updated request with terminal id$")
	public void i_want_to_updated_request_with_terminal_id(List<String> terminal) {
		requestPayload.updateJsonRequest("terminalid", terminal.get(0));
		testConf = testConf.getConfig("updateTerminal").getConfig(terminal.get(0));
		requestPayload.updateJsonRequest("$.states[0].uri", testConf.getString("uri"));
		
	}

	@When("^i want to post request$")
	public void i_want_to_post_request() {
		testBase.PostRequest(requestPayload.getRequestPayload());
	}

	@Then("^verify all coressponding device id displayed in response$")
	public void verify_all_coressponding_device_id_displayed_in_response(List<String> terminalId) {
		JsonArray terminalArray = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals");

		List<String> devicesInResponse = new ArrayList<String>();
		terminalArray.get(0).getAsJsonObject().getAsJsonArray("devices")
				.forEach(terminal -> devicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));

		List<String> expectedDevices = testConf.getConfig("terminals")
				.getStringList(terminalId.get(0).replace(" ", ""));
		assertThat(devicesInResponse, is(equalTo(expectedDevices)));
	}

}
