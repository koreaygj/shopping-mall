# 간단한 쇼핑몰 과제 Feat 구름톤 트레이닝

## 과제 목표

- [x] React를 활용해서 만들기
- [x] firebase를 활용해 로그인 & 회원가입 구현하기
- [x] fakestore API사용해서 상품 데이터 보이기
- [x] 카테고리별 메인 뷰 만들기
- [x] 상품 상세 뷰 만들기
- [x] React Redux 활용해서 장바구니 구현하기

## stack

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/>
<o/>

## How to run

firebase 계정에서 웹 프로젝트 생성후 제공되어지는 config를 아래 코드에 작성해줍니다.

path: "src/components/firebase.js"

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
```
