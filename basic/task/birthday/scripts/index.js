//초기세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultFlower = $('.result_box')
const $shareBtn = $('#share_btn')
$resultFlower.hide()
$shareBtn.hide()
const $imgDiv = $('#flower_img')
$imgDiv.hide()
const $img = $('#flower_img img')


//내 꽃 찾기 버튼 클릭 시 입력한 년/월/일 중 '월' 인식, 해당 값과 동일한 탄생화 배열 출력하기
const $resultBtn = $('#check_btn')
const $year = $('.year')
const $month = $('.month')
const $day = $('.day')
console.log($resultBtn)

const $flower = $('.flower')
const $content = $('.content')
console.log($flower,$content)

$resultBtn.click(function(){
    //조건 ? 참 : 거짓
    console.log(Boolean($year.val()))
    const ymd = $year.val() && $month.val() && $day.val()
    ymd ? flowerFunc() :
    alert('앗! 아직 다 안 적었어요 🙈 생년월일을 모두 입력해주세요!');
    function flowerFunc(){
        const userMonth = $month.val();
        console.log(userMonth,birthday_flower[userMonth-1].flower,birthday_flower[userMonth-1].content)
        $resultFlower.slideDown(1500)
        $imgDiv.fadeIn(2000)
        $flower.text(birthday_flower[userMonth-1].flower)
        $content.text(birthday_flower[userMonth-1].content)
        $shareBtn.show()
        $img.attr("src",birthday_flower[userMonth-1].src)
        $resultBtn.text('💫다시 찾기')
    }
})