import { useMutation} from "@apollo/client"
import { useState } from "react"
import { useRouter} from "next/router"

import {UPDATE_BOARD} from './Write.create.board'
import { CREATE_BOARD } from './Write.create.board'
import WriteUI from '../news/Write.presenter'

// JS
export default function CreateBoardPage(props){
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [TitleContents, setTitleContens] = useState("")
    const [TitleInput, setTitleInput] = useState("")

    const [ErrorUser, setErrorUser] = useState("")
    const [ErrorPw, setErrorPw] = useState("")
    const [ErrorTitleContents, setErrorTitleContents] = useState("")
    const [ErrorTitleInput, setErrorTitleInput] = useState("")

    const router = useRouter()
    const [isActive, setIsActive]  = useState(false)
    
    function onChangeUser(event) {
        setUser(event.target.value)
        if (event.target.value !=="") {
            setErrorUser("")
        }
        if (event.target.value &&Password &&TitleContents &&TitleInput ){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }
    function onChangePw(event) {
        setPassword(event.target.value)
        if (event.target.value !=="") {
            setErrorPw("")
        }
        if (User && event.target.value &&TitleContents &&TitleInput ){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }
    function onChangeTitleContents(event) {
        setTitleContens(event.target.value)
        if (event.target.value !=="") {
            setErrorTitleContents("")
        }
        if (User && Password && event.target.value && TitleInput ){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }
    function onChangeTitleInput(event){
        setTitleInput(event.target.value)
        if (event.target.value !=="") {
            setErrorTitleInput("")
        }
        if (User && Password && TitleContents && event.target.value ){
            setIsActive(true)
        }else {
            setIsActive(false)
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

    const[updateBoard] = useMutation(UPDATE_BOARD)
    const Editvariables = {}
    if (TitleContents) Editvariables.title = TitleContents
    if (TitleInput) Editvariables.contents = TitleInput

    const UpdateButtonClick = async() => {
        try {
            await updateBoard({
                variables: {
                    updateBoardInput: Editvariables,
                    password: Password,
                    boardId:router.query.boardId
                }
            })
            alert("게시물수정이 완료되었습니다!")
        } catch (error) {
            alert(error.message)
        }
        router.push(`/boarder/${router.query.boardId}`)

    }



    return(
      <WriteUI
      SubmitButtonClick = {SubmitButtonClick}
      UpdateButtonClick = {UpdateButtonClick}
      
      //   수정버튼 추가
      onChangeTitleInput = {onChangeTitleInput}
      onChangeTitleContents = {onChangeTitleContents}
      onChangePw = {onChangePw}
      onChangeUser = {onChangeUser}
      ErrorUser = {ErrorUser}
      ErrorPw = {ErrorPw}
      ErrorTitleContents = {ErrorTitleContents}
      ErrorTitleInput = {ErrorTitleInput}
        
      
      data = {props.data}
      isEdit = {props.isEdit}
      isActive = {isActive}
      />)
}