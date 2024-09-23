// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
// 2. 어떤 숫자를 넣으면 5의 배수이면 "5의 배수" 아니면 "5의 배수가 아님"을 출력하는 함수
// 3. 어떤 숫자를 넣으면 1 - 일반 팝콘, 2 - 캬라멜 팝콘, 3 - 치즈 팝콘, 그외 없음 돌려주는 함수
// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex) 사탕, 떡볶이, 멜론 -> [사탕, 떡볶이, 멜론]

function holjjak(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

function five(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈 팝콘";
  } else {
    return "없음";
  }
}

function popcorn2(x){
    return `${x} 팝콘`;
}

function array(x, y, z) {
  return [x, y, z];
}

// 어떠한 과일이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수
function fruit(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log(a);

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven(x) {
  return x % 2 == 1;
}
