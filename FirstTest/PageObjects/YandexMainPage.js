let PageObject = require("./PageObject.js")

module.exports =class YandexMainPage extends PageObject{
    locationButton;
    moreButton;
    async findLocationButton(){
        this.locationButton = await this.getElement(by.xpath("//*[@class='geolink__reg']"));
    }
    async findMoreButton(){
        this.moreButton = await this.getElement(by.xpath("//*[contains(@class, 'home-tabs__more-switcher')]"));
    }
}