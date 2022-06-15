// 시저암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

// 문제접근
// 아스키코드로 판단 알파벳은 26개.
// ++ 대문자 일때, 소문자 일때 구분해서 아스키코드로 a - s[i] % 26 를해서 나머지 값구하고
// 아스키코드로 다시 변환해서 알파벳 만들어야 하니까 +a (아스키코드 수)

// z에서 한번 더 가면 a -> 이거땜에 %26 으로 나머지 값 구하는 거.

// 시간은 많이 걸릴듯 s라는 배열을 바꿔서 쓰는 것이라?

// 메서드 풀이
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  return s.split("").reduce((acc, cur) => {
    // 대소문자 검증
    const word = lowerCase.includes(cur) ? lowerCase : upperCase;
    // 인덱스 위치 + n
    let idx = word.indexOf(cur) + n;

    // 더한 수가 26이상이면 26을 빼기.
    if (idx >= 26) {
      idx -= 26;
    }
    // 삼항 연산자로 공백이라면 공백을 공백이 아니라면 word[idx]값을 가진 단어를 acc++
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
}

// 유니코드 풀이!!!!
// 문자들은 각각의 유니코드를 가지고 있다.
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let code = s[i].charCodeAt() + n;
    // console.log(code)
    // console.log(String.fromCharCode(code))
    if (code > 122 || (code > 90 && code - n < 97)) {
      // 소문자 z(122), 대문자 Z(90) &&
      // 기존의 유니코드 번호가 소문자 일경우
      code -= 26;
    }

    answer += String.fromCharCode(code);
  }

  return answer;
}
