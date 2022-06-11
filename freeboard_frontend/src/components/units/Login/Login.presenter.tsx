import * as LPS from "./Login.styles";
// Form & yup
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schma = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),

  password: yup
    .string()
    .max(8, "비밀번호는 최대 8자리 이내로 입력해주세요")
    .required("비밀번호는 필수 입력사항입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,8}$/,
      "비밀번호는 영문,숫자,특수문자를 포함해야 합니다."
    ),
});
export default function LoginPresenterPage(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  return (
    <>
      <LPS.Wrapper>
        <form onSubmit={handleSubmit(props.onClickLogin)}>
          <LPS.LoginHeader>로그인</LPS.LoginHeader>
          <LPS.LoginBody>
            <LPS.LoginLabel>이메일</LPS.LoginLabel>
            <LPS.LoginEmailInput
              type="text"
              placeholder="ex) abc@gmail.com"
              {...register("email")}
            />
            <LPS.Error>{formState.errors.email?.message}</LPS.Error>
          </LPS.LoginBody>
          <LPS.LoginBody>
            <LPS.LoginLabel>비밀번호</LPS.LoginLabel>
            <LPS.LoginEmailInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password")}
            />
            <LPS.Error>{formState.errors.password?.message}</LPS.Error>
          </LPS.LoginBody>
          <LPS.LoginBtn isActive={formState.isValid}>로그인</LPS.LoginBtn>
        </form>

        <LPS.SignupMoveBtn onClick={props.onClickSignUpMoveBtn}>
          회원가입
        </LPS.SignupMoveBtn>
        <LPS.DivideLine />
        <LPS.LoginFooter>
          <div>아이디 찾기</div>|<div>비밀번호 재설정</div>
        </LPS.LoginFooter>
      </LPS.Wrapper>
    </>
  );
}
