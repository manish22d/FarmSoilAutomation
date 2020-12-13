package com.BDD.testSteps;

import java.util.List;

import com.BDD.runner.Instance;
import com.BDD.ui.pages.DashboardPage;
import com.BDD.ui.pages.LoginPage;
import com.BDD.util.TestUtility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class UITestSteps extends Instance {

	LoginPage loginPage;
	DashboardPage dashboardPage;

	@Given("^I want to retrieve terminal details from UI$")
	public void i_want_to_retrieve_terminal_details_UI() {
		initialization();
		loginPage = new LoginPage();
		dashboardPage = loginPage.performLogin(TestUtility.getConfigProperty("userName"),
				TestUtility.getConfigProperty("password"));
	}
	
	@Then("^verify all coressponding device id displayed correctly in UI$")
	public void verify_all_coressponding_device_id_displayed_correctly_in_UI(List<String> terminalID){
		dashboardPage.getSubDevices(terminalID.get(0));
	}

}
