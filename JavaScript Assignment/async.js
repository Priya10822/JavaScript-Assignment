//async--return promise
//await--control back to the js code( asynchronously handle)

async function user() {
  console.log("Inside user function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;
}

console.log("Before calling user");
let a = user();
console.log("After calling user");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this js file");
