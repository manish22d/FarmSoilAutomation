package com.BDD.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.PropertyConfigurator;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import com.BDD.Constant.Constants;
import com.BDD.testBase.TestBase;

public class TestUtility extends TestBase {

	public static Workbook book;
	public static Sheet sheet;

	public static HashMap<String, String> getTestData(String terminalid) {
		FileInputStream file = null;
		try {
			file = new FileInputStream(Constants.TEST_DATA_SHEET_PATH);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		try {
			book = WorkbookFactory.create(file);
		} catch (IOException e) {
			e.printStackTrace();
		}

		sheet = book.getSheetAt(0);
		HashMap<String, String> data = new HashMap<String, String>();

		for (int i = 0; i < sheet.getLastRowNum(); i++) {
			for (int k = 1; k < sheet.getRow(0).getLastCellNum(); k++) {
				if (sheet.getRow(0).getCell(k).toString().equals(terminalid))
					data.put(sheet.getRow(i).getCell(0).toString(), sheet.getRow(i).getCell(k).toString());
			}

		}
		return data;
	}

	// Set Date For Log4J.
	public static void setDateForLog4j() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("_ddMMyyyy_HHmmss");
		System.setProperty("current_date", dateFormat.format(new Date()));
		PropertyConfigurator.configure("./src/main/resources/log4j.properties");
	}
}
