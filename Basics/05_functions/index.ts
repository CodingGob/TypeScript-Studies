let num1: number = 5.2;
let num2: number = 3.3;

function sum(num1: number, num2: number, num3?: number): number { // '?' Makes the argument optional. The first cannot be optional
  if (num3 !== undefined) {
    return num1 + num2 + num3;
  }

  return num1 + num2;
}

console.log(sum(num1, num2));


// Anonymous Function: Similar to lambda function in Java
setTimeout(function() {
  let salary: number = 1000
  console.log(salary);
}, 2000);


// Union types
function showUserRole(role: boolean | string): void {
  if (typeof role === "boolean") { // Narrowing
    console.log("Unauthorized user");
  } else {
    console.log(`User function is: ${role}`);
  }
}

showUserRole(false);
showUserRole("Admin");


// Literal Types
function showDirection(direction: "Left" | "Right" | "Bottom"): void {
  console.log(direction);
  
}

showDirection("Right");