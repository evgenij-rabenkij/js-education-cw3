"use strict";

//1
console.log("Get the current date, print to the console");
var currentDate = new Date();
console.log(currentDate);

//2
console.log("Get the day, month and year of the current date and separately output to the console");
console.log(currentDate.getFullYear());//2020
console.log(currentDate.getMonth() + 1);//1
console.log(currentDate.getDate());//23

//3
console.log("Output date in format of dd.mm.yy");

function formatDate(date){
    let day;
    if(date.getDate() < 10){
        day = "0" + date.getDate();
    }else{
        day = date.getDate();
    }
    let month;
    if(date.getMonth() + 1 < 10){
        month = "0" + (date.getMonth() + 1);
    }else{
        month = date.getMonth() + 1;
    }
    let year;
    if(date.getFullYear() % 100 < 10){
        year = "0" + (date.getFullYear() % 100);
    }else{
        year = date.getFullYear() % 100;
    }

    return day + "." + month + "." + year;
}

console.log(formatDate(new Date()));//23.01.20
console.log(formatDate(new Date(10000000000000)));//20.11.86
var d = new Date(2014, 0, 30);
console.log( formatDate(d) ); // 30.01.14