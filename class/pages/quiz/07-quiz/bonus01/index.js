const classmates = [
  { name: "철수", age: 10, school:"토끼초등학교" },
  { name: "영희", age: 13, school:"다람쥐초등학교" },
  { name: "훈이", age: 11, school:"토끼초등학교" }
]

// for (let i = 0; i < classmates.length; i++) {
//   if(classmates[i].school === "토끼초등학교") {
//     classmates[i].candy = 10;
//   }
// }
classmates.filter(el => el.school ==="토끼초등학교").map((ele) => {ele.candy = '10개', ele.name = ele.name+" 어린이"})

console.log(classmates)


// classmates.map