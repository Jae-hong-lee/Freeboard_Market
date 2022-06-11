import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
// Form & yup
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schma = yup.object({
//   email: yup
//     .string()
//     .email("이메일 형식이 적합하지 않습니다!")
//     .required("이메일은 필수입력 사항입니다."),

//   password: yup
//     .string()
//     .max(8, "비밀번호는 최대 8자리로 입력해주세요")
//     .required("비밀번호는 필수 입력사항입니다.")
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,8}$/,
//       "비밀번호는 영문,숫자,특수문자를 포함해야 합니다."
//     ),
// });

export default function LoginContainerPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(schma),
  //   mode: "onChange",
  // });

  // async / await 연결 API 요청할때
  const onClickLogin = async (data: any) => {
    try {
      console.log(data.email);
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
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
      onClickLogin={onClickLogin}
      onClickSignUpMoveBtn={onClickSignUpMoveBtn}
    />
  );
}

// props로 register, handlesubmit useForm 함수들은 못옮기나?
