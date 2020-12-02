package com.BDD.util;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class ConfigProvider {

	public static Config getConfig() {
		return ConfigFactory.load("config/application.conf");
	}
}
