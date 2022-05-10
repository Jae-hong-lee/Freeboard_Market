import { AddressWrapper, Box, ButtonWrapper, Contents, ContentText, ImageWrapper, NameInput, OptionWrapper, PasswordInput, RadioButton, RadioLabel, Title2Input } from "../../../styles/emotion"
import { Title } from "../../../styles/emotion"

// test
import { UserWrapper} from "../../../styles/emotion"


import { InputWrapper } from "../../../styles/emotion"
import { Label } from "../../../styles/emotion"
import { AddressBtn } from "../../../styles/emotion"
import { AddressInput } from "../../../styles/emotion"

import { Youtube } from "../../../styles/emotion"
import { UploadButton } from "../../../styles/emotion"
import { SubmitButton } from "../../../styles/emotion"
export default function MyPage(){

    // 여기는 자바스크립트 쓰는 곳
    return(
        // 여기는 HTML
        <Box>
            <Title>게시물 등록</Title>

            <UserWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput type="text" placeholder="이름을 작성하시오."></NameInput>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <PasswordInput type="password" placeholder="비밀번호를 입력해주세요"></PasswordInput>
                </InputWrapper>
            </UserWrapper>

            <InputWrapper>
                <Label>제목</Label>
                <Contents type="text" placeholder="제목을 작성해주세요"></Contents>
            </InputWrapper>

            <InputWrapper>
                <Label>내용</Label>
                <ContentText placeholder="내용을 작성해주세요"></ContentText>
            </InputWrapper>

            <InputWrapper>
                <Label>주소</Label>
                <AddressWrapper>
                    <AddressInput placeholder="07250"></AddressInput>
                    <AddressBtn>우편번호 검색</AddressBtn>
                    {/* 번호 레이블 바꾸기 */}
                </AddressWrapper>

                <Title2Input readOnly></Title2Input>
                <Title2Input></Title2Input>
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."></Youtube>
            </InputWrapper>

{/* 사진은 wrapper 따로 , 정렬.*/}
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                {/* <GrayboxGray>    
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </GrayboxGray> */}
            </ImageWrapper>
            

            {/* 설정 Wrpper도 따로 두기 */}
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="optin"></RadioButton>
                <RadioLabel>유튜브</RadioLabel>
                <RadioButton type="radio" id="youtube" name="optin"></RadioButton>
                <RadioLabel>사진</RadioLabel>
                {/* 틀잡는것부터 틀렸다. */}
                {/* <Checked>
                    <input type="radio" name ="link"checked/>유튜브
                    <input type="radio" name ="link"/>링크         
                </Checked> */}
            </OptionWrapper>

            {/* 버튼도 박스로 감싸주자.  + 버튼명 좀 더 세부적으로 짓기 btn =x , submitbtn = o*/}
            <ButtonWrapper>
                <SubmitButton>등록하기</SubmitButton>
            </ButtonWrapper>
        </Box>
        // 느낀점 
        // 변수명 좀 더 세부적으로 짓기, 좀 더 자세히 틀잡기, cursor: pointer;
        
    )
}