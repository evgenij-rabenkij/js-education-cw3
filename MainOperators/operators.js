"use strict";

//Postfix and prefix forms
let a = 1, b = 1;
let c = ++a;//increment before assignment
console.log(a);//2
console.log(c);//2
let d = b++; //increment after assignment
console.log(b);//2
console.log(d);//1

//Assignment result
let a1 = 2;
let x = 1 + (a1 *= 2);//a1 * 2, then added to 1
console.log(a1);//4
console.log(x);//5