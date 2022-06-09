import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SignUpPresenterPage from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";

export default function SignUpContainerPage() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [passwordcheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  // const [PasswordCheckError, setPasswordCheckError] = useState("");
  const [createUser] = useMutation(CREATE_USER);
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
  const onClickSignup = async () => {
    if (!name) {
      setNameError("이름을 작성해주세요");
    }
    if (!email) {
      setEmailError("이메일이 입력되지 않았습니다.");
    }
    if (!password) {
      setPasswordError("비밀번호가 입력되지 않았습니다.");
    }
    // if (!passwordcheck) {
    //   setPasswordCheckError("비밀번호를 확인해주세요");
    // }
    if (name && email && password) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              name,
              email,
              password,
            },
          },
        });
        console.log(result.data);
        Modal.success({ content: "회원가입성공!" });
        router.push("./Login");
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
      // setPasswordCheckError={PasswordCheckError}
      onClickSignup={onClickSignup}
    />
  );
}
