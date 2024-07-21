//Step 00                  Hello World
let message = "Hello World";
console.log(message)
//---------------------------------------------------------------------------------//

//Step 00a         JSON Object
let Data = {
    "name": "saniya kanwal",
    "age":19,
    "city":"karachi",
}
console.log(Data);
//JSON Array
let fruits =["apple","mango","grapes"];
console.log(fruits);
//Accessing JSON Data
let Data1 = {"studentname":"saniya kanwal","teachername":"sir Hamza alvi"}
console.log(Data1.teachername);
//--------------------------------------------------------------------------------//

//Step00b              Syntax Error
 lett color = "black"
 console.log(color);
//------------------------------------------------------------------------------//

//Step00c              Type Error
let shape = "circle"
console.logger(shape);
//-----------------------------------------------------------------------------//

//Step00d               Assiginbility Error
let animal = "cat";
animal = 22
console.log(animal);
//---------------------------------------------------------------------------//

//Step01              Strong Typing
let name:string  = "kanwal";
name = "muniza"
let num:Number = 22
num = 23
console.log(name)
console.log(num)
//------------------------------------------------------------------------//

//Step02           Const let
function f(input: boolean) {
  let a = 100;
  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
}

if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope

const num1 = 33
const num2 = 23
num2 = 22   //Error because const not reassigned

let a = "we"
a = "you" // Don`t show error because let reassigned variable 

