const bgChgBtn = document.querySelector('#bg_change')
const body = document.querySelector('body')
console.log(bgChgBtn,body)

const bgImg =[
    'https://i.pinimg.com/1200x/b6/75/29/b67529cb0d3137bc6c207dcd50112071.jpg',
    'https://i.pinimg.com/736x/d8/75/e0/d875e0527c7db653f423174604c6147a.jpg',
    'https://i.pinimg.com/1200x/ca/98/a6/ca98a620052ac6bf813494f2d933e318.jpg'
]

let currentIndex = 0; //현재 몇번째 배경 이미지인지? -> 첫번째

bgChgBtn.addEventListener('click',()=>{
    body.style.backgroundImage = `url('${bgImg[currentIndex]}')`;
    currentIndex = (currentIndex+1)% bgImg.length; //다시 처음으로 돌아오기!!
});

const userH =document.querySelector('#user_height')
const userW =document.querySelector('#user_weight')
const resultBtn =document.querySelector('#result_btn')
console.log(userH,userW,resultBtn)

function checkInput() {
    if(userH.value !="", userW.value !=""){
        resultBtn.style.backgroundColor = "#556b2f";
        resultBtn.style.color = "#fffacd";
        resultBtn.style.border = '1px solid #fffacd';
    }else{
        resultBtn.style.backgroundColor = "#fffacd";
        resultBtn.style.color = "#556b2f";
        resultBtn.style.border = '1px solid #556b2f';
    }
}
userH.addEventListener("input",checkInput)
userW.addEventListener("input",checkInput)
checkInput ();


resultBtn.addEventListener('click',()=>{
    const userHeight = parseFloat(userH.value.trim());
    const userWeight = parseFloat(userW.value.trim());
    if (isNaN(userHeight)||isNaN(userWeight)){
        alert ('숫자로 입력해주구리!!!!!!!!!!!');
        return;
    }
    
    const standard = (userHeight-100)*0.9
    const dietWeight = +(userWeight-standard).toFixed(1);

    if(dietWeight>0){
        alert (`적정체중은 ${standard.toFixed(1)}kg이며 ${dietWeight}kg 초과됐구리`)
    }else if(dietWeight <0) {
        alert (`적정체중은 ${standard.toFixed(1)}kg! 현재보다 ${Math.abs(dietWeight)}kg 찌워야되구리`)
    } else {
        alert (`완벽하구리!! 딱 적정체중 ${standard.toFixed(1)}kg이구리!!`)
    }

})