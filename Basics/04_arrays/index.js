"use strict";
// strings
let names = ["Alice", "Bob"];
console.log(names);
// numbers with generics
let ages = [25, 30, 35];
console.log(ages);
// mixed types with union types
let mixed = ["Alice", 25, "Bob", 30];
console.log(mixed);
const users = [
    { id: 1, name: "Dylan" },
    { id: 2, name: "Sarah" },
];
console.log(users);
users.push({ id: 3, name: "John" });
console.log(users);
