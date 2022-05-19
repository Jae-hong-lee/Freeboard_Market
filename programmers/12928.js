// 약수의 합

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n%i === 0) {
      answer += i
    }
  }
  console.log(answer)
  return answer;
}

solution(12)


// -----------
// for 문을 반으로 줄여서 같은 값으로 받아와볼게요 
// 자기자신만 넣어주고 for 문에는 자기자신에 반만큼만 돌려주면 같은 값이 나옴
// 자기자신에 반 이상은 약수가 없기 때문에

// 해당값에 /2 한 값 까지만 구해오면 효율성 부분에서 굉장히 올라감.
// 항상 효율성 생각.
function solution(n) {
  let answer = n;
  for (let i = 1; i < n/2; i++) {
    if (n % i) {
      answer += i
    }
  }
  return answer
}

// 메서드 풀이..
// reduce 를 통해 해당값을 더해준다.
// reduce를 사용하기 위해서는 배열이 필요 -> n만큼의 빈배열을 만들어본다.
// arr = New Array(n)-> 이 배열은 어처피 사용하지 못함. -> 속이 비어있는 텅빈 상자일 뿐이다.(메서드도 사용 X)
// 이때 필요한게 fill() -> arr = New Array(n).fill(1) : n만큼의 상자를 만들고 그안에 1을 넣는다.
function solution(n) {
  // const answer = new Array(n); // 12 empty items : 12개의 빈 아이템들이 있다.
  const answer = new Array(n)
  .fill(1)
  .reduce((acc, cur, i) => {   //acc: 누적값(배열에 첫번째), cur: 다음값 (배열에 두번째), i: 현재 데이터의 index값
    const num = cur + i
    return acc +(n%num ===0              // 누적값을 계속 넘겨주자, 안그럼 undefined
    ? num                   // 약수가 맞다면
    : 0 )                    // 약수가 아니라면


    // 1로 채워진 배열이라 다음값은 무조건 1이지만 인덱스는 증가하니까 계속 더해주면 1~n까지의 수를 가져올 수 있다.
    // 이걸 num 에 할당하고 n을 num으로 나누면 약수가 보인다 그걸 acc에 넣어주고 삼항연산자를 사용한다면
  }, 0) 

console.log(answer)
}