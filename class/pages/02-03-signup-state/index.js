import { useState } from "react";

// 실무 적용 실습
// 회원가입, 로그인 폼 등에 활용
export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    // event.target : 태그 전체를 의미, ex) <input type = "text" />
    // event.target.value : 태그에 입력된 값
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    // 값들이 잘들어갔는지 확인.
    console.log(email);
    console.log(password);

    // email -> '@'가 있는지
    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다!! @가 없음!")
      // font 수정은 emotion을 통해서!
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!");
    } else {
      alert("회원가입 축하!");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
