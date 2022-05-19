

export default function ProductWriteUI (props){

  return(
    <div>
      상품 {props.isEdit ? "수정":"등록" }페이지 <br/><br/>
      판매자: <input type="text" onChange={props.onChangeSeller}/><br />
      상품명: <input type="text" onChange={props.onChangeName}/><br />
      상품내용: <input type="text" onChange={props.onChangeDetail}/><br />
      상품가격: <input type="text" onChange={props.onChangePrice}/><br />
      <button onClick={props.isEdit ?  props.onClickUpdate:props.onClickSubmit} >
        상품 {props.isEdit ? "수정":"등록"}하기
      {/* 수정버튼 추가후 isEdit로 판별해서 onClick 함수 실행 (create냐?, update냐?) */}
      </button>
    </div>
  )
}