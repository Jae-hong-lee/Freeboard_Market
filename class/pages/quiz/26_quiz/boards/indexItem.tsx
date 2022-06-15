import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function QuizBoardUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);
    const temp = baskets.filter((basket) => basket._id === el._id);
    console.log(temp);
    if (temp.length === 1) {
      alert("이미 담으신 물건입니다");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setIsEdit(true);
  };

  const onClickDelBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    baskets.forEach((em, index) => {
      if (em._id === el._id) {
        return baskets.splice(index, 1);
      }
    });

    localStorage.setItem("baskets", JSON.stringify(baskets));
    setIsEdit(false);
  };
  return (
    <div>
      {!isEdit && (
        <MyRow key={props.el._id}>
          <MyColumn>{props.el._id.slice(0, 4)}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickBasket(props.el)}>게시물 담기</button>
        </MyRow>
      )}
      {isEdit && (
        <MyRow key={props.el._id}>
          <MyColumn>{props.el._id.slice(0, 4)}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickDelBasket(props.el)}> 담기 취소 </button>
        </MyRow>
      )}
    </div>
  );
}
