import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../src/commons/store";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;
const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;
const schma = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력사항입니다."),
});

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function QuizLoginPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      router.push("/quiz/28_quiz/payment/loading");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      Modal.error({ content: "로그인실패!" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message} </Error>
      비밀번호: <input type="password" {...register("password")} />
      <Error>{formState.errors.password?.message} </Error>
      <Button isActive={formState.isValid}>로그인하기!</Button>
    </form>
  );
}
