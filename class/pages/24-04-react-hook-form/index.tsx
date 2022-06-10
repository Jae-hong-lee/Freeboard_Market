// 리액트 훅 폼
// html 에 form 이란 태그를 활용해서 form 안에 있는 것들을 묶어서(편지봉투) 보낸다!
// form 안 버튼에게 type을 줄 수 있다. submit type을 주면 버튼을 누르면 onSubmit이 실행된다
// 함수를 바인딩해주면 눌렀을때 그 함수가 실행된다!

// form 안에서의 button은 default 타입이 submit이다!!!!!! 주의!!!! onClick 속성으로 하고 싶다면 type을 button으로 지정하자!
import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  // 등록하기 함수 -> handleSubmit이 조종해주는 함수 , DATA들을 메게변수로 data로 받음!
  const onClickSubmit = (data) => {
    console.log(data);
  };

  console.log("리렌더링 테스트!!");
  return (
    // onSubmit이 실행이 되는데 handle 먼저 실행됨 data들을 onClick함수에 집어넣어줌
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      <button>등록하기!!</button>
    </form>
  );
}

// 💡 ***register, handleSubmit, form***
// **register** : state를 등록하는데 필요한 모든 기능이 들어있습니다.
// **handleSubmit** : resister에 적힌 state를 등록해주는 함수 입니다.
// **form :** 실제 html에 있는 input들을 묶어주는 태그입니다.
