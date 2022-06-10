// 피보나치 수
// https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

function solution(n) {
  const answer = [0, 1];
  // 0번째 피보나치 수의 결과를 0번쨰 인덱스에 저장
  // 1번째 피보나치 수의 결과를 1번쨰 인덱스에 저장
  for (let i = 2; i <= n; i++) {
    // console.log(i, answer[i - 1], answer[i - 2]);
    // answer[i] = answer[i - 1] + answer[i - 2];
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  // i-1 와 i-2를 더하고 나눈 나머지를 가져오는것이 아니다.
  // ((i-1 %10) + (i-2 %10)) %10 와 동일하다는 것이다.

  // console.log(answer);
  // return answer[n];
  // return answer[n] % 12345567;(int 범위를 벗어나짐)
  return answer[n];
  // n번째 피보나치 수 : 뺴먹은거 있음 -> % 12345567 -> 그래도 틀림. (int 범위를 벗어나짐)
  // 나누는 순간을 피보나치수를 저장할때 나눠주면? 그래도 틀림
  //   int 범위를 판단하는 함수 Number.MAX_SAFE_INTEGER
  // 나누는 이유 -> int 단위를 출력할수 있는 범위만큼!만 출력해줘
}

// ====================================
// 메서드 풀이
// 피보나치 수가 연산된 결과를 리턴하고 있으니까 -> reduce()
// 근데 준비물 prev가 필요함 : 0번째 피보나치 수의 결과
function solution(n) {
  let prev = 0;
  return new Array(n - 1).fill(1).reduce((acc) => {
    const sum = (prev + acc) % 1234567;
    prev = acc;
    return sum;
  }, 1);
  // n개만큼의 배열, 메서드 사용을 위해 1로 채워줌.
  // cur은 사용하지 않고 누적값만을 통해서 풀어볼 거임.
  // 여기에 초기값을 1로 둔다. -> 1번째 피보나치 수의 결과를 초기값으로 사용하는 것
  // 초기값을 1로 두었으니 acc는 1을 처음으로 가져온다.
  // ex)sum에는 2번쨰 피보나치수 prev = acc로 1번째 피보나치수로
  // 실패 -> 1번 더 돌아서 그럼 Array 만들때 -1로 줄여주고 sum에 % 해주고 return sum
}
