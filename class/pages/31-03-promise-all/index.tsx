export default function PromiseAllPage() {
  const onClickPromise = async () => {
    // 3초 뒤에 주소를 받아올 것이다.
    // 3초를 기다리고 뽑아내고 내려가고 싶다 Promise
    console.time("시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        "https://dog1.png";
      }, 3000);
    });
    // 3초 뒤에 promise가 끝나게 되고 res가 받아온 주소가 나오고 console 찍으면 주소가 나오는 것
    // console.log(result1);
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        "https://dog2.png";
      }, 3000);
    });

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        "https://dog3.png";
      }, 3000);
    });
    console.timeEnd("시작");
  };

  const onClickPromiseAll = async () => {
    console.time("시작");
    // promiseAll 에는 배열이 들어간다.
    // promise 들을 배열로 가지고 있는 것, 그래서 개별적으로 await를 붙이지 않고 PromiseAll 앞쪽에다가만 붙여준다
    // 3개를 동시에 실행하고 모두 끝날때까지 한번만 기다린다(await) 3개중 가장 마지막에 끝나는 시간이 걸린다.
    const result = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          "https://dog1.png";
        }, 3000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          "https://dog2.png";
        }, 3000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          "https://dog3.png";
        }, 3000);
      }),
    ]);
    console.timeEnd("시작");

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>PromiseAll 연습하기</button>
    </>
  );
}
