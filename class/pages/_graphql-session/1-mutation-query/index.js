import { useMutation, gql, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  # 타입은 완전 동일 ++!
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 달러는 변수명
      _id
      number
      message
    }
  }
`;

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 2090) {
      number
      writer
      title
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTtitle] = useState("");
  const [contents, setMyContents] = useState("");
  // state graphql 연결.

  const [callGraphql] = useMutation(CREATE_BOARD);
  // [] 네이밍,  mutation 연결 useMutation
  const onClickGraphqlApi = async () => {
    // 함수를 만들어 그래프큐엘 요청이 날아가도록 만듬
    const result = await callGraphql({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
  };
  // Query부분 차이 : 괄호, 그래프큐엘 문법.
  // 반드시 괄호 안은 data
  const { data } = useQuery(FETCH_BOARD);

  console.log("useQuery", data);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTtitle(event.target.value);
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
      <div></div>
      <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </div>
  );
}
