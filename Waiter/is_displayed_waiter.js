"use strict";

let NotDisplayedElementError = require("./not_displayed_element_error.js")

async function isDisplayedWait(element, timeOut, maxTimeOut){
    await new Promise((resolve, reject) => {
        setInterval(async function(){
            try{
                if(await element.isDisplayed()){
                    resolve();
                    clearInterval(this);
                }
            }catch(err){}
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    try{
                        if(await  element.isDisplayed()){
                            resolve();
                            clearInterval(this);
                        }
                    }catch(err){}
                    reject(new NotDisplayedElementError("Such element doesn`t displays."));
                    clearInterval(this);
                }, maxTimeOut * 1000);
            }
        }, timeOut * 1000);
    });     
}

module.exports = isDisplayedWait;