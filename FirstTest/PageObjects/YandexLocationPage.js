let PageObject = require("./PageObject.js")

module.exports =class YandexLocationPage extends PageObject{
    locationInputField;
    firstRelativeLocationBar;
    async findLocationInputField(){
        this.locationInputField = await this.getElement(by.xpath("//*[@class='input__control input__input']"));
    }
    async findFirstRelativeLocationBar(){
        this.firstRelativeLocationBar = await this.getElement(by.xpath("//li[1]"));
    }
}