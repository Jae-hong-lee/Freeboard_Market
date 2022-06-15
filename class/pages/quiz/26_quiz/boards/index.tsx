import { gql, useQuery } from "@apollo/client";
import QuizBoardUI from "./indexItem";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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

export default function QuizBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  return (
    <>
      <MyRow>
        <MyColumn>아이디 입니다</MyColumn>
        <MyColumn>글쓴이 !!!</MyColumn>
        <MyColumn>제목 !!!</MyColumn>
        <MyColumn> 장바구니 담기</MyColumn>
      </MyRow>
      {data?.fetchBoards.map((el) => (
        <QuizBoardUI key={el._id} el={el} />
      ))}
    </>
  );
}
