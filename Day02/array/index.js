// 기본 타입: String Number Boolean Null Undefined
// 참조 타입: Array

// Array(배열): []
// 시작은 0번째부터
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기[플랫, 화이트, 위트]
// 치즈메뉴 고르기[슈레드, 모짜렐라, 아메리칸치즈]
// 소스메뉴 고르기[머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키메뉴 고르기[화이트, 초콜릿, 아몬드]
// 음료메뉴 고르기[콜라, 제로콜라, 스프라이트, 커피]
// 최종메뉴는 플랫-모짜렐라-소금-아몬드쿠키-콜라

const sub1 = ["플랫", "화이트", "위트"]
const sub2 = ["슈레드", "모짜렐라", "아메리칸치즈"];
const sub3 = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const sub4 = ["화이트", "초콜릿", "아몬드"]
const sub5 = ["콜라", "제로콜라", "스프라이트", "커피"];

const menu1 = Number(prompt(`빵메뉴 고르기 [${sub1}]`));
const menu2 = Number(prompt(`치즈메뉴 고르기 [${sub2}]`));
const menu3 = Number(prompt(`소스메뉴 고르기 [${sub3}]`));
const menu4 = Number(prompt(`쿠키메뉴 고르기 [${sub4}]`));
const menu5 = Number(prompt(`음료메뉴 고르기 [${sub5}]`));

console.log(`최종메뉴는 ${sub1[menu1]} - ${sub2[menu2]} - ${sub3[menu3]} - ${sub4[menu4]} - ${sub5[menu5]}`)