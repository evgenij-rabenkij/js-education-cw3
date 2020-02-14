describe('First test', function() {

    browser.ignoreSynchronization = true;
    let getYandexMoreBarContent = require("./Helper/Helper.js");

    let moreBarContentLondon;
    let moreBarContentParis;

    afterEach(function() {
        console.log(moreBarContentLondon);
        console.log(moreBarContentParis);
    })

    it('First test', async function() {
        moreBarContentLondon = await getYandexMoreBarContent(browser, "London");
        moreBarContentParis = await getYandexMoreBarContent(browser, "Paris");
        expect(moreBarContentLondon).toEqual(moreBarContentParis);
    });
});