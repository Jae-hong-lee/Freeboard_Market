import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const [count, setCount] = useState(99);
  const router = useRouter();

  // 생명주기 하나로 통합
  useEffect(() => {
    console.log("마운트됨!!!");
    // 포커스 깜빡깜빡
  }, []);

  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  });
  //

  useEffect(() => {
    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
    // 채팅방 나가기
    // api 요청!!!
  }, []);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  // useEffect 의 잘못된 사용 예제
  // useEffect 안에서 setState는 무한루프를 불러일으킬 수 있고 비효율적임.
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
