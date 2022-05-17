import * as S from './boardWrite.styled'

export default function BoardWriteUI(props) {
  
  return (
    <div> 
        <S.onClick4 onClick={props.onClickMove}> 4 게시글로 이동합니다.</S.onClick4> <br/><br/>
        <S.onClick5 onClick={props.onClickMove2}>5 게시글로 이동합니다.</S.onClick5> <br/><br/> 
        <S.onClick7 onClick={props.onClickMove3}>7 게시글로 이동합니다.</S.onClick7> 
    </div>
  )
}