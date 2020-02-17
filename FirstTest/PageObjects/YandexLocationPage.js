const isPresentWait = require("../IsPresentWaiter/IsPresentWait.js");

class YandexLocationPage{
    constructor(){
        this.locationInputField = element(by.css("input[class='input__control input__input']"));
        this.firstRelativeLocationBar =  element(by.css("li:first-child"));
    }
    async setNewLocation(location){
        await isPresentWait(this.locationInputField, 0.2, 3);
        await this.locationInputField.clear(location);
        await this.locationInputField.sendKeys(location);
        await isPresentWait(this.firstRelativeLocationBar, 0.6, 3);
        await this.firstRelativeLocationBar.click();
    }
}

module.exports = YandexLocationPage;