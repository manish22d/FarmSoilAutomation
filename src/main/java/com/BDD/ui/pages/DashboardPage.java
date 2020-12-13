package com.BDD.ui.pages;

import org.openqa.selenium.support.PageFactory;

import com.BDD.testBase.BaseUI;

public class DashboardPage extends BaseUI {

	public DashboardPage() {
		PageFactory.initElements(driver, this);
	}

	public void getSubDevices(String string) {
		
	}
}
