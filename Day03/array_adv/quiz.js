// 1. [1,2,3,4,5] -> 두배 해주기
// 2.             -> 홀수면 두배 짝수면 세배
// 3.             -> 3이하면 '체리' 아니면 수박

const arr = [1, 2, 3, 4, 5];
const two = arr.map((x) => {
  return x * 2;
});
const jjakhol = (x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
};

const odd = arr.map(jjakhol);

const barrymelon = (x) => {
  return x <= 3 ? "체리" : "수박";
};

const three = arr.map(barrymelon);

console.log(two);
console.log(odd);
console.log(three);

const fruitArray = [
  "wartermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
// 1. 문자의 길이가 7글자 이상이면 대문자화 시키고 아니면 소문자화 하기
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 '🍒'바꾸기

// const upperlower = (x) => {
//     return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// }

// const seven = arr.map(upperlower);

// const upperlower2 = (x) => {
//     return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// }

// const chara = arr.map(upperlower2);

// const cherry = (x) => {
//     return x.includes("a") ? x.replaceAll("a", "🍒") : x;
// }

// const char = arr.map(cherry);

// console.log(seven);
// console.log(chara);
// console.log(char);

const starbucks = [
  {
    name: "americano",
    price: 4500,
    shots: 2,
    ingredients: ["warter", "beans"],
  },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "latte",
    price: 6000,
    shots: 2,
    ingredients: ["warter", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit","warter", "beans"],
  },
];
// 1번 문제 가을시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
// 2번 문제 두유시즌 이벤트 -> 성분에 두유 강제 추가
// 3번 문제 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고, 샷 하나 더 늘려주셈
// 4번 문제 인플레이션시즌 이벤트 -> 모든 가격 20% 떡상한 가격으로 바꿔주셈

const fallEvent = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

const milkEvent = starbucks.map((x) => {
  x.ingredients.push("두유");
  return x;
});

const iceimEvent = starbucks.map((x) => {
  if(x.name == "americano"){
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  }else{
    return x;
  }
})

const inplaEvent = starbucks.map((x) => {
  x.price = x.price / 1.2;
  return x;
})

console.log(fallEvent);
console.log(milkEvent);
console.log(iceimEvent);
console.log(inplaEvent);