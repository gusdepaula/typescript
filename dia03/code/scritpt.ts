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

type User = {
  firstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

type employee = User & JobRole;

const employee1: employee = {
  firstName: "Gustavo",
  age: 31,
  id: 221,
  role: "frontend",
};

console.log(employee1);

// Day 3 - Exercise 1

let pi: number = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

// Day 3 - Exercise 2

let pie: string;
pie = "blueberry";

console.log(`I like to eat ${pie}-flavored pie.`);

// Day 3 - Exercise 3

let isDouglas: boolean = true;

console.log(`${isDouglas ? "Oh, Hi Douglas" : "Who are you?"}`);

// Day 3 - Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
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
