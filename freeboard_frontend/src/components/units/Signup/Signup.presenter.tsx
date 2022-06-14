import * as SPS from "./Signup.styles";
// Form & yup
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schma = yup.object({
  name: yup.string().max(50, "이름이 너무 길어요!"),
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

  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다.")
    .required("패스워드 확인을 입력하지 않았습니다."),

  // .string()
  // .oneOf([yup.ref("myPassword"), null], "비밀번호가 일치하지 않습니다."),
});

export default function SignUpPresenterPage(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });
  return (
    <>
      <SPS.Wrapper>
        <SPS.SignUpHeader>회원가입</SPS.SignUpHeader>
        <form onSubmit={handleSubmit(props.onClickSignup)}>
          <SPS.SignUpBody>
            <SPS.SignUpLabel>이 름</SPS.SignUpLabel>
            <SPS.SignUpEmailInput
              type="text"
              placeholder="이름을 입력해주세요"
              {...register("name")}
            />
            <SPS.Error>{props.nameError}</SPS.Error>
          </SPS.SignUpBody>
          <SPS.SignUpBody>
            <SPS.SignUpLabel>이메일</SPS.SignUpLabel>
            <SPS.SignUpEmailInput
              type="text"
              placeholder="ex) abc@gmail.com"
              {...register("email")}
            />
            <SPS.Error>{formState.errors.email?.message}</SPS.Error>
          </SPS.SignUpBody>
          <SPS.SignUpBody>
            <SPS.SignUpLabel>비밀번호</SPS.SignUpLabel>
            <SPS.SignUpEmailInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password")}
            />
            <SPS.Error>{formState.errors.password?.message}</SPS.Error>
          </SPS.SignUpBody>
          <SPS.SignUpBody>
            <SPS.SignUpLabel>비밀번호 확인</SPS.SignUpLabel>
            <SPS.SignUpEmailInput
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register("passwordCheck")}
            />
            <SPS.Error>{formState.errors.passwordCheck?.message}</SPS.Error>
          </SPS.SignUpBody>
          {/* 핸드폰 인증 */}
          {/* <SPS.DivideLine /> */}
          <SPS.PhoneNumWrapper>
            <SPS.SignUpLabel>핸드폰</SPS.SignUpLabel>
            <SPS.NumberWrapper>
              <SPS.NumberInput placeholder="010-0000-0000" />
              <SPS.NumberBtn>인증번호 발송</SPS.NumberBtn>
            </SPS.NumberWrapper>
          </SPS.PhoneNumWrapper>
          <SPS.PhoneNumWrapper>
            <SPS.SignUpLabel>인증번호</SPS.SignUpLabel>
            <SPS.NumberWrapper>
              <SPS.NumberInput
                placeholder="인증번호 입력해주세요"
                type="text"
              />
              <SPS.NumberBtn>확인</SPS.NumberBtn>
            </SPS.NumberWrapper>
          </SPS.PhoneNumWrapper>
          <SPS.LoginBtn isActive={formState.isValid}>회원가입</SPS.LoginBtn>
        </form>
        {/* ------ */}
      </SPS.Wrapper>
    </>
  );
}
