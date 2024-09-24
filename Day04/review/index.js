// 1. [10,20,30,40,50]을 30이하 이면 100더하기, 아니면 200더하기
// 2. ["americano", "latte", "vanilla", "mocha", "mint", "tea"]
//   -1. 5글자 이하이면 대문자화, 아니면 '☕'로 바꾸기

const arr = [10,20,30,40,50];
const plus = arr.map((x) => x >= 30 ? x + 100 : x + 200);

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
const upper = coffee.map((x) =>  x.length <= 5 ? x.toUpperCase() : "☕");

console.log(plus);
console.log(upper);

const add = (x, y) => x + y;
const sub = (x, y) => x - y;