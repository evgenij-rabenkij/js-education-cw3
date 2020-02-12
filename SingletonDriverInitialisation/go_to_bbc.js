require('chromedriver');
require('geckodriver');
require('iedriver');

let getInstanceOfWebdriver = require("./singleton_webdriver.js");

async function goToBBC(browserName){   
    let webdriver = getInstanceOfWebdriver(browserName);
    await webdriver.get('https://www.bbc.com/');
    await webdriver.quit();
}

goToBBC('ie');
goToBBC('chrome');
goToBBC('firefox');