// Apple, 3, true
let item: [string, number, boolean] = ["Apple", 3, true];
console.log(item);

// const admin = 1;
// const ready = 2;
// const backup = 3;

enum Role {
  admin = 1,
  ready = 2,
  backup = 3,
}

const user = {
  firstName: "Gustavo",
  age: 39,
  role: Role.backup,
};

console.log(user);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 8));

function result(price: number) {
  console.log("the result is " + price);
}

console.log(result(add(6, 3)));

const userNew: {
  firstName: string;
  age: number;
  lastName: string;
} = {
  firstName: "Gustavo",
  age: 39,
  lastName: "s",
};

userNew.lastName = "de Paula";

let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = "apple";

if (itemInput === "string") {
  itemName = itemInput;
}
