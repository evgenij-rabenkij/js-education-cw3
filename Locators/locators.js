"use strict";

require('chromedriver');

async function findElement(locator){
    let element =  await webdriver.findElement(locator);
    return element;
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

async function findElementInvoke(){
    await findElement(By.xpath('//input[@id="orb-search-q"]')).then(el => el.sendKeys("Search Field with XPath", Key.RETURN));//Search field with XPath
    await bbcRefresh();
    await findElement(By.css('input#orb-search-q')).then(el => el.sendKeys("Search Field with CSS", Key.RETURN));//Search field with CSS
    await bbcRefresh();
    await findElement(By.xpath('//a[@class="block-link__overlay-link"]')).then(el => el.click());//Main news block with XPath
    await bbcRefresh();
    await findElement(By.css('a.block-link__overlay-link')).then(el => el.click());//Main news block with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="orb-nav-sport"]/a')).then(el => el.click());//Sport button with XPath
    await bbcRefresh();
    await findElement(By.css('li.orb-nav-sport>a')).then(el => el.click());//Sport button with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="media-list__item media-list__item--2"]/div/a[@rev="news|overlay"]')).then(el => el.click());//Middle secondary news block with XPath
    await bbcRefresh();
    await findElement(By.css('section.module.module--news.module--collapse-images > div > ul > li.media-list__item.media-list__item--2 > div > a')).then(el => el.click());//Middle secondary news block with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="orb-nav-newsdotcom"]/a')).then(el => el.click());//News button with XPath
    await bbcRefresh();
    await findElement(By.css('li.orb-nav-newsdotcom>a')).then(el => el.click());//News button with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="orb-nav-reeldotcom"]/a')).then(el => el.click());//Reel button with XPath
    await bbcRefresh();
    await findElement(By.css('li.orb-nav-reeldotcom>a')).then(el => el.click());//Reel button with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="orb-nav-traveldotcom"]/a')).then(el => el.click());//Travel button with XPath
    await bbcRefresh();
    await findElement(By.css('li.orb-nav-traveldotcom>a')).then(el => el.click());//Travel button with CSS
    await bbcRefresh();
    await findElement(By.xpath('//li[@class="orb-nav-culture"]/a')).then(el => el.click());//Culture button with XPath
    await bbcRefresh();
    await findElement(By.css('li.orb-nav-culture>a')).then(el => el.click());//culture button with CSS
    await bbcRefresh();
    await webdriver.quit();
}

findElementInvoke();