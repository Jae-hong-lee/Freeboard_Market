// 이미지 검증하기

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { Modal } from "antd";
import { CheckFileValidation } from "../../src/commons/libraries/fileValidation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(params: any) {
  const fillRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // files는 있을수도 있고,없을수도 있기 때문에 옵셔널 체이닝을 사용해
    const file = event.target.files?.[0];
    // console.log(file);

    // 검증 부분은 따로 다른 파일에 만들어 놓고 import해서 사용한다-> 조건이 계속 늘어날 경우도 생각.
    const isValid = CheckFileValidation(file);
    if (!isValid) return;
    // isValid는 CheckFileValidation 에서 받아온 Boolean으로 false라면 return 을 통해 함수 종료!

    // // 이미지 검증부분!!
    // // 파일의 사이즈가 아닐경우!! return 으로 바로 끝내기
    // if (!file?.size) {
    //   alert("파일이 없습니다");
    //   return;
    // }
    // // 5MB = 5 * 1024 * 1024
    // // 이미지 파일의 사이즈가 있지만, 5MB보다 클경우 경고를 띄우고 함수를 종료합니다.
    // if (file.size > 5 * 1024 * 1024) {
    //   alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    //   return;
    // }
    // // 이미지 파일의 확장자 검증
    // if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    //   alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    //   return;
    // }

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url);

      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const onClickImage = () => {
    fillRef.current?.click();
  };

  return (
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
        // accept 속성을 유효성 검사를 도구로 사용해서는 안 되며, 업로드된 파일은 서버에서 검증되어야함.
        // http://www.tcpschool.com/html-tag-attrs/input-accept
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </div>
  );
}
