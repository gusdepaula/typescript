"use strict";
// Apple, 3, true
let item = ["Apple", 3, true];
console.log(item);
// const admin = 1;
// const ready = 2;
// const backup = 3;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["ready"] = 2] = "ready";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: "Gustavo",
    age: 39,
    role: Role.backup,
};
console.log(user);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 8));
function result(price) {
    console.log("the result is " + price);
}
console.log(result(add(6, 3)));
