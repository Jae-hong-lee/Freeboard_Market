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
// --------------------------------
// mento
// 요소 하나하나 검사해서 p,y 값 확인
// 마지막 answer = p ===y 로 true false 출력 부분이 신기함.
function solution(s) {
  let answer = true;

  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }
  return p === y;
}
solution("pPoooyY");
// 문자열을 그냥 소문자나 대문자로 통일시키고 하나만 판별하게 해도 가능!
// 삼항 연산자도 가능
// s[i] === "p" ? p++ : y++;

// 오브젝트로 풀어보기.
//
function solution(s) {
  s = s.toLowerCase();
  // const obj = { p: 0, y: 0 };
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) obj[s[i]] = 0;
    obj[s[i]]++; // 객체안에 p,y 밖에 없으니까 상관없다.
    // 위쪽에서 p,y 초기값 설정안해도 가능.
  }
  return obj.p === obj.y;
}

// 메서드 풀이
function solution(s) {
  s = s.toLowerCase();
  let obj = {};
  s.split("").forEach((str) => {
    obj[str] === undefined ? (obj[str] = 1) : obj[str]++;
  });
  console.log(obj);
  return obj.p === obj.y;
}
// 오브젝트에 넣고 return 에서 boolean 판단.
// obj에 str에 해당하는 값이 undefined일때 1로 넣고, false: ++ 올려줌
