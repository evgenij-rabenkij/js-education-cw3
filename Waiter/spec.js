describe('Custom Waiters Test', function() {
    
    let urlBBC = "https://www.bbc.com/";
    let homeButton = element(by.xpath("//div[@class = 'orb-nav-section orb-nav-blocks']/a"));
    let hiddenMusicButton = element(by.xpath("//div[@id='orb-nav-links']/descendant::li[contains(@class, 'orb-nav-music')]"));
    let notPresentedElement1 = element(by.xpath("//div[@id='not-present-id']"));
    let notPresentedElement2 = element(by.xpath("//a[@class='not-class-id']"));
    let error;

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
    
    it('HomeButton should displayed', async function() {//pass within ~2sec
        console.log("HomeButton isDisplayedWait test")
        await isDisplayedWait(homeButton, 2, 8);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(2);
    });

    it('MusicButton shouldn`t displayed', async function() {//pass within ~8sec
        console.log("\nMusicButton isDisplayedWait test");
        await isDisplayedWait(hiddenMusicButton, 5, 8).catch((err) => {error = err;});
        expect([error.name, error.message]).toEqual(["NotDisplayedElementError", "Such element doesn`t displays."]);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(8);
    });

    it('NotPresentedElement1 shouldn`t displayed', async function() {//pass within ~8sec
        console.log("\nNotPresentedElement1 isDisplayedWait test");
        await isDisplayedWait(notPresentedElement1, 2, 8).catch((err) => {error = err;});
        expect([error.name, error.message]).toEqual(["NotDisplayedElementError", "Such element doesn`t displays."]);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(8);
    });

    it('NotPresentedElement2 shouldn`t displayed', async function() {//pass within ~7sec
        console.log("\nNotPresentedElement2 isDisplayedWait test");
        await isDisplayedWait(notPresentedElement2, 5, 7).catch((err) => {error = err;});
        expect([error.name, error.message]).toEqual(["NotDisplayedElementError", "Such element doesn`t displays."]);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(7);
    });

    it('HomeButton should be present', async function() {//pass within ~3sec
        console.log("\nHomeButton isPresentWait test");
        await isPresentWait(homeButton, 3, 8);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(3);
    });

    it('MusicButton should be present', async function() {//pass within ~3sec
        console.log("\nMusicButton isPresentWait test");
        await isPresentWait(hiddenMusicButton, 3, 8);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(3);
    });

    it('NotPresentedElement1 shouldn`t be present', async function() {//pass within ~8sec
        console.log("\nNotPresentedElement1 isPresentWait test");
        await isPresentWait(notPresentedElement1, 5, 8).catch((err) => {error = err;});
        expect([error.name, error.message]).toEqual(["NotPresentElementError", "Such element doesn`t presents."]);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(8);
    });
    
    it('NotPresentedElement2 shouldn`t be present', async function() {//pass within ~7sec
        console.log("\nNotPresentedElement2 isPresentWait test");
        await isPresentWait(notPresentedElement2, 4, 7).catch((err) => {error = err;});
        expect([error.name, error.message]).toEqual(["NotPresentElementError", "Such element doesn`t presents."]);
        expect(Math.floor((new Date() - date) / 1000)).toEqual(7);
    });
});