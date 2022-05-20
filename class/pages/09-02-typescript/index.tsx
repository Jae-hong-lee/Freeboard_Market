export default function TypescriptPage() {
  
// js + ts 부분!!!
// 타입추론 : 처음에 들어간 데이터를 보고 자동으로 타입을 줌.
  let aaa = "안녕하세요"
  aaa = 3; //error
// 타입명시 : 
  let bbb: string = "반갑습니다."
// 문자타입: (선언과 할당을 나눠서 해봄)
  let ccc: string
  ccc = "방가!!!"
  ccc = 3; //error
// 숫자 타입
  let ddd: number = 10
  ddd = "철수"//error
// 불린타입
  let eee: boolean = true
  eee = false
  eee = "false" // 이러한 에러를 잡아주는 것이 ts! ex) if("false") -> true로 작동 
// 배열타입
  let fff: number[] = [1,2,3,4,5 ] // 넘버만 들어가 있는 배열이다!
  let fff2: number[] = [1,2,3,4,5 ,"반가워"] // error

  let ggg = [ "영희","철수","훈이" ] // string이 들어있는 배열
  let ggg2 = [ "영희","철수","훈이",1 ] // 이건 가능 , 앞에서 명시를 안해줘서 ts가 알아서 추론을 한 것(문자,숫자 둘다 들어가는 배열!)
    //원하지 않다면 string[] 명시 : 문자만 들어있는 배열을 원해!! 하면 ggg2는 숫자가 들어가 있어 error 뜨게됨
// 명시하지 않을시, (string | number)[] 타입으로 추론된다.

// 객체타입: 객체타입은 없음, 각각의 키 벨류가 들어있는 것은 우리가 만드는 것이기 때문에 틀이 없는 것임.
// 타입은 없지만 초기값을 바탕으로 ts가 추론함.
  let profile = {
    name: "철수",
    age: 8,
    school: "람쥐초"
  }
  profile.age = "8살" // 변경불가!!! 위에서 age가 number 타입으로 추론되었기 때문에
  // 가능하게 할려면 위에서 타입을 명시해주자!,

  interface IProfile {
    name:string,
    age: number | string,
    school: string
  }
  let profile2: IProfile = {
    name: "철수",
    age: 8,  // 위에서 string으로 명시해서 이부분에서 에러 그렇다면 위에서 numer | string 으로 명시를 다시해주자
    school: "람쥐초"
  }
  profile2.age = "8살" 

// 함수타입
  const add = (don1: number, don2: number, unit: string) :string => {
    return don1 + don2 + unit
  }
  const result = add(1000, 2000, "원")
// 이때 타입은 보내는 곳에 적는 것이 아닌 인자를 받아주는 곳에 적어주어야함.
// const add = (don1, don2, unit) => {}
// 그러면 return 에서 나오는 것에 타입은 인자들 들어오고 옆에 적어주자
//  const add = (don1: number) :string
// 그렇다면 result 는 string으로 결과값이 들어오게 되니까 result 는 string 타입으로 추론된다!!!
  return (
    <div> 
      타입스크립트 연습하기!
    </div>
  ) 
}