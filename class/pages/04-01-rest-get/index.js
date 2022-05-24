import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  // onClick, handleClick 으로 대부분 네이밍을 짓는다.
  // 이벤트 핸들러 함수.
  const [data, setData] = useState("");

  const onClickRestApi = async (event) => {
    // const result = axios.get("https://koreanjson.com/posts/1")
    // // get 요청 보내기 (API 주소), 비동기 방식...
    // console.log(result) // Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태

    const result = await axios.get("https://koreanjson.com/posts/1");
    // result.data.title
    setData(result.data.title);
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={onClickRestApi}> REST-API 요청하기</button>
    </div>
  );
}
