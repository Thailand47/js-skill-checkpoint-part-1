// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0].quantity = 200;
// console.log(inventory[0].quantity);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
// console.log(inventory)

let sum0 = inventory[0].price * inventory[0].quantity;
console.log(sum0);

let sum1 = inventory[1].price * inventory[1].quantity;
console.log(sum1);

let sum2 = inventory[2].price * inventory[2].quantity;
console.log(sum2);

let total = sum0 + sum1 + sum2;
console.log(total);