"use strict";

let arr = ["a","b"];

arr.push(function(){
    alert(this);
})

arr[2]();//a,b,function(){
//             alert(this);
//         }

//function, which contains alert(this), is element of array,
//arr[2]() is a call of function(), which as (this) gets arr and outputs all its elements