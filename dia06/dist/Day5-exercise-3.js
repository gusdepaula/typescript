"use strict";
class MC {
    greet(event = "party") {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet("show"));
//# sourceMappingURL=Day5-exercise-3.js.map