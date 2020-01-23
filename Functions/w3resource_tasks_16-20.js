"use strict";

//16
console.log("EXTRACT UNIQUE CHARACTERS FROM THE STRING");
function extractUniqueStringCharacters(string){
    let concidenceCounter = 0;
    for(let character of string){
        for(let i = 0; i < string.length; i++){
            if(character === string[i]){
                concidenceCounter++
            }
        }
        if(concidenceCounter > 1){
            for(let i = 0; i < concidenceCounter - 1; i++){
                string = string.replace(character, "");
            }
        }
        concidenceCounter = 0;
    }
    return string;
} 

console.log(extractUniqueStringCharacters("thequickbrownfoxjumpsoverthelazydog"));//qickbwnfxjumpsvrthelazydog


//17
console.log("NUMBER OF OCCURRANCES OF EACH LETTER IN STRING");

function getOccurrancesNumber(string){
    const characters = [];
    for(let character of string){
        if(characters.indexOf(character) === -1){
            characters.push(character);
        }
    }
    const occurNumbers = [];
    let numCounter = 0;
    for(let character of characters){
        for(let i = 0; i < string.length; i++){
            if(character === string[i]){
                numCounter++;
            }
        }
        occurNumbers.push(numCounter);
        numCounter = 0;
    }
    return [characters, occurNumbers]
}

let result = getOccurrancesNumber("The quick brown fox jumps over the lazy dog");
let outputString = "";
for(let i=0; i < result[0].length; i++){
        outputString += (result[0][i] + ": " + result[1][i] + "; ")
    }
console.log(outputString);//T: 1; h: 2; e: 3;  : 8; q: 1; u: 2; i: 1; c: 1; k: 1; 
////////////////////////////b: 1; r: 2; o: 4; w: 1; n: 1; f: 1; x: 1; j: 1; m: 1; 
////////////////////////////p: 1; s: 1; v: 1; t: 1; l: 1; a: 1; z: 1; y: 1; d: 1; g: 1; 


//18
console.log("BINARY SEARCH")

function searchBinary( sortedArray, key){
    let left = 0;
    let right = sortedArray.length;

    while (true)
    {
        let remainder = ((right - left) % 2 ) ? 0.5 : 0;
        let middle = left + ((right - left) / 2 - remainder);

        if (sortedArray[middle] === key){
            return middle;
        }
        if (sortedArray[middle] > key){
            right = middle;
        } else{
            left = middle + 1;
        }
    }
}

console.log(searchBinary([0, 1, 2, 3, 4, 5, 6, 7], 0))//0
console.log(searchBinary([0, 1, 2, 3, 4, 5, 6, 7], 2))//2
console.log(searchBinary([0, 1, 2, 3, 4, 5, 6, 7], 4))//4
console.log(searchBinary([0, 1, 2, 3, 4, 5, 6, 7], 6))//6
console.log(searchBinary([0, 1, 2, 3, 4, 5, 6, 7], 7))//7
console.log(searchBinary([-12, -7, -3, 0, 12, 18, 100], -12))//0

//19
console.log("ARRAY ELEMENTS LARGER THAN");

function getArraysElementsLargerThanNumber(array, number){
    const arrayToReturn = [];
    for(let value of array){
        if(value > number){
            arrayToReturn.push(value);
        }
    }
    return arrayToReturn;
}

console.log(getArraysElementsLargerThanNumber([1, 2, 3, 4, 5, 6], 3));//4, 5, 6
console.log(getArraysElementsLargerThanNumber([10, -2, 13, 18, 20, 6, 8], 13));//18, 20

//20
console.log("GENERATE STRING ID");

function generateID(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for(let i = 0; i < length; i++){
        id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
}

console.log(generateID(10));//l2KGwIL3qN
console.log(generateID(15));//I5EZADEI4PQo4zL