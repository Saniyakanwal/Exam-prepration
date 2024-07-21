/*//Step 00                  Hello World
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
console.log(animal);*/
function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll(["Azan"]);
