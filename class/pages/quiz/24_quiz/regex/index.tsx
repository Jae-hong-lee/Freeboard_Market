import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import Button01 from "./button";
import Input01 from "./input";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

const schma = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내로 입력해주세요")
    .required("작성자는 필수 입력사항입니다"),

  password: yup
    .string()
    .max(8, "비밀번호는 최대 8자리로 입력해주세요")
    .required("비밀번호는 필수 입력사항입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,8}$/,
      "비밀번호는 영문,숫자,특수문자를 포함해야 합니다."
    ),
  title: yup
    .string()
    .max(100, "제목은 100자 이내로 입력해주세요")
    .required("제목은 필수 입력사항입니다"),

  contents: yup
    .string()
    .max(1000, "내용는 1000글자 이내로 입력해주세요")
    .required("내용은 필수 입력사항입니다"),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message} </Error>
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message} </Error>
      제목: <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message} </Error>
      내용: <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message} </Error>
      <Button01 isActive={formState.isValid} title="게시물등록하기" />
    </form>
  );
}
