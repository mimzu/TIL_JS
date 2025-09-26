//setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    num1++ // 첫번째부터 시작되는 게 아니라 두번째부터 하는거니까 .. 이게 맞음
    if (num1 > 5) num1 = 1
    console.log('timer test'+num1)
},500) */

// 0~6 반복타이머
// 123456 0123456 0123456 ... 
/* let num2 = 0;
const timer2 = setInterval(function(){
    num2 ++;
    if (num2 > 6) num2 = 0
    console.log(num2)
},500) */

// 3~0 반복타이머
//3210 3210 3210...
/* let num3 = 3
const timer3 = setInterval(function(){
    if (num3 < 0) num3 = 3
    console.log(num3)
    num3 --;
},500) */

// 이미지 슬라이드 타이머 활용
/* const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
console.log(gentleSlide)
//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 
let gentleNum = 0
const timer = setInterval(function(){
    gentleNum ++;
    if (gentleNum > gentleSlide.length-1) gentleNum = 0
    //console.log(gentleNum)
    for (let i of gentleSlide){i.style.display='none'}
    gentleSlide[gentleNum].style.display ='block'
},500) */

const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
console.log(gentleSlide2)
let gentleNum2 = gentleSlide2.length-1
const timer2 = setInterval(function(){
    gentleNum2 --;
    if (gentleNum2 < 0 ) gentleNum2 = gentleSlide2.length-1
    //console.log(gentleNum2)
    for (let i of gentleSlide2) i.style.display ='none'
    gentleSlide2[gentleNum2].style.display = 'block'
},500)


//opacity + visibility 서서히 나타나는 슬라이드 애니메이션
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
let gentleNum = 0//초기화
console.log(gentleSlide,gentleSlideCurrentNum,gentleSlideTotalNum)

//슬라이드 총 번호 표시
gentleSlideTotalNum.textContent = gentleSlide.length
gentleSlideCurrentNum.textContent = gentleNum +1

//012345 현재 존재하는 슬라이드 인덱스
// gentleSilde 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
let gentletimer = setInterval(function(){
    gentleSlideCurrentNum.textContent = (gentleNum + 1)
    gentleNum ++;
    if (gentleNum > gentleSlide.length-1) gentleNum = 0
    for (let i of gentleSlide){
        i.style.visibility= 'hidden'
        i.style.opacity='0';
    }
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlide[gentleNum].style.opacity = '1'
},500)