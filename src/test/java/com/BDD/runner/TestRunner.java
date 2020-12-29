package com.BDD.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.BDD.util.TestUtility;
import com.vimalselvam.cucumber.listener.ExtentProperties;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * cucumber runner class
 * 
 * @author Manish
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//BDD//tests", glue = "com.BDD.testSteps", plugin = {
		"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:", "html:output/html-report" }, monochrome = true)

public class TestRunner extends Instance {

	@BeforeClass
	public static void setup() {
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath("src/test/resources/reports/report" + TestUtility.getDate() + ".html");
	}

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src//main//resources//extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 10");
		Reporter.setTestRunnerOutput("Sample test runner output message");

//		driver.close();
//		driver.quit();
	}
}
