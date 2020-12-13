package com.BDD.ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.BDD.Constant.Constants;
import com.BDD.testBase.BaseUI;

public class LoginPage extends BaseUI {

	@FindBy(id = "gwt-debug-j_username")
	WebElement userID;

	@FindBy(id = "gwt-debug-j_password")
	WebElement password;

	@FindBy(id = "gwt-debug-loginButton")
	WebElement loginBtn;

	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	public DashboardPage performLogin(String userName, String pwd) {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.elementToBeClickable(userID));
		userID.sendKeys(userName);
		password.sendKeys(pwd);
		loginBtn.click();
		return new DashboardPage();
	}
}
