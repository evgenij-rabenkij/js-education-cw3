"use strict";

console.log(5 > 4);//true
console.log("ананас" > "яблоко");//false, a<я
console.log("2" > "12");//true, 2>1
console.log(undefined == null);//true
console.log(undefined === null);//false, strict comparison
console.log(null == "\n0\n");//false, null==undefined only
console.log(null === +"\n0\n");//false, srict comparison