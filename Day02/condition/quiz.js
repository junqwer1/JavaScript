// CGV 프로그램

// 1.영화 고르기 - ["베테랑2", "에일리언", "사랑의하츄핑"]
// 2.좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
// 3.팝콘 고르기 - 일반[6000],  캬라멜[6500], 치즈[6500], 반반[7000]
// 4.음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5.나이 입력 - 13세 이하면 30% 할인 60세 이상 20% 할인[영화만]

// 콘솔 - 영화,좌석,팝콘,음료 총 금액: ~~~입니다.

const movie = {
    names:["베테랑2", "에일리언", "사랑의하츄핑"],
    seats:[
        { name: "Standard", price: 10000},
        { name: "Couple", price: 20000},
        { name: "Premium", price: 15000},
        { name: "Economy", price: 8000}
    ]
}

const shop = {
    popcorn:[
        { name: "일반 팝콘", price: 6000},
        { name: "캬라멜 팝콘", price: 6500},
        { name: "치즈 팝콘", price: 6500},
        { name: "반반 팝콘", price: 7000}
    ],
    beverage:[
        { name: "탄산", price: 2000},
        { name: "에이드", price: 3000},
        { name: "커피", price: 3000}
    ]
}

const moviechoose = Number(prompt(`${movie.names[0].name} ${movie.names[1].name} ${movie.names[2].name}`));
const seatschoose = Number(prompt(`${movie.seats[0].name} ${movie.seats[1].name} ${movie.seats[2].name} ${movie.seats[3].name}`));
const popcornchoose = Number(prompt(`${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name}`));
const beveragechoose = Number(prompt(`${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name}`));
const age = Number(prompt("나이 입력"));

const msg = `${movie.names[moviechoose]} ${movie.seats[seatschoose].name} ${shop.popcorn[popcornchoose].name} ${shop.beverage[beveragechoose].name}`

if(age <= 13){
    const total = movie.seats[seatschoose].price * 0.7 + shop.popcorn[popcornchoose].price + shop.beverage[beveragechoose].price;
    console.log(`${msg} 총 금액: ${total}`);
}else if(age >= 60){
    const total = movie.seats[seatschoose].price * 0.8 + shop.popcorn[popcornchoose].price + shop.beverage[beveragechoose].price;
    console.log(`${msg} 총 금액: ${total}`);
}else{
    const total = movie.seats[seatschoose].price * 1 + shop.popcorn[popcornchoose].price + shop.beverage[beveragechoose].price;
    console.log(`${msg} 총 금액: ${total}`);
}
