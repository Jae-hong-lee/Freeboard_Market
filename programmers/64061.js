// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  // 1. 크레인이 이동하는 위차값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let j = 0; j < board.length; j++) {
      // console.log(moves[i], board[j]);
      const doll = board[j][moves[i] - 1];
      if (doll !== 0) {
        board[j][moves[i] - 1] = 0;

        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.pop();
          break;
        }
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

// ---------------- 메서드 풀이 ------------------------------

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    // console.log(move)
    let stop = false;
    // 반복문을 실행할 때 해당 로직을 실행하지 않게 하는 변수
    // stop 문이 true 가 될때, 조건문이 작동하지 않는다.
    board.forEach((location) => {
      // console.log(move, location[move-1], location)
      const doll = location[move - 1];
      if (stop === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            bucket.splice(bucket.length - 1, 1);
            answer += 2;
          } else {
            bucket.push(doll);
          }
          stop = true;
        }
      }
      // console.log(doll, bucket, stop, location)
    });
  });
  console.log(bucket);
  return answer;
}
