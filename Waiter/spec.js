describe('Custom Waiters Test', function() {
    
    let urlBBC = "https://www.bbc.com/";
    let homeButton = element(by.xpath("//div[@class = 'orb-nav-section orb-nav-blocks']/a"));
    let hiddenMusicButton = element(by.xpath("//div[@id='orb-nav-links']/descendant::li[contains(@class, 'orb-nav-music')]"));
    browser.ignoreSynchronization = true;
    browser.get(urlBBC);
    
    let isDisplayedWait = require("./is_displayed_waiter.js");
    let isPresentWait = require("./is_present_waiter.js");

    let date;
    beforeEach(function() {
        date = new Date();
    });
    afterEach(function() {
        console.log(new Date() - date);
    })
    
    it('HomeButton should displayed', async function() {
        console.log("First test")
        expect(await isDisplayedWait(homeButton, 2, 8).then()).toEqual(true);//pass within ~2sec
    });

    it('MusicButton shouldn`t displayed', async function() {
        console.log("\nSecond test");
        expect(await isDisplayedWait(hiddenMusicButton, 5, 8).then()).toEqual(false);//pass within ~8sec
    });

    it('HomeButton should be present', async function() {
        console.log("\nThird test");
        expect(await isPresentWait(homeButton, 3, 8).then()).toEqual(true);//pass within ~3sec
    });

    it('MusicButton should be present', async function() {
        console.log("\nFourth test");
        expect(await isPresentWait(hiddenMusicButton, 5, 8).then()).toEqual(true);//pass within ~5sec
    });
});