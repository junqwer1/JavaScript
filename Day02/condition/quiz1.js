// 버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500, 2000, 8000, 10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000

// 일반석, 프리미엄석, 넷플석
// +1000, +3000, +4000

// 나이 13세 이하면 20%, 65세 이상 50%, 나머지 100%

const bus = {
  names: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],

  region: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],

  seats: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

// 무슨버스
const namechoose = Number(
  prompt(
    `${bus.names[0].name} ${bus.names[1].name} ${bus.names[2].name} ${bus.names[3].name}`
  )
);
// 어디
const regionchoose = Number(
  prompt(
    `${bus.region[0].name} ${bus.region[1].name} ${bus.region[2].name} ${bus.region[3].name}`
  )
);
// 좌석
const seatschoose = Number(
  prompt(`${bus.seats[0].name} ${bus.seats[1].name} ${bus.seats[2].name}`)
);
// 나이
const age = Number(prompt("나이 입력"));
// 버스 어디 좌석
const msg = `버스종류: ${bus.names[namechoose].name} 버스 행선지: ${bus.region[regionchoose].name} 버스 좌석: ${bus.seats[seatschoose].name}`;
// 가격
const total =
  bus.names[namechoose].price +
  bus.region[regionchoose].price +
  bus.seats[seatschoose].price;

// 나이 13이하
if (age <= 13) {
  console.log(`${msg} 총 금액: ${total*0.8}`);
  //   나이 65이상
} else if (age >= 65) {
  console.log(`${msg} 총 금액: ${total*0.5}`);
  //   일반
} else {
  console.log(`${msg} 총 금액: ${total}`);
}
