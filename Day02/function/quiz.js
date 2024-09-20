//1. para: x return: hello x님! 
//2. para: x return: ~~핑!
//3. para: x return: ~~이라니 러키비키잖아
//4. 두 숫자를 주면 제곱을 돌려주는 함수
//5. 년도,월,일을 넣으면 오늘은 ~~년도, ~월, ~일
//6. mbti(ei,sn,tf,jp)를 넣으면 외향적/내향,감각/직관적,이성/감성적,계획/즉흥적
//7. zodiac 태어난년도를 넣으면 띠돌려주기

function hello(x){
    return console.log(`hello ${x}님`);
}

function ping(x){
    return console.log(`${x}핑!`);
}

function luck(x){
    return console.log(`${x}이라니 러키비키잖아`);
}

function square(x, y){
    const number = x ** y;
    return console.log(`${number}`);
}

function today(year, mon, day){
    return console.log(`오늘은 ${year}년도, ${mon}월 ${day}일`);
}

function mbti(ei,sn,tf,jp){
    const mbti = {
        e:"외향적",
        i:"내향적",
        n:"직관적",
        s:"감각적",
        t:"이성적",
        f:"감성적",
        j:"계획적",
        p:"즉흥적"
    };

    return console.log(`${mbti[ei]},${mbti[sn]},${mbti[tf]},${mbti[jp]}`);
}

function zodiac(year){
    const target = year % 12;
    const animal = {
        0:"원숭이",
        1:"닭",
        2:"개",
        3:"돼지",
        4:"쥐",
        5:"소",
        6:"호랑이",
        7:"토끼",
        8:"용",
        9:"뱀",
        10:"말",
        11:"양"
    };
    return console.log(`${animal[target]}띠`);
}