import {isPresentWait} from "../IsPresentWaiter/IsPresentWait.js";

export class YandexMainPage{
    constructor(){
    this.locationButton =  element(by.css("span.geolink__reg"));
    this.moreButton = element(by.css("a[class*='home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher']"));
    }
    async goToLocationPage(){
        await isPresentWait(this.locationButton, 0.2, 3);
        await this.locationButton.click();
    }
    async expandMoreBar(){
        await isPresentWait(this.moreButton, 0.2, 3);
        await this.moreButton.click();
    }
}