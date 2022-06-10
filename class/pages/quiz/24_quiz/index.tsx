import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

const schma = yup.object({
  Date: yup
    .string()
    .required("날짜는 필수!")
    .matches(/^\d{4}\.\d{2}\.\d{2}$/, "날짜양식이 아님!"),

  phone: yup
    .string()
    .required("전화번호는 필수!")
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 양식이 아님!"),

  email: yup
    .string()
    .required("이메일는 필수 입력사항입니다")
    .matches(/\w+@\w+\.+\w{3}$/, "이메일이 틀렸어!"),
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
      날짜 : <input type="text" {...register("Date")} />
      <Error>{formState.errors.Date?.message} </Error>
      전화번호 : <input type="text" {...register("phone")} />
      <Error>{formState.errors.phone?.message} </Error>
      이메일 : <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message} </Error>
      <button>검증하기!</button>
    </form>
  );
}
