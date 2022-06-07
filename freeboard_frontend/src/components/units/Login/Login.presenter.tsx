import * as LPS from "./Login.styles";
export default function LoginPresenterPage(props: any) {
  return (
    <>
      <LPS.Wrapper>
        <LPS.LoginHeader>로그인</LPS.LoginHeader>
        <LPS.LoginBody>
          <LPS.LoginLabel>이메일</LPS.LoginLabel>
          <LPS.LoginEmailInput
            type="text"
            placeholder="ex) abc@gmail.com"
            onChange={props.onChangeEmail}
          />
          <LPS.Error>{props.emailError}</LPS.Error>
        </LPS.LoginBody>
        <LPS.LoginBody>
          <LPS.LoginLabel>비밀번호</LPS.LoginLabel>
          <LPS.LoginEmailInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangepassword}
          />
          <LPS.Error>{props.passwordError}</LPS.Error>
        </LPS.LoginBody>
        <LPS.LoginBtn onClick={props.onClickLogin} isActive={props.isActive}>
          로그인
        </LPS.LoginBtn>
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
