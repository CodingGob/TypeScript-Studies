"use strict";
let num1 = 5.2;
let num2 = 3.3;
function sum(num1, num2, num3) {
    if (num3 !== undefined) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
console.log(sum(num1, num2));
// Anonymous Function: Similar to lambda function in Java
setTimeout(function () {
    let salary = 1000;
    console.log(salary);
}, 2000);
// Union types
function showUserRole(role) {
    if (typeof role === "boolean") { // Narrowing
        console.log("Unauthorized user");
    }
    else {
        console.log(`User function is: ${role}`);
    }
}
showUserRole(false);
showUserRole("Admin");
// Literal Types
function showDirection(direction) {
    console.log(direction);
}
showDirection("Right");
