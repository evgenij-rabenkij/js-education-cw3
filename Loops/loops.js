//Last value of the cycle
let i = 3;

while (i) {//while(i!=0) - is the same
  console.log( i-- );//1 - last
}
console.log( "////////" );


//What values will the while loop output?
//1
i = 0;
while (++i < 5) console.log( i );//4, when ++i  - use value after increase
console.log( "////" );
//2
i = 0;
while (i++ < 5) console.log( i );//5, when i++ - use  value before increase
console.log( "////////" );


//What values will the for loop output?
//1
for (let i = 0; i < 5; i++) console.log( i );//0 1 2 3 4
console.log( "////" );
//2
for (let i = 0; i < 5; ++i) console.log( i );//0 1 2 3 4
//the same result// i++ an ++i works the same in this case
console.log( "////////" );


//Print even numbers
for(let i=0; i <= 10; i++){
    if(i%2 === 0) {
        console.log(i);
    }
}
console.log( "////////" );


//Replace for with while
i=0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
}
console.log( "////////" );


//Output prime numbers
function outputPrimeNumbers(n, m){
    next:
    for(i=n; i <= m; i++){
        for(j=2; j < i; j++){
            if(i % j === 0) continue next;
        }
        console.log(i);
    }
}

outputPrimeNumbers(2, 10);




  