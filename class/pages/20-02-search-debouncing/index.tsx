import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import _ from "lodash";
// lodash는 일반적으로 _ 로 import 한다!
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  // const [search, setSearch] = useState("");
  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  // 사용법은 setTimeout이랑 비슷하다
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    // 1초 딜레이 후에 실행되야 하는것은 refetch 이기 때문에 위치를 디바운싱 안으로 이동! (onChage에서)
  }, 1000);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // 체인지 할때마다 디바운싱이 실행되는데 매번 실행되는 것이 아닌 1초 기다렸다가 실행이 되는 것.
    // event.target.value 의 위치도 조심, 디바운스 안에 있는 것이 아님.
  };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
