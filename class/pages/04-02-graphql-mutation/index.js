import { useState } from "react"
import { gql,useMutation } from '@apollo/client'

// 그래픽 큐엘 변수 지정 = gql
const CREATE_BOARD = gql`
    mutation{
        createBoard(
        writer: "푸",
        title: "제목입니다~~~",
        contents : "내용입니다!!!")
        {
        _id
        number
        message
        }
    }
`

export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    // 그래프큐엘 요청하기
    const [callGraphql] = useMutation(CREATE_BOARD)


    const onClickGraphqlApi = async(event) =>{
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
        // await 위치 : 함수 시작하는 앞
        
        // graphql 방식 : 위에서 CREATE_BOARD 라는 변수를 지정해주고 실행시켜서 받아온다.
        // callGraphql  = axios.get("https://koreanjson.com/posts/1")
        const result = await callGraphql()
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