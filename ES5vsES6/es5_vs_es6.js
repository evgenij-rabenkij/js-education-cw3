"use strict";

//Move from var to let/const

//ES5
var x5 = "first";
function func5(inner) {
    if(inner){
        var x5 = "second";//redefines on undefine in case when if() doesn`t perform
        return x5;
    }
    return x5;
}
console.log(func5(false)); // undefined 
console.log(func5(true)); // second

//ES6
let x6 = "first";
function func6(inner) {
    if(inner){
        let x6 = "second";
        return x6;
    }
    return x6;
}
console.log(func6(false)); // first 
console.log(func6(true)); // second


//Do not need to use IIFE (immediately-invoked function expression),
//{} and let is enough

//ES5
(function(){
    var private_value = "Private value";
})();
//console.log(private_value);//ReferenceError: private_value is not defined

//ES6
{
    let inner = "In";
    console.log(inner);//In
}
//console.log(inner);//ReferenceError: inner is not defined


//Template Literals

//ES5
let word = "word";
let phrase = "phrase";
console.log("text text " + word + " text text " + phrase + " text");//text text word text text phrase text

//ES6
let wordToInsert = "insertedword";
let phraseToInsert = "inserted phrase";
console.log(`text text ${wordToInsert} text text ${phraseToInsert} text`);//text text insertedword text text inserted phrase text


//Multi-line string

//ES6
let html = `
    <div>
        <span>Multi-line string demonstration</span>
    <div>
`;
console.log(html);


//Get elements from array

//ES5
var array_es5 = [1, 2, 3, 4, 5];
var first_es5 = array_es5[0];
var third_es5 = array_es5[2];
console.log(first_es5, third_es5);//1 3 

//ES6
let array_es6 = [1, 2, 3, 4, 5];
let [first_es6,,third_es6] = array_es6;
console.log(first_es5, third_es5);//1 3 


//Values exchange

//ES5
var value1 = 1;
var value2 = 2;
var keeper;
keeper = value1;
value1 = value2;
value2 = keeper;
console.log(value1, value2)//2 1

//ES6
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1


//Destructuring of multiple return values

//ES5
function returnValues_es5() {
    var left=1, right=2, top=3, bottom=4;
    return { left: left, right: right, top: top, bottom: bottom };
}
var data_es5 = returnValues_es5();
var left_es5 = data_es5.left;
var bottom_es5 = data_es5.bottom;
console.log(left_es5, bottom_es5); // 1 4

//ES6
function returnValues_es6() {
    var left=1, right=2, top=3, bottom=4;
    return {left, right, top, bottom};
}
const{left, bottom} = returnValues_es6();
console.log(left, bottom); // 1 4


//Destructuring and parameters mapping

//ES5
var obj_es5 = {
    a : 2,
    b : 3
}
function getSum_es5(object){
    a = object.a;
    b = object.b;
    return a + b;
}
console.log(getSum_es5(obj_es5));//5

//ES6
var obj_es6 = {
    a : 2,
    b : 3
}
function getSum_es6({a, b}){
    return a + b;
}
console.log(getSum_es6(obj_es6));//5


//Deep comparison

function getBook(){
    return {
        mainInfo : { title : "Encyclopedia", author : "Sergey Ivanov"},
        secondaryInfo : { id : 11038836, price : 1600}
    };
}

//ES5
var book = getBook();
var title = book.mainInfo.title;
var author = book.mainInfo.author;
var id = book.secondaryInfo.id;
var price = book.secondaryInfo.price;
console.log(title, author, id, price);//Encyclopedia Sergey Ivanov 11038836 1600

//ES6
const {
    mainInfo : {title : bookTitle, author : bookAuthor},
    secondaryInfo : {id : bookID, price : bookPrice}
} = getBook();
console.log(bookTitle, bookAuthor, bookID, bookPrice);//Encyclopedia Sergey Ivanov 11038836 1600


//Classes

//ES6
class Worker{
    constructor(firstName, lastName, post){
        this.firstName = firstName;
        this.lastName = lastName;
        this.post = post;
    }
    work(){
        console.log(`${this.post} ${this.firstName} ${this.lastName} is working`)
    }
}
const worker = new Worker("Egor", "Egorov", "Assistent");//Assistent Egor Egorov is working
worker.work();


//New key words extends and super

//ES6
class Programmer extends Worker{
    constructor(firstName, lastName, post, project){
        super(firstName, lastName, post);
        this.project = project;
    }
    work(){
        super.work();
        console.log(`under project ${this.project}`);
    }
}
const programmer = new Programmer("Anton", "Antonov", "Programmer", "NEW APP");
programmer.work();//Programmer Anton Antonov is working
////////////////////under project NEW APP


//Fat arrow functions

//ES6
let multiplyArray = someNumbers => {
    let resultOfMultiply = 1;
    for(let num of someNumbers){
        resultOfMultiply *= num;
    }
    return resultOfMultiply;
}
console.log(multiplyArray([1, 2, 3, 4, 5]));//120


//For…of

//ES6
let list = ["item1", "iten2", "item3", "item4", "item5"];
for(let item of list){
    console.log(item);//item1 iten2 item3 item4 item5
}


//Default parametrs

//ES6
function outputCoordinates(x = "Default", y = "Default", z = "Default"){
    console.log("X: " + x);
    console.log("Y: " + y);
    console.log("Z: " + z);
}
outputCoordinates();//Default Default Default
outputCoordinates(1, 2, 3);//1 2 3


//Rest-parametrs

//ES6
function restParametrsDemonstrate(firstParam, ...params){
    console.log("Firs parametr: " + firstParam);
    console.log("The rest of parameters: " + params);
}
restParametrsDemonstrate("one");//one
restParametrsDemonstrate("one", "two");//one two
restParametrsDemonstrate("one", "two", "three");//one two three


//Spread

//ES6
let arr1 = [1, 2, 3];
let arr2 = ["one", "two", "three"];
let arr3 = ["info1", "info2", "info3"];
let arr = [...arr1, ...arr2, ...arr3];
for(let item of arr){
    console.log(item);//1 2 3 one two three info1 info2 info3
}


//TimeOuts

//ES6
function printAfterTimeout(string, timeout){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(string);
        }, timeout);
    });
}

printAfterTimeout('Hello ', 2e3).then((result) => {
    console.log(result);
    return printAfterTimeout(result + 'Reader', 2e3);
}).then((result) => {
    console.log(result);
});