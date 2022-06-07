import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LoginPresenterPage from "./Login.presenter";

export default function LoginContainerPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
    if (event.target.value && password) {
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
    if (event.target.value && email) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // async / await 연결 API 요청할때
  const onClickLogin = () => {
    if (!email) {
      setEmailError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
  };

  const router = useRouter();
  const onClickSignUpMoveBtn = () => {
    router.push("./Signup");
  };
  return (
    <LoginPresenterPage
      onChangeEmail={onChangeEmail}
      onChangepassword={onChangepassword}
      isActive={isActive}
      emailError={emailError}
      passwordError={passwordError}
      onClickLogin={onClickLogin}
      onClickSignUpMoveBtn={onClickSignUpMoveBtn}
    />
  );
}
