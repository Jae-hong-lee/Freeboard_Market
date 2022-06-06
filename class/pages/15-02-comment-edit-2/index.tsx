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
  const [Myindex, setMyindex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickEdit = (event) => {
    const aaa = [...Myindex];
    aaa[Number(event.target.id)] = true;
    setMyindex(aaa);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index) => (
        <div key={el._id}>
          {Myindex[index] === false && (
            <MyRow key={el._id}>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정하기!!!
              </button>
            </MyRow>
          )}
          {Myindex[index] === true && <div>수정하기 화면입니다</div>}
        </div>
        // myindex 배열에 index번째가 true 이면 바뀌도록!
      ))}
    </div>
  );
}
