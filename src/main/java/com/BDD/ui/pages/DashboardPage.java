package com.BDD.ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.BDD.Constant.Constants;
import com.BDD.testBase.BaseUI;

/**
 * Page Class for Dashboard page
 * 
 * @author Manish
 *
 */
public class DashboardPage extends BaseUI {
	
	@FindBy(xpath="//*[@id='app-switcher']/following-sibling::nav/ul[1]/li/a")
	WebElement terminal;

	public DashboardPage() {
		PageFactory.initElements(driver, this);
	}

	public TerminalPage navigateToTerminal() {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.elementToBeClickable(terminal));
		terminal.click();
		 return new TerminalPage();
	}
	
}
