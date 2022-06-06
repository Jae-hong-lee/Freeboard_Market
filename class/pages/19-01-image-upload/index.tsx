import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(params: any) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState();

  // 이벤트 핸들러 함수, on이 붙은 함수는 event가 들어온다(?)
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      // 1. uploadFile API 요청하기 (요청결과 URL 받아오기)
      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url); // <- 어디에 받아올까??
      // 2. 요청 결과 URL을 state에 저장하기 (src에 state가 들어가야지 미리보기가 가능하니까!!)
      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      <input type="file" onChange={onChangeFile}></input>
      {/* multiple 속성 -> 드레그해서 여러장 가져올 수 있음 */}
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      {/* 우린 구글 스토리지를 사용하기 때문에 앞에 구글 스토리지 주소가 붙는 것이다. */}
    </div>
  );
}

// 더 해줘야 할 것
// 파일 업로드할 수 있도록 화면 그려주기!
// 이미지 유무와 사이즈 검증하기!
