import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenRandomCoffeeImg() {
  const [coffeeUrl, setCoffeeUrl] = useState("");

  useEffect(() => {
    const fetchCoffee = async () => {
      const result = await axios.get("https://foodish-api.herokuapp.com/api/");
      setCoffeeUrl(result.data.image);
    };
    fetchCoffee();
  }, []);

  return (
    <div>
      <img src={coffeeUrl} />
    </div>
  );
}
