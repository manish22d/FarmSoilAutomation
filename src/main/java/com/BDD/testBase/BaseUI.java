package com.BDD.testBase;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.BDD.Constant.Constants;
import com.BDD.listerners.WebEventListener;
import com.BDD.util.TestUtility;
import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

/**
 * This class is used to do intial set up for UI automation
 * 
 * @author Manish
 * 
 */
public class BaseUI {

	public static WebDriver driver;
	public static ChromeOptions chromeOptions;
	public static EventFiringWebDriver e_driver;
	public static ExtentReports extent;
	public static ExtentTest extentTest;
	public static WebEventListener eventListener;
	public static Logger log = Logger.getLogger(BaseUI.class.getClass());

	/**
	 * Call method for intial set-up before UI automation
	 */
	public static void initialization() {
		String broswerName = TestUtility.getConfigProperty("Browser");
		log.info("launching " + broswerName + " browser");
		System.out.println(broswerName);

		if (broswerName.equals("Chrome")) {
			chromeOptions = new ChromeOptions();
			chromeOptions.setExperimentalOption("useAutomationExtension", false);
			chromeOptions.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));

			Map<String, Object> prefs = new HashMap<String, Object>();
			prefs.put("credentials_enable_service", false);
			prefs.put("profile.password_manager_enabled", false);
			chromeOptions.setExperimentalOption("prefs", prefs);
			chromeOptions.setHeadless(false);
//			chromeOptions.addArguments("--window-size=1920,1080");

			System.setProperty("webdriver.chrome.driver", Constants.CHROME_DRIVER_PATH);
			driver = new ChromeDriver(chromeOptions);
		} else if (broswerName.equals("IE")) {
			System.setProperty("webdriver.ie.driver", Constants.INTERNET_EXPLORER_DRIVER_PATH);
			InternetExplorerOptions options = new InternetExplorerOptions().setPageLoadStrategy(PageLoadStrategy.NONE);
			options.ignoreZoomSettings();
			driver = new InternetExplorerDriver(options);
		} else if (broswerName.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver", Constants.FIREFOX_DRIVER_PATH);
			FirefoxOptions options = new FirefoxOptions();
			options.setHeadless(true);
			driver = new FirefoxDriver(options);
		}else if (broswerName.equals("HTMLUnit")) {
			driver = new HtmlUnitDriver(BrowserVersion.INTERNET_EXPLORER);
		} else {
			System.out.println("Path of Driver Executable is not Set for any Browser");
		}

		e_driver = new EventFiringWebDriver(driver);

		eventListener = new WebEventListener();
//		e_driver.register(eventListener);
		driver = e_driver;

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Constants.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.get(TestUtility.getConfigProperty("Url"));
	}
}
