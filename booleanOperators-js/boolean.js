//boolean operators
// && - and
// || - or
// !  - not


//and
console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false

//or
console.log(true || true) //true
console.log(true || false) //true
console.log(false || false) //false

//not
console.log(!true) //false
console.log(!false) //true


//if else if-else
// if() {

// } if else () {

// } else {

// }

//switch
let color = 'green';
switch(color) {
  case 'green':
    console.log('go')
    break;
  case 'yellow':
    console.log('Get ready!')
    break;
  case 'red':
    console.log('Stop')
    break
  default:
    console.log('default')
}