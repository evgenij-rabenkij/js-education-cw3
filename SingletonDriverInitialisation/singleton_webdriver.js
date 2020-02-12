const {Builder} = require('selenium-webdriver');

function getInstanceOfWebdriver(browserName){
    let instance;
    return (function constructorOfSingletone(){
        if (instance) {
            return instance;
        }else{
            instance = new Builder().forBrowser(browserName).build();
            return instance;
        }
    })();
}

module.exports = getInstanceOfWebdriver;