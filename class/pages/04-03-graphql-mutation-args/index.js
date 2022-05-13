import { useState } from "react"
import { gql,useMutation } from '@apollo/client'

// 그래픽큐엘에 문법 -> 흐름 이해하기
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents : $contents){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async(event) =>{
        const result = await callGraphql({
            variables:{
                writer : "철수",
                title : "제목!!",
                contents: "내용~!"
            }
        })
        console.log(result)
        setData(result.data.createBoard.message);
    }
    

    return(
        <div>
            <div>{data}</div>
            <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
        </div>
    )
}