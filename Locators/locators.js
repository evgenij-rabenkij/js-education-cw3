"use strict";

require('chromedriver');

async function findOneElement(locator){
    let element =  await webdriver.findElement(locator);
    return element;
}

async function findArrayElements(locator){
    let elements =  await webdriver.findElements(locator);
    return elements;
}

async function bbcRefresh(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(async function(){
            await webdriver.get('https://www.bbc.com');
            resolve("Refreshed");
        }, 5000);
    });
    await promise;
}

const {Builder, By, Key, until} = require('selenium-webdriver');
let webdriver =  new Builder().forBrowser("chrome").build();
webdriver.manage().window().maximize();
webdriver.get('https://www.bbc.com');

async function findElementsInvoke(){
    await findOneElement(By.xpath('//input[@id="orb-search-q"]')).then(el => el.sendKeys("Search Field with XPath", Key.RETURN));//Search field with XPath
    await bbcRefresh();
    await findOneElement(By.css('input#orb-search-q')).then(el => el.sendKeys("Search Field with CSS", Key.RETURN));//Search field with CSS
    await bbcRefresh();
    await findOneElement(By.xpath('//a[@class="block-link__overlay-link"]')).then(el => el.click());//Main news block with XPath
    await bbcRefresh();
    await findOneElement(By.css('a.block-link__overlay-link')).then(el => el.click());//Main news block with CSS
    await bbcRefresh();
    await findOneElement(By.xpath('//li[@class="orb-nav-sport"]/a')).then(el => el.click());//Sport button with XPath
    await bbcRefresh();
    await findOneElement(By.css('li.orb-nav-sport>a')).then(el => el.click());//Sport button with CSS
    await bbcRefresh();
    await findOneElement(By.xpath('//li[@class="media-list__item media-list__item--2"]/div/a[@rev="news|overlay"]')).then(el => el.click());//Middle secondary news block with XPath
    await bbcRefresh();
    await findOneElement(By.css('section.module.module--news.module--collapse-images > div > ul > li.media-list__item.media-list__item--2 > div > a')).then(el => el.click());//Middle secondary news block with CSS
    await bbcRefresh();
    
    //Get array of webelements with XPath
    await findArrayElements(By.xpath('//div[@id="orb-nav-links"]/ul/li[ contains(@class,"news") or contains(@class, "reel") or contains(@class, "travel") or contains(@class, "culture") ]'))
    .then(elems => console.log(elems));//Array(4) [WebElement, WebElement, WebElement, WebElement]
    await bbcRefresh();
    //Get array of webelements with Css
    await findArrayElements(By.css('div#orb-nav-links>ul>li[class*="e"][class*="c"]:not([class*=i]):not([class*=h])'))
    .then(elems => console.log(elems));//Array(4) [WebElement, WebElement, WebElement, WebElement]
    await bbcRefresh();

    await webdriver.quit();
}

findElementsInvoke();