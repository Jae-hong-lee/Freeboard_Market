import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("부모에요! ");

  let countLet = 0;
  const [countState, setcountState] = useState(0);

  // useMemo
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet);
    countLet++;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState);
    setcountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>===============================</div>
      <h1>이것은 컨테이너입니다!</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기</button>
      {/* jsx 적용 10번. */}
      {/* <button
        onClick={() => {
          onClickCountState();
        }}
      >
        카운트(state)+1 올리기
      </button> */}
      <div>===============================</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
