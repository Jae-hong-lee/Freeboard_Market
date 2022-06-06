import { useState, ChangeEvent, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { CheckFileValidation } from "../../src/commons/libraries/fileValidation";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fillRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState();

  const [callGraphql] = useMutation(CREATE_BOARD);

  const [MyWriter, setMyWriter] = useState("");
  const [MyTitle, setTitle] = useState("");
  const [MyContents, setMyContents] = useState("");

  const onClickGraphqlApi = async (event: any) => {
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: MyWriter,
          password: "1234",
          title: MyTitle,
          contents: MyContents,
          // 추가적인 것 , 스테이츠로 저장한 url이 여기로 들어간다!, img는 배열형태로들어감!
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const isValid = CheckFileValidation(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const onClickImage = () => {
    fillRef.current?.click();
  };
  const onChangeWriter = (event: any) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: any) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <div>
        <h1>이미지 업로드 연습하기</h1>
        <div
          style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
          onClick={onClickImage}
        >
          이미지 선택!
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fillRef}
          accept="jpeg"
        />
        <img src={`https://storage.googleapis.com/${imgUrl}`} />
      </div>
      <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </div>
  );
}
