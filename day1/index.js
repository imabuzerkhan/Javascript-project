//! parseint in js
// ** paresint and parsefloat are function . it change the string into the number


//! problem one
let string = "42"
console.log(parseInt(string))

// ! problem 2
let string1 = "45.7"
const value = parseInt(string1);
console.log(value)


// ! problem 3 
console.log(parseInt("45", 10))

// * parseint me koi string value ko integer me change me change kar deta hai aage point h ya kuch usse matlab nhi hota usko. ue basically string ko no me change karta hai .




// ! parsefloat in js
// ? problem no 3 with parsefloat

let value1 = "56.89"
const string2 = parseFloat(value1)
console.log(string2);

//** ye bhi wahi kam karta hai jo jo parse int karta bas ita fark hai kii isme float value ;lelta hai.


// ? some ther problem.
console.log(parseInt("&234"))
console.log(parseInt("+234"))
console.log(parseInt("!234"))
console.log(parseInt("_234"))
console.log(parseInt("-234"))

// ! NAN means not a number 