package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.entity.mime.Header;

import com.BDD.testBase.TestBase;
import com.BDD.util.ConfigProvider;
import com.BDD.util.GenerateToken;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.Headers;

public class TerminalDetailsSteps {
	public static TestBase testBase;

	@Given("^I want to retrieve terminal details$")
	public void i_want_to_retrieve_terminal_details() {
		testBase = new TestBase();
		testBase.setAPIEndpoint("/xyz/{terminalid}");
		testBase.setHeader("Accept", "application/json");
		testBase.setHeader("Content-Type", "application/json");
		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
	}

	@Given("^I want to request data with terminal id$")
	public void i_want_to_request_data_with_terminal_id(List<String> terminalId) {
		testBase.updatePathParam("terminalid", terminalId.get(0));
	}

	@When("^i request get resource$")
	public void i_request_get_resource() {
		testBase.getResource();
	}

	@Then("^verify all coressponding device id displayed in response$")
	public void verify_all_coressponding_device_id_displayed_in_response(List<String> terminalId) {
		JsonArray terminalArray = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals");

		List<String> devicesInResponse = new ArrayList<String>();
		terminalArray.get(0).getAsJsonObject().getAsJsonArray("devices")
				.forEach(terminal -> devicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));

		List<String> expectedDevices = ConfigProvider.getConfig().getConfig("terminals")
				.getStringList(terminalId.get(0).replace(" ", ""));
		assertThat(devicesInResponse, is(equalTo(expectedDevices)));
	}

}
