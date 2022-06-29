import { gql, useMutation } from "@apollo/client";

import { ChangeEvent, useState } from "react";

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

export default function ImageUploadPreviewPage() {
  const [imgURL, setImgURL] = useState("");
  const [file, setFile] = useState<File>();
  // 게시물 등록하기 할때 보내야하는 file
  // 초기값은 없어도 얘는 파일 타입이야.
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "ㅇㅁㅇㄴㅁㅇ",
          contents: "ㅇㅁㄴㅇㄴㅁㅇ",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgURL(data.target?.result);
        setFile(file);
        // 게시물 등록할때 보내줘야하니까 state에 저장해놈
      }
    };

    // createObjectURL 활용해 미리보기 주소보기
    // const result = URL.createObjectURL(file);
    // console.log(result);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgURL} />
      <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </>
  );
}

// 미리보기까진 그대로 이고 게시물 등록버튼을 만들고 눌렀을때 create, upload 뮤테이션을 보내준다.
