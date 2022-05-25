// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943?
function solution(num) {
  let answer = 0;
  while (true) {
    if (num == 1) {
      break;
    }
    if (answer > 500) {
      return -1;
    }
    if (num % 2 == 0) {
      num = num / 2;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
    answer++;
  }
  return answer;
}

// -----------------------------------
function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count++;
    // count 는 횟수, num을 재할당
    // 삼항 연산자를 이용해 짝수면 2로 나눈 몫, 홀수면 *3 +1
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    // num의 값이 1을 만났을때  count 를 리턴하면 횟수를 알 수 있음.
  }
  // 500을 돌아도 return 으로 들어가지 않았다면 -1 출력
  return -1;
}
// -----------------------------------
// 메서드 풀이
function solution(num) {
  let count = 0;
  // 500개의 빈 배열을 만들고, 1로 채워서 1이 500개 담겨있는 배열을 만든다.
  // reduce를 사용해서 cur을 사용하지 않고 acc만 가지고 reduce를 사용할거임.
  // reduce의 초기값은 num을 줌.
  const result = new Array(500).fill(1).reduce((acc) => {
    if (acc !== 1) {
      count++;
      // 500번 실행, 배열 메서드는 무조건 배열만큼 작동된다, return이나 break를 해줄수없음.
      return acc % 2 === 0
        ? acc / 2 // 짝수일때는 누적값을 나눠서 전달한다.
        : acc * 3 + 1; // 홀수일때는 곱하고 더하고 넘겨준다.
    } else {
      return 1;
    }
  }, num);
  // 조건문을 걸어서 원하는 부분만 실행하는 것 반복문이 중단된게 아니라 실행이 되지만 안쪽에 로직을 동작하지 않게 묶어 주는 것임
  // 원하는 구간에서 끊고 싶다면 조건문을 적절하게 사용해라.
  return result !== 1 ? -1 : count;
}
