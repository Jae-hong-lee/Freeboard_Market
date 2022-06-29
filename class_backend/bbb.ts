// 데코레이터는 뭘까요?!

function qqq(aaaaaaaa: any) {
  console.log("==================");
  console.log(aaaaaaaa);
  console.log("==================");
}

@qqq
class Product {}

// 데코레이터 아래쪽에 있는 것이 qqq의 인자로 들어간다.
//
