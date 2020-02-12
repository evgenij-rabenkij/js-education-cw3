describe('Custom Waiters Test', function() {
    
    let urlBBC = "https://www.bbc.com/";
    let homeButton = element(by.xpath("//div[@class = 'orb-nav-section orb-nav-blocks']/a"));
    let hiddenMusicButton = element(by.xpath("//div[@id='orb-nav-links']/descendant::li[contains(@class, 'orb-nav-music')]"));
    let elementWithInvalidPass = element(by.xpath("%%%invalid!!!pass"));
    let unknownElement = element(by.xpath("//div[@id='unknown-id']"));
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
        console.log("HomeButton isDisplayedWait test")
        expect(await isDisplayedWait(homeButton, 2, 8).then()).toEqual(true);//pass within ~2sec
    });

    it('MusicButton shouldn`t displayed', async function() {
        console.log("\nMusicButton isDisplayedWait test");
        expect(await isDisplayedWait(hiddenMusicButton, 5, 8).then()).toEqual(false);//pass within ~8sec
    });

    it('ElementWithInvalidPass shouldn`t displayed, error info "unable to locate"', async function() {
        console.log("\nElementWithInvalidPass isDisplayedWait test");
        expect(await isDisplayedWait(elementWithInvalidPass, 2, 8).then()).toContain("Unable to locate an element with the xpath expression");//pass within ~8sec
    });

    it('UnknownElement shouldn`t displayed, error info "no element found"', async function() {
        console.log("\nUnknownElement isDisplayedWait test");
        expect(await isDisplayedWait(unknownElement, 2, 8).then()).toContain("No element found using locator");//pass within ~8sec
    });

    it('HomeButton should be present', async function() {
        console.log("\nHomeButton isPresentWait test");
        expect(await isPresentWait(homeButton, 3, 8).then()).toEqual(true);//pass within ~3sec
    });

    it('MusicButton should be present', async function() {
        console.log("\nMusicButton isPresentWait test");
        expect(await isPresentWait(hiddenMusicButton, 5, 8).then()).toEqual(true);//pass within ~5sec
    });

    it('ElementWithInvalidPass shouldn`t be present', async function() {
        console.log("\nElementWithInvalidPass isPresentWait test");
        expect(await isPresentWait(elementWithInvalidPass, 5, 8).then()).toEqual(false);//pass within ~8sec
    });

    it('UnknownElement shouldn`t be present', async function() {
        console.log("\nUnknownElement isPresentWait test");
        expect(await isPresentWait(unknownElement, 5, 8).then()).toEqual(false);//pass within ~8sec
    });
});