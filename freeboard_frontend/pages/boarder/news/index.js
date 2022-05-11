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

export default function MyPage(){

    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [TitleContents, setTitleContens] = useState("")
    const [TitleInput, setTitleInput] = useState("")
    const [AddressNumber, setAddressNumber] = useState("")

    const [ErrorUser, setErrorUser] = useState("")
    const [ErrorPw, setErrorPw] = useState("")
    const [ErrorTitleContents, setErrorTitleContents] = useState("")
    const [ErrorTitleInput, setErrorTitleInput] = useState("")
    const [ErrorAddressNumber, setErrorAddressNumber] = useState("")

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
    }


    return(
        <Box>
            <Title>게시물 등록</Title>

            <UserWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput type="text" placeholder="이름을 작성하시오." onChange={onChangeUser}></NameInput>
                    <div style={{color:'red'}}>{ErrorUser}</div>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <PasswordInput type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePw}></PasswordInput>
                    <div style={{color:'red'}}>{ErrorPw}</div>
                </InputWrapper>
            </UserWrapper>

            <InputWrapper>
                <Label>제목</Label>
                <Contents placeholder="제목을 작성해주세요" onChange={onChangeTitleContents} ></Contents>
                <div style={{color:'red'}}>{ErrorTitleContents}</div>
            </InputWrapper>

            <InputWrapper>
                <Label>내용</Label>
                <ContentText placeholder="내용을 작성해주세요" onChange={TitleInput}></ContentText>
                <div style={{color:'red'}}>{ErrorTitleInput}</div>
            </InputWrapper>

            <InputWrapper>
                <Label>주소</Label>
                <AddressWrapper>
                    <AddressInput placeholder="07250" onChange={AddressNumber}></AddressInput>
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
                <RadioButton type="radio" id="youtube" name="optin"></RadioButton>
                <RadioLabel>사진</RadioLabel>
            </OptionWrapper>

            <ButtonWrapper>
                <SubmitButton onClick={SubmitButtonClick}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Box>
        
    )
}