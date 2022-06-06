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
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  // 이전페이지
  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
      // startPage가 1이라면 조건문으로 return 으로 함수종료
    }
    setStartpage((perv) => perv - 10); // 뺴기 10
    refetch({ page: startPage - 10 });
  };

  // 다음페이지
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartpage((perv) => perv + 10); // 기존에 있던 startpage에 더하기 10해줘
      refetch({ page: startPage + 10 });
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>&lt; </span>
      {new Array(10).fill(1).map((_, index) => {
        if (index + startPage <= lastPage) {
          return (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {" "}
              {index + startPage}{" "}
            </span>
          );
        } else {
          return <span></span>;
        }
      })}
      <span onClick={onClickNextPage}>&gt;</span>
    </div>
  );
}
