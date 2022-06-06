import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
      // rest api 주소 요청
      // api 사이트에서 보면 아래 객체부분에 message에 주소가 들어있음
    };
    fetchDog();
  }, []);
  return (
    <div>
      <h1>오픈 API 연습</h1>
      <img src={dogUrl} />
    </div>
  );
}
