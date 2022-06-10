// HOF
import { useRouter } from "next/router";

export default function hofPage() {
  const router = useRouter();
  const onClickMove = (boardId) => (event) => {
    // router.push(`/${event.target.id}`);
    // 라우터로 이동하는 방식은 좋은방법X (id값을 사용해서 이동하는.) 중복이 생길경우 예상치 못한 id 주소로 갈 수 있다.
    // 그럼 어떻게 이동할까? -> HOF !
    router.push(`${boardId}`);
  };
  // 이렇게 생긴것을 위처럼 줄인 것(화살표함수로)
  // 클로저가 두개 세개 일 수도 있다! 함수안의함수안의 함수!(클로저가 두개가 생긴것) ++스코프체인도 두번한다.
  // 너무 깊게 쓰면 껍데기 함수가 종료가 안되어서 비효율적으로 될 수 있음. -> 메모리 낭비.
  // function onClick(boardId) {
  //   return function vvv(event) {
  //     console.log(boardId);
  //     console.log(event);
  //   };
  // }
  return (
    <div>
      <h1>HOF 연습페이지입니다.</h1>
      {[
        { id: "111", title: "Hello", writer: "LEE", contents: "Nike" },
        { id: "222", title: "222222", writer: "Jae", contents: "Friday" },
        { id: "333", title: "333333", writer: "Hong", contents: "GoHome" },
      ].map((el) => (
        <div key={el.id} onClick={onClickMove(el.id)}>
          {" "}
          {el.title} {el.writer}{" "}
        </div>
      ))}
    </div>
  );
}
