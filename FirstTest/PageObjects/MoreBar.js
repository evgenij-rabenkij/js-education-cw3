let PageObject = require("./PageObject.js")

module.exports =class MoreBar extends PageObject{
    moreBarElements;
    async findMoreBarElements(){
        this.moreBarElements = await this.getElements(By.xpath("//*[contains(@class, 'home-tabs__more-item') and not(contains(@class, 'i-adaptive__1'))]/a"));
    }
}