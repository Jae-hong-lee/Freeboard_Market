// container(부모) <- 로 이동 
// HTML (자식)

// 이것도 하나의 컴포넌트이다. 다만 JS만 안쓰는 것 뿐.

// import { WriterInput } from './boardWrite.styles'
import * as S from './boardWrite.styles'

export default function BoardWriteUI(props) {
  

  return(
    <div>
        작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} /> <br/>
        제목: <input type="text" onChange={props.onChangeTitle} /><br/>
        내용: <input type="text" onChange={props.onChangeContents} />
        <div>{props.data?.number}</div>
        <div>{props.data?._id}</div>
        <div>{props.data?.message}</div>
        <button onClick={props.onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </div>
)
}
