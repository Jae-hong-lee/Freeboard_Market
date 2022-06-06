import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz17Page() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <div>
      <h1>퀴즈 2-1</h1>
      <img src={dogUrl} />
    </div>
  );
}
