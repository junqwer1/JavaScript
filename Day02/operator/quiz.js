// 1. 출생년도를 물어보고 2005년이하면
// 성인입니다. 아니면 미성년자입니다.

const year = Number(prompt("출생년도 입력"));
const who = year <= 2005 ? "성인입니다." : "미성년자입니다.";
console.log(`당신은 ${who}`);

// 2. 놀이기구를 탈려고 키를 물었음
// 150cm이하면 탈 수 없습니다. 아니면 탈 수 있습니다.

const height = Number(prompt("키 입력"));
const ride = height <= 150 ? "탈 수 없습니다." : "탈 수 있습니다.";
console.log(`당신은 ${ride}`);

// 3. 사용자로부터 10000부터 99,999 사이의 정수를 입력받아,
// 각 자리수를 분리하여 출력하는 프로그램을 작성하세요.
// 예를 들어, 입력 값이 12345라면,
// 각 자리수 1만2천3백4십5를 출력해야 합니다.

// const number = Number(prompt("숫자 입력"));
// const mil = number/10000;
// const tho = number/1000;
// const hun = number/100;
// const ten = number/10;
// const one = number/1;
// console.log(`${mil}만${tho}천${hun}백${ten}십${one}`)

// 4. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
// ex) 63 -> 1분 3초, 125 -> 2분 5초

const time = Number(prompt("양의 정수 입력"));
const hour = parseInt(time/3600);
const min = parseInt(time%3600/60);
const sec = time%60;
console.log(`${hour}시 ${min}분 ${sec}초`);