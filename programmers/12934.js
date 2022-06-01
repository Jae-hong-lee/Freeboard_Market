// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934

// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// function solution(n) {
//   var answer = -1;
//   let x = Math.floor(n ** 0.5); //제곱근 구하는 방식
//   console.log(x);
//   if (n ** 0.5 === x) {
//     return (x + 1) ** 2;
//   }
//   return answer;
// }

function solution(n) {
  let answer = -1;
  const x = Math.sqrt(n);
  if (Math.sqrt(n) === Math.floor(x)) {
    answer = (x + 1) ** 2;
  }
  return answer;
}
solution(121);
solution(3);

// -----------------------------------------------
// 멘토님 풀이
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    return (i + 1) * (i + 1);
    // answer = i + 1;
    // answer = answer * answer;
  }
  return -1;
}
// ================================
// 제곱만드는법
// Math.pow(11, 2) // 11을 2제곱 하겠다~
// isInteger() // 정수가 맞다면 true, 아니라면 False
function solution(n) {
  const answer = Math.sqrt(n);
  if (Number.isInteger(answer)) {
    answer++;
    return answer ** 2;
  }
  return -1;
}
// ----------------------
function solution(n) {
  let answer = Math.sqrt(n);
  if (n % answer === 0) {
    answer++;
    return answer ** 2;
  }
  return -1;
}
