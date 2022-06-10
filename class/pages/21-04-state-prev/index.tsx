import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function counter() {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // 2. 함수 선언식
    // setCount(function (prev) {
    //   // 로직 추가가능 (if, for 등) , return 만 해주면 됨
    //   return prev + 1;
    // });

    // 3. 매개변수 바꿔보기 (map, forEach도 마찬가지.)
    setCount((abasdasd) => abasdasd + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>카운트 올리기!!!</button>
    </div>
  );
}
