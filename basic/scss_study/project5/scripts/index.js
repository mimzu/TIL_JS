const infoBtn = document.querySelector('.price_info p svg')
const hiddenInfo = document.querySelector('.hidden_price_info')
console.log(infoBtn,hiddenInfo)

infoBtn.addEventListener('click', () => {
    hiddenInfo.style.display = 
    hiddenInfo.style.display === 'inline-block' ? 'none' : 'inline-block';
});

const allContainer = document.querySelector ('#all')
const bnrContainer = document.querySelector ('.info_card')
const card = bnrContainer.querySelectorAll ('.card')
const cardW = card[0].offsetWidth;
let isDrag = false;
let startX = 0;
let startScrollLeft = 0;
console.log (allContainer,bnrContainer,card,cardW)

allContainer.addEventListener('mousedown',(e)=>{
    isDrag = true;
    startX = e.pageX - allContainer.offsetLeft;
    startScrollLeft = allContainer.scrollLeft;
    console.log (startX, startScrollLeft)
})
allContainer.addEventListener('mouseup', ()=>{
    isDrag = false;
})
allContainer.addEventListener('mousemove',(e)=>{
    if(!isDrag) return;
    console.log ('실행확인')
    const x = e.pageX;
    const walk = x - startX;
    allContainer.scrollLeft = startScrollLeft - walk;
})

const minusBtn = document.querySelector('#minus_btn');
const plusBtn = document.querySelector('#plus_btn');
const orderNum = document.querySelector('#order_num');
const priceP = document.querySelector('.order_price');
let numVal=1;
let originalPrice = 360000
const totalPrice = document.querySelector('.total_price ')
console.log(minusBtn,plusBtn,orderNum,priceP,totalPrice)

orderNum.value = numVal; //초기값
priceP.textContent = `${(numVal*originalPrice).toLocaleString('ko-kr')}원`//초기값(가격)

function priceCalc(){
    totalPrice.textContent = `clac(${priceP.textContent}*75%)`// ======================='원' 빼기
}

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