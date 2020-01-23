"use strict";

//1
console.log("Hello, object");
let user = {};
user.name = "Jonh";
user.surname = "Smith";
for(let key in user){
    console.log(user[key]);//John Smith
}
user.name = "Pete";
for(let key in user){
    console.log(user[key]);//Pete Smith
}
delete user.name;
for(let key in user){
    console.log(user[key]);//Smith
}

//2
console.log("Check for emptiness");

function isEmpty(obj){
    let result;
    for(let key in obj){
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

//3
console.log("Const objects");
const newUser = {
    name : "John"
};
newUser.name = "Pete";//it works, we cannot change only newUser variable, which contains object reference
console.log(newUser.name);//Pete

//4
console.log("Sum of object properties");

function getPropertiesSum(obj){
    let sum = 0;
    for(let key in obj){
        sum += +obj[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(getPropertiesSum(salaries));//390

let emptySalaries = {}
console.log(getPropertiesSum(emptySalaries));//0

//5
console.log("Multiply all numerical properties by 2");

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "number"){
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
for(let key in menu){
    console.log(menu[key]);
}


