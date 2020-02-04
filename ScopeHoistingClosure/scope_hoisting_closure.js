"use strict";

//1
console.log("Are the counters independent?");
function makeCounter(){
    let count = 0;

    return function() {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());//0
console.log(counter1());//1

console.log(counter2());//0
console.log(counter2());//1
//functions counter and counter2 are created by different makeCounter() calls

//2
console.log("Counter object");
function Counter(){
    let count = 0;

    this.up = function(){
        return ++count;
    };
    this.down = function(){
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up());//1
console.log(counter.up());//2
console.log(counter.down());//1
//both functions operate with the same variable count in the same LexicalEnvironment

//3
console.log("Function in if");
let phrase = "Hello";

if(true){
    let user = "Jonh";
    function sayHi(){
        console.log(phrase + user);
    }
}

//sayHi();//if "use strict" : ReferenceError: sayHi is not defined(because it doesn`t exist outside of if{})

//4
console.log("Amount using closures");

function sum(a){
    return function(b){
        return a + b;
    }
}

console.log(sum(3)(2));//5
console.log(sum(1)(2));//3

//5
console.log("Function filtering");

function inBetween(a, b){
    return function(element){
        return (element >= a && element <= b);
    }
}

function inArray(arr){
    return function(element){
        return arr.includes(element);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//6
console.log("Sort by field");

function byField(field){
    return function (obj1, obj2){
        return obj1[field] > obj2[field] ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

users.sort(byField('name'));
for(let user of users){
    console.log(user);//name: "Ann", age: 19, surname: "Hathaway"; 
}///////////////////////name: "John", age: 20, surname: "Johnson";
////////////////////////name: "Pete", age: 18, surname: "Peterson"
users.sort(byField('age'));
for(let user of users){
    console.log(user);//name: "Pete", age: 18, surname: "Peterson"
}///////////////////////name: "Ann", age: 19, surname: "Hathaway"
////////////////////////name: "John", age: 20, surname: "Johnson"

//7
console.log("Function army");

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // функция shooter
            console.log( j ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
  
    return shooters;
}
  
let army = makeArmy();
  
for(let i = 0; i < 10; i++){
    army[i]();//0 1 2 3 4 5 6 7 8 9
}

//Description task
console.log("Encapsulation implementation");

function idContainer() {
    this.id = "DefaultID";
    Object.defineProperty(idContainer, "id",{
        get: function(){
            return  this.id;
        },
        set: function(value){
            this.id = value;
        }
    });
};

let container = new idContainer();

console.log(container.id);//DefaultID
container.id = "NewID"
console.log(container.id);//NewID


//Second implementation (through closure)
function passwordStorage(){
    let password = "default_password";
    this.password = function (newPassword){
        if(!arguments.length){
            return password;
        }
        password = newPassword;
    }
}

let storage = new passwordStorage();
console.log(storage.password());//default_password
storage.password("another_password");
console.log(storage.password());//another_password


