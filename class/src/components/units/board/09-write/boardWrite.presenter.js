import * as S from './boardWrite.styles'

export default function BoardWriteUI(props) {
  

  return(
    <div>
      <h1> {props.isEdit ? "수정":"등록"}페이지</h1>

        작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} defaultValue = {props.data && props.boardData.fetchBoard.writer} /> <br/>
        제목: <input type="text" onChange={props.onChangeTitle} defaultValue = {props.data && props.boardData.fetchBoard.title} /><br/>
        내용: <input type="text" onChange={props.onChangeContents} defaultValue = {props.data && props.boardData.fetchBoard.contents}/>
        <div>{props.data?.number}</div>
        <div>{props.data?._id}</div>
        <div>{props.data?.message}</div>
        <button onClick={props.isEdit ? props.onClickUpdate:props.onClickGraphqlApi}> 
          {props.isEdit ? "수정":"등록"} 하기
        </button>
        {/* isEdit 에 따라 onClick 함수도 다른 것이 실행된다. */}
    </div>
)
}
