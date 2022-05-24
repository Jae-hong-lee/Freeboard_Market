import { ChangeEvent, useState } from "react"
import { useMutation } from '@apollo/client'
import BoardWriteUI from "./boardWrite.presenter"
import { CREATE_BOARD } from './boardWrite.queries'
import { UPDATE_BOARD } from "./boardWrite.queries"
import { useRouter } from "next/router"
import {IBoardWriteProps,IMyvariables } from './boardWrite.types'

export default function BoardWrite(props: IBoardWriteProps ){

    const [MyWriter, setMyWriter] = useState("")
    const [MyTitle, setTitle] = useState("")
    const [MyContents, setMyContents] = useState("")

    const router = useRouter()
    const [data, setData] = useState({})
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
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }

    // 수정하기 Onclick 함수 추가.
    const onClickUpdate = async() => {

        const myvariables: IMyvariables = {number: Number(router.query.number)}
        if (MyWriter)  myvariables.writer = MyWriter;
        if (MyTitle)  myvariables.title = MyTitle;
        if (MyContents)  myvariables.contents = MyContents;


        const result = await updateBoard({
            variables: myvariables
        })
        router.push(`/09-01-boards/${result.data.updateBoard.number}`)
    }


    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value)
    }
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value)
    }


    return(

      <BoardWriteUI 
        onClickGraphqlApi = {onClickGraphqlApi} 
        onClickUpdate = {onClickUpdate}
        onChangeWriter = {onChangeWriter} 
        onChangeTitle = {onChangeTitle}
        onChangeContents = {onChangeContents}
        data = {data} 

        isEdit = {props.isEdit}
        boardData = {props.boardData}

      />
    );
}
