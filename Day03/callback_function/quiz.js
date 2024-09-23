// makeCoffee함수 만들기 [커피 준비 - 커피 완료]
// americano, latte, vanilla 함수 만들어서
// makeCoffee(americano) // 커피 준비 - 아메리카노 - 커피 완료
// makeCoffee(latte) // 커피 준비 - 아메리카노 - 커피 완료
// makeCoffee(vanilla) // 커피 준비 - 아메리카노 - 커피 완료

const makeCoffee = (coffee) => {
    console.log("커피 준비");

    coffee();

    console.log("커피 완료")
}

const americano = () => {
    console.log("에스프레소 준비");
    console.log("물 준비");
    console.log("희석");
}

const latte = () => {
    console.log("에스프레소 준비");
    console.log("우유 준비");
    console.log("곁들");
}

const vanilla = () => {
    console.log("에스프레소 준비");
    console.log("우유 준비");
    console.log("바닐라 시럽 준비");
    console.log("곁들");
}

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(()=>{
    console.log("에스프레소 준비");
    console.log("물 준비");
    console.log("우유 준비");
    console.log("바닐라 시럽 준비");
    console.log("망고 준비");
    console.log("곁들");
})