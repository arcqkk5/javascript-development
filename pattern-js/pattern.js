'use strict';

//use pattern rest and string in new javascript
const arr = [1, 2, 3];
const arr2 = [1, 3, 4, ...arr];

const [x, y, ...item] = arr;
console.log(x, y, item);

const [z, n, , m, ...item2] = [...arr, ...arr2];
console.log(z, n, m, item2); // 1 2 1 [3, 4, 1, 2, 3]
