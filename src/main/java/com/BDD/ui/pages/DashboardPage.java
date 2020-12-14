package com.BDD.ui.pages;

import org.openqa.selenium.support.PageFactory;

import com.BDD.testBase.BaseUI;

/**
 * Page Class for Dashboard page
 * 
 * @author Manish
 *
 */
public class DashboardPage extends BaseUI {

	public DashboardPage() {
		PageFactory.initElements(driver, this);
	}

	public void getSubDevices(String string) {

	}
}
