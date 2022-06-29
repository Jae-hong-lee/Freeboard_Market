import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("자식이에요");

  return (
    <>
      <div>===============================</div>
      <h1> 이것은 프리젠터 입니다. </h1>
      <div>===============================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
