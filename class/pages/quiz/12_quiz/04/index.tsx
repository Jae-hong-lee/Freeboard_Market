import { useState } from "react";

let count = 0;
export default function PrevstatePage() {
  const [state, setState] = useState(0);
  function sumAll() {
    count++;
    console.log(count);
    setState((prev) => prev + count);
  }

  return (
    <>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
// 1. state가 4씩 증가함, state의 초기값을 0으로 설정, 마지막 setState 에서 +4해줌.
// 2. count 변수 하나씩 증가.
