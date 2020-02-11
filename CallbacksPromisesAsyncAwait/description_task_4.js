"use strict";

function consoleOutput(string){
    console.log(string);
}

class NotNumberSecondsError{
    name = "Not number value for seconds";
    message = "Seconds value must have type of number"
}

//4
async function waitTime_Async_Await(seconds){
    let promise =  new Promise((resolve, reject) => {
        setTimeout(function(){
            if(typeof(seconds) === "boolean" || isNaN(+seconds)){
                reject(new NotNumberSecondsError());
            }else{
                resolve(`${seconds} seconds passed.`);
            }
        }, seconds * 1000)
    });

    let result = await promise;
    consoleOutput("Await attached");
    return result;
}

waitTime_Async_Await(5).then(consoleOutput, error => consoleOutput(error.message));//////Await attached 1 seconds passed.
waitTime_Async_Await(4).then(consoleOutput, error => consoleOutput(error.message));//////Await attached 2 seconds passed.
waitTime_Async_Await(1).then(consoleOutput, error => consoleOutput(error.message));//////Await attached 3 seconds passed.
waitTime_Async_Await(3).then(consoleOutput, error => consoleOutput(error.message));//////Await attached 4 seconds passed.
waitTime_Async_Await(2).then(consoleOutput, error => consoleOutput(error.message));//////Await attached 5 seconds passed.