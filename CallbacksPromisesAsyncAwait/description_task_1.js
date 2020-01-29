"use strict";

function consoleOutput(string){
    console.log(string);
}

//1
async function waitTime(seconds){
    setTimeout( consoleOutput, seconds * 1000, `${seconds} seconds passed.`);
}
waitTime(5);//////1 seconds passed.
waitTime(1);//////2 seconds passed.
waitTime(4);//////3 seconds passed.
waitTime(3);//////4 seconds passed.
waitTime(2);//////5 seconds passed.