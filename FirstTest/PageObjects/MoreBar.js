class MoreBar{
    constructor(){
        this.moreBarElements = element.all(by.css("div[class*='home-tabs__more-item']>a:not([data-id = 'afisha'])"));
    }
}

module.exports = MoreBar;