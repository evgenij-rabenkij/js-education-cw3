"use strict";

let YandexMainPage = require("../PageObjects/YandexMainPage.js");
let YandexLocationPage = require("../PageObjects/YandexLocationPage.js");
let MoreBar = require("../PageObjects/MoreBar.js")

let url = "https://yandex.by/";

module.exports = async function getYandexMoreBarContent(webdriver, location){
    await webdriver.get(url);
    await yandexGoToLocationPage(webdriver);
    await setNewLocation(webdriver, location);
    await yandexMainPageMoreBarOpen(webdriver);
    let moreBarElements = await getMoreBarElements(webdriver);
    return await extractContentFromMoreBarElements(moreBarElements);
}

async function yandexGoToLocationPage(webdriver){
    let yandexMainPage =  new YandexMainPage(webdriver);
    await yandexMainPage.findLocationButton();
    await yandexMainPage.locationButton.click();
}

async function setNewLocation(webdriver, location){
    let yandexLocationPage = new YandexLocationPage(webdriver);
    await yandexLocationPage.findLocationInputField();
    await yandexLocationPage.locationInputField.clear();
    await yandexLocationPage.locationInputField.sendKeys(location);
    await yandexLocationPage.findFirstRelativeLocationBar();
    await yandexLocationPage.firstRelativeLocationBar.click();
}

async function yandexMainPageMoreBarOpen(webdriver){
    let yandexLocationPage_NewLocation = new YandexMainPage(webdriver);
    await yandexLocationPage_NewLocation.findMoreButton();
    await yandexLocationPage_NewLocation.moreButton.click();
}

async function getMoreBarElements(webdriver){
    let moreBar = new MoreBar(webdriver);
    await moreBar.findMoreBarElements();
    return moreBar.moreBarElements;
}

async function extractContentFromMoreBarElements(moreBarElements){
    let moreBarContent = [];
    for(let element of moreBarElements){
        moreBarContent.push(await element.getText());
    }
    return moreBarContent;  
}