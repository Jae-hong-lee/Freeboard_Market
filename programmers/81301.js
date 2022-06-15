// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < a.length; i++) {
    s = s.replaceAll(a[i], i);
  }
  console.log(s);
  return s;
}

solution("oneoneoneone"); // 1111
