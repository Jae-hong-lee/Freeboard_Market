import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  margin: 100px 0px 100px 0px;
`;

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
    <Wrapper>
      <img src={coffeeUrl} />
    </Wrapper>
  );
}
