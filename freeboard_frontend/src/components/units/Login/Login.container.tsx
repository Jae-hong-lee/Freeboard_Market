import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
export default function LoginContainerPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
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
  const onClickLogin = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);
      Modal.success({ content: "로그인성공!" });
    } catch (error) {
      Modal.error({ content: "로그인실패!" });
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
