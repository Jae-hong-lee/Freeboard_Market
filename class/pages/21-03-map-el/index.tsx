// map의 el
export default function MapElPage() {
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el: ", el);
  //     console.log("index: ", index);
  //   });
  //   return <></>;

  // 함수의 매개변수이기 때문에 이름이 바뀌어도 상관없다
  // ====================================
  //   ["철수", "영희", "훈이"].map((aws, gcp) => {
  //     console.log("el: ", aws);
  //     console.log("index: ", gcp);
  //   });
  //   return <></>;

  // 함수선언식 방법
  // ====================================
  // 여기서 map 에러 뜨는건 return 이 없기 때문 forEach로 바꿔준다면 실행될 것이다.
  // ["철수", "영희", "훈이"].forEach(function (aws, gcp) {
  //   console.log("el: ", aws);
  //   console.log("index: ", gcp);
  // });
  // return <></>;

  // el 과 index 바꾸기
  // ====================================
  // 들어가는 메개변수가 중요한 것이지 이름은 중요치 않다.
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });
  return <></>;
}
