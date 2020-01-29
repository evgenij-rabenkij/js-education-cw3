"use strict";

function consoleOutput(string){
    console.log(string);
}

//2
function numberIncrease(number, delta, callback){
    setTimeout(function(){
        number += delta;
        callback(number);
    }, 5000);
}

numberIncrease(10, 5, function(number) {
    consoleOutput(`Increased number: ${number}`);
})