import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
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

  // 수정하기 가이드
  const [Myindex, setMyindex] = useState(3);
  const onClickEdit = (event) => {
    setMyindex(Number(event.target.id)); // event target id 부분이 state로 들어감
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index) => (
        <div key={el._id}>
          {index !== Myindex && (
            <MyRow key={el._id}>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정하기!!!
              </button>
            </MyRow>
          )}
          {index === Myindex && <div>수정하기 화면입니다</div>}
        </div>
      ))}
    </div>
  );
}
