export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("=======시작~~=======");

    setTimeout(() => {
      console.log("1초 뒤에 실행될꺼에용");
    }, 1000);

    console.log("=======끝~~=======");
  };

  return (
    <>
      <button onClick={onClickTimer}>setTimeout 실행시키기</button>
    </>
  );
}
