// 자릿수 더하기
function solution(n) {
  let num = 0;
  let answer = String(n).split("");
  num = answer.reduce((acc, cur) => acc + Number(cur), 0);
  return num;
}

// ----
// String(123), toString(123)의 차이점.
// 스트링 메서드는 문자열로 바꿔주는데 toString은 에러.
// toString은 변수 할당이 꼭 있어야지 쓸 수 있는 메서드
// toString : MDN (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

function solution(n) {
  n = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
}

// --- 메서드
// acc, cur을 전부 Number 타입으로 씌어주던가 위에 내가 풀었던 것처럼 acc를 첨부터 0으로 Number타입으로 주면 된다.
