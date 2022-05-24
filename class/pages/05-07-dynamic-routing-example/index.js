import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // useRouter import
  const router = useRouter();

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  const [MyWriter, setMyWriter] = useState("");
  const [MyTitle, setTitle] = useState("");
  const [MyContents, setMyContents] = useState("");

  const onClickGraphqlApi = async (event) => {
    try {
      const result = await callGraphql({
        variables: {
          writer: MyWriter,
          title: MyTitle,
          contents: MyContents,
        },
      });
      console.log(result);
      // setData(result.data.createBoard.message);
      router.push(
        `/05-06-dybamic-routed-board/${result.data.createBoard.number}`
      );
      // 게시글 등록하고 게시글 상세 페이지로 이동하는 것이다.
    } catch (error) {
      console.log(error);
      alert(error.message);
      setData();
    }
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <div>{data.number}</div>
      <div>{data._id}</div>
      <div>{data.message}</div>
      <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </div>
  );
}
// 등록하기 누르면 등록된 게시글 번호, 아이디를 응답으로 받았음
// 그값을 result에 넣어놨다.
