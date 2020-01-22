"use strict";

//11
console.log("FIND SECOND LOWEST AND SECOND GREATEST NUMBERS");

function getSecondLowestAndGreatestNumbers(inputArray){
    //let valuesToReturn = [];
    const arrayForSort = [];
    for(let i = 0; i < inputArray.length; i++){//creating new array for changing(sorting)
        arrayForSort[i] = inputArray[i];
    }
    let helper = 0;
    for(let i = 0; i < arrayForSort.length; i++){
        for(let j = i + 1; j < arrayForSort.length; j++){
            if(arrayForSort[i] > arrayForSort[j]){
                helper = arrayForSort[i];
                arrayForSort[i] = arrayForSort[j];
                arrayForSort[j] = helper;
            }
        }
    }
    return [arrayForSort[1], arrayForSort[inputArray.length-2]];
}

console.log(getSecondLowestAndGreatestNumbers([10, 12, 3, 7, 11]));//7, 11
console.log(getSecondLowestAndGreatestNumbers([25, -13, 1, -14, 27, 1]));//-13, 25

//12
console.log("IS THE NUMBER PERFECT?");

function isPerfect(number){
    let divisorsSum = 0;
    for(let i = 1; i < number; i++){
        if(number % i === 0){
            divisorsSum += i;
        }
    }
    return divisorsSum === number && number !== 0;
}

console.log(isPerfect(6));//true
console.log(isPerfect(28));//true
console.log(isPerfect(496));//true
console.log(isPerfect(8128));//true
console.log(isPerfect(0), isPerfect(5), isPerfect(10), isPerfect(1173));//false false false false

//13
console.log("FACTORS OF POSITIVE INTEGER");

function getFactors(number){
    if(number < 0 || number % 1 !== 0) return;
    const factors = [];
    for(let i = 1; i <= number;  i++){
        if(number % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

console.log(getFactors(12));//1, 2, 3, 4, 6, 12
console.log(getFactors(15));//1, 3, 5, 15
console.log(getFactors(16));// 1, 2, 4, 8, 16
console.log(getFactors(17))//1, 17

//14
console.log("AMOUNT TO COINS");

function amountToCoins(amount, coinsfaceValue){
    const coins = [];
    for(let coin of coinsfaceValue){
        while(amount >= coin){
            amount -= coin;
            coins.push(coin);
        }
    }
    return coins;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));//25, 10, 10, 1
console.log(amountToCoins(97, [50, 20, 10, 5, 2, 1]));//50, 20, 20, 5, 2
console.log(amountToCoins(98, [50, 20, 10, 5, 2, 1]));//50, 20, 20, 5, 2, 1

//15
console.log("EXPONENTIATION");

function calculateExponentiation(number, exponent){
    let result = 1;
    for(let i = 1; i <= exponent; i++){
        result *= number;
    }
    return result;
}

console.log(calculateExponentiation(5, 1));//5
console.log(calculateExponentiation(3, 3));//27
console.log(calculateExponentiation(2, 0));//1