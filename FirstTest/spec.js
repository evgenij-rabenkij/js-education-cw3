import {YandexMainPage} from "./PageObjects/YandexMainPage.js";
import {YandexLocationPage} from "./PageObjects/YandexLocationPage.js";
import {MoreBar} from "./PageObjects/MoreBar.js";

describe('First test', function() {

    browser.ignoreSynchronization = true;

    const yandexMainPage  = new YandexMainPage();
    const yandexLocationPage = new YandexLocationPage();
    const moreBar = new MoreBar();

    const url = "https://yandex.by/";

    it('First test', async function() {
        await browser.get(url);
        
        await yandexMainPage.goToLocationPage();
        await yandexLocationPage.setNewLocation("London");
        await yandexMainPage.expandMoreBar();
        const moreBarContentLondon =  await moreBar.moreBarElements.getText();
        
        await yandexMainPage.goToLocationPage();
        await  yandexLocationPage.setNewLocation("Paris");
        await  yandexMainPage.expandMoreBar();
        const moreBarContentParis =  await moreBar.moreBarElements.getText();
        
        expect(moreBarContentLondon).toEqual(moreBarContentParis);
    });
});