// 이상한 문자 만들기
// 첫번쨰 글자는 0번째 인덱스
// s 문자열 split 띄어쓰기로 배열에 담고 이중 for로 돌리고 j가 짝수번째 이면 대문자로 추가
// else : 소문자 추가.
// for [j] 는 한단어 한단어 보는 for 문이니까 끝날때마다 띄어쓰기 추가.
//  그 후 substr로 문자열로 만들고 맨뒤에 공백 지우기.

function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  // console.log(newStr)
  // let str = ''
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        let s = arr[i][j];
        answer += s.toUpperCase();
      } else {
        let s = arr[i][j];
        answer += s.toLowerCase();
      }
    }
    answer += " ";
  }
  return answer.substr(0, answer.length - 1);
}
// -------------------------------------------
// Mento
// 공백을 만나면 인덱스 0으로 초기화
// idx를 무조건 증가시키면 안댐 -> 공백 만나면 초기화, 아니라면 idx++
function solution(s) {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      idx = 0;
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      // idx가 짝수라면 대문자, 아니라면 소문자 삼항연산자.
      idx++;
    }
  }
  return answer;
}
solution("try hello world");

// 메서드
// 각문자열을 공백으로 쪼개고 단어를 또 쪼개서 배열을 만들고 map으로 한단어한단어 돌린다
// 삼항연산자로 나눠지면 대문자 아니라면 소문자
// 배열로 쪼개져 있는 것들을 join을 통해 문자열로 바꾸는데 두번 쪼갯으니까 두번 합침
function solution(s) {
  const answer = s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("")
    )
    .join(" ");
  return answer;
}
