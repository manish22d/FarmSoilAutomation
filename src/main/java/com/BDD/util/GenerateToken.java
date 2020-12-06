package com.BDD.util;

import org.springframework.beans.factory.annotation.Configurable;

import com.BDD.testBase.TestBase;

@Configurable
public class GenerateToken {

	public static String getAuthToken() {
		TestBase tb = new TestBase();
		tb.setAPIEndpoint("");
//		tb.getResource();
		return tb.getResponseString();
	}
}
