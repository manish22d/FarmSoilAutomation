package com.BDD.testBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import com.BDD.httpMethods.BaseClass;
import com.BDD.httpMethods.HttpOperations;

public class TestBase extends HttpOperations{
	BaseClass baseClass = new BaseClass();

	public TestBase() {
		
		try {
			property = new Properties();
			FileInputStream inputStream = new FileInputStream(
					System.getProperty("user.dir") + "/src/main/resources/Configuration.properties");
			property.load(inputStream);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
