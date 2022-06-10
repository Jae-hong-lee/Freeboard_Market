// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const pocket = [];
  for (let i = 0; i < nums.length; i++) {
    // 내가 가져갈 수 있는 최대 개수와 중복 데이터를 잡는 조건!
    if (
      pocket.length !== nums.length / 2 &&
      pocket.includes(nums[i]) === false
      // 데이터가 존재하지 않을때만 포켓에 넣어준다.
    ) {
      pocket.push(nums[i]);
    }
  }
  console.log(pocket);
  return pocket.length;
}
// 30ms
// includes 때문에 속도차이가 엄청나게남, set과의 속도차이

// Set 을 이용한 풀이
function solution(nums) {
  const pocket = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (pocket.size !== nums.length / 2) {
      pocket.add(nums[i]);
    }
  }
  console.log(pocket);
  return pocket.size;
}
// 2ms

// ==========================================
// 메서드 풀이
function solution(nums) {
  const pocket = new Set();
  nums.forEach((monster) => {
    if (pocket.size !== nums.length / 2) {
      pocket.add(monster);
    }
  });
  return pocket.size;
}
// 1.8 ms

// 리펙토링. 0.3ms
// 반복문을 사용하지 않고도 풀 수 있는 문제였음.
function solution(nums) {
  // 중복되는 폰켓몬이 제거된 고유한 폰켓몬의 종류의 수
  const pocket = new Set(nums).size;
  // 내가 가져갈 수 있는 폰켓몬의 최대개수
  const limit = nums.length / 2;
  // console.log(pocket, limit)
  //     내가 가져갈 수 있는 폰켓몬 갯수보다 고유한 폰켓몬의 종류의 수가 같거나 작을때
  return limit >= pocket ? pocket : limit;

  // if(limit >= pocket){
  //     return pocket
  // }else{
  //     return limit
  // }
}

// 첫문제풀이와 마지막 문제 풀이의 속도차이.
