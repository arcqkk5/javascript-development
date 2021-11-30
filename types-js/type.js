// let str = 'something'
// console.log(str); // something

// str = 3
// console.log(str); //3

// PRIMITIVE DATA TYPES
//string
const someText = 'Some Text'
console.log(typeof someText);//string

//Number
const someNumber = '11'
console.log(typeof someNumber);//string

someNumber = 11
console.log(someNumber); //number

// boolean
const someBolean = false
console.log(typeof someBolean); //bool

//Null
const someNull = null
console.log(someNull) // object

//Undefined
let someUndefined;
console.log(typeof someUndefined);

//symbol
const someSymbol = Symbol;
console.log(typeof someSymbol); //Symbol


// Reference data types

//Array
const someArray = [1, 2, 3, 5]
console.log(typeof someArray) // object

//Object
const someObject = {
  first: '12',
  second: '28'
}
console.log(typeof someObject) // object

//Function
const someFunction = new Function()
console.log(typeof someFunction) // function

//Data
const someData = new Data();
console.log(typeof someData) // object
