// Importing Big.js from a CDN for browser compatibility
// @ts-ignore
import Big from "https://cdn.skypack.dev/big.js";

let firstName: string = "angela";
let age: number | null = null;
let balance = new Big(1000.5);
let isActive: boolean = true;

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
age = 39;
balance = balance.plus(250);

function printAll(): void {
  console.log("Name:", firstName);
  console.log("Age:", age);
  console.log("Balance:", balance.toString());
  console.log("Active:", isActive);
}

printAll();


// Symbols: A type that always creates a unique value, even if the description is the same. They are often used as unique keys in objects to avoid name collisions.
const str1: string = "Maria";
const str2: string = "Maria";

console.log(str1 === str2); //true

const sym1: symbol = Symbol("Maria");
const sym2: symbol = Symbol("Maria");
const sym3 = sym1;

console.log(sym1 === sym2); //false
console.log(sym1 === sym3); //true