"use strict";

class DivideByZeroExeception{
    name = "Attempt to divide by zero";
    message = "To zero can not be divided";
}

function numbersDivide(x, y){
    if( y == 0){
        throw new DivideByZeroExeception();
    }
    return x / y;
}

try{
    console.log(numbersDivide(1, 0));
}catch(exception){
    console.log(exception.message);//To zero can not be divided
}

console.log(numbersDivide(15, 3));//5