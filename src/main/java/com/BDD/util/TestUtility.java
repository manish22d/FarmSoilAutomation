package com.BDD.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.BDD.Constant.Constants;

/**
 * Utility class, methods are accessible directly
 * 
 * @author Manish
 *
 */
public class TestUtility {

	public static Workbook book;
	public static Sheet sheet;
	public static Properties property;
	public static Logger log = Logger.getLogger(TestUtility.class.getClass());

	/**
	 * reads excel sheet and return map form of selected data
	 * 
	 * @param terminalid
	 * @return
	 */
	public static HashMap<String, String> getTestData(String terminalid) {
		FileInputStream file = null;
		try {
			file = new FileInputStream(Constants.TEST_DATA_SHEET_PATH);
			book = WorkbookFactory.create(file);
		} catch (FileNotFoundException e) {
			log.error("excel file was not found at -> " + Constants.TEST_DATA_SHEET_PATH);
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		sheet = book.getSheetAt(0);
		HashMap<String, String> data = new HashMap<String, String>();

		for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
			for (int k = 1; k < sheet.getRow(0).getLastCellNum(); k++) {
				if (sheet.getRow(0).getCell(k).toString().equals(terminalid)
						&& !sheet.getRow(i).getCell(k).getStringCellValue().equals("-")) {
					data.put(sheet.getRow(i).getCell(0).toString(), sheet.getRow(i).getCell(k).toString());
				}
			}
		}
		return data;
	}

	/**
	 * Read excel data for given terminal id
	 * 
	 * @param terminalid
	 * @return
	 */
	public static HashMap<String, List<String>> getTerminalDetailsData(String terminalid) {
		FileInputStream file = null;
		try {
			file = new FileInputStream(Constants.TEST_DATA_SHEET_PATH);
			book = WorkbookFactory.create(file);
		} catch (FileNotFoundException e) {
			log.error("excel file was not found at -> " + Constants.TEST_DATA_SHEET_PATH);
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		sheet = book.getSheetAt(1);
		HashMap<String, List<String>> data = new HashMap<String, List<String>>();
		for (int i = 1; i < sheet.getRow(0).getLastCellNum(); i++) {
			data.put(sheet.getRow(0).getCell(i).toString(), new ArrayList<String>());
		}
		System.out.println("initialisation -> " + data);
		List<String> keys = new ArrayList<String>(data.keySet());

		for (int row = 0; row < sheet.getLastRowNum() + 1; row++) {
			final Integer innerRow = new Integer(row);
			if (sheet.getRow(row).getCell(0).toString().equals(terminalid)) {
				keys.forEach(key -> {
					for (int i = 1; i < sheet.getRow(0).getLastCellNum(); i++) {
						if (sheet.getRow(0).getCell(i).toString().equals(key)
								&& !sheet.getRow(innerRow).getCell(i).toString().equals("-")) {
							String item = sheet.getRow(innerRow).getCell(i).toString();

							List<String> test = new ArrayList<String>();
							test.addAll(data.get(key));
							test.add(item);
							data.put(key, test);
						}
					}
				});
			}
		}
		System.out.println(data);
		return data;
	}

	/**
	 * read config property file return value of given key
	 * 
	 * @param key
	 * @return
	 */
	public static String getConfigProperty(String key) {
		try {
			property = new Properties();
			InputStream is = new FileInputStream(Constants.CONFIG_PROPERTY);
			property.load(is);
		} catch (Exception e) {
			e.printStackTrace();
		}
		String value = (String) property.get(key);
		return value;
	}

	/**
	 * Set date for log4j
	 */
	public static void setDateForLog4j() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("_ddMMyyyy_HHmmss");
		System.setProperty("current_date", dateFormat.format(new Date()));
		PropertyConfigurator.configure("./src/main/resources/log4j.properties");
	}

	/**
	 * method to get date
	 * 
	 * @return
	 */
	public static String getDate() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("_ddMMyyyy_HHmmss");
		return dateFormat.format(new Date());
	}
	
	/**
	 * Take screenshot
	 * @return
	 * @throws IOException
	 */
	public static File takeScreenshotAtEndOfTest(WebDriver driver) throws IOException {
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		String currentDir = System.getProperty("user.dir");
		File screenshot = new File(currentDir + "/Screenshots/" + System.currentTimeMillis() + ".png");
		FileUtils.copyFile(scrFile, screenshot);
		return screenshot;
	}
}
