// JS 기능영역 
// 부모 컴포넌트 -> container-presenter 부모로 이동 (이동하면 여긴 자식)

import { useState } from "react"
import { useMutation } from '@apollo/client'
import BoardWriteUI from "./boardWrite.presenter"
import { CREATE_BOARD } from './boardWrite.queries'

export default function BoardWrite(){
    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)

    const [MyWriter, setMyWriter] = useState("")
    const [MyTitle, setTitle] = useState("")
    const [MyContents, setMyContents] = useState("")

    const onClickGraphqlApi = async() =>{
        const result = await callGraphql({
            variables:{
                writer : MyWriter,
                title : MyTitle,
                contents: MyContents
            }
        })
        console.log(result)
        setData(result.data.createBoard.message);
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
      // UI라는 자식 컴포넌트를 받아옴!
      <BoardWriteUI 
        onClickGraphqlApi = {onClickGraphqlApi} 
        onChangeWriter = {onChangeWriter} 
        onChangeTitle = {onChangeTitle}
        onChangeContents = {onChangeContents}
        data = {data}
      />
    );
    // props = {onClickGraphqlApi: onClickGraphqlApi }
    
}