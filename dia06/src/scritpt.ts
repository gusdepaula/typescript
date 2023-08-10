/*class Movies {
  // readonly id: number;
  // name: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _price: number
  ) {
    // this.id = id;
    // this.name = name;
  }
}

let movie1 = new Movies(1, "Dejavu", 20);
movie1.id = 5;
console.log(movie1);
*/

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  get greet() {
    return this.firstName + " " + this.lastName;
  }
}

// Cliente do banco
class Clients extends Person {
  override get greet() {
    return "Dear " + super.greet;
  }
}

// Funcionário do banco
class Staff extends Person {
  override get greet() {
    return "Hi " + super.greet;
  }
}

let client1 = new Clients("Gustavo", "De Paula", 40);
let staff1 = new Staff("Ana", "De Paula", 25);
console.log(client1.greet);
console.log(staff1.greet);
