// K번째 수
// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let a = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    // console.log(array);
    // console.log(a);
    answer.push(a[commands[i][2] - 1]);
  }
  return answer;
}

// 멘토님 풀이
// -----------------------------
function solution(array, commands) {
  const answer = [];
  // 이중배열, 이차원배열
  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];
    // index값은 0부터 시작. -1하는 이유 , j번째 그대로 받아오니까 j 그대로
    const result = array.slice(i - 1, j);
    // 자르고 sort 오름차순 정렬을 사용해 정렬!
    result.sort((a, b) => a - b); // 숫자타입에서만 가능함. a < b ? -1: 1 이라는 삼항연산자도 가능
    // K번째는 3번째(253기준) 즉 인덱스에서는 2번째
    answer.push(result[k - 1]);
  }
}

// ------------------
// 메서드 풀이
function solution(array, commands) {
  // const answer = commands.map((num) => console.log(num));
  // 1. 맵으로 commands를 돌리고
  const answer = commands.map((num) => {
    // 2. num 에 첫번째 , 두번째 값을 기준으로 slice : 첫번째는 인덱스값 생각해서 -1 해줌.
    // num = commands에서 배열 하나씩 빼오는거 (배열안에 배열)
    const result = array.slice(num[0] - 1, num[1]).sort((a, b) => a - b);
    // 3. sort() 오름차순 정렬을 이용해서 정렬시킴
    return result[num[2] - 1];
    // 4. num[2] 번쨰 길이에 수(인덱스 값 생각 -1)
  });
  return answer;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

// 설명X
function solution(array, commands) {
  const answer = commands.map((num) => {
    const result = array.slice(num[0] - 1, num[1]).sort((a, b) => a - b);
    return result[num[2] - 1];
  });
  return answer;
}
