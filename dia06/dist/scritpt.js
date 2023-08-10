"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log("Hi");
    }
}
class Clients extends Person {
    balance() {
        console.log("Your balance is $100");
    }
}
let client1 = new Clients("Gustavo", "De Paula", 40);
console.log(client1);
//# sourceMappingURL=scritpt.js.map