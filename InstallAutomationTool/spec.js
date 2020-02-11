describe('Protractor Demo App', function() {
    let homeButton = element(by.xpath("//div[@class = 'orb-nav-section orb-nav-blocks']/a"));
    let urlBBC = "https://www.bbc.com/";
    
    browser.ignoreSynchronization = true;
    browser.get(urlBBC);
        
    it('Should be a BBC', function() {
        expect(homeButton.getAttribute("href")).toEqual(urlBBC);
    });
});