// ref 란 무엇인가 - useRef
// 래퍼런스 : 가르킨다, 참조한다, 특정 태그를 가르키는 변수를 만들려고 한다.
// 태그를 변수에 넣는다!

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { Modal } from "antd";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(params: any) {
  // <> 타입명시 : fillRef 타입이 뭔데??
  // Ref는 초기값을 null 이라고 해줘야한다.
  const fillRef = useRef<HTMLInputElement>(null);

  // fillRef.current.click();
  // fill 태그를 클릭해주세요!, 코드로써 마우스 클릭을 대신할 수 있다. 변수와 태그를 연결시키고 변수를 가지고 클릭을 하는 것이다!
  // 굳이 왜? : 자체 인풋타입 태그 자체를 바꾸는 것이 쉽지가 않다, display:none으로 안보이게 만들고 예쁜버튼을 css로 디자인해서
  //        만들고 그걸 클릭하면 자동으로 input태그가 클릭이 되게끔 만들어 주는 것이다!!

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

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
    // fill태그가 있을때 클릭해줘! , 옵셔널 체이닝.
  };

  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      {/* 변수랑 태그가 하나로 합칠 수 있다. */}
      {/* style 부분은 이모션으로 작성. */}
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
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </div>
  );
}
