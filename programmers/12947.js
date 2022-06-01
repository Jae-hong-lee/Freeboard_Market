// 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let arr = String(x).split("");
  let Y = 0;
  arr.forEach((element) => {
    Y += Number(element);
  });
  if (x % Y === 0) {
    return true;
  } else {
    return false;
  }
}

solution(12);
solution(11);

// 멘토님 풀이 메떠드~~~~~~~~~~~~~~~~~
// reduce() 사용할것 -> x를 배열로 만들고 사용해야함.
// reduce를 쓰는 acc, cur이 문자형임 split을 쓸때 문자열로 변환시켯기 때문.
// 문자형을 숫자형으로 변환시켜주고 연산된 값이 리턴이 된다.
// x를 sum으로 나누어 떨어진다면 true, 아니라면 false
function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => {
      // console.log(acc, cur);
      return Number(acc) + Number(cur);
    });
  return x % sum === 0;
}
solution(12);
solution(11);

// 초기값이 숫자형일경우 초기값의 타입은 Number 이기 때문에 cur 값만 변환시켜줘도 됨
function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => {
      // console.log(acc, cur);
      return acc + Number(cur);
    }, 0);
  return x % sum === 0;
}
