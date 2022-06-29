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
  // const [imgURL, setImgURL] = useState("");
  // const [file, setFile] = useState<File>();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    // const resultFile = await uploadFile({ variables: { file } });

    // 1. uploadFile들을 Promise.all로 묶기
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // 2. uploadFile들을 map 으로 축약하기
    // files 를 map 으로 el 을 하나씩 가져온다.
    // el 이 있다면 uploadFile로 바꿔줘!
    // const results = await Promise.all([
    //   undefined,
    //   uploadFile({ variables: { file: files[1] } }),
    //   undefined,
    // ]);
    // files.map(
    //   (el) => el && uploadFile({ variables: { file: el } })
    // );

    // 3. 최종버전
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    // results 는 배열이니까 map으로 돌려줌
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""));
    // undefined 라면 빈 문자열

    // const url = resultFile.data.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "ㅇㅁㅇㄴㅁㅇ",
          contents: "ㅇㅁㄴㅇㄴㅁㅇ",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = (num: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        // 원본수정하지않고 사본으로 , 현재 이미지들 모두 가져옴
        const tempUrls = [...imageUrls];
        // num 째에다가 이미지를 넣어줌
        tempUrls[num] = data.target?.result;
        // 바뀐 tempUrls로 스테이트 변경
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[num] = file;
        setFiles(tempFiles);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickGraphqlApi}> Graphql-API 요청하기!!!</button>
    </>
  );
}
