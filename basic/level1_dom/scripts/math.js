console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1)
num1 = Math.floor(3.2)
console.log(num1)
console.log('---------------')
let num2 = Math.round(3.7)
console.log(num2)
num2 = Math.round(3.2)
console.log(num2)
console.log('---------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random()*5
console.log(num3)
num3 = Math.floor(Math.random()*10)+1
console.log(num3)
console.log('-------------')
const couponDB = ['10%','20%','30%','40%','50%']
const couponBtn = document.querySelector('#coupon')

let num4 = Math.floor(Math.random()*5)+1
const numText = document.querySelector('p')
console.log(num4)
couponBtn.addEventListener('click',()=>{
    alert(num4)
})

const adDB = [{
    name : '다낭',
    src: 'https://i.pinimg.com/1200x/d1/49/b0/d149b02029a6941f9647fcf4446d929b.jpg',
    href: 'https://naver.com'
},{
    name: '하노이',
    src:'https://i.pinimg.com/1200x/37/11/d4/3711d45f57722ab703f94923a15f17a2.jpg',
    href: 'https://naver.com'
},{
    name: '코타키나발루',
    src:'https://i.pinimg.com/736x/7a/94/1d/7a941de372f790ad590185fa194827ce.jpg',
    href: 'https://naver.com'
},{
    name: '몽골',
    src:'https://i.pinimg.com/736x/c8/93/4d/c8934dd0edb297006e351c0309cb7010.jpg',
    href: 'https://naver.com'
}]
window.addEventListener('load',()=>{
    const adSection =document.querySelector('.ad')
    const adRandom = Math.floor(Math.random()*adDB.length)
    adSection.children[0].href = adDB[adRandom].link
    adSection.children[0].children[0].src = adDB[adRandom].src
    adSection.children[0].children[0].alt = adDB[adRandom].alt
})

//더치페이 계산기
//계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력하기
//금액이 소수점일 경우 소수점 값에 따라 반올림하기

const price = document.querySelector('#price')
const person = document.querySelector('#person')
const calcBtn = document.querySelector('#total_btn')
const resultCalcEm = document.querySelector('.result > em')
console.log(price,person,calcBtn,resultCalcEm)

calcBtn.addEventListener('click',()=>{
    resultPrice= Math.round(price.value / person.value).toLocaleString('ko')
    console.log(resultPrice)
    resultCalcEm.textContent = resultPrice
})

//DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

//변수 
const minPriceBtn = document.querySelector('#min_price_btn')
const minPriceP = document.querySelector('.min_price')

const pp = [1000,2000,3000,4000] //test
//클릭 이벤트
minPriceBtn.addEventListener('click',()=>{
    // 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출
    const priceMap = shopDB.map(i=>i.price)
    console.log(priceMap)
    // 추출한 가격에서 최저가 찾기
    console.log('최저가:' + Math.min(...priceMap))
    const minPrice = Math.min(...priceMap)
    minPriceP.textContent = '최저가: ' + minPrice.toLocaleString('ko-kr')
    
    // 스프레드 연산자 (...배열명) 여러 배열값을 한번에 처리하는 배열 처리법
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
    const shopList2Ul = document.querySelector('#shop_list2')

    const sort =[...shopDB].sort((a,b)=> b.price -a.price)
    console.log(sort)
    for (let i of sort){
        const li = document.createElement('li')
        li.innerHTML = `<a href="#">${i.shop} |</a>`
        li.innerHTML += `<span> 가격 : ${i.price} </span>`
        shopList2Ul.appendChild (li)
    }
})

console.log('----------------------------------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500,
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000,
}]

const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const shopListUl = document.querySelector('#shop_list')
console.log(result1,result2,priceBtn,deliveryBtn)



priceBtn.addEventListener('click',()=>{
    // 최저가 JS 
    const priceResultMap = shopDB2.map(i=>i.price)
    result1.textContent = '최저가 : ' +Math.min(...priceResultMap) +'원'

    // 최저가 -> 최고가 오름차순 정렬하기 JS 
    // 매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    // 매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a,b)=> a.price - b.price)
    console.log (sort)

    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    //for~in, for~of, forEach
    for(let i of sort){
        const li = document.createElement('li')
        li.innerHTML = `<a href="#"> ${i.shop} | </a>`
        li.innerHTML += `<span> 가격 : ${i.price}원</span>`
        li.innerHTML += `<span> | 배송비 : ${i.delivery}원</span>`
        console.log(li, i.shop)
        shopListUl.appendChild (li)
        //createElement로 생성한건 항상 appendChild 함수로 대입
    } 

})
deliveryBtn.addEventListener('click',()=>{
    const priceResultMap2 = shopDB2.map(i=>i.delivery)
    result2.textContent = '배송비 : ' + Math.min(...priceResultMap2) +'원'
})