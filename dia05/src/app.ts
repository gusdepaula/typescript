class Users {
  name: string;
  balance: number;

  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }
}

const user1 = new Users("Gustavo", 10);
const user2 = new Users("De Paula", 2);

console.log(user1);
console.log(user2);
