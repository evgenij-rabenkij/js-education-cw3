"use strict";
require('chromedriver');
require('geckodriver');
require('iedriver');

const {Builder} = require('selenium-webdriver');

async function goToBBC(browserName){
    let webdriver = require("./webdriver_as_singleton.js");
    webdriver = await new Builder().forBrowser(browserName).build();
    await webdriver.get('https://www.bbc.com');
}

  
goToBBC("chrome");

goToBBC("firefox");

goToBBC("ie");




