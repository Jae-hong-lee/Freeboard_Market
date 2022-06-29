import axios from "axios";

// `http://numbersapi.com/random?min=1&max=200`,
//   `http://koreanjson.com/posts/${num}`,
//   `http://koreanjson.com/posts?userId=${userId}`;

export default function CallbackPromiseAsyncAwaitPage() {
  // Callback ========================================
  const onClickCallback = () => {
    // axios 없을때 사용하던 방식
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    // API 를 요청하고 요청이 다되면 콜백함수를 실행시켜줘!!!
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0]; // 150 (랜덤숫자)

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      // 이제 bbb가 끝나면 실행딜 콜백함수
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        // ccc가 끝나면 실행될 콜백함수
        ccc.addEventListener("load", (res: any) => {
          console.log(res); // 최종 결과값
        });
      });
    });
  };
  // Promise =============================================

  const myaxios = () => {
    return new Promise((resolve, reject) => {
      // 오래 걸리는 작업 (외부 API 요청등..) => XMLHttpRequest 사용하기

      // 성공
      resolve("철수");

      // 실패
      // reject("에러발생!");
    });
  };

  const onClickPromise = () => {
    console.log("여기는 1번입니다!!!!");
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        console.log("여기는 2번입니다!!!!");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번입니다!!!!");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번입니다!!!!");
        console.log(res);
        // console.log("최종결과값");
      });
    console.log("여기는 5번입니다!!!!");
  };
  const onClickAsyncAwait = async () => {
    const num = await axios.get("http://numbersapi.com/random?min=1&max=200");
    console.log(num);
    const userId = await axios.get(`http://koreanjson.com/posts/${num}`);
    console.log(userId);
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    console.log(ccc);
    // 최종결과값
  };
  console.log(myaxios);
  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기</button>
    </>
  );
}
