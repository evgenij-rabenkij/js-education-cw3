import {NotPresentElementError} from "./NotPresentElementError.js";

export async function isPresentWait(element, timeOut, maxTimeOut){
    await new Promise((resolve, reject) => {
        setInterval(async function(){
            if(await element.isPresent()){
                resolve();
                clearInterval(this);
            }
            maxTimeOut -= timeOut;
            if(maxTimeOut <= timeOut){
                setTimeout(async function(){
                    if(await  element.isPresent()){
                        resolve();
                    }else{
                        reject(new NotPresentElementError("Such element doesn`t presents."));
                    }
                }, maxTimeOut * 1000);
                clearInterval(this);
            }
        }, timeOut * 1000);
    });
}