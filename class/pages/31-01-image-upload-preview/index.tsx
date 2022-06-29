import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgURL, setImgURL] = useState("");

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // 파일이 다 로드가 되었다면 data로 들어온다
    fileReader.onload = (data) => {
      // 이 데이터의 타입이 string 이면 state에 그 결과값을 담음.
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgURL(data.target?.result);
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgURL} />
    </>
  );
}

// 여기서 확인할 것은 미리보기 성능이 얼마나 빨라졌는지이다.
