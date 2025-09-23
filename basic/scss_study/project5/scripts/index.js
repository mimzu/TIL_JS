//회원등급 info 클릭하면 뜨게 하기
const infoBtn = document.querySelector('.price_info p svg')
const hiddenInfo = document.querySelector('.hidden_price_info')
console.log(infoBtn,hiddenInfo)

infoBtn.addEventListener('click', () => {
    hiddenInfo.style.display = 
    hiddenInfo.style.display === 'inline-block' ? 'none' : 'inline-block';
});


// 카드 잡고 움직이게 하기
const allContainer = document.querySelector ('#all')
const bnrContainer = allContainer.querySelector ('.info_card')
const card = bnrContainer.querySelectorAll ('.card')
const cardW = card[0].offsetWidth;
let isDrag = false; //상태변경 초기값
let startX = 0; //마우스 위치 계산 변수
let startScrollLeft = 0; //수평 스크롤 크기 계산 변수
console.log (allContainer,bnrContainer,card,cardW)

allContainer.addEventListener('mousedown',(e)=>{
    isDrag = true; //드래그 시작하면 true 로 상태 변경
    startX = e.pageX - allContainer.offsetLeft; //부모에서 마우스의 상대적인 좌표 저장
    startScrollLeft = allContainer.scrollLeft; //수평 스크롤 위치 저장
    console.log (startX, startScrollLeft)
})
allContainer.addEventListener('mouseup', ()=>{
    isDrag = false; //드래그 종료 시(마우스 뗐을 때) 상태 변경
})
allContainer.addEventListener('mousemove',(e)=>{
    if(!isDrag) return; // 드래그 상태가 거짓이면 함수 종료
    console.log ('실행확인')
    const x = e.pageX; // mousemove 이벤트 진행 시 마우스 좌표 변수
    const walk = x - startX; //마우스 시작지점에서 드래그로 얼마나 이동했는지
    allContainer.scrollLeft = startScrollLeft - walk;
})

//플러스마이너스 버튼 누르면 수량 변경 및 가격 변경되게 하기
const minusBtn = document.querySelector('#minus_btn');
const plusBtn = document.querySelector('#plus_btn');
const orderNum = document.querySelector('#order_num');
const priceP = document.querySelector('.order_price');
let numVal=1;
let originalPrice = 360000
const totalPrice = document.querySelector('.total_price ')
console.log(minusBtn,plusBtn,orderNum,priceP,totalPrice)
// 가격 변경 계산 ... -> 잘안댐 ㅜㅜ ====================================================================================
orderNum.value = numVal; //초기값
priceP.textContent = `${(numVal*originalPrice).toLocaleString('ko-kr')}원`//초기값(가격)
function priceCalc(){
    totalPrice.textContent = priceP.textContent*0.75}
minusBtn.addEventListener('click',()=>{
    numVal == 1 ? console.log ('최소 구매 수량입니다.') : numVal --;
    console.log (numVal)
    orderNum.value = numVal;
    priceP.textContent = `${(numVal*originalPrice).toLocaleString('ko-kr')}원`
    priceCalc();
})
plusBtn.addEventListener('click', ()=>{
    numVal == 10 ? console.log ('최대 구매 수량') : numVal ++; 
    console.log(numVal);
    orderNum.value = numVal; 
    priceP.textContent = `${(numVal*originalPrice).toLocaleString('ko-kr')}원`
    priceCalc();
})

// 작은 썸네일 사진 클릭하면 그걸로 이동
// -> 사진 하나당 너비 계산해서 그만큼으로 이동하게 해야대나? 리뷰로 바로가기 만드는 그런 느낌