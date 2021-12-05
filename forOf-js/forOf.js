'use strict';

//for of

const arr1 = [1, 3, 5, 7, 9];

for (const index of arr1) {
  console.log(index);
}

for (const iterator of arr1.entries()) {
  console.log(iterator[0]);
  console.log(iterator[1]);
}

console.log(arr1.entries());

for (const [index, iterator] of object) {
  console.log(`${index + 1} , ${iterator}`);
}
