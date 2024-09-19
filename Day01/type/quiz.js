// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 콘솔로 두 수의 합은 ~~입니다.

// const first = Number(prompt("첫번째 숫자 입력"));
// const second = Number(prompt("두번째 숫자 입력"));
// // const sum = Number(first) + Number(second);
// console.log(`두 수의 합은 ${first + second}입니다.`);

// ask : prompt, answer:console
// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
// 4. 출생년도를 물어보고 나이를 나타내기
// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
//      ex) 얼마 환전? 1000000 -> 107451

const recline = Number(prompt("정사각형 한 변의 길이는?"));
const triline = Number(prompt("정삼각형 밑변의 길이는?"));
const triheight = Number(prompt("정삼각형 높이의 길이는?"));
const cirhalf = Number(prompt("원의 반지름 길이는?"));
const birth = Number(prompt("출생년도는?"));
const n = Number(prompt("얼마 환전?"));
const currency = 

console.log(
  `정사각형의 넓이는 ${recline * recline}이고 둘레는 ${recline * 4}이다.`
);
console.log(`정삼각형의 넓이는 ${(triline * triheight) / 2}이다.`);
console.log(
  `원의 넓이는 ${cirhalf * cirhalf * 3.14}이고, 원의 둘레는 ${
    cirhalf * 2 * 3.14
  }이다.`
);
console.log(`나이는 ${2025 - birth}이다.`);
console.log(`${n / 9.312149}엔 입니다`);