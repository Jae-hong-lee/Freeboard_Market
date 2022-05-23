// 문자열 내 p와 y의 개수
// 대소문자 구별 X 알파벳 개수가 같다면 true 아니라면 false
function solution(s) {
  let answer = true;
  const arrP = s.split("").filter((el) => el === "P" || el === "p");
  const arrY = s.split("").filter((el) => el === "Y" || el === "y");

  if (arrP.length === arrY.length) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

solution("pPoooyY");
