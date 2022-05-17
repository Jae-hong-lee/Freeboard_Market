import * as S from './Write.styles.js'


export default function WriteUI(props) {
  
  return (
    
    <>
      
      <S.writer> 작성자: {props.data?.fetchBoard.writer}</S.writer>
      <S.title> 제목: {props.data?.fetchBoard.title}</S.title>
      <S.contents> 내용: {props.data?.fetchBoard.contents} </S.contents> 
    </>
      
  )
}