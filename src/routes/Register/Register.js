import React, { useState } from "react";
import { auth } from "../../components/firebase";
import Header from "../../components/Header/Header";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("회원가입 성공:", user);
      nav("/");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <div>
      <Header />
      <form className={styles.loginContainer} onSubmit={handleRegister}>
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
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default Register;
