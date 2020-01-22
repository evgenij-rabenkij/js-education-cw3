 "use strict";

//1
console.log("REVERSE A NUMBER");

function reverseNumber(number){
    number = String(number);
	return number.split("").reverse().join("");
}

console.log(reverseNumber(32243));//34223
console.log(reverseNumber(123456789));//987654321
console.log(reverseNumber(1000));//0001


//2
console.log("IS STRING PALINDROME OR NOT?");

function isPalindrome(string){
    let reverseString = string.split("").reverse().join("");
    return reverseString === string;
}

console.log(isPalindrome("dog"));//false
console.log(isPalindrome("racecar"));//true
console.log(isPalindrome("level"));//true
console.log(isPalindrome("house"));//false


//3
console.log("GENERATING ALL COMBINATIONS OF A STRING");

function generateAllstringCombinations(string){
    const combinations = [];
    let combination = "";
    for(let i = 0; i < string.length; i++){
        combination = string[i];
        combinations.push(combination);
        for(let j = i + 1; j < string.length; j++){
            for(let k = j; k < string.length; k++){
                combination += string[k];
                combinations.push(combination);
            }
            combination = string[i];
        }
    }

    return combinations;
}

console.log(generateAllstringCombinations("1234").join("\n"));//1 12 123 1234 13 134 14 2 23 234 24 3 34 4
console.log(generateAllstringCombinations("dog").join("\n"));//d do dog dg o og g

//4
console.log("PUT LETTERS IN ALPHABETICAL ORDER");

function putLettersInAlphabeticalOrder(string){
    string = String(string)
    const lettersArray = string.split("");
    let helper;
    for(let i = 0; i < lettersArray.length; i++){
        for(let j = i + 1; j < lettersArray.length; j++){
            if(lettersArray[i] > lettersArray[j]){
                helper = lettersArray[i];
                lettersArray[i] = lettersArray[j];
                lettersArray[j] = helper;
            }
        }
    }
    return lettersArray.join("");
}

console.log(putLettersInAlphabeticalOrder("webmaster"));//abeemrstw
console.log(putLettersInAlphabeticalOrder("cdefabcdfe"));//abccddeeff


//5
console.log("CONVERTING THE FIRST LETTER OF EACH WORD OF THE STRING IN UPPER CASE");

function convertFirstWordLetterInUpperCase(string){
    let stringToReturn = string[0].toUpperCase();

    for(let i=0; i < string.length; i++){
        if(i === string.length - 1) break;
        if(string[i] === " "){
            stringToReturn += string[i + 1].toUpperCase();
        }else{
            stringToReturn += string[i + 1];
        }
    }
    return stringToReturn;
}

console.log(convertFirstWordLetterInUpperCase("the quick brown fox"));//The Quick Brown Fox
console.log(convertFirstWordLetterInUpperCase(" one   two "));// One   Two 
console.log(convertFirstWordLetterInUpperCase(" x y z k"));// X Y Z K