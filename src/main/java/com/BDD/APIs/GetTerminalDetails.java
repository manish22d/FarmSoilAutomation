package com.BDD.APIs;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

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

	public List<String> getSubDeviceId(String deviceID) {
		JsonArray terminalArray = response.getAsJsonArray("terminals");
		List<String> subDevicesInResponse = new ArrayList<String>();
		JsonArray devices = terminalArray.get(0).getAsJsonObject().getAsJsonArray("devices");
		JsonObject selectedDevice = (JsonObject) StreamSupport.stream(devices.spliterator(), false)
				.filter(device -> device.getAsJsonObject().get("deviceId").getAsString().equals(deviceID)).findFirst()
				.orElse(null);
		JsonArray subdevices = selectedDevice.getAsJsonArray("subDevices");
		if (!subdevices.isJsonNull()) {
			subdevices.forEach(
					terminal -> subDevicesInResponse.add(terminal.getAsJsonObject().get("deviceId").getAsString()));
		}
		return subDevicesInResponse;
	}

}
