package com.BDD.testSteps;

import java.util.List;

import com.BDD.runner.Instance;
import com.BDD.ui.pages.DashboardPage;
import com.BDD.ui.pages.LoginPage;
import com.BDD.ui.pages.TerminalPage;
import com.BDD.util.TestUtility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Test step for UI related test steps
 * 
 * @author Manish
 *
 */
public class UITestSteps extends Instance {

	LoginPage loginPage;
	DashboardPage dashboardPage;
	TerminalPage terminal;

	/**
	 * initial setup of browser, in order to start test
	 */
	@Given("^I want to retrieve terminal details from UI$")
	public void i_want_to_retrieve_terminal_details_UI() {
		if (driver == null) {
			initialization();
			loginPage = new LoginPage();
			dashboardPage = loginPage.performLogin(TestUtility.getConfigProperty("userName"),
					TestUtility.getConfigProperty("password"));
			terminal = dashboardPage.navigateToTerminal();

		}
	}

	@Then("^verify all coressponding device id displayed correctly in UI$")
	public void verify_all_coressponding_device_id_displayed_correctly_in_UI(List<String> terminalID) {
		terminal.clickOnTerminal(terminalID.get(0));
	}

}
