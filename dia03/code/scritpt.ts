type Users = {
  firstName: string;
  age: number;
};
const user: Users = {
  firstName: "Gustavo",
  age: 39,
};

console.log(user);

function userInput(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinePrices = userInput(10, 20);
console.log(combinePrices);

const combineName = userInput("Apple", "Avocado");
console.log(combineName);

let productPrice: 10 | 20 | 30;
let productSize: "S" | "M" | "L ";

productPrice = 30;
productSize = "S";
