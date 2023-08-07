"use strict";
const user = {
    firstName: "Gustavo",
    age: 39,
};
console.log(user);
function userInput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput("Apple", "Avocado");
console.log(combineName);
let productPrice;
let productSize;
productPrice = 30;
productSize = "S";
const employee1 = {
    firstName: "Gustavo",
    age: 31,
    id: 221,
    role: "frontend",
};
console.log(employee1);
// Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
// Day 3 - Exercise 2
let pie;
pie = "blueberry";
console.log(`I like to eat ${pie}-flavored pie.`);
// Day 3 - Exercise 3
let isDouglas = true;
console.log(`${isDouglas ? "Oh, Hi Douglas" : "Who are you?"}`);
// Day 3 - Exercise 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber,
];
members[0] = 12345;
console.log(members);
