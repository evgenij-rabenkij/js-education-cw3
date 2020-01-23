"use strict";

//6
console.log("FIND THE LONGEST WORD WITHIN THE STRING");

function findLongestWord(string){
    let longestWord = "";
    let longestWordKeeper = "";
    
    for(let symbol of string){
        if(symbol === " "){
            if(longestWord.length > longestWordKeeper.length){
                longestWordKeeper = longestWord;
            }
            longestWord = "";
        }else if (symbol !== " "){
            longestWord += symbol;
        }
    }
    if(longestWord.length > longestWordKeeper.length){
        return longestWord;
    }
    return longestWordKeeper;
}

console.log(findLongestWord("Web Development Tutorial"));//Development
console.log(findLongestWord("LongestWordinTheBeginning Other Words"));//LongestWordinTheBeginning
console.log(findLongestWord(" LongestWordinTheBeginning Other Words"));//LongestWordinTheBeginning
console.log(findLongestWord("Other Words LongestWordinTheEnd"));//LongestWordinTheEnd
console.log(findLongestWord("Other Words LongestWordinTheEnd "));//LongestWordinTheEnd


//7
console.log("COUNT THENUMBER OF VOWELS WITHIN THE STRING");

function countVowelsNumber(string){
    const vowels = "aeiouy";
    let vowelsNumber = 0;
    string = string.toLowerCase();
    for(let symbol of string)
    {
        if(vowels.indexOf(symbol) !== -1){
            vowelsNumber++;
        }
    }
    return vowelsNumber;
}

console.log(countVowelsNumber("The quick brown fox"));//5
console.log(countVowelsNumber("RaNdOm TeXt WIth dIfferent SYmbols in It"));//11

//8
console.log("CHECK THE NUMBER IS PRIME OR NOT");

function isPrime(number){
    if(number < 0) return false;
    for(let j = 2; j < number; j++){
        if(number % j === 0) return false;
    }
    return true;
}
    
console.log(isPrime(2));//true
console.log(isPrime(17));//true
console.log(isPrime(100));//false
console.log(isPrime(-15));//false

//9
console.log("RETURN THE TYPE OF ARGUMENT");

function getType(argument){
    return typeof(argument);
}

let object = {};
console.log(getType(object));//object
console.log(getType(true));//boolean
function someFunc(){};
console.log(getType(someFunc));//function
console.log(getType(10));//number
console.log(getType("string"));//string
let undef;
console.log(getType(undef));//undefined

//10
console.log("GET INDENTITY MATRIX N*N");

function getIndentityMatrix(n){
    const matrix = [];
    for(let i = 0; i < n; i++){
        const row = [];
        for(let j = 0; j < n; j++){
            row[j] = 0;
        }
        matrix[i] = row;
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                matrix[i][j]= 1;
            }
        }
    }
    return matrix;
}

let n = 5;
let matrix = []; 
matrix = getIndentityMatrix(n);
for(var i = 0; i < n; i++){
    for(var j = 0 ; j < n; j++){
        console.log(matrix[i][j]);
    }
    console.log("/*/");
}
