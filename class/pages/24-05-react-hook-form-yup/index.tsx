// 에러메세지 출력
// yup & react-hook-form
// yup은 리엑트 훅 폼이랑만 쓰는 것은 아니다!
// react-hook-form docs에도 yup이랑 같이 쓰는 법이 나와 있을 정도로 yup 이 유명하다!!
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import Button01 from "../../src/commons/buttons/01";
import Input01 from "../../src/commons/inputs/01";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;
// 휴대전화 010-1234-5678
// 반드시 이런 조건이 있어야한다, 나만의 조건을 주고 싶을때
// -> 정규표현식 , 정규표현식과 yup이랑도 같이 쓸수 있다. (regex)
// .matches (조건!, 에러메세지)

// yup의 조건
const schma = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력사항입니다."),
  // phone: yup.string().matches("010-정규표현식!", "휴대폰형식에 알맞지 않습니다!"),
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

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <Input01 type="text" register={register("email")} />
      <Error>{formState.errors.emails?.message} </Error>
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message} </Error>
      {/* 주소입력 : <input type="text" {...register("boardAddress.detail")} /> */}
      {/* 객체안의 저장 */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
