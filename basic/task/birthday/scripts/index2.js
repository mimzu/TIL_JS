const resultFlower = document.querySelector('.result_box')
const shareBtn = document.querySelector('#share_btn')
const imgDiv = document.querySelector('#flower_img')
const img = document.querySelector('#flower_img img')
const resultBtn = document.querySelector('#check_btn')
const year = document.querySelector('.year')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const flower = document.querySelector('.flower')
const content = document.querySelector('.content')

shareBtn.style.display = 'none'
resultFlower.style.display = 'none'
imgDiv.style.display ='none'

resultBtn.addEventListener('click',()=>{
    const ymd = year.value && month.value && day.value
    ymd ? flowerFunc() :
    alert('앗! 아직 다 안 적었어요 🙈 생년월일을 모두 입력해주세요!');
    function flowerFunc(){
        if(month.value > 0 && month.value < 14){
            const userMonth = month.value
            const resultFlowerName = birthday_flower[userMonth-1].flower
            const resultFlowerContent = birthday_flower[userMonth-1].content
            const resultImg = birthday_flower[userMonth-1].src
            shareBtn.style.display = 'inline-block'
            resultFlower.style.display = 'block'
            imgDiv.style.display ='block'
            flower.textContent = resultFlowerName
            content.textContent = resultFlowerContent
            img.src = resultImg
            resultBtn.textContent = '💫다시 찾기'
                    } else {
            alert('올바른 날짜를 입력하세욧! ㅜㅅㅜ')
        }
    }
})