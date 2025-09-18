// 작업 HTML 동적인 요소가 무엇이 있는지? 
// 1. 변수 2.초기값 설정 3. 이벤트 함수 설정

/* const { info } = require("sass") */

// 동적 요소 계획하기
// 1.상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 2.👼저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
// 3.리뷰 클릭 시 스크롤 이동
// 4.가격정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5.주문목록 초기 숨기기
// 6.사이즈 select 초기 비활성화 (색상 선택 시 활성화)
// 7.색상 -> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문 금액 변경)
// 8. 주문목록 'X' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시 
// 10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(수량이 1이라면 경고창 출력) 
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. 👼(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동

// 1.상품이미지에 마우스이벤트 시 큰상품 이미지 변경 ========================================
//변수 -> 초기값 -> 이벤트, 함수

const thumnailA = document.querySelectorAll('.thumnail a')
const thumnailOverView = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverView)

//초기값(첫번째 썸네일 a가 보이고 있다는 뜻으로 테두리가 있음)
thumnailA[0].style.border = '2px solid #0aa5ff'

//두번째 썸네일에 마우스 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기 
//콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
console.log(thumnailA[1].children[0].src)/* a 안 이미지의 src를 읽겠다 */
//콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(thumnailOverView.src)

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정 (초기값)
thumnailA[0].children[0].style.transition='transform 0.2s'
thumnailA[1].children[0].style.transition='transform 0.2s'

//이벤트 함수 시작
thumnailA[0].addEventListener ('mouseover',()=>{
    //테두리 활성화.비활성화
    thumnailA[0].style.border = '2px solid #0aa5ff'
    thumnailA[1].style.border = 'none'
    //이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    /* thumnailA[1].children[0].style.transform = 'scale(1)' */
    //이미지 변경
    thumnailOverView.src = thumnailA[0].children[0].src
})
thumnailA[0].addEventListener ('mouseout',()=>{
    thumnailA[0].children[0].style.transform = 'scale(1)'
})
thumnailA[1].addEventListener ('mouseover',()=>{
    // 테두리 활성화.비활성화
    thumnailA[1].style.border = '2px solid #0aa5ff'
    thumnailA[0].style.border = 'none'
    //이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    /* thumnailA[0].children[0].style.transform = 'scale(1)' */
    //이미지 변경
    thumnailOverView.src = thumnailA[1].children[0].src
})
thumnailA[1].addEventListener ('mouseout',()=>{
    thumnailA[1].children[0].style.transform = 'scale(1)'
})

//로그인 정보 저장
//true == 로그인
//false == 로그아웃
localStorage.setItem('isLogin', 'true');

// 2. 👼저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행==================================
const bookmark = document.querySelector('.scrap')
let loginStatusValue = localStorage.getItem('isLogin')
console.log(bookmark,loginStatusValue)

bookmark.addEventListener('click',()=>{
    if (loginStatusValue=='true'){
        location.href='./wish.html'// 로그인 시 wish.html 이동
    }else {
        location.href='./login.html'// 로그아웃 시 login.html 이동
    }
})


//3. 리뷰 클릭 시 스크롤 이동 ==============================================================
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('main .review_wrap')
console.log(reviewBtn,reviewWrap)
const productInfoBtn = document.querySelector('.sticky_menu a:first-child')
const reviewMenuBtn = document.querySelector('.sticky_menu a:nth-child(2)')
const productInfo = document.querySelector('main .product_wrap')
console.log(productInfoBtn,reviewMenuBtn,productInfo)

function gotolink (e){
    e.preventDefault();
    console.log(reviewWrap.offsetTop);
    window.scrollTo(0,reviewWrap.offsetTop);
}
reviewBtn[0].addEventListener('click',gotolink)
reviewBtn[1].addEventListener('click',gotolink)


productInfoBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(productInfo.offsetTop)
    window.scrollTo(0,productInfo.offsetTop)
})

//4. 가격정보 (i) 클릭 시 정보 팝업 출력/숨기기
//초기 : 숨김 (false)
//클릭 : 보이기 (true) -> (false) ->(true) ...


let infoBoolean = false; //초기 : 숨김 (false)
const infoIconBtn = document.querySelector('.info_icon')
const infoContent = document.querySelector('.price_info .info')
console.log(infoIconBtn,infoContent)

infoIconBtn.addEventListener('click',()=>{
    infoBoolean = !infoBoolean;//★★★★★
    console.log(infoBoolean)
    if (infoBoolean){
        infoContent.style.display = 'block'
    } else {
        infoContent.style.display = 'none'
    }
})

// 5.주문목록 초기 숨기기
const orderList = document.querySelector('.order_list')
console.log(orderList)
orderList.style.display = 'none'

// 6.사이즈 select 초기 비활성화 (색상 선택 시 활성화)
const selectColor = document.querySelector('#color_select')
const selectSize = document.querySelector('#size_select')
console.log(selectColor,selectSize)
selectSize.disabled = true;


//DB 불러오기 테스트
console.log(productOptDB[0].name)
console.log(productOptDB[0].color[0]+productOptDB[0].color[1]) //블랙라즈베리

// DB -> HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement ()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log(colorOpt1, colorOpt2)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
selectColor.appendChild(colorOpt1)
selectColor.appendChild(colorOpt2)
// * 생성한 태그가 li면 ul이나 ol의 마지막 자식 위치로 삽입
// * option이라면 select의 마지막 자식 위치로 삽입


// 7.색상 -> 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌것)


selectSize.addEventListener('change', ()=>{
    console.log(selectSize.selectedIndex)
    orderList.style.display = 'inline-block'
})

// 1. JS에서 HTML 함수로 생성 createElement ()
const sizeOpt1 = document.createElement('option')
const sizeOpt2 = document.createElement('option')
console.log(sizeOpt1, sizeOpt2)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
sizeOpt1.textContent = `${productOptDB[0].size[0]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`
sizeOpt2.textContent = `${productOptDB[0].size[1]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
selectSize.appendChild(sizeOpt1)
selectSize.appendChild(sizeOpt2)

selectColor.addEventListener('change',()=>{
    console.log(selectColor.selectedIndex)
    if (selectColor.selectedIndex != 0){
        selectSize.disabled = false; //활성화
        selectSize.addEventListener('change',()=>{
            //사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택완료
            if (selectSize.selectedIndex !=0){
                console.log('선택완료')
                orderList.style.display = 'block'
                // 선택한 옵션 안에 글자를 가져오는 속성 text
                console.log(orderList.children[0].children[0])
                console.log(orderList.children[0].children[1])
                // 선택옵션 (color) 출력하기
                orderList.children[0].children[0] = colorSelet.option['selectedIndex'].text
            } else {
                orderList.style.display = 'none'
            }
        })
    }else { //사용자가 선택한 opt이 0일때
        selectSize.disabled = true; //비활성화\
    }
})
