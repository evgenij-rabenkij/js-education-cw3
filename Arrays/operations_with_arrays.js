"use strict";

//1
let styles = ["Джаз", "Блюз"];
alert(styles);

//2
styles.push("Рок-н-ролл");
alert(styles);

//3
styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert(styles);

//4
alert(styles.shift());
alert(styles);

//5
styles.unshift("Рэп", "Регги");
alert(styles);