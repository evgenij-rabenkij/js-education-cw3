import {TestSteps} from "./test_steps";

describe('First test', function() {
    browser.ignoreSynchronization = true;

    const url = "https://yandex.by/";

    const steps = new TestSteps();

    it('First test', async function() {
        await steps.GoToURL(url);
        
        await steps.GoToLocationPage();
        await steps.SetNewLocation("London");
        await steps.ExpandMoreBar();
        const moreBarContentLondon =  await steps.GetMoreBarContent();
        
        await steps.GoToLocationPage();
        await steps.SetNewLocation("Paris");
        await steps.ExpandMoreBar();
        const moreBarContentParis =  await steps.GetMoreBarContent();

        expect(moreBarContentLondon).toEqual(moreBarContentParis);
    });
});