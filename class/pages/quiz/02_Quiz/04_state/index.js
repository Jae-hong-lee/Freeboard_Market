import { useState } from "react";

export default function SignUpForm() {
  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const [pw2, setpw2] = useState("");

  const [errorId, setErroId] = useState("");
  const [errorPw, setErroPw] = useState("");
  console.log(id);
  function handleChangeId(event) {
    setid(event.target.value);
    if (id !== "") {
      if (id.includes("@") === false) {
        setErroId("이메일이 아닙니다.");
      } else {
        setErroId("");
      }
    }
  }
  function handleChangePw(event) {
    setpw(event.target.value);
    if (event.target.value !== "") {
      if (event.target.value !== pw2) {
        setErroPw("비밀번호가 다릅니다.");
      } else {
        setErroPw("");
      }
    }
  }
  function handleChangePw2(event) {
    setpw2(event.target.value);
    if (event.target.value !== "") {
      if (event.target.value !== pw) {
        setErroPw("비밀번호가 다릅니다.");
      } else {
        setErroPw("");
      }
    }
  }

  function onClickSingup() {
    if (errorId === "" && errorPw === "") {
      alert("회원가입 확인");
    } else {
      alert("입력값 확인해주세요");
    }

    // 발생한 에러를 빨간색으로 입력창 하단에 표시
  }
  return (
    <div>
      <h1>로그인</h1>

      <div>이메일</div>
      <input id="tag" type="text" onChange={handleChangeId} />
      <div style={{ color: "red" }}>{errorId}</div>

      <div>비밀번호</div>
      <input id="tag" type="password" onChange={handleChangePw} />
      <div style={{ color: "red" }}>{errorPw}</div>

      <div>비밀번호확인</div>
      <input id="tag" type="password" onChange={handleChangePw2} />
      <div style={{ color: "red" }}>{errorPw}</div>
      <br />

      <button onClick={onClickSingup}>가입하기</button>
    </div>
  );
}
