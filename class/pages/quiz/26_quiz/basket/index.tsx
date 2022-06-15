// 장바구니 페이지
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id.slice(0, 4)}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}

// export default useAuth(MapBoardPage);
