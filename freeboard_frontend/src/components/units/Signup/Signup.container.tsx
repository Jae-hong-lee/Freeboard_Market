import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import SignUpPresenterPage from "./Signup.presenter";

export default function SignUpContainerPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordcheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [PasswordCheckError, setPasswordCheckError] = useState("");

  // 비밀번호 확인하기 로직 확인하기, isActive 확인.
  // https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (event.target.value && email && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
    if (event.target.value && password && name) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangepassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (event.target.value && email && name) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // 비밀번호 확인 온체인지 로직을 모르겠음
  // const onChangepasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {};
  // async
  const onClickSignup = () => {
    if (!name) {
      setNameError("이름을 작성해주세요");
    }
    if (!email) {
      setEmailError("이메일이 입력되지 않았습니다.");
    }
    if (!password) {
      setPasswordError("비밀번호가 입력되지 않았습니다.");
    }
    if (!passwordcheck) {
      setPasswordCheckError("비밀번호를 확인해주세요");
    }

    if (name && email && password && passwordcheck) {
      try {
        Modal.success({ content: "회원가입성공!" });
      } catch (error) {
        Modal.error({ content: "회원가입실패" });
      }
    }
  };
  return (
    <SignUpPresenterPage
      onChangeEmail={onChangeEmail}
      onChangepassword={onChangepassword}
      onChangeName={onChangeName}
      // onChangepasswordCheck={onChangepasswordCheck}
      isActive={isActive}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
      setPasswordCheckError={PasswordCheckError}
      onClickSignup={onClickSignup}
    />
  );
}
