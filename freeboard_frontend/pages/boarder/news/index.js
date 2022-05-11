import { useState } from "react"
import { AddressWrapper, Box, ButtonWrapper, Contents, ContentText, ImageWrapper, NameInput, OptionWrapper, PasswordInput, RadioButton, RadioLabel, Title2Input } from "../../../styles/emotion"
import { Title } from "../../../styles/emotion"
import { UserWrapper} from "../../../styles/emotion"
import { InputWrapper } from "../../../styles/emotion"
import { Label } from "../../../styles/emotion"
import { AddressBtn } from "../../../styles/emotion"
import { AddressInput } from "../../../styles/emotion"
import { Youtube } from "../../../styles/emotion"
import { UploadButton } from "../../../styles/emotion"
import { SubmitButton } from "../../../styles/emotion"
import { Error } from "../../../styles/emotion"
export default function MyPage(){
// useState 연습하기.
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [TitleContents, setTitleContens] = useState("")
    const [TitleInput, setTitleInput] = useState("")

    const [ErrorUser, setErrorUser] = useState("")
    const [ErrorPw, setErrorPw] = useState("")
    const [ErrorTitleContents, setErrorTitleContents] = useState("")
    const [ErrorTitleInput, setErrorTitleInput] = useState("")
 


    function onChangeUser(event) {
        setUser(event.target.value)
    }
    function onChangePw(event) {
        setPassword(event.target.value)
    }
    function onChangeTitleContents(event) {
        setTitleContens(event.target.value)
    }
    function onChangeTitleInput(event){
        setTitleInput(event.target.value)
    }


    function SubmitButtonClick() {
        if (User === "") {
            setErrorUser("작성자가 입력되지 않았습니다.")
        }
        if (Password === "") {
            setErrorPw("비밀번호가 입력되지 않았습니다.")
        }
        if (TitleContents === "") {
            setErrorTitleContents("제목을 작성해주세요")
        }
        if (TitleInput === "") {
            setErrorTitleInput("내용을 작성해주세요")
        }
// 모두 text가 입력되어 있다면 alert 띄우기.
        if (User !=="" && Password !=="" && TitleContents !=="" && TitleInput !=="" ) {
            alert("게시글이 등록되었습니다.")
        }
    }
    // 2일차 느낀점.
// 코드 재사용화 생각, 코드 깔끔하게 정리하기, State 연습
// emotion 적용시키기

    return(
        <Box>
            <Title>게시물 등록</Title>
            <UserWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput 
                        type="text" 
                        placeholder="이름을 작성하시오." 
                        onChange={onChangeUser}
                    />
                    <Error>{ErrorUser}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <PasswordInput 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요" 
                        onChange={onChangePw}
                    />

                    <Error>{ErrorPw}</Error>
                </InputWrapper>
            </UserWrapper>

            <InputWrapper>
                <Label>제목</Label>
                <Contents 
                    type="text"
                    placeholder="제목을 작성해주세요"
                    onChange={onChangeTitleContents} 
                />
                <Error>{ErrorTitleContents}</Error>
            </InputWrapper>

            <InputWrapper>
                <Label>내용</Label>
                <ContentText 
                    placeholder="내용을 작성해주세요" 
                    onChange={onChangeTitleInput}
                />
                <Error>{ErrorTitleInput}</Error>
            </InputWrapper>

            <InputWrapper>
                <Label>주소</Label>
                <AddressWrapper>
                    <AddressInput 
                        placeholder="07250" 
                        readOnly
                    />
                    <AddressBtn>우편번호 검색</AddressBtn>
                </AddressWrapper>
                <Title2Input readOnly></Title2Input>
                <Title2Input></Title2Input>
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."></Youtube>
            </InputWrapper>

            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="optin"></RadioButton>
                <RadioLabel>유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="optin"></RadioButton>
                <RadioLabel>사진</RadioLabel>
            </OptionWrapper>

            <ButtonWrapper>
                <SubmitButton onClick={SubmitButtonClick}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Box>
        
    )
}