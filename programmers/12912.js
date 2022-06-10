// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return b;
  } else {
    // 작은값구하기 (a와 b중에서 더 작은 값이 들어와야한다.)
    // const min = a > b ? b:a;
    const min = Math.min(a, b);
    // 큰값구하기 (a와 b중에서 더 큰 값이 들어와야한다.)
    // const max = a > b ? a:b;
    const max = Math.max(a, b);
    for (let i = min; i <= max; i++) {
      // console.log(i)
      answer += i;
    }
  }

  return answer;
}

// =======================================

// 메서드 풀이
// 작은값과 큰값사이의 데이터만 가져오면 된다.

function solution(a, b) {
  if (a === b) return b;

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  //     제일 큰값에서 작은값을 뺀 만큼의 배열을 만듬,
  //     메서드 사용을 위해 fill로 1로 채움.
  //     reduce를 사용하는데 초기값은 min으로 넣는다.
  return new Array(max - min).fill(1).reduce((acc, cur, i) => {
    // console.log(acc,cur,min)
    const sum = min + cur + i;
    console.log(acc, cur + min, i);
    //         sum이라는 상수값을 만들고 cur을 더하는데 cur은 고정값인 1을 가져오고 있음.
    // index 값도 더해줌
    // console.log(acc,sum)
    return acc + sum;
  }, min);
}
