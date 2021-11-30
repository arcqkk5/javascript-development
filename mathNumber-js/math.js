const first = 50;
const second = 10;
let result;

//simple math operations
result = first + second;
result = first - second;
result = first/second;
result = first*second;
result = first%second;

// math object
result = Math.PI;
result = Math.round(3.18);
result = Math.ceil(3.3); //4
result = Math.floor(3.9); //3
result = Math.sqrt(9); //3
result = Math.abs(-7); //7
result = Math.pow(2, 3); //8
result = Math.min(3, 19, 0, 17); //0
result = Math.max(3, 19, 0, 17); //19
result = Math.random() * 100; // от 0 до 100


console.log(result)