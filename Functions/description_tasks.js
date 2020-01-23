"use strict";

//1
console.log("ADDING NUMBERS");

function addUpNumbers(a, b){
    return a+b;
}

console.log(addUpNumbers(7, 5));//12

//2
console.log("NAME DETERMINING");

function determineMyName( inputName ){
    const myName = "MyName";
    if(inputName === myName){
        return "Hello " + inputName;
    }else{
        return;
    }
}

console.log(determineMyName("MyName"));// Hello MyName
console.log(determineMyName("NotMyName"));//undefined

//3
console.log("CALCULATING THE TYPE OF ARGUMENT");

function calculateArgumentType(argument){
    console.log(typeof(argument));
}

calculateArgumentType(10);//number
calculateArgumentType("str");//string
calculateArgumentType(true);//boolean

//4
console.log("SELECTING EVEN ELEMENTS");

function selectEvenElements(inputArray){
    const evenElementsArray = [];
    
    for(let number of inputArray){
        if(number % 2 === 0){
            evenElementsArray.push(number);
        }
    }
    return evenElementsArray;
}

console.log(selectEvenElements([0, 2, 5, 1, -3, -4]));//[0, 2, -4]
console.log(selectEvenElements([2, 8, 10, 100, 12]));//[2, 8, 10, 100, 12]
console.log(selectEvenElements([1, 3, 5, 97, 13]));//[]





