'use strict';

//if(string with zero)
if ("0") {
    alert( 'Привет' );//Привет//string "0" is not empty, so it converts to true
}

//Name of JavaScript
let answer = prompt("Какое «официальное» название JavaScript?", "");
if(answer == "ECMAScript"){
    alert("Верно!");
} else{
    alert("«Не знаете? ECMAScript!");
}

//Show the sign of the number
let num = prompt("Введите число", 0);
if(num > 0){
    alert("1");
}else if(num<0){
    alert("-1");
}else{
    alert("0");
}

//Rewrite 'if' to '?'
let result = (a + b <4) ? "Мало" : "Много";

//Rewrite 'if...else' to '?'
let message = (login == "Сотрудник") ? "Привет" :
(login == "Директор") ? "Здравствуйте":
(login == "") ? "Нет логина":
"";