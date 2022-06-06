import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EditComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const focusRef = useRef();

  // 마운트, 언마운트
  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    focusRef.current?.focus();
    return () => {
      console.log("컴포넌트가 제거됩니다~");
    };
  }, []);

  // 수정
  useEffect(() => {
    console.log("컴포넌트가 변경되었습니다.");
  });

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };
  return (
    <>
      <input type="password" ref={focusRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
