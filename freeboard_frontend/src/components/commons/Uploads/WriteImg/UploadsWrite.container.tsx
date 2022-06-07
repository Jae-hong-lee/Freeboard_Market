import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRef, ChangeEvent } from "react";
import UploadUI01 from "./UploadsWrite.presenter";
import { UPLOAD_FILE } from "./UploadsWrite.queries";
import { checkValidationImage } from "./UploadsWrite.validation";

interface IUploads01Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function UploadWritePage(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    console.log("파일", file);
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ title: error.message });
    }
  };

  return (
    <UploadUI01
      fileRef={fileRef}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
      // fileUrl 프롭스로 받아오기!
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
