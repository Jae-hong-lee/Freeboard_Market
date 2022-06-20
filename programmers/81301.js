// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

// replaceAll 이 함수가 아니라고 error 뜸
// function solution(s) {
//   const a = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   for (let i = 0; i < a.length; i++) {
//     s = s.replaceAll(a[i], i);
//   }
//   console.log(s);
//   return s;
// }

// 멘토 풀이 - 메서드 =================================================
const a = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
// function solution(s) {
//   a.forEach((num, i) => {
//     s = s.split(num).join(i);
//   });
//   console.log(s);
//   return Number(s);
// }

// 정규표현식 풀이
function solution(s) {
  // s = s.replace( /zero/ , "0")  // 이런식으로 바꿔줄것임, 근데 이렇게 하면 가장 처음 값만 변경됨
  // s = s.replace( /zero/g , "0")  // g 를 붙여서 전체 문자열을 탐색해서 바꿔준다. (global)
  // 하나하나 다 바꿔주면 됨. 0~9 => 반복되는 코드니까 줄여주자.
  // 정규표현식 안에는 변수를 할당할 수 없다. 근데 할당시켜주는 기능이 하나 있다. (regExp)
  for (let i = 0; i < a.length; i++) {
    const regExp = RegExp(a[i], "g");
    s = s.replace(regExp, i);
  }
  // 동적으로 데이터를 변경시켜줄 수 있다.
  console.log(s);
  return Number(s);
}
solution("oneoneoneone"); // 1111

// RegExp : 정규 표현식에 변수를 할당할 수 있게 도와준다.
// const regExp = new RegExp();
// const name = "C BALL";
// const regExp = new RegExp(name);
// console.log(regExp);  // return /C BALL/
// regexp 에도 글로벌을 줄 수 있다.
// const regExp = new RegExp(name, "g");
