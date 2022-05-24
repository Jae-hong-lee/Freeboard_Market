import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState({});
  const [callGraphql] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await callGraphql({
      variables: { writer: writer, title: title, contents: contents },
    });
    console.log(result);
    setData(result.data.createBoard);
  };

  // state는 비동기적 실행임.
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // setState에 값을 넣을때 값이 변하는게 아닌 함수 종료 되었을때 state의 값이 바뀌게 된다.
  // 일단 임시저장공간에 writer의 input 값을 넣어놓고 함수 종료 후 임시저장 공간 내용이 반영되는 것임.
  // 함수가 끝났을때 랜더링이 됬던 컴포넌트가 다시 랜더링이됨 -> rerender(리랜더링)
  // 즉 함수가 끝났을때 값이 적용되고 다시 만들어짐(컴포넌트가).(new!) -> 비효율적임

  // Error : to many render
  // if (writer && title && contents) {
  //   setIsActive(true)
  // }else{
  //   setIsActive(false)
  // }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickGraphqlApi={onClickGraphqlApi}
      data={data}
      isActive={isActive}
    />
  );
}
