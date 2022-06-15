// 에러메세지 출력
// yup & react-hook-form
// yup은 리엑트 훅 폼이랑만 쓰는 것은 아니다!
// react-hook-form docs에도 yup이랑 같이 쓰는 법이 나와 있을 정도로 yup 이 유명하다!!
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

const LoginButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

// yup의 조건
const schma = yup({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력사항입니다."),
});

// 조건에서 검증된 에러가 있다면 formState로 들어가게 된다.

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
    // 에러를 언제언제 검증할래? -> mode
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };
  // handelSubmit 으로 onClick 감싸기
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")} />
      <Error>{formState.errors.emails?.message} </Error>
      비밀번호: <input type="text" {...register("password")} />
      <Error>{formState.errors.password?.message} </Error>
      <LoginButton isActive={formState.isValid}>로그인하기!!</LoginButton>
    </form>
  );
}
