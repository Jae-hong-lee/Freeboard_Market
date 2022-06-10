// presenter 부분
import { useState } from "react";
export default function Presenter(child, age) {
  // 2-1 1번
  // return <div>{child}</div>;

  // 2-1 4번
  const [state, setState] = useState(0);
  const onclick = () => {
    setState((qwer) => qwer + 1);
    console.log(state);
  };

  // 2-1 2번
  return (
    <div>
      {child}는 {age}살 입니다.
      <div>
        <button onClick={onclick}>스테이츠 테스트 4번</button>
      </div>
    </div>
  );
}
