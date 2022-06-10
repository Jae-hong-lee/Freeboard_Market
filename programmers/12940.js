// 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940
function solution(n, m) {
  let answer = [];
  const gcd = function GCD(n, m) {
    if (m === 0) {
      return n;
    }
    return GCD(m, n % m);
  };

  answer = [gcd(n, m), (n * m) / gcd(n, m)];

  return answer;
}
// 두수의 공통되는 약수중에 제일 큰수 - 최대공약수
// 두수의 공통되는 배수중에 제일 작은수 - 최소공배수

function solution(n, m) {
  // const biggest = n > m ? n : m;
  const biggest = Math.max(n, m); // Math.max가 더 안정적이다.

  // 최대공약수
  let max = 0; // 공약수 중에서 제일 큰 수 저장
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      // n,m 두수 모두 나누어 떨어질때 공약수, 제일 큰 수를 구해야함
      max = i;
      // 가장 마지막에 들어가는 i값이 max에 들어가서 최대공약수를 구할 수 있음.
    }

    // 최소공배수
    // i값을 가장 큰값을 넣고 i 값에 큰값을 다시 더해줌
    // let min = 0; // 공배수 중에서 가장 작은 수 저장
    for (let i = biggest; i <= n * m; i += biggest) {
      if (i % Math.min(n, m) === 0) {
        // min = i;
        // break;
        return [max, i];
      }
    }
  }
  // return [max, min];
}

function solution(n, m) {
  // 유클리드 호제법
  // -최대공약수를 구하는 알고리즘(공식)
  // a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
  // 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
  // 나머지 값이 0이 되지 않으면, 큰 수(a)에 작은 수(b)를 할당하고
  // 작은 수(b)에는 나눴던 나머지 값을 할당한다.
  // 반복해서 나머지 값이 0이 나오면, 이때 나눴던 작은 수 (b) 가 최대공약수가 된다.

  let a = Math.max(n, m); // 큰수
  let b = Math.min(n, m); // 작은수
  let r = 0; // a를 b로 나눴을 때의 나머지 값

  while (a % b > 0) {
    r = a % b; // 큰수에서 작은 수를 나눈 나머지 값을 저장
    a = b; // 큰 수는 나눴을 때의 작은 수를 할당
    b = r; // 작은 수는 나머지 값을 할당
    console.log(a, b, r);
  }
}
