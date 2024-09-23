// 유저에게 비밀번호 설정을 물어보고,
// 비밀번호가 it,IT를 포함하면 비밀번호 설정완료 아니면 비밀번호 설정 오류
// const password = prompt("비밀번호 입력");
// const hasit = password.includes("IT") || password.includes("it");
// const msg = hasit ? "비밀번호 설정완료" : "비밀번호 설정오류";
// console.log(msg);


// 1.유저에게 좋아하는 음식을 입력 받고, 그 음식을 5번 출력하는 프로그램
// 2.유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수번 만큼 출력하는 프로그램
// ex) 떡볶이 5 -> 떡볶이 떡볶이 떡볶이 떡볶이 떡볶이
// 3.유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화 해서 출력

// const food = prompt("좋아하는 음식");
// alert(food.repeat(5));

// const favnum = prompt("좋아하는 음식과 횟수");
// const favnumsplit = favnum.split(" ");
// alert(favnumsplit[0].repeat(Number(favnumsplit[1])));

// const eng = prompt("알파벳 단어 입력");
// const is6under = eng.length < 6 ? eng.toLowerCase() : eng.toUpperCase();
// alert(is6under);

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`

// alert(news.split(" "));


// 1. 유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자이면 소문자로
//  ex) happy -> HAPPY, SAD -> sad

//2. 유저에게 비밀번호 설정을 물어보고
//  -1. 길이가 8~20가 아니면 비밀번호 길이 오류! length
//  -2. 시작이 it, IT로 시작안하면 비밀번호 시작은 it, IT로 시작해야함 startwith
//  -3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야 함 &&
//  위에 조건이 모두 통과되면 비밀번호 설정완료!

const alpha = prompt("단어 입력");
const UPperalpha = alpha == alpha.toUpperCase() ? alpha.toLowerCase() : alpha.toUpperCase();
alert(UPperalpha);

const password = prompt("비밀번호 입력");
const passerror = password.length >= 8 && password.length <= 20;
const passinclude = password.startsWith("IT") || password.startsWith("it");
const spechr = password.includes("&") || password.includes("#") || password.includes("@") || password.includes("!");

if(!passerror){
    alert("비밀번호 길이 오류");
}else if(!passinclude){
    alert("비밀번호 시작은 it, IT로 시작해야함");
}else if(!spechr){
    alert("비밀번호에 반드시 특수문자 넣어야함");
}else{
    alert("비밀번호 설정 완료");
}