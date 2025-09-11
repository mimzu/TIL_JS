// 함수
// 1. 함수 대기 (생성한 상태)
function func1(){
    console.log('반복 실행 내용')
}
// 2. 함수 호출 (생성 밖)
func1();
func1();

//함수의 매개변수 활용
function storyFunc1(day,data='조약돌'){/* 성공 */
    console.log(`매개변수 값 확인 : ${data}`)
    // 헨젤 그레텔 준비
    const person = ['헨젤','그레텔']
    // 조약돌 준비
    // const src = '조약돌'
    // 집 돌아간다 목표
    // 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    // 1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    // 2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    // 3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    alert(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다`)
}
/* storyFunc1(1); // 기본값 사용 시 매개변수 값 전달 안함
storyFunc1(2, '빵부스러기'); // 기본값 사용 시 매개변수 값 전달 안함
storyFunc1(3, '쌀'); // 기본값 사용 시 매개변수 값 전달 안함 */
/* storyFunc1('빵부스러기'); // 기본값 변경 시 매개변수 값 전달함 
storyFunc1('쌀'); // 기본값 변경 시 매개변수 값 전달함 
function storyFunc2(){ //실패
    const person = ['헨젤','그레텔']
    const src = '빵 부스러기'
    alert(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다`)
}
storyFunc2(); */

function coffeeFunc(menu,water,espr=1){
    // 2컵 물을 채운다
    // 1샷 에스프레소를 넣는다
    console.log (`${menu} 레시피`)
    console.log (`${water}컵 물을 채운다`)
    console.log (`${espr}샷 에스프레소를 넣는다`)
}
coffeeFunc('아메리카노',2); /* 기본값 에스프레소 1샷 생략 */
coffeeFunc('에스프레소',0); /* 기본값 에스프레소 1샷 생략 */

/* function cafeOrder (cup){
    const ice = ['차가운','따뜻한']
    const menu = ['카페라떼', '아메리카노', '녹차라떼']
    console.log(`${ice[1]} ${menu[1]} ${cup=2}잔 주문완료되었습니다`)
    console.log(`${ice[0]} ${menu[1]} ${cup=1}잔 주문완료되었습니다`)
    console.log(`${ice[1]} ${menu[2]} ${cup=2}잔 주문완료되었습니다`)
    console.log(`${ice[0]} ${menu[1]} ${cup=1}잔 주문완료되었습니다`)
}
 */
// cafeOrder();
// 키오스크 주문 출력 (배열 활용법)
function kiost_array(hotice,name,num){
    const type = ['따뜻한','차가운']
    const menu = ['카페라떼', '아메리카노', '녹차라떼']
    console.log (`${type[hotice]} ${menu[name]} ${num}잔 주문완료 되었습니다.`)
    // 출력예시 ) 따뜻한 카페라떼 2잔 주문 완료되었습니다
}
kiost_array(0,0,2);
kiost_array(1,1,1);
kiost_array(0,2,2);
kiost_array(1,1,1);

// 키오스크 주문 출력 (객체 활용법)
function kiosk_obj(hotice,name,num=1){
    const coffeeMenu ={
        type:['따듯한','차가운'],
        menu:['카페라떼','아메리카노','녹차라떼'],
    }
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문완료 되었습니다. `)
}
kiosk_obj(0,0,2);
kiosk_obj(1,1);
kiosk_obj(0,2,2);
kiosk_obj(1,1);

console.log('-------------------------리턴')
function plusFunc1(n1,n2){
    let calc = `${n1}*${n2}=${n1*n2}`
    calc += `, ${n1}+${n2}=${n1+n2}`
    return calc
}
/* function plusFunc2(n1,n2){
    alert(`${n1}+${n2}=${n1+n2}`)
} */
console.log(plusFunc1(1,2))
// alert(plusFunc1(2,4))

// 구구단 함수 (2~9단까지)
// 출력 예시 ) 변수 X 변수 = 결과
function dan99Func(num){
    let dan99 = ''
    dan99 +=`${num}X1=${num*1},`
    dan99 +=`${num}X2=${num*2},`
    dan99 +=`${num}X3=${num*3},`
    dan99 +=`${num}X4=${num*4},`
    dan99 +=`${num}X5=${num*5},`
    dan99 +=`${num}X6=${num*6},`
    dan99 +=`${num}X7=${num*7},`
    dan99 +=`${num}X8=${num*8},`
    dan99 +=`${num}X9=${num*9}`
    return dan99
}
console.log(dan99Func(7))
//alert(dan99Func())
//prompt(dan99Func())

// 할인율 계산기
// KB 국민카드 5%  할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원

// 할인율 게산법 (100-할인율) / 100 = 0.95
// 판매가 * 0.95

function cardFunc(num,sale){
    const card = ['국민카드','현대카드','삼성카드']
    //console.log(card)
    const price = 1051000; //원가
    //console.log(price,typeof(price))
    const calc = (100-sale)/100; //할인율 계산 //이거 숫자로 안됨~!!!ㅃ
    //console.log(calc,typeof(calc))
    const totalPrice = price*calc; //할인가 계산
    //console.log(totalPrice,typeof(totalPrice))
    const result = `${card[num]} ${sale}% 할인적용가 ${totalPrice.toLocaleString('ko-kr')}`;// 출력 결과
    //console.log(result,typeof(result))
    return result//반환결과
}
// 현대카드 10% 할인적용가 ?원
console.log(cardFunc(0,5));
console.log(cardFunc(1,10));
console.log(cardFunc(2,20));

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello'+ user)

}
//hello1('yuna')

const hello2 = function (user){
    return alert('hello '+user)
}
// hello2('kim')

// 익명함수 + 화살표함수 (ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표함수 {실행}
const hello3 = (user) => {
    return console.log('hello '+user)
}
hello3('lee');