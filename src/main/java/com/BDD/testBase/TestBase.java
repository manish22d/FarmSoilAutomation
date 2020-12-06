package com.BDD.testBase;

import java.io.InputStream;
import java.util.Properties;

import com.BDD.httpMethods.BaseClass;
import com.BDD.httpMethods.HttpOperations;

public class TestBase extends HttpOperations {
	BaseClass baseClass = new BaseClass();

	public TestBase() {
		try {
			property = new Properties();
			InputStream is = this.getClass().getClassLoader().getResourceAsStream("Configuration.properties");
			property.load(is);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
