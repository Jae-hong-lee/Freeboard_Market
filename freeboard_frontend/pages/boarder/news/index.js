import * as S from '../../../styles/emotion'
import {gql, useMutation} from "@apollo/client"
import { useState } from "react"
import { useRouter} from "next/router"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){
                _id
                writer
                title
                contents
            }
    }
`

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

    //  라우터 임폴트
    const router = useRouter()

    function onChangeUser(event) {
        setUser(event.target.value)
        if (event.target.value !=="") {
            setErrorUser("")
        }
    }
    function onChangePw(event) {
        setPassword(event.target.value)
        if (event.target.value !=="") {
            setErrorPw("")
        }
    }
    function onChangeTitleContents(event) {
        setTitleContens(event.target.value)
        if (event.target.value !=="") {
            setErrorTitleContents("")
        }
    }
    function onChangeTitleInput(event){
        setTitleInput(event.target.value)
        if (event.target.value !=="") {
            setErrorTitleInput("")
        }
    }

    const[createBoard] = useMutation(CREATE_BOARD)

    const SubmitButtonClick = async() => {

        if (!User) {
            setErrorUser("작성자가 입력되지 않았습니다.")
        }
        if (!Password) {
            setErrorPw("비밀번호가 입력되지 않았습니다.")
        }
        if (!TitleContents) {
            setErrorTitleContents("제목을 작성해주세요")
        }
        if (!TitleInput) {
            setErrorTitleInput("내용을 작성해주세요")
        }
        if (User && Password && TitleContents && TitleInput ) {
            try {
                const result = await createBoard ({
                    variables:{
                        createBoardInput: {
                            writer: User,
                            password: Password,
                            title: TitleContents,
                            contents: TitleInput
                        }       
                    }
                }) 
                alert("게시글이 등록되었습니다.")
                router.push(`/boarder/${result.data.createBoard._id}`)
                
            } catch (error) {
                alert(error.message)
            }

        }
    }
    return(
        <S.Box>
            <S.Title>게시물 등록</S.Title>
            <S.UserWrapper>
                <S.InputWrapper>
                    <S.Label>작성자</S.Label>
                    <S.NameInput 
                        type="text" 
                        placeholder="이름을 작성하시오." 
                        onChange={onChangeUser}
                    />
                    <S.Error>{ErrorUser}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>비밀번호</S.Label>
                    <S.PasswordInput 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요" 
                        onChange={onChangePw}
                    />

                    <S.Error>{ErrorPw}</S.Error>
                </S.InputWrapper>
            </S.UserWrapper>

            <S.InputWrapper>
                <S.Label>제목</S.Label>
                <S.Contents 
                    type="text"
                    placeholder="제목을 작성해주세요"
                    onChange={onChangeTitleContents} 
                />
                <S.Error>{ErrorTitleContents}</S.Error>
            </S.InputWrapper>

            <S.InputWrapper>
                <S.Label>내용</S.Label>
                <S.ContentText 
                    placeholder="내용을 작성해주세요" 
                    onChange={onChangeTitleInput}
                />
                <S.Error>{ErrorTitleInput}</S.Error>
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
                <S.SubmitButton onClick={SubmitButtonClick}>등록하기</S.SubmitButton>
            </S.ButtonWrapper>
        </S.Box>
        
    )
}