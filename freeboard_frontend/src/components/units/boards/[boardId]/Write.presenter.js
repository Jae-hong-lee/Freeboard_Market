import * as S from './Write.styles'

export default function WriteUI(props) {
  
<S.Box>
  <S.Title>게시물 등록</S.Title>
    <S.UserWrapper>
      <S.InputWrapper>
        <S.Label>작성자</S.Label>
        <S.NameInput 
            type="text" 
            placeholder="이름을 작성하시오." 
            onChange={props.onChangeUser}
        />
        <S.Error>{props.ErrorUser}</S.Error>
    </S.InputWrapper>
    <S.InputWrapper>
        <S.Label>비밀번호</S.Label>
        <S.PasswordInput 
            type="password" 
            placeholder="비밀번호를 입력해주세요" 
            onChange={props.onChangePw}
        />

        <S.Error>{props.ErrorPw}</S.Error>
      </S.InputWrapper>
    </S.UserWrapper>

<S.InputWrapper>
    <S.Label>제목</S.Label>
    <S.Contents 
        type="text"
        placeholder="제목을 작성해주세요"
        onChange={props.onChangeTitleContents} 
    />
    <S.Error>{props.ErrorTitleContents}</S.Error>
</S.InputWrapper>

<S.InputWrapper>
    <S.Label>내용</S.Label>
    <S.ContentText 
        placeholder="내용을 작성해주세요" 
        onChange={props.onChangeTitleInput}
    />
    <S.Error>{props.ErrorTitleInput}</S.Error>
</S.InputWrapper>

<S.InputWrapper>
    <S.Label>주소</S.Label>
    <S.AddressWrapper>
        <S.AddressInput 
            placeholder="07250" 
            readOnly
        />
        <S.AddressBtn>우편번호 검색</S.AddressBtn>
    </S.AddressWrapper>
    <S.Title2Input readOnly></S.Title2Input>
    <S.Title2Input></S.Title2Input>
</S.InputWrapper>

<S.InputWrapper>
    <S.Label>유튜브</S.Label>
    <S.Youtube placeholder="링크를 복사해주세요."></S.Youtube>
</S.InputWrapper>

<S.ImageWrapper>
    <S.Label>사진첨부</S.Label>
    <S.UploadButton>+</S.UploadButton>
    <S.UploadButton>+</S.UploadButton>
    <S.UploadButton>+</S.UploadButton>
</S.ImageWrapper>

  <S.OptionWrapper>
    <S.Label>메인설정</S.Label>
    <S.RadioButton type="radio" id="youtube" name="optin"></S.RadioButton>
    <S.RadioLabel>유튜브</S.RadioLabel>
    <S.RadioButton type="radio" id="image" name="optin"></S.RadioButton>
    <S.RadioLabel>사진</S.RadioLabel>
  </S.OptionWrapper>

  <S.ButtonWrapper>
    <S.SubmitButton onClick={props.SubmitButtonClick}>등록하기</S.SubmitButton>
  </S.ButtonWrapper>
</S.Box>
}