# openMarket

## 🟢프로젝트 설명
**판매자와 구매자를 구별하여 판매자가 상품을 등록/판매/구매하는 서비스**
- 판매자로 로그인하여 상품 정보를 등록/수정
- 상품의 세부사항을 확인/장바구니/상품 구매
- 본래 React를 사용하여 상품 등록/결제/상품에 대한 CRUD를 직접 구현해보는 프로젝트이나, JavaScript 능력 향상을 위해, 최초 JavaScript로 구현
- 서버 API를 사용하여 기능을 구현

## 🟢빌드 및 실행방법
작동 페이지: https://postop09.github.io/openMarket/src/pages/login.html
- id : buyer1 / pw : hodu0910

## 🟢개발 환경
- 개인 제작
- Figma
- HTML
- CSS/SCSS
- JavaScript
- Git
- 서버 API

## 🟢제작 과정(JS)
### 디자인 피그마
![image](https://user-images.githubusercontent.com/93017923/156357194-0e137ab7-3981-4be2-8498-55c960d695ce.png)

### 로그인(API)
![login](https://user-images.githubusercontent.com/93017923/156375734-b0cb16c9-d813-4c40-a8d4-2a2b62d9a65d.gif)
- 로그인 정보 보내기
- StatusText 활용하여 오류 출력(아이디/비밀번호 미입력 시, 올바르지 않은 정보 입력 시)

### 메인페이지(API)
![index](https://user-images.githubusercontent.com/93017923/156376473-88bc14bd-72e2-41b4-8fc8-d3b7a57c89c8.gif)
- 게시되어 있는 상품 목록 호출
- 상품 선택 시, 해당 상품 상세보기로 이동
- 로그아웃, 로그인하지 않은 이용자는 로그인 창으로 이동

### 상품 상세보기(API)
![image](https://user-images.githubusercontent.com/93017923/156377372-18776b64-2b14-4f8d-aa1b-1b6ab18f9b31.png)
- 상품 개수 조절
- 개수에 따른 가격 출력
- 로그인하지 않은 상태로 '바로구매'버튼 클릭 시, 로그인 화면으로 이동

### 장바구니
![image](https://user-images.githubusercontent.com/93017923/156377851-25707e7e-b0d1-43c8-a1ff-640fd151c939.png)

### 결제하기 페이지
![image](https://user-images.githubusercontent.com/93017923/156377972-74c9191f-6549-482b-900b-df154de11607.png)

### 판매상품 목록 페이지
![image](https://user-images.githubusercontent.com/93017923/156378371-064ba20e-e73e-407c-a40f-3709d5fc2f55.png)

### 판매상품 등록 페이지
![image](https://user-images.githubusercontent.com/93017923/156378511-651a855b-3e4b-46f3-9152-c6807b4d7259.png)

## 🟢문제점 및 궁금했던 점/개선방안 및 배운점
### ✅문제점
- 서버 API를 활용하면서 로그인 정보를 불러오는 과정 중, 로그인 정보를 저장하고 값을 불러올 수 없는 한계
- React 과제를 JS로 구현하는 과정에서 토큰을 저장할 수 있는 방법이 제한적이었다.

### ✅궁금했던 점
- Token 저장을 위한 LocalStorage, SessionStorage, cookie
- 로그인 버튼 클릭시 `<button type='submit'>`이었는데, 오류가 발생했다. `<button type='button'>`으로 변경해주니, 오류가 사라졌다.

### ✅개선방안 및 배운점

## 🟢느낀점
- 처음 API를 사용했을 때 보다, API를 불러오는 과정에 익숙해졌다. 혼자서 모든 것을 해보려고 하니, 처음에는 막막했다. 오랜만에 API까지 하는 것이라 처음에는 로그인 정보도 잘 받아오지 못했다. 이번 JavaScript활용으로 분명히 한걸음 더 성장했다고 생각한다.

## 🟢추가 목표
- JS구현에서 React 구현으로 리팩토링 해보자(22.03.02)
