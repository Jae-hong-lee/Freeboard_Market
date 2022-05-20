// 문자열 내림차순으로 배치하기

function solution(s) {
  var answer = '';
  const arrUp = [];
  const arrLo = [];
  for(let i=0;i<s.length;i++){
      if (s.charAt(i)== s.charAt(i).toUpperCase()){        
          arrUp.push(s.charAt(i));
      }else{
          arrLo.push(s.charAt(i));
      }
  }
  arrLo.sort().reverse();
  arrUp.sort().reverse();
  answer = arrLo.concat(arrUp).join('');

  return answer;
}