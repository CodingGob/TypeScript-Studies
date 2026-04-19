// Normal if else with !name
function greet(name?: string | null): void {
  if (!name) {
    name = "friend";
  }

  console.log("Hello, " + name + "!");
}

console.log("Normal if else with !name: ");
greet() // Hello, friend!
greet("") // Hello, friend!
greet(null); // Hello, friend!
greet("Angela"); // Hello, Angela!
console.log("");


// || (falsy check)
function greet1(name?: string | null): void {
	const finalName = name || "friend";
	console.log("Hello, " + finalName + "!");
}

console.log("|| (falsy check): ");
greet1() // Hello, friend!
greet1("") // Hello, friend!
greet1(null); // Hello, friend!
greet1("Angela"); // Hello, Angela!
console.log("");


// ? (optional chaining with nullish coalescing)
function greet2(name?: string | null): void {
	const finalName = !name ? "friend" : name;
  // const finalName = name == null ? "friend" :name; // This is the same as above but more concise 
	console.log("Hello, "+finalName+"!");
}

console.log("? (optional chaining with nullish coalescing): ");
greet2() // Hello, friend!
greet2("") // Hello, friend!
greet2(null); // Hello, friend!
greet2("Angela"); // Hello, Angela!
console.log("");


// ?? (Nullish coalescing — null/undefined only)
function greet3(name?: string | null): void {
	const finalName = name ?? "friend";
	console.log("Hello, " + finalName + "!");
}

console.log("?? (Nullish coalescing — null/undefined only): ");
greet3() // Hello, friend!
greet3("") // Hello, friend!
greet3(null); // Hello, friend!
greet3("Angela"); // Hello, Angela!
console.log("");


// && (Logical AND with short-circuiting)
function greet4 (name?: string | null): void {
  const finalName = name && name; // if name is falsy, finalName will be falsy (null, undefined, empty string), otherwise it will be name
  console.log("Hello, "+ (finalName || "friend") + "!");
}

console.log("&& (Logical AND with short-circuiting): ");
greet4() // Hello, friend!
greet4("") // Hello, friend!
greet4(null); // Hello, friend!
greet4("Angela"); // Hello, Angela!
console.log("");


