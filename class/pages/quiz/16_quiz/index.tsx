import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("Rendered!!!");
  }, []);

  useEffect(() => {
    console.log("Changed!!!");
  }, [isChange]);
  //

  useEffect(() => {
    return () => {
      console.log("Bye!!!");
      alert("Bye!!!");
    };
  }, []);

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    router.push("/");
  };

  const focusRef = useRef();
  useEffect(() => {
    console.log("ref 실행!");
    focusRef.current?.focus();
  });
  return (
    <div>
      <input type="password" ref={focusRef} />
      <br />
      <br />
      <button onClick={onClickChange}>변경!!!</button>
      <button onClick={onClickMove}>이동!!!</button>
    </div>
  );
}
