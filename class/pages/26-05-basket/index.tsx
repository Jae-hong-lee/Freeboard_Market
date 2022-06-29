import { useQuery, gql } from "@apollo/client";
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

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketsEl) => basketsEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!");
      return; // 종료!
    }

    // 3. 장바구니에 담기 ++ 기존것에서 담기 버튼 누른것이 추가로 담겨야한다.
    const { __typename, ...newEL } = el;
    // typename이 삭제된 newEL 이 만들어지고 그것을 baskets에 넣어주는 것.
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
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}
