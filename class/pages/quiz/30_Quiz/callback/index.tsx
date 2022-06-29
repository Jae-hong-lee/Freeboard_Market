import axios from "axios";
import { useState } from "react";

export default function CalllBackFriends() {
  const [callbacktext, setCallbacktext] = useState([]);
  const [Promisetext, setPromisetext] = useState();
  const [asynctext, setAsynctext] = useState();

  const onClickCallback = () => {
    const Random = new XMLHttpRequest();
    Random.open("get", `http://numbersapi.com/random?min=1&max=200`);
    Random.send();
    Random.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      const number = new XMLHttpRequest();
      number.open("get", `http://koreanjson.com/posts/${num}`);
      number.send();

      number.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        const writerId = new XMLHttpRequest();
        writerId.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        writerId.send();
        writerId.addEventListener("load", (callbackres: any) => {
          const result = JSON.parse(callbackres.currentTarget.response);
          setCallbacktext(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num2 = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num2}`);
      })
      .then((res) => {
        const userId2 = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId2}`);
      })
      .then((Promiseres) => {
        const result = Promiseres.data;
        setPromisetext(result);
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num3 = aaa.data.split(" ")[0];
    const bbb = await axios.get(`http://koreanjson.com/posts/${num3}`);
    const userId3 = bbb.data.UserId;
    const AARes = await axios.get(
      `http://koreanjson.com/posts?userId=${userId3}`
    );
    console.log(AARes.data);
    setAsynctext(AARes.data);
  };

  return (
    <>
      결과:
      {callbacktext?.map((el) => (
        <div key={el._id}>
          <div style={{ color: "red" }}>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
      <br />
      <button onClick={onClickCallback}>Callback</button> <br />
      결과:{" "}
      {Promisetext?.map((el) => (
        <div key={el._id}>
          <div style={{ color: "red" }}>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
      <br />
      <button onClick={onClickPromise}>Promise</button> <br />
      결과:
      {asynctext?.map((el) => (
        <div key={el._id}>
          <div style={{ color: "red" }}>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
      <br />
      <button onClick={onClickAsyncAwait}>Async/Await</button> <br />
    </>
  );
}
