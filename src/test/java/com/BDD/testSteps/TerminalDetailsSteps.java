package com.BDD.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.BDD.APIs.GetTerminalDetails;
import com.BDD.Constant.Endpoint;
import com.BDD.Constant.Flatfile;
import com.BDD.runner.Instance;
import com.BDD.util.ConfigProvider;
import com.BDD.util.DBOperation;
import com.BDD.util.GenerateToken;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.typesafe.config.Config;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TerminalDetailsSteps extends Instance {

	public Logger log = Logger.getLogger(TerminalDetailsSteps.class.getClass());
	Config testConf = ConfigProvider.getConfig();
	DBOperation db = new DBOperation();
	GetTerminalDetails terminalDetails = new GetTerminalDetails();

	@Given("^I want to retrieve terminal details$")
	public void i_want_to_retrieve_terminal_details() {
		testBase.initiateTest();
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
		log.info("this is log");
		testBase.initiateTest();
		testBase.setAPIEndpoint(Endpoint.POST_TERMINAL_DETAILS);
		testBase.setHeader("Accept", "application/json");
//		testBase.setHeader("Content-Type", "application/json");
//		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
		requestPayload.setRequestPayload(file.readJson(Flatfile.TERMINAL_REQUEST));
	}

	@Given("^I want to get status of different status codes$")
	public void i_want_to_get_status_of_different_status_codes() {
		testBase.initiateTest();
		testBase.setAPIEndpoint(Endpoint.POST_STATUS_CODES);
		testBase.setHeader("Accept", "application/json");
//		testBase.setHeader("Content-Type", "application/json");
//		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
		requestPayload.setRequestPayload(file.readJson(Flatfile.STATUS_REQUEST));
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
		Map<String, String> td = excelUtility.getTestData(terminal.get(0));

		requestPayload.updateJsonRequest("$.terminalid", terminal.get(0));
		requestPayload.updateJsonRequest("$.states[0].uri", td.get("uri"));
		td.remove("uri");
		requestPayload.deleteNodeInJsonRequest("$.states[0].properties");

		JsonObject request = JsonParser.parseString(requestPayload.getRequestPayload()).getAsJsonObject();
		JsonArray properties = new JsonArray();
		td.entrySet().forEach(property -> {
			JsonObject prop = new JsonObject();
			prop.addProperty("key", property.getKey());
			prop.addProperty("value", property.getValue());
			properties.add(prop);
		});
		request.getAsJsonArray("states").get(0).getAsJsonObject().add("properties", properties);
		System.out.println(request);
		requestPayload.setRequestPayload(request.toString());
		System.out.println(requestPayload.getRequestPayload());
	}

	@Given("^I want to updated request with status codes$")
	public void i_want_to_updated_request_with_status_codes(List<String> statusIdentifier) {
		List<String> listOfCodes = ConfigProvider.getConfig().getConfig("statusCodes")
				.getStringList(statusIdentifier.get(0));
		JsonObject request = new JsonObject();
		JsonArray statusCodes = new JsonArray();
		listOfCodes.forEach(code -> {
			JsonObject status = new JsonObject();
			excelUtility.getStatusDetails(code).entrySet()
					.forEach(entry -> status.addProperty(entry.getKey(), entry.getValue()));
			statusCodes.add(status);
		});
		request.add("statusCodes", statusCodes);
		requestPayload.setRequestPayload(request.toString());
	}

	@Given("^I want to updated request with terminal details from excel sheet$")
	public void i_want_to_updated_request_with_terminal_details_from_excel_sheet(List<String> terminal) {
		Map<String, List<String>> td = excelUtility.getTerminalDetailsData(terminal.get(0));

		System.out.println(terminal.get(0) + " -> " + td.get("deviceId"));
	}

	@When("^i want to post request$")
	public void i_want_to_post_request() {
		testBase.PostRequest(requestPayload.getRequestPayload());
	}

	@Then("^verify all coressponding device id displayed in response$")
	public void verify_all_coressponding_device_id_displayed_in_response(List<String> terminalId) {
		Map<String, List<String>> td = excelUtility.getTerminalDetailsData(terminalId.get(0));
		JsonArray terminalArray = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals");

		List<String> devicesInResponse = new ArrayList<String>();
		terminalArray.get(0).getAsJsonObject().getAsJsonArray("devices")
				.forEach(terminal -> devicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));

//		List<String> expectedDevices = testConf.getConfig("terminals").getConfig("devices")
//				.getStringList(terminalId.get(0).replace(" ", ""));
		List<String> expectedDevices = td.get("deviceId");
		assertThat(devicesInResponse, is(equalTo(expectedDevices)));
	}

	/**
	 * step def to verify sub devices list
	 * 
	 * @param terminalId
	 */
	@Then("^verify all sub-device id displayed in response$")
	public void verify_all_sub_device_id_displayed_in_response(List<String> terminalId) {
		JsonArray devices = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals").get(0).getAsJsonObject().getAsJsonArray("devices");

		testConf = testConf.getConfig("terminals").getConfig("subDevices");

		JsonObject device = new JsonObject();
		JsonObject subDevice = new JsonObject();
		for (int i = 0; i < devices.size(); i++) {
			device = devices.get(i).getAsJsonObject();
			List<String> expectedSubDevices = testConf.getStringList(device.get("deviceId").getAsString());
			JsonArray subDevices = device.getAsJsonArray("subDevices");
			List<String> actualSubDevices = new ArrayList<String>();
			for (int j = 0; j < subDevices.size(); j++) {
				subDevice = subDevices.get(j).getAsJsonObject();
				actualSubDevices.add(subDevice.get("subDeviceId").getAsString());
			}
			assertThat(expectedSubDevices, is(equalTo(actualSubDevices)));
		}

		// another way - Lambda expression and forEach
		devices.forEach(devicee -> {
			List<String> expectedSubDevices = testConf
					.getStringList(devicee.getAsJsonObject().get("deviceId").getAsString().replace(" ", ""));
			List<String> actualSubDevices = new ArrayList<String>();
			devicee.getAsJsonObject().getAsJsonArray("subDevices").forEach(
					subDevice2 -> actualSubDevices.add(subDevice2.getAsJsonObject().get("subDeviceId").getAsString()));
			assertThat(expectedSubDevices, is(equalTo(actualSubDevices)));
		});

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

	@Then("^Verify terminal details got updated$")
	public void verify_terminal_details_got_updated(List<String> terminalId) {
		terminalDetails.submitRequest(terminalId.get(0));

		Map<String, List<String>> excelData = excelUtility.getTerminalDetailsData(terminalId.get(0));
		List<String> expectedDevicesInResponse = excelData.get("Instance_id");

		List<String> actualDevicesInResponse = terminalDetails.getDeviceId();
		assertThat(actualDevicesInResponse, is(equalTo(expectedDevicesInResponse)));

		JsonArray devices = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject()
				.getAsJsonArray("terminals").get(0).getAsJsonObject().getAsJsonArray("devices");
		devices.forEach(device -> {
			String deviceID = device.getAsJsonObject().get("deviceId").getAsString();
			List<String> actualSubDevicesInResponse = terminalDetails.getSubDeviceId(deviceID);
			List<String> expectedSubDevices = new ArrayList<String>();
			for (int i = 0; i < excelData.get("subDevicesId").size(); i++) {
				if (excelData.get("devicesId").get(i).equals(deviceID)) {
					expectedSubDevices = Arrays.asList(excelData.get("subDevicesId").get(i).split("-"));
				}
			}
			assertThat(actualSubDevicesInResponse, is(equalTo(expectedSubDevices)));
		});
	}

}
