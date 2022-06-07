import * as UPS from "./UploadsWrite.styles";
import { ChangeEvent, RefObject } from "react";

interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadUI01(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UPS.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UPS.UploadBtn onClick={props.onClickUpload}>
          <>+</>
          <>업로드</>
        </UPS.UploadBtn>
      )}
      <UPS.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
