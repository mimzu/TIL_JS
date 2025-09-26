const inputTag = document.querySelectorAll("input")
const btnTag = document.querySelectorAll("button")
console.log(inputTag, btnTag)
console.log(inputTag[0], btnTag[0])
console.log(inputTag[1], btnTag[1])
console.log(inputTag.length,btnTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('input#num')
const shopCartBtn = document.querySelector('#cart_btn')
console.log(searchInput, searchBtn, shopNumInput, shopCartBtn)//querySelectorAll이 아니므로 [인덱스] 사용 금지 
//const searchInput = document.querySelector('#s')
//const searchInput = document.querySelector('section:first-child input')
//const searchInput = document.querySelector('input[name*=s]')

/* 태그속성 ★, 함수테스트 */
console.log(searchInput.type, searchInput.placeholder) //속성 읽기 
console.log() //속성을 변경하려면 콘솔 밖에다 쓰기
// searchInput.placeholder () //함수일때 괄호
searchInput.placeholder = "" //속성일때 대입연산자
let checkValue = '' //빈 값 초기화
searchInput.value = '인기검색어 HTML'; //value 값 변경
checkValue = searchInput.value; //변경값 변수 담기
console.log(checkValue) //출력 확인

console.log(shopNumInput.type)
console.log(shopNumInput.name)
console.log(shopNumInput.value + 1) //문자 + 문자
console.log(typeof(shopNumInput.value))// string

checkValue = Number(shopNumInput.value) + 1
console.log(`주문수량 : ${checkValue}`)

shopNumInput.style.background = '#777'
shopNumInput.style.padding = '10px 20px'
shopNumInput.style.width = '200px'
shopNumInput.style.color = 'lightpink'
shopNumInput.style.textAlign = 'center'
shopNumInput.style.fontWeight = '700'

searchInput.style.background = "#000"
searchInput.style.color = "aqua"
searchInput.style.textAlign = 'center'
searchInput.style.width = '200px'
searchInput.style.padding = '10px'

shopCartBtn.style.background = "hotpink"
shopCartBtn.style.color = "#fff"
shopCartBtn.style.padding = '10px'
shopCartBtn.style.width = '80px'
shopCartBtn.style.borderRadius = '25px'

searchBtn.style.background = "aqua"
searchBtn.style.color = "darkblue"
searchBtn.style.padding = '10px'
searchBtn.style.width = '80px'
searchBtn.style.borderRadius = '25px'


//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류','콜백함수')
const orderBtn = document.querySelector('#order')
console.log(orderBtn);

//주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
//이벤트 뒤 함수 작성방식 : 콜백함수호출(추천), 익명함수
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
}) */
/* orderBtn.addEventListener('click',orderFunc)
function orderFunc (){
    return alert('상품을 선택하세요')
} */

//주문하기 클릭 시 : 장바구니에 담으세요
//장바구니 클릭 시 : 상품을 담으세요
//콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기
//매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가 제작으로 수정가능한 함수로 재작성하는게 일반적인 방법이다.

const cartBtn = document.querySelector('#cart')
/* orderBtn.addEventListener('click',function(){
    orderFunc('장바구니에')
})
orderBtn.addEventListener('click',()=>{
    orderFunc('장바구니에')
})
cartBtn.addEventListener('click',function(){
    orderFunc('상품을')
})
cartBtn.addEventListener('click',()=>{
    orderFunc('상품을')
})
function orderFunc (data){
    return alert(data+' 담으세요')
} */
orderBtn.addEventListener('click',orderFunc_v2('상품을'))
function orderFunc_v2 (data){
    return function(){/* 클로저함수(closure) : 함수 안에서 함수를 처리한다 */
        //내부 함수는 외부 함수의 매개변수를 기억한다. -> function() 안에 (data)안채워도 괜찮음
        alert(data+' 담으세요')
    }
}

//아이디, 비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idBtn = document.querySelector('#id')
const pwBtn = document.querySelector('#pw')
//2. '클릭 시' 이벤트 콜백함수
idBtn.addEventListener('click',()=>{overlapFunc2('아이디')})
pwBtn.addEventListener('click',overlapFunc('비밀번호'))
console.log(idBtn,pwBtn)
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작
//3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출
function overlapFunc2(msg){
    return alert(msg+'가 중복되었습니다')
}
function overlapFunc(msg){
    return function(){
        alert(msg+'가 중복되었습니다')
    }
}

console.log('------------')
//이벤트 콜백함수 연습
//Q1. textarea 값을 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
//Q2. textarea를 활성화했을 때 테두리가 빨강
//Q2. textarea를 비활성화했을 때 테두리가 회색
const Write = document.querySelector('#review')
Write.addEventListener('keydown',keyFunc)
Write.addEventListener('focus',borderFunc)
Write.addEventListener('focus',()=>{borderFunc('#f00')})
Write.addEventListener('blur',()=>{borderFunc('#aaa')})
function keyFunc(){
    return console.log('50자 이상 입력하세요.')
}
function borderFunc(color){
    return Write.style.border = `2px solid ${color}`
}
borderFunc('#aaa')//초기값 
Write.style.outline = 'none'
//Write.style.border =  
//Write.style.border = '1px solid #f00'

//배경버튼에 마우스 올리면 부모 article에 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('button[class*=bg]')
const bgP = articleTag.querySelector('p')
console.log(bgBtn,bgP)
//bgP.textContents = '현재배경색상 : pink'
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
// bgBtn.addEventListener('mouseover',콜백함수) -> 한번에 이렇게 하면 안됨
bgBtn[0].addEventListener('mouseover',bgFunc('aqua'))
bgBtn[1].addEventListener('mouseover',bgFunc('pink'))
bgBtn[2].addEventListener('mouseover',bgFunc('lightblue'))
function bgFunc(color){
    return function(){
        articleTag.style.backgroundColor = color;
        bgP.textContents = `현재 배경색상 : ${color}`
    }
}