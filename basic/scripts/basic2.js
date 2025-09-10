// 1일차 복습 (가계부앱 변수생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원입니다.
/* let coffee=1500;
let meal=6000;
let trafic=3000;
let total = coffee + meal + trafic; //
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원입니다.`)
console.log(`오늘 총 지출액은 ${(coffee + meal + trafic).toLocaleString('ko-kr')}원입니다.`) */
// 숫자에 3자리 간격 콤마 표시
// 10000 숫자
// 10,000 문자 (최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString("ko-kr");
// (객체.객체.객체).함수();

// 문자데이터 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 글자 수는 000자 입니다.
// let review = prompt('리뷰를 작성하세요'); //ㅋㅋ
// console.log(review); 
// 객체.함수();
// 객체.속성;
// 글자 수 체크 속성
// let review_length = review.length; //2
// console.log(review_length)
// console.log(`현재 작성 글자 수는 ${review_length}자 입니다`)

// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...}
/* let rectangle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
console.log(rectangle.height + 'px'); //200
console.log(rectangle.width,'px'); //300
console.log(`${rectangle.x}px`); //0 */
// 300px, 200px
/* console.log(`${rectangle.width}px,${rectangle.height}px`)
let rectagle={width:300, height:200, x:0, y:-100}
let user_info={name:'가을', age:3, gender:'female', area:'서울'}
let product={
    name:'마스크', 
    price:1000, 
    quantity:999, 
    color:'white',
}
console.log(`상품명 : ${product.name}(${product.color})`)
console.log(`상품가 : ${product.price.toLocaleString("ko-kr")}원`)
console.log(`수량 : ${product.quantity}개`)
let movie_theater={name:'VIP', position:'F1', price:14500} */

// 오브젝트 데이터 타입 2. 배열
// 변수생성키워드 변수명 = [배열값, 값2, 값3]
// 변수생성키워드 변수명 = new Array(값,값,갑)
// 변수생성키워드 변수명 = new Array(자리값)
// const yoil = ['월','화','수','목','금','토','일']
/* console.log(yoil)
console.log(`오늘은 ${yoil[2]}요일`)

const en = new Array('a','b','c','d','e','f')
console.log(en,en[0],en.lenght)

const year = new Array(4);
year[0]=2025
year[1]=2024
year[2]=2023
year[3]=2022
console.log(year); */

// 좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
/* const color = new Array(6);
color[0]="청록"
color[1]="민트"
color[2]="초록"
color[3]="갈색"
color[4]="하늘"
color[5]="노랑"
console.log(color[0],color[3]) */

// 좋아하는 과일을 5개 배열로 저장하고 역순으로 모두 출력하기
/* const fruit = new Array(5);
fruit[0] = "딸기"
fruit[1] = "귤"
fruit[2] = "사과"
fruit[3] = "수박"
fruit[4] = "복숭아"
console.log(
    fruit[4],
    fruit[3],
    fruit[2],
    fruit[1],
    fruit[0],
) */

// 요일 날씨 정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림

const yoil = ['월','화','수','목','금','토','일']
const weather = ['맑음', '비', '흐림']
console.log (`${yoil[0]} - ${weather[0]}`)
console.log (`${yoil[1]} - ${weather[1]}`)
console.log (`${yoil[2]} - ${weather[2]}`)
console.log (`${yoil[3]} - ${weather[0]}`)
console.log (`${yoil[4]} - ${weather[0]}`)
console.log (`${yoil[5]} - ${weather[1]}`)
console.log (`${yoil[6]} - ${weather[2]}`)

const megabox=new Array (8) // 빈 좌석 8개
megabox[0]="A1"
megabox[1]="A2"
megabox[2]=""
megabox[3]=""
megabox[4]=""
megabox[5]=""
megabox[6]=""
megabox[7]=""
console.log(`현재 예매 좌석 : ${megabox[0]} ${megabox[1]}`)
megabox[0]=""
console.log(`현재 예매 좌석 :${megabox[0]} ${megabox[1]}`)

// cgv 좌석 예매와 취소
const cgv = [] // 빈 배열 준비
console.log(cgv.length)
// 좌석 A1 선택
cgv.push('A1')
console.log(cgv)
cgv.push('A2')
console.log(cgv)
cgv.pop()
console.log(cgv)
cgv.unshift ('B3')
console.log(cgv)
cgv.shift ('B5')
console.log(cgv)
cgv.push('A2','A3')
console.log(cgv)

console.log(cgv.length >= 8)
// 선택 좌석이 8개일때 좌석 추가 금지

const price=11000
// 출력결과예시
// 선택 좌석 수 : 00
// 총 결제 금액 : 0000원

const pr=(cgv.length*price).toLocaleString("ko-kr")
console.log(`현재 예매 좌석 : ${cgv}`)
console.log(`${cgv.length}개`)
console.log(`${pr}원`)

// 1. 산술 연산자
let num1 = 5;
let num2 = 2;
let result = num1 + num2
console.log(result)
result = num1 - num2
console.log(result)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

// 이항 연산자 활용 두 수를 사용자에게 입력받고 입력받은 값을 활용하여 더하기만 되는 계산기 만들기
/* const firstNum = prompt('첫번째 수');
const lastNum = prompt('두번째 수');
console.log(firstNum,lastNum);
const numTotal = (firstNum + lastNum)
console.log(numTotal); */
// 일회성 출력으로 문제 해결 안됨.. 0> 원인은 프롬프트가 문자열로 바꾸기  0> numbver으로 감싸기

console.log('----------------')
//증감연산자
let x = 5;
let y = 0;
console.log(x,y);// 5 0
y = x ++;
console.log(x,y);// 6 5
x = ++y;
console.log(x,y); //6,6
x++;
console.log(x,y);//7,6
--y;
console.log(x,y)//7, 5

let a = 10 
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d)
//a=10, b=20, c=30, d=40
a++
b--
c++
d--
console.log(a,b,c,d)
//a=11, b=19, c=31, d=39
a = ++b
b = a++
console.log(a,b,c,d)
//a=21, b=20, c=31, d=39
c = a+b
d = ++c
console.log(a,b,c,d)
//a=21, b=20, c=42, d=42
a = ++c + 10
b = --d + 1
console.log(a,b,c,d)
//a=53, b=42 c=43, d=41

let number = 10;
number += 5;
number -= 5;
console.log(number); //10
number /= 5;
console.log(number); //2
number*=10
console.log(number); //20
number %=3
console.log(number); //2