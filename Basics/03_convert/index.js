"use strict";
let numbers1 = [1, 2, 4];
numbers1[2] = 3;
console.log(numbers1);
let numbers2 = [10, 20, 30]; // This is another way to declare an array of numbers, not as common as the first one, but it works the same way.
console.log(numbers2);
console.log(numbers2.length);
const name1 = "Mary";
const name2 = "John";
let names = [];
names.push(name1);
names.push(name2);
console.log(names);
let mixed = [1, name1, 2, name2];
console.log(mixed);
