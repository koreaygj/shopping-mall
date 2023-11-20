import React, { useState } from "react";
import { auth } from "../../components/firebase";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("로그인 성공");
      nav("/");
    } catch (error) {
      console.log(email, password);
      console.error("로그인 실패: ", error);
      alert("아이디 및 비밀번호 오류 입니다. 또는 회원가입이 먼저 필요합니다.");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.loginContainer}>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <button>로그인</button>
        </form>
        <button>회원가입 하러 가기</button>
      </div>
    </div>
  );
}

export default Login;
