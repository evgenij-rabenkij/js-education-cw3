"use strict";

 async function isDisplayedWait(element, timeOut, maxTimeOut){
    return await new Promise((resolve) => {
        setInterval(async function(){
            if(await element.isDisplayed().then().catch((err) => {}) ){
                resolve(true);
                clearInterval(this);
            }
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    resolve(await  element.isDisplayed().then().catch((err) => {resolve(err.message)}));
                }, maxTimeOut * 1000);
                clearInterval(this);
            }
        },  timeOut * 1000);
    });     
}

module.exports = isDisplayedWait;