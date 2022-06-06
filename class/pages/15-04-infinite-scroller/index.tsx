import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
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
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const loadFunc = () => {
    // 만약 데이터가 없다면 return 으로 멈춤!
    if (!data) return;

    fetchMore({
      // 현재 페이지 구하는 공식과 똑같음. data.fetchBoards 에 들어있는 수를 세는 거 빼고.
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
      <div>
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
    </InfiniteScroll>
  );
}
