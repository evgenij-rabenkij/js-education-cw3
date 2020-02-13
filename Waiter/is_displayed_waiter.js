"use strict";

let NotDisplayedElementError = require("./not_displayed_element_error.js")

async function isDisplayedWait(element, timeOut, maxTimeOut){
    await new Promise((resolve, reject) => {
        setInterval(async function(){
            if(await element.isDisplayed().then().catch((err) => {})){
                resolve();
                clearInterval(this);
            }
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    if(await  element.isDisplayed().then().catch((err) => {})){
                        resolve();
                    }else{
                        reject(new NotDisplayedElementError("Such element doesn`t displays."));
                    }
                }, maxTimeOut * 1000);
                clearInterval(this);
            }
        }, timeOut * 1000);
    });     
}

module.exports = isDisplayedWait;