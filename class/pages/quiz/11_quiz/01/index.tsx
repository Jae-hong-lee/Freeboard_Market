import React, { useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const App: React.FC = () => {
  const [value, setValue] = useState(3);
  const onChageStar = (i: number) => {
    console.log(i);
    setValue(i);
    alert(`${i} 점 입니다.`);
  };
  return (
    <span>
      <Rate tooltips={desc} onChange={onChageStar} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      <br />
      {value ? <span className="ant-rate-text">{value}점</span> : ""}
    </span>
  );
};

export default App;
