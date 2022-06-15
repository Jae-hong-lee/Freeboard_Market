// // 1. any 타입 (그냥 자바스크립트랑 같음)
// const getAny = (args: any) => {
//   return args + 2;
// };
// const result1 = getAny("철수");

// // 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도!!)
// const getUnknown = (args: unknown) => {
//   if (typeof args === "number") {
//     return args + 2;
//   } else {
//     return "숫자를 넣어주세요!!!";
//   }
// };
// const result2 = getUnknown("철수");

// // 실제로 어느 타입이 들어올지 모르는 상황에서의 any 일때는 unknown 이라고 지정해주면 조금 더 안전한 코딩이 가능하다
// // result1 과 result2 의 타입을 확인해 보면 1은 any 가 나오는데 2는 number로 타입이 되어있다.

// // 아래 코드는 에러. unknown을 했을때.
// const getAny = (args: unknown) => {
//   return args + 2;
// };
// const result3 = getAny("철수");
