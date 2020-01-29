"use strict";

function consoleOutput(string){
    console.log(string);
}

class NotNumberSecondsError{
    name = "Not number value for seconds";
    message = "Seconds value must have type of number"
}

//3
async function waitTime_Promise(seconds){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(typeof(seconds) === "boolean" || isNaN(+seconds)){
                reject(new NotNumberSecondsError());
            }else{
                resolve(`${seconds} seconds passed.`);
            }
        }, seconds * 1000)
    });
}

waitTime_Promise(5).then(consoleOutput, error => consoleOutput(error.message));//////1 seconds passed.
waitTime_Promise(4).then(consoleOutput, error => consoleOutput(error.message));//////2 seconds passed.
waitTime_Promise(1).then(consoleOutput, error => consoleOutput(error.message));//////3 seconds passed.
waitTime_Promise(3).then(consoleOutput, error => consoleOutput(error.message));//////4 seconds passed.
waitTime_Promise(2).then(consoleOutput, error => consoleOutput(error.message));//////5 seconds passed.
waitTime_Promise("NaN argument").then(consoleOutput, error => consoleOutput(error.message));//Seconds value must have type of number
waitTime_Promise(true).then(consoleOutput, error => consoleOutput(error.message));//Seconds value must have type of number