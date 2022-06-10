export default function HofPage() {
  function onClickBtn(num) {
    console.log("온클릭");
    return function () {
      console.log(num);
    };
  }

  return (
    <>
      <button onClick={onClickBtn(123)}> 123출력하기!!</button>
    </>
  );
}
