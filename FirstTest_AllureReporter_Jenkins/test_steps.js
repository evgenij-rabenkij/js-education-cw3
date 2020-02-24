import {YandexMainPage} from "./PageObjects/YandexMainPage.js";
import {YandexLocationPage} from "./PageObjects/YandexLocationPage.js";
import {MoreBar} from "./PageObjects/MoreBar.js";

const yandexMainPage  = new YandexMainPage();
const yandexLocationPage = new YandexLocationPage();
const moreBar = new MoreBar();

export class TestSteps {
    constructor(){
        this.GoToURL = allure.createStep('Go to URL', async (url) => {
            await browser.get(url);
        });
        
        this.GoToLocationPage = allure.createStep('Go to location page', async function() {
            await yandexMainPage.goToLocationPage();
        });
        
        this.SetNewLocation = allure.createStep('Set new location', async (location) => {
            await yandexLocationPage.setNewLocation(location);
        });
        
        this.ExpandMoreBar = allure.createStep('Expand more bar', async function() {
            await yandexMainPage.expandMoreBar();
        });
        
        this.GetMoreBarContent = allure.createStep('Get more bar content', async function() {
            return await moreBar.moreBarElements.getText();
        });
    }
} 