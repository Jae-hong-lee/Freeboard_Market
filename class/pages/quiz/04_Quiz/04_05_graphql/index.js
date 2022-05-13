import { useState } from "react"
import { gql,useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String) {
            createBoard(writer: $writer, title: $title, contents : $contents)
            {
                _id
                number
                message
            }
    }
`
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async(event) =>{
        const result = await callGraphql({
            variables: {
                writer:writer, 
                title: title,
                 contents:contents}
        })
        console.log(result)
        setData(result.data.createBoard.message)

    }

    function onChangeWriter(event) {
        setWriter(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    function onChangeContents(event) {
        setContents(event.target.value)
    }


    return(
        <div>
            작성자: <input type="text" onChange={onChangeWriter} /> <br/>
            제목: <input type="text" onChange={onChangeTitle} /><br/>
            내용: <input type="text" onChange={onChangeContents} />
            <div>{data}</div>
            <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
        </div>
    )
}