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
  const [startPage, setStartpage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  // 이전페이지
  const onClickPrevPage = () => {
    setStartpage((perv) => perv - 10); // 뺴기 10
    refetch({ page: startPage - 10 });
  };
  // 다음페이지
  const onClickNextPage = () => {
    setStartpage((perv) => perv + 10); // 기존에 있던 startpage에 더하기 10해줘
    refetch({ page: startPage + 10 });
  };

  return (
    <div style={{ margin: "20px" }}>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {" "}
          {index + startPage}{" "}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
