//"use strict";

//26
console.log("FIND LONGEST SUBSTRING IN STRING WITHOUT REPEATING CHARACTERS");

function getLongestStringWithNotrepeatingCharacters(string){
    let stringToReturn = "";
    let currentString = "";
    let counter = 0;
    let countKeeper = 0;
    for(let i = 0; i < string.length-1; i++){
        if(string[i] != string[i+1]){
            counter++;
            currentString += string[i];
        }else if (counter > countKeeper){
            stringToReturn = currentString + string[i];
            countKeeper = counter;
            counter = 0;
            currentString = "";
        }else{
            currentString = "";
        }
    }
    if (counter > countKeeper){
        stringToReturn = currentString + string[string.length - 1];
    }
    return stringToReturn;
}

console.log(getLongestStringWithNotrepeatingCharacters("aaaaaadfghjnblll"));//adfghjnbl
console.log(getLongestStringWithNotrepeatingCharacters("aaargddaaadfghjnbl"));//adfghjnbl
console.log(getLongestStringWithNotrepeatingCharacters("adfghhhkjfklndddjnbl"));//hkjfklnd


//27
console.log("ThE LONGEST PALINDROME IN STRING");
function getLongestPalindrome(string){
    let currentSubstring ;
    let palindrome = "";

    for(let i = 0; i< string.length - 1; i++){
        currentSubstring = string[i];
        for(let j = i +1; j < string.length; j++){
            currentSubstring += string[j]
            if(currentSubstring === currentSubstring.split("").reverse().join("") && currentSubstring.length > palindrome.length){
                palindrome = currentSubstring;
            }
        }
        currentSubstring = "";
    }
    return palindrome;
}

console.log(getLongestPalindrome("ruujaleveljkgsl"));//level
console.log(getLongestPalindrome("ruujaleveljkgracecarsl"));//racecar
console.log(getLongestPalindrome("racecarruujaleveljkg"));//racecar

//28
console.log("PASS FUNCTION AS PARAMETR");

function passFunction(passedfunction){
    passedfunction();
}

function functionForPass(){
    console.log("Function for pass");
}

passFunction(functionForPass);//Function for pass


//29
console.log("GET FUNCTION NAME");

function getFunctionName(){
    console.log(arguments.callee.name);
}

getFunctionName();//getFunctionName