// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917
function solution(s) {
  var answer = "";
  const arrUp = [];
  const arrLo = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == s.charAt(i).toUpperCase()) {
      arrUp.push(s.charAt(i));
    } else {
      arrLo.push(s.charAt(i));
    }
  }

  arrLo.sort().reverse();
  arrUp.sort().reverse();

  answer = arrLo.concat(arrUp).join("");

  return answer;
}

// -------------------------------

// str은 길이 1이상인 문자열
// 대소문자로 구성, 대문자는 소문자보다 작은 것으로 간주
// sort를 이용한 풀이
function solution(s) {
  let answer = "";
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  // 내림차순
  arr.sort((a, b) => (a > b ? -1 : 1));
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  console.log(answer);
  return answer;
}
solution("Zbcdefg");

// -----------------------------
// 메서드 사용 풀이:
// 문자열 배열로 바꾸는 split()
// sort로 내림차순으로 바꾸고 join으로 문자열로 출력해서 끝.
function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
  return answer;
}
solution("Zbcdefg");
