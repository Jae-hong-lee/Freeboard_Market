// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    // 삼항연산자.
    // answer += signs[i] ? absolutes[i] : -absolutes[i]
    if (signs[i] === true) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}
// ===================================================================
// 메서드 풀이
// 연산된 값을 받아오고 있음 연산된 데이터의 결과를 받아온다 -> reduce
function solution(absolutes, signs) {
  return signs.reduce((acc, cur, i) => {
    return acc + (cur ? absolutes[i] : -absolutes[i]);
  }, 0);
}
// CUR 에는 signs 배열에서 하나씩 꺼내옴
// 두 배열의 길이가 같기 때문에 absolutes의 배열에 있는 것도 인덱스에 맞게 꺼내올 수 있음
