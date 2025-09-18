# 자바스크립트
### 변수 OX
1. var 1num = 10; //숫자가 앞
2. var $num = 10;
3. var 100num = 10;//숫자가 앞
4. var num100 = 10;
5. var test = 10;
6. var num = 10;
7. var str="hello";
8. var my name; //공백
9. var_name;
10. var if; //키워드
### 기초 개념 및 속성, 함수 종류 기록
* `var 변수명` : 수정 가능한 전역변수
* `let 변수명` : 수정 가능한 전역/지역 변수
* `const 변수명=대입값` : 수정 불가능한 상수(전역/지역 변수)
**객체.속성**
**객체.속성.속성**
**객체.객체.속성** -> 안됨!! 객체 2번 연속은 기본적으로 불가 (DOM 제외)
**객체.함수()**
**객체.속성.함수()**
**객체.함수().속성**
* 자주 이용하는 기본 속성 : `length`
* 자주 이용하는 기본 함수 : `toLocaleString('국가코드')`
* 공부용 기초 함수 : `prompt()`, `confirm()`
**배열**
* `객체.push()` : 배열의 끝 위치에 값 추가 ★
* `객체.pop()` : 배열의 끝 위치에서 값 1개 제거 ★
* `객체.unshift()` :배열의 시작 위치에 값 추가
* `객체.shift()` : 배열의 시작 위치에서 값 1개 제거
**복합대입연산자**
* a+=b  a=a+b
* a-=b  a=a-b
* a*=b  a=a*b
* a/=b  a=a/b
* a%=b  a=a%b
## 콜백함수 정리
### 매개변수없는 콜백함수 호출
* `DOM.addEventListener('이벤트',콜백함수)`
* `function 콜백함수(){return 반복실행}`
### 매개변수가 있는 콜백함수 호출
* `DOM.addEventListener('이벤트', () =>{콜백함수(매개변수)})`
* `DOM.addEventListener('이벤트', function(){콜백함수(매개변수)})`
* `function 콜백함수(매개변수){return 반복실행}`
### 매개변수가 있는 콜백함수 호출(클로저 활용)
* `DOM.addEventListener('이벤트',콜백함수(매개변수))`
* `function 콜백함수(매개변수) {return function(){}}`

---
## 로컬 스토리지 활용 자바스크립트
* 활용 예 :로그인 유/무에 따라 다르게 나오는 장바구니/구매페이지/카페/메일 등
* 로컬스토리지 : 브라우저에 데이터를 영구적으로 저장하는 방법
* 로컬스토리지 종류 : localStorage, sessionStorage
### localStorage 
* 페이지를 새로고침하거나 브라우저를 닫아도 데이터 유지
* `localStorage.setItem('속성','값')` // 값 true,false 대입
* `localStorage.getItem('속성')`
### sessionStorage
* 브라우저가 닫히면 데이터 자동 삭제
* `sessionStorage.setItem('속성','값')` 
* `sessionStorage.getItem('속성')`
## 자주 쓰는 JS 속성과 함수 & TIP
### 1개의 DOM 요소에 이벤트 분기가 2개 이상 있을 경우
* 조건 분기를 위해 `true, false` 값을 가지는 변수 만들기
* 이벤트 함수 내에 위 변수값 반전 형태 제작하기 `변수 = !변수`
* 변수에 따라 분기에 나눠 실행되는 조건문 `if` 제작하기
### DOM 요소 숨기기 & form요소 비활성화 하기
* DOM 요소 숨기기 : `DOM.style.display = 'none'`
* form 요소 비활성화 : `DOM.disabled = true(비활) or false(활)`
* 위 비활성화 대상 : `input, textarea, select` 등 form 관련 요소
### form 관련 자주 쓰는 속성과 함수, 이벤트
* `change` : select 태그 변경시 인식하는 이벤트 종류
* `selectedIndex` : select 의 선택 option index 확인 속성
* `options[index]` : select의 특정 option 확인 시 속성
* 객체.속성 , 객체.optiongs[], 객체.selectedIndex