import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../../../src/commons/libraries/utils";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketsEl) => basketsEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!");
      return; // 종료!
    }

    const { __typename, ...newEL } = el;

    baskets.push(newEL);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>날짜 {getDate(el.createdAt)}</MyColumn>
          <button onClick={onClickBasket(el)}> 등록하기</button>
        </MyRow>
      ))}
    </div>
  );
}
