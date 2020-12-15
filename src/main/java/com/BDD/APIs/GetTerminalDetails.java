package com.BDD.APIs;

import java.util.ArrayList;
import java.util.List;

import com.BDD.Constant.Endpoint;
import com.BDD.testBase.TestBase;
import com.BDD.util.GenerateToken;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class GetTerminalDetails {

	JsonObject response;
	TestBase testBase;

	public void submitRequest(String termialID) {
		testBase = new TestBase();
		testBase.initiateTest();
		testBase.setAPIEndpoint(Endpoint.GET_TERMINAL_DETAILS);
		testBase.setHeader("Accept", "application/json");
		testBase.setHeader("Content-Type", "application/json");
		testBase.setHeader("Authorization", GenerateToken.getAuthToken());
		testBase.getResource();
		response = JsonParser.parseString(testBase.getResponseString()).getAsJsonObject();
	}

	public List<String> getDeviceId() {
		JsonArray terminalArray = response.getAsJsonArray("terminals");
		List<String> devicesInResponse = new ArrayList<String>();
		terminalArray.get(0).getAsJsonObject().getAsJsonArray("devices")
				.forEach(terminal -> devicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));
		return devicesInResponse;
	}
	
	public List<String> getSubDeviceId() {
		JsonArray terminalArray = response.getAsJsonArray("terminals");
		List<String> devicesInResponse = new ArrayList<String>();
		terminalArray.get(0).getAsJsonObject().getAsJsonArray("subDevices")
				.forEach(terminal -> devicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));
		return devicesInResponse;
	}

}
