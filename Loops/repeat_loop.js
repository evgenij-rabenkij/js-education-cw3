//Repeat the loop until the input is correct
let inputValue;

do {
  inputValue = prompt("Enter number greater than 100", 0);
} while (inputValue <= 100 && inputValue || isNaN(+inputValue));
//check for <=100, null, epty string and NaN after type conversion