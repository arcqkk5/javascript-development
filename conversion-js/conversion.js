//Conversion to string
let x = 111
console.log(x)
console.log(typeof x)
console.log(x.length)

x = String(111);
console.log(x)
console.log(typeof x)
console.log(x.length)

x = String(2 + 2)
console.log(x)
console.log(typeof x)
console.log(x.length)

x = String(true)
console.log(x)
console.log(typeof x)
console.log(x.length)

x = new Date();
console.log(x)
console.log(typeof x) // object

x = String(new Date())
console.log(x)
console.log(typeof x)


x = String(['one', 'two', 'three'])
console.log(x);
console.log(typeof x);

// toString();
x = (35).toString();
console.log(x);
console.log(typeof x);
console.log(x.length);


// conversion to number
let y = '1.92384728'
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));

y = Number('1.92384728')
console.log(y); //1.92384728
console.log(typeof y); //number
console.log(y.toPrecision(3)); //1.92

y = Number(true)
console.log(y);
console.log(typeof y); //1
y = Number(false)
console.log(y);
console.log(typeof y); // 0

y = Number(null);
console.log(y);
console.log(typeof y); //0

y = Number('text')
console.log(y);
console.log(typeof y); // NaN

//parseInt()
y = parseInt('123')
console.log(y);

//parseFloat()
y = parseFloat('1.345678')
console.log(y)


// Неявное приведение
const m = 5;
const n = 3;
const z = m + n;
console.log(z); //8
console.log(typeof z); //number

const k = '5';
const o = '3';
const l = k + o;
console.log(l); //53
console.log(typeof l); //string

const a = k - o;
console.log(a); //2
console.log(typeof a); //number


const d = '5';
const c = 3;
const s = d + c;
console.log(s); //53
console.log(typeof s); //string