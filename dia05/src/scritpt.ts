interface Item {
  name: string;
  price: number;

  itemPurchase(message: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  price: 2,
  itemPurchase(message: string) {
    console.log(message + " " + this.name);
  },
};

product1.itemPurchase("You just bouth a");
