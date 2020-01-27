"use strict";

let a = {
    x : 1,
    y : 2,
    get sumXY(){
        return this.x + this.y;
    },
    sayName(){
        console.log("Object a");
    }
}

let b = {
    __proto__ : a,
    z : 10,
    sayName(){
        console.log("Object b");
    }
}

a.sayName();
console.log(a.x);//1
console.log(a.y);//2
console.log(a.z);//undefined
console.log(a.sumXY);//3

b.sayName()
console.log(b.x);//1
console.log(b.y);//2
console.log(b.z);//10
console.log(b.sumXY);//3
b.x = 3;
console.log(b.sumXY);//5
console.log(a.sumXY);//3