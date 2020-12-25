package com.BDD.ui.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.BDD.Constant.Constants;
import com.BDD.testBase.BaseUI;

public class TerminalPage extends BaseUI {

	@FindBy(xpath = "//*[@class='search-results']//span")
	List<WebElement> terminals;

	public TerminalPage() {
		PageFactory.initElements(driver, this);
	}

	public void clickOnTerminal(String terminalId) {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.visibilityOfAllElements(terminals));
		terminals.stream().filter(terminal -> terminal.getText().equals(terminalId)).findFirst().get().click();
	}
}
