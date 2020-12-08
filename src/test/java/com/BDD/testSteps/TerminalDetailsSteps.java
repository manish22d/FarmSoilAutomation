package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.BDD.Constant.Endpoint;
import com.BDD.Constant.Flatfile;
import com.BDD.runner.Instance;
import com.BDD.util.ConfigProvider;
import com.BDD.util.DBOperation;
import com.BDD.util.GenerateToken;
import com.BDD.util.TestUtility;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.typesafe.config.Config;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TerminalDetailsSteps extends Instance {

	Config testConf = ConfigProvider.getConfig();
	DBOperation db = new DBOperation();

	@Given("^I want to retrieve terminal details$")
	public void i_want_to_retrieve_terminal_details() {
		testBase.setAPIEndpoint(Endpoint.GET_TERMINAL_DETAILS);
		testBase.setHeader("Accept", "application/json");
		testBase.setHeader("Content-Type", "application/json");
		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
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
		requestPayload.updateJsonRequest("$.states[0].properties[0].value", testConf.getString("Instance"));
	}

	@Given("^I want to updated request with terminal id from excel sheet$")
	public void i_want_to_updated_request_with_terminal_id_from_excel_sheet(List<String> terminal) throws Throwable {

		Map<String, String> td = TestUtility.getTestData(terminal.get(0));
		System.out.println(td);
		requestPayload.updateJsonRequest("terminalid", terminal.get(0));
		requestPayload.updateJsonRequest("$.states[0].uri", td.get("uri"));
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

		List<String> expectedDevices = testConf.getConfig("terminals").getConfig("devices")
				.getStringList(terminalId.get(0).replace(" ", ""));
		assertThat(devicesInResponse, is(equalTo(expectedDevices)));
	}

	@When("^i want to validate result against database$")
	public void i_want_to_validate_result_against_database(List<String> terminalId) {
		db.getTerminalDetails(terminalId.get(0));

		JsonObject terminal = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals").get(0).getAsJsonObject().getAsJsonArray("devices").get(0)
				.getAsJsonObject();
		assertThat(terminal.getAsJsonObject().get("deviceId").getAsString(),
				is(equalTo(db.getTerminalDetails(terminalId.get(0)))));

	}

}
