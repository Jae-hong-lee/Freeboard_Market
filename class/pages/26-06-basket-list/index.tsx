import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// 장바구니 보여주는 곳! 로컬스토리지에 담은 값 보여주는 곳
const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}

export default function MapBoardPage() {
  const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <div>
      {/* typeError El 타입을 명시, 아니면 State에서 타입 명시해주기. */}
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
