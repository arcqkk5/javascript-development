// JS falsy values:
// 0, ' ', undefined, null, NaN

//Falsy
console.log(Boolean(0));
console.log(Boolean(' '));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//Truthy
console.log(Boolean(32));
console.log(Boolean('hello'));
console.log(Boolean([1, 3, 4]));
console.log(Boolean({}));
console.log(Boolean(3.5));

/******************************
 *****************************/

const age = 0;
if (age) {
  console.log('The person was born');
} else {
  console.log('The person was not born yet');
}

