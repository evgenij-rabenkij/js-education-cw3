"use strict";

let user = {
    firstName : "Igor",
    lastName : "Igorov",
    age : 25,
    accountSum : 1500,
    takeOffSum(sum) {
        this.accountSum  -= sum;
    },
    putOnSum(sum){
        this.accountSum += sum;
    },
    get fullInfo(){
        return `User ${this.firstName} ${this.lastName}, age ${this.age}.`;
    }
}

module.exports = user;

