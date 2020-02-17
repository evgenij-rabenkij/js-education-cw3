const isPresentWait =  require("../IsPresentWaiter/IsPresentWait.js");

class YandexMainPage{
    constructor(){
    this.locationButton =  element(by.css("span.geolink__reg"));
    this.moreButton = element(by.css("a[class*='home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher']"));
    }
    async expandMoreBar(){
        await isPresentWait(this.moreButton, 0.2, 3);
        await this.moreButton.click();
    }
}

module.exports = YandexMainPage;