import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
// 삭제부분이 추가됨. ++삭제하기 버튼
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;

export default function MapBoardPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  // 패치보드를 통해서 데이터 받아오고 map을 통해서 줄을 만들었다
  // 삭제버튼을 추가, 삭제 버튼도 map 안에 있으니까 같이 여러개 만들어짐
  // mutation에는 어떤 게시글을 삭제하고 싶은지 알아야함.
  // 버튼에 아이디를 주고 el 먼트에 넘버를 주고
  // onClick시 event target id 에 그 넘버가 들어오게됨. -> html에서 가져와서 문자형이라 정수형으로 변환
  // 삭제 후 새로고침해야지 게시글이 없어짐
  // 즉, DB와 화면이 동기화가 안되어 있는 것. -> fetch를 다시 DB에서 꺼내와야한다.(refetch) *refetchQueries:
  // 새롭게 다시 패치해줘! refetch
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // <Fragment key={el.number}>
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
      {/* map을 사용할때 상위태그에 항상 Key 넣어주기!,key는 매번 다른값으로 들어가서 map이 구별할 수 있게 해줘야함 */}
    </div>
  );
}
//  중복이 없는 것으로 키값을 줘야함. ex) [number,id]
