// 같은 숫자는 싫어

// function solution(arr)
// {
//     var answer = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (answer.includes(arr[i])){
//         continue
//       } else{
//         answer.push(arr[i])
//       }
//     }

   
    
//     return answer;
// }



function solution(arr)
{
    var answer = [];
    answer.push(arr[0])
    // arr배열의 각각의 숫자를 가져오는 반복문
    for (let i = 1; i < arr.length; i++) {
      if (answer[answer.length-1] != arr[i]) {
        answer.push(arr[i])
      } 
    }
    return answer;
}
solution([1,1,3,3,0,1,1])


// null 생각.
// function solution(arr){
//   let answer = []
//   answer.push(arr[0])
//   arr.forEach(el,i => {
//     if (el === answer[answer.length-1]) {
      
//     }
    
//   });
// }

// solution([1,1,3,3,0,1,1])