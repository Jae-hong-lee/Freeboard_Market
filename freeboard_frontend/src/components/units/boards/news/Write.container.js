import { useMutation} from "@apollo/client"
import { useState } from "react"
import { useRouter} from "next/router"

import { CREATE_BOARD } from './Write.create.board'
import WriteUI from '../news/Write.presenter'


export default function CreateBoardPage(){
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [TitleContents, setTitleContens] = useState("")
    const [TitleInput, setTitleInput] = useState("")

    const [ErrorUser, setErrorUser] = useState("")
    const [ErrorPw, setErrorPw] = useState("")
    const [ErrorTitleContents, setErrorTitleContents] = useState("")
    const [ErrorTitleInput, setErrorTitleInput] = useState("")

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
      <WriteUI
      SubmitButtonClick = {SubmitButtonClick}
      onChangeTitleInput = {onChangeTitleInput}
      onChangeTitleContents = {onChangeTitleContents}
      onChangePw = {onChangePw}
      onChangeUser = {onChangeUser}
      ErrorUser = {ErrorUser}
      ErrorPw = {ErrorPw}
      ErrorTitleContents = {ErrorTitleContents}
      ErrorTitleInput = {ErrorTitleInput}

      />)
}