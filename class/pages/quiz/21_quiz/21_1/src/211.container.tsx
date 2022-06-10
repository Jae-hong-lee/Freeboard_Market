import Presenter from "./211.presenter";

export default function Container() {
  // 2-1 1번
  // const child = "테스트 1번";
  // return <>{Presenter(child)}</>;

  // 2-1 3번
  // ["철수", "영희", "훈이", "맹구"].map((_, index) => {
  //   console.log(`${_}는 ${index}번째 칸에 들어있습니다.`);
  // });

  // 2-1 4번은 presenter에 있습니다.

  // 2-1 2번
  const child = "테스트 2번";
  const age = 26;
  return <>{Presenter(child, age)}</>;
}
