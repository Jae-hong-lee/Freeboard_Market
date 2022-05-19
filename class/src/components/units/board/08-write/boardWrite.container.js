import { useState } from "react"
import { useMutation } from '@apollo/client'
import BoardWriteUI from "./boardWrite.presenter"
import { CREATE_BOARD } from './boardWrite.queries'
import { UPDATE_BOARD } from "./boardWrite.queries"
import { useRouter } from "next/router"

export default function BoardWrite(props){

    const [MyWriter, setMyWriter] = useState("")
    const [MyTitle, setTitle] = useState("")
    const [MyContents, setMyContents] = useState("")

    const router = useRouter()
    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickGraphqlApi = async() =>{
        const result = await callGraphql({
            variables:{
                writer : MyWriter,
                title : MyTitle,
                contents: MyContents
            }
        })
        console.log(result)
        setData(result.data.createBoard);
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }

    // 수정하기 Onclick 함수 추가.
    const onClickUpdate = async() => {
        const result = await updateBoard({
            variables: { 
                number: Number(router.query.number), 
                writer : MyWriter,
                title : MyTitle,
                contents: MyContents
            }
        })

        router.push(`/08-05-boards/${result.data.updateBoard.number}`)
        // 같은 이동 방식. 
        // router.push(`/08-05-boards/${result.query.number}`)
// 등록된 이후에 상세페이지 이동이니까 수정도 수정 이후에 수정 페이지로 이동

    }


    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }


    return(

      <BoardWriteUI 
        onClickGraphqlApi = {onClickGraphqlApi} 
        onClickUpdate = {onClickUpdate}

        onChangeWriter = {onChangeWriter} 
        onChangeTitle = {onChangeTitle}
        onChangeContents = {onChangeContents}
        
        // props 주기.
        data = {data}
        isEdit = {props.isEdit}
      />
    );
}
// 문제점이 있음
// 두가지가 빠져있다 
// 원래 작성했던 값들이 수정하기 화면에 갔을때 안나와 있음.
// 기존에 입력됬던 값들이 default 값으로 받아오기

// 지금은 페이지가 두개라 true false로 판별하지만
// 2개 이상일 경우 페이지 컴포넌트에서 props를 줄때 값을 주어서 이동할 수 있도록 판별
// presenter -> 
// props.aaa === "사과" && (<h1>사과페이지</>),
// props.aaa === "바나나" && (<h1>바나나페이지</>)
// ...이런식으로 판별하기