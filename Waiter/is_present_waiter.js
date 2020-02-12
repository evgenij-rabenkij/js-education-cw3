"use strict";

 async function isPresentWait(element, timeOut, maxTimeOut){
    return await new Promise((resolve) => {
        setInterval(async function(){
            if(await element.isPresent().then().catch((err) => {})){
                resolve(true);
                clearInterval(this);
            }
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    resolve(await  element.isPresent().then().catch((err) => {resolve(false)}));
                }, maxTimeOut * 1000);
                clearInterval(this);
            }
        },  timeOut * 1000);
    });     
}

module.exports = isPresentWait;