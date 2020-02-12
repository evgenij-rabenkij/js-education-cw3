"use strict";

 async function isPresentWait(element, timeOut, maxTimeOut){
    return await new Promise((resolve) => {
        setInterval(async function(){
            if(await element.isPresent().then() ){
                resolve(true);
                clearInterval(this);
            }
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    resolve(element.isDisplayed().then());
                }, maxTimeOut * 1000);
                clearInterval(this);
            }
        },  timeOut * 1000);
    });     
}

module.exports = isPresentWait;