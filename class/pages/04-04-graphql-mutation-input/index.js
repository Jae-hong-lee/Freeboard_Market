import { useState } from "react"
import { gql,useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard(
        $writer: String, 
        $title:String, 
        $contents: String) {
        
            createBoard(
                writer: $writer, 
                title: $title, 
                contents : $contents){
        _id
        number
        message
        }
    }
`
// 인풋창 3개를 만들것이다. 하드코딩 할 수는 없기 때문.
// State를 활용 ,input 3개 , onchange 3개
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)
// onChange 로 State 저장
    const [MyWriter, setMyWriter] = useState("")
    const [MyTitle, setTitle] = useState("")
    const [MyContents, setMyContents] = useState("")
// onClick 시 저장된 State를 통해 그래프 큐엘에 API 요청.
    const onClickGraphqlApi = async(event) =>{
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
        <div>
            작성자: <input type="text" onChange={onChangeWriter} /> <br/>
            제목: <input type="text" onChange={onChangeTitle} /><br/>
            내용: <input type="text" onChange={onChangeContents} />
            <div>{data}</div>
            <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
        </div>
    )
}

// 포토폴리오 부분으로 넘어가게 된다면...객체 부분은 어떻게 처리하나
//  4-5 객체 부분 확인