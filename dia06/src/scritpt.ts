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

  greet() {
    console.log("Hi");
  }
}

// Cliente do banco
class Clients extends Person {
  balance() {
    console.log("Your balance is $100");
  }
}

let client1 = new Clients("Gustavo", "De Paula", 40);
console.log(client1);
