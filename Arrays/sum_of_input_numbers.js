"use strict";

let numArray=[];

function sumInput(){
    while(true){
        let inputValue = prompt("Enter numbers", "");
        if(inputValue === "" || inputValue === null || !isFinite(inputValue) || inputValue.match(/ /g).length == inputValue.length) break;
        //there are check for empty string, null, not number value and string, which consists only " "
        numArray.push(+inputValue);
    }

    let sum = 0;
    for(let num of numArray){
        sum += num;
    }

    return sum;
}

alert(sumInput());