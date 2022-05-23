// 짝수와 홀수

function solution(num) {
  // 삼항연산자 - 한줄처리
  // 삼항연산자는 한번만 사용하자. 두번이상 쓰게되면 가독성을 꼭 생각하도록.
  return num % 2 === 0 ? "Even" : "Odd";

  // if (num % 2 === 0) {
  //   return "Even"
  // } else {
  //   return "Odd"
  // }
}
