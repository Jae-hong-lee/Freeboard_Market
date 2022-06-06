import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {/* new Array, fill 활용 */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}

      {/* 맵을 할때 index가 들어옴 , index는 0부터 시작이니까 +1 */}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}

      {/* 맵 활용 */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* 1,2,3 클릭시 각 페이지로 이동. */}
      {/* <span id="1" onClick={onClickPage}>1</span>
      <span id="2" onClick={onClickPage}>2</span>
      <span id="3" onClick={onClickPage}>3</span> */}
    </div>
  );
}
