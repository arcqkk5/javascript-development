//Array

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
color[5] = 'dark blue'
color[10] = 'indigo'
const stringArray = new Array('1', '2', '3');


// Array methods
const numbers = [23, 45, 67, 80]
let result;

//length
result = numbers.length; // 4

//isArray
result = Array.isArray(numbers); // true

//indexOf
result = numbers.indexOf(3) // -1
result = numbers.indexOf(80) // 3

//push and pop
result = numbers.push(7); //5 - length
result = numbers.pop(); //7 - последний удаленный элемент

//shift and unshift
result = numbers.unshift(3); // добавлена тройка в начало и возвращает new length
result = numbers.shift(); // удаляет первый элемент

//splice
result = numbers.splice(0, 1)// 0 - индекс числа, 1 - сколько чисел уберем (в нашем случае убрали 23) вернет удаленное число/массив чисел

//reverse
result = numbers.reverse()

//slice
result = numbers.slice(1, 3) // [45, 67], если делаем с исходным массивом

//concat
result = numbers.concat(result);


console.log(result)