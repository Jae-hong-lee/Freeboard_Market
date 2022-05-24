// prev
// prev 는 이전 값을 이야기하다.
// prev가 없는데? -> 그때 prev는 초기값임, 있다면 그 값을 가져옴(임시저장공간에)
import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counter() {
    // count 초기값이 0이라 0+1 이 계속 반복되는 것임.
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 기존값 +1
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div id="count"> {count} </div>
      <button onClick={counter}>카운트 올리기!!!</button>
    </div>
  );
}
