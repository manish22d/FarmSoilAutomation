package com.BDD.ui.pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.BDD.Constant.Constants;
import com.BDD.testBase.BaseUI;

public class TerminalPage extends BaseUI {

	@FindBy(xpath = "//*[@class='search-results']//span")
	List<WebElement> terminals;

	@FindBy(xpath = "//*[@id=\"'accordion-content-devices'\"]/app-terminal-device-supply-status-root/table/tbody")
	List<WebElement> deviceList;

	@FindBy(id = "accordion-content-0")
	WebElement terminalInfoSection;

	@FindBy(id = "'accordion-title-devices'")
	WebElement deviceListSection;

	public TerminalPage() {
		PageFactory.initElements(driver, this);
	}

	/**
	 * perform click on request terminal id
	 * 
	 * @param terminalId
	 */
	public void clickOnTerminal(String terminalId) {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.visibilityOfAllElements(terminals));
		terminals.stream().forEach(terminal -> System.out.println(terminal.getText()));
		WebElement terminalID = terminals.stream().filter(terminal -> terminal.getText().equals(terminalId)).findFirst()
				.get();
		Actions act = new Actions(driver);
		act.moveToElement(terminalID).click().build().perform();
	}

	/**
	 * check if any device is avialable for given terminal id
	 * 
	 * @return boolean
	 */
	public boolean isDevicesDisplayed() {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.visibilityOf(terminalInfoSection));
		return deviceListSection.isDisplayed();
	}

	/**
	 * return list of devices under a terminal
	 * 
	 * @return
	 */
	public List<String> getListOfDevices() {
		List<String> devices = new ArrayList<String>();
		deviceListSection.click();
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.visibilityOf(terminalInfoSection));
		deviceList.stream().forEach(device -> devices.add(device.findElement(By.xpath("./tr[1]/td[1]")).getText()));
		return devices;
	}

	/**
	 * returns list of sub-devices under requested device id
	 * 
	 * @param deviceId
	 * @return
	 */
	public List<String> getSubDevices(String deviceId) {
		List<String> subDevices = new ArrayList<String>();
		WebElement subDeviceEle = deviceList.stream()
				.filter(device -> device.findElement(By.xpath("./tr[1]/td[1]")).getText().contains(deviceId))
				.findFirst().get();
		subDeviceEle.click();
		subDeviceEle.findElements(By.xpath(".//table/tbody/tr/td[1]")).stream()
				.forEach(subDevice -> subDevices.add(subDevice.getText()));
		return subDevices;
	}

	/**
	 * returns number of sub devices available under given device id
	 * 
	 * @param deviceId
	 * @return
	 */
	public int getNumberOfSubDevices(String deviceId) {
		return Integer.parseInt(deviceList.stream()
				.filter(device -> device.findElement(By.xpath("./tr[1]/td[1]")).getText().contains(deviceId))
				.findFirst().get().findElement(By.xpath("./tr[1]/td[3]/span")).getText().split("/")[1]);
	}

}
