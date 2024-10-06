// Cách 1
const obj1 = {}; 
const obj2 = {
    name: 'T3H',
    address: 'Hà Nội'
}
// Cách 2
const obj3 = new Object();
const obj4 = new Object({
    name: 'T3H',
    address: 'Hà Nội'
})

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

const a = 'name';
const obj5 = {
    name: 'T3H',
    1: 'Số một',
    'Tên': 'Trung tâm T3H',
}

for(let a in obj5){
    console.log(a);
    console.log(obj5[a]);
    console.log('---');
}

// console.log(obj5);

// obj5.name = 'Trung tâm T3H';
// obj5.address = 'Hà Nội';

// delete obj5['Tên'];

// console.log(obj5);

// let c = 10;

// const A = [9];
// A = []
// const B = [9];
// console.log(A==B);
// console.log(A===B);

console.log('----------------------------');
// Tính tổng 2 số truyền vào
function add(a,b){
    let sum = a + b;
    return sum;
}
function subtract(a,b){
    let sub = a-b;
    console.log(sub);
}
// 1. Khai báo 1 function nhận đầu vào là chuỗi name, 
// thực hiện in ra màn hình “Hello world, ” + name.
function logger(name){
    return;
    console.log('Hello world ' + name);
}
logger('Dũng')

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. 
// Đầu ra là kết quả của phép tính (a + b)^2 .
function caculate(a,b){
    return (a+b)**2
}
const number = caculate(2,3);
console.log(caculate(2,3));

let result1 = add(10, 20); // a = 10, b = 20 => sum = 30;
console.log(result1);
subtract(10, 4) // a = 10, b = 4