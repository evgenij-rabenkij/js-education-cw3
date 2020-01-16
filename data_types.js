//1. Addition of various types
console.log(true + "string");//truestring
console.log("string1" + "string2");//string1string2
console.log("string" + 10);//string10
console.log(10 + "string");//10string
console.log(10 + true);//11

//2. Multiplication of various types
console.log(true * "string");//NaN
console.log("string1" * "string2");//NaN
console.log("string" * 10);//NaN
console.log(10 * "string");//NaN
console.log(10 * true);//10

//3. Division of various types
console.log(true / "string");//NaN
console.log("string1" / "string2");//NaN
console.log("string" / 10);//NaN
console.log(10 / "string");//NaN
console.log(10 / true);//10

//4. Subtraction of various types
console.log(true - "string");//NaN
console.log("string1" - "string2");//NaN
console.log("string" - 10);//NaN
console.log(10 - "string");//NaN
console.log(10 - true);//9

//5. Explicit conversion
console.log(Boolean("string"));//true
console.log(String("string"));//string
console.log(String(10));//10
console.log(Number("string"));//NaN
console.log(Number(true));//1