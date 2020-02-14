let isPresentWait = require("../IsPresentWaiter/isPresentWait.js")

module.exports = class PageObject {
    constructor(webdriver){
        this.webdriver = webdriver;
    }
    async getElement(locator){
        await isPresentWait(element(locator), 0.5, 3);
        return await element(locator);
    }
    async getElements(locator){
        await isPresentWait(element(locator), 0.5, 3);
        return await this.webdriver.findElements(locator);
    }
}