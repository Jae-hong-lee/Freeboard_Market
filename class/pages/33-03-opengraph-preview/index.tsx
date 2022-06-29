import axios from "axios";

export default function OpengraphPreviewPage() {
  const onClickOpengraph = async () => {
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result.data);
    console.log(result.data.split("<meta"));
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };

  // CORS 문제 떄문에 일반적으로 백엔드에서 하고 (gmarket은 ㄱㅊ..?)
  // 모바일인 경우는 CORS 문제가 발생하지 않기 때문에 프론트나 백이나 상관없이 할 수 있다
  // 이게 서버사이드 렌더링이랑 연관이 있는지에 이해하기 위한 것일뿐

  return (
    <>
      <h1>사이트 미리보기 연습!!</h1>
      <button onClick={onClickOpengraph}>미리보기 실행</button>
    </>
  );
}
