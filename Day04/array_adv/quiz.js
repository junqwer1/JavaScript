// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
// 2. [1,2,3,4,5,6,7,8,9,10] 4이상 8이하만 살려줘
/* const fruitArray = [
  "wartermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
*/
// 3. 알파벳 O가 들어있는 애들만 살려줘
// 4. 문자길이가 6글자 이상만 살려줘
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘

// const numberArray = [1,2,3,4,5,6,7,8,9,10];

// const three = numberArray.filter((x) => {
//     return x % 3 == 0;
// })

// const foureight = numberArray.filter((x) => {
//     return 4 <= x && 8 >= x;
// })

// const fruitArray = [
//     "wartermelon",
//     "cherry",
//     "banana",
//     "avocado",
//     "apple",
//     "orange",
//     "pineapple",
//     "strawberry",
// ];

// const o = fruitArray.filter((x) => {
//     return x.includes("o") || x.includes("O");
// });

// const six = fruitArray.filter((x) => {
//     return x.length >= 6;
// });

// // 메소드 체이닝(method chaining)
// const upper = fruitArray.filter((x) => {
//     return x.length % 2 == 0;
// }).map((x) => {
//     return x.toUpperCase();
// });

// console.log(three);
// console.log(foureight);
// console.log(o);
// console.log(six);
// console.log(upper);

// 유저에게 정수 n(maximum), k(배수)를 입력 받으면
// n = 10, k = 3 -> [3, 6, 9]
// n = 15, k = 5 -> [5, 10 ,15]
// 를 도출하는 함수

// const test = (n, k) => {
//     return Array(n).fill(0).map((x, i) => {
//         return i + 1;
//     }).filter((x) => {
//         return x % k == 0;
//     });
// };

// todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"]
// finished = [false, false, true, true]
// newDoTolist = ["점심먹기", "복습하기"];

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true]

// // 함수화 [패턴화]
// const newToDoList = (todolist, finished) => {
//     return todolist.filter((x, i) => {
//         return !finished[i];
//     });
// };

// x기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거
// "oxooxoxxox" [1,2,1,0,1,0]
// "xabcxdefxhig" [0, 3, 3, 3]

// const x = "xabcxdefxhig";
// const arr = x.split("x").map((x) => {
//     x.length;
// });

// const test2 = (word) => { word.split("x").map((x) => x.length) };

// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
// const vowels = ["a", "e", "i", "o", "u"];

// // 모음: a,e,i,o,u는 대문자로 바꾸기
// const upper = fruits.map((x) =>
//   x
//     .split("")
//     .map((x) => (vowels.some((v) => v == x) ? x.toUpperCase() : x))
//     .join("")
// );

// console.log(upper);

// 1 ~ 100 까지 만들고, 369 만들기
// [1,2,"👏"]

// arr[1, 2, 3, ... 100]

// 알고리즘 문제 풀 때
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서
const arr = Array(100)
  .fill(1)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );

console.log(arr);
