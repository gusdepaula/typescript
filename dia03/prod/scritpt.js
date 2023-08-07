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
