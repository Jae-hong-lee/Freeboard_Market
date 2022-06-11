import * as SPS from "./Signup.styles";

export default function SignUpPresenterPage(props: any) {
  return (
    <>
      <SPS.Wrapper>
        <SPS.SignUpHeader>회원가입</SPS.SignUpHeader>
        <SPS.SignUpBody>
          <SPS.SignUpLabel>이 름</SPS.SignUpLabel>
          <SPS.SignUpEmailInput
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeName}
          />
          <SPS.Error>{props.nameError}</SPS.Error>
        </SPS.SignUpBody>
        <SPS.SignUpBody>
          <SPS.SignUpLabel>이메일</SPS.SignUpLabel>
          <SPS.SignUpEmailInput
            type="text"
            placeholder="ex) abc@gmail.com"
            onChange={props.onChangeEmail}
          />
          <SPS.Error>{props.emailError}</SPS.Error>
        </SPS.SignUpBody>
        <SPS.SignUpBody>
          <SPS.SignUpLabel>비밀번호</SPS.SignUpLabel>
          <SPS.SignUpEmailInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangepassword}
          />
          <SPS.Error>{props.passwordError}</SPS.Error>
        </SPS.SignUpBody>
        <SPS.SignUpBody>
          <SPS.SignUpLabel>비밀번호 확인</SPS.SignUpLabel>
          <SPS.SignUpEmailInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            // onChange={props.onChangepasswordCheck}
          />
          <SPS.Error>{props.PasswordCheckError}</SPS.Error>
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
            <SPS.NumberInput placeholder="인증번호 입력해주세요" type="text" />
            <SPS.NumberBtn>확인</SPS.NumberBtn>
          </SPS.NumberWrapper>
        </SPS.PhoneNumWrapper>
        <SPS.LoginBtn onClick={props.onClickSignup} isActive={props.isActive}>
          회원가입
        </SPS.LoginBtn>
      </SPS.Wrapper>
    </>
  );
}
