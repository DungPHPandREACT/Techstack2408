// Khai báo và khởi tạo
// // Cách 1
// const arr1 = [];
// const arr2 = [1,2,3,4,5];

// // Cách 2
// const arr3 = new Array();
// const arr4 = new Array('a', 'b', 'c', 'd', 'e', 'f');

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);


// // Truy xuất và thay đổi giá trị
// const fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// console.log(fruits[0]);

// fruits[0] = 'Pineapple';
// console.log(fruits);

// console.log(fruits[3]);

// // Duyệt mảng
// console.log("Duyệt mảng theo vòng lặp for bình thường")
// for(let index = 0; index < fruits.length; index++){
//     console.log(fruits[index]);
// }
// console.log("Duyệt mảng theo vòng lặp for of");
// for(let fruit of fruits){
//     console.log(fruit);
// }

// // BT1: Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. 
// const numbers1 = [-10, 7, 3, 20];
// // -In ra phần tử có chỉ số 0 và 3 trong mảng. 
// console.log(numbers1[0]);
// console.log(numbers1[3]);
// // -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. 
// const sum1 = numbers1[1] + numbers1[2];
// console.log(sum1);
// // -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// let temp = numbers1[1];
// numbers1[1] = numbers1[3];
// numbers1[3] = temp;
// console.log(numbers1);


// // BT2: Khai báo 1 mảng gồm các 5 số bất kỳ. 
// const numbers2 = [5,10,15,20,25];
// // -Hãy in ra các số chẵn trong mảng đó. 
// for(let number of numbers2){
//     if(number % 2 === 0){
//         console.log(number);
//     }
// }
// // -Hãy tính tổng các phần tử trong mảng. 
// let sum2 = 0;
// for(let number of numbers2){
//     sum2 = sum2+number;
// }
// // -Hãy tìm phần tử nhỏ nhất trong mảng
// let min = numbers2[0];
// for(let number of numbers2){
//     if(number < min){
//         min = number;
//     }
// }
// console.log(min);


const numbers = [10,20,30,40];
console.log(numbers);
// numbers.push(50,60,70);
// console.log(numbers);
// numbers.unshift(-20, -10, 0);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// Dùng splice để xóa phần tử
// numbers.splice(2, 1);
// console.log(numbers);
// Dùng splice để thêm phần tử
// numbers.splice(2, 0, 25,26,27,28,29);
// console.log(numbers);

// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers3 = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
let min = numbers3[0], max = numbers3[0];
// Tính tổng các phần tử trong mảng.
let sum = 0;
for(let number of numbers3){
    if(number < min){
        min = number;
    }
    if(number > max){
        max = number;
    }
    sum +=number;
}
console.log('min: ', min);
console.log('max: ', max);
console.log('sum: ', sum);
// Tính trung bình cộng các phần tử trong mảng.
const avg = sum / numbers3.length;
console.log('avg: ', avg);
