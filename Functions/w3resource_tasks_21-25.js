"use strict";

//21
console.log("GET ALL POSSIBLE SUBSET WITH FIXED LENGTH")

function getCombinations(array, size){
    let results = [];
    let combination;
    for(var j = 0; j < Math.pow(2, array.length); j++){
        combination = [];
        let i = array.length - 1;
        do{
            if( (j & (1 << i)) !== 0){
                combination.push(array[i]);
            } 
        }while(i--);
        if( combination.length === size){
            results.push(combination);
        }
    }
    return results;
}

let res = getCombinations([1, 2, 3], 2);
for(let comb of res){
    console.log(comb)//[2, 1] [3, 1] [3, 2]
}
res = getCombinations([1, 2, 3, 4], 3);
for(let comb of res){
    console.log(comb)//[3, 2, 1] [4, 2, 1] [4, 3, 1] [4, 3, 2]
}


//22
console.log("COUNT THE NUMBER OF OCCURENCES OF THE LETTER WITHIN THE STRING");

function getOccurencesNumber(string, letter){
    let occurNumber = 0;
    for(let character of string){
        if(character === letter){
            occurNumber++;
        }
    }
    return occurNumber;
}

console.log(getOccurencesNumber("w3resource.com", "o" ))//2
console.log(getOccurencesNumber("string with different letters", "i"))//3
console.log(getOccurencesNumber("string with different letters", "e"))//4

//23
console.log("FIND FIRST NOT REPEATED CHARACTER");

function findFirstNotrepeatedCharacter(string){
    let repeatCounter = 0;
    for(let character of string){
        for(let character_ of string){
            if(character === character_){
                repeatCounter++;
            }
        }
        if(repeatCounter === 1){
            return character;
        }
        repeatCounter = 0;
    }
}

console.log(findFirstNotrepeatedCharacter("abacddbec"));//e
console.log(findFirstNotrepeatedCharacter("aaaabnjnj"));//b


//24
console.log("BUBBLE SORT");

function bubbleSort(array){
    let helper;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length ; j++){
            if(array[i] < array[j]){
                helper = array[i];
                array[i] = array[j];
                array[j] = helper;
            }
        }
    }
    return array;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 23, 234, 213]));//546, 345, 234, 213, 122, 23, 12, 4
console.log(bubbleSort([1200, 345, 4, 234, 213, -3]));//1200, 345, 234, 213, 4, -3

//25
console.log("FIND LONGEST COUNTRY NAME");

function findLongestcountryName(namesArray){
    let longestName;
    let lengthKeeper = 0;
    for(let i = 0; i < namesArray.length; i++){
        if(namesArray[i].length > lengthKeeper){
            longestName = namesArray[i];
            lengthKeeper = namesArray[i].length;
        }      
    }
    return longestName;
}

console.log(findLongestcountryName(["Australia", "Germany", "United States of America"]));//United States of America