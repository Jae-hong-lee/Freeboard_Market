// state
import { useState } from "react";

export default function randomNumber() {
  const [number, setNum] = useState("000000");

  function Number() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    setNum(token);
  }

  return (
    <div>
      <div id="count"> {number} </div>
      <button onClick={Number}> 인증번호전송!!!</button>
    </div>
  );
}
