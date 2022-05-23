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
