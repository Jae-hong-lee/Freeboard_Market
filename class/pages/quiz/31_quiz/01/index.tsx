import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
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

export default function QuizImagePage() {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const { register, handleSubmit } = useForm();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (num: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return alert("파일이 없음");
    const fileRender = new FileReader();
    fileRender.readAsDataURL(file);
    fileRender.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imageUrls];
        tempUrls[num] = data.target?.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[num] = file;
        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async (data) => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""));

    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...data,
          images: resultUrls,
        },
      },
    });
    console.log("성공", result);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input type="text" {...register("writer")} />
        <input type="text" {...register("password")} />
        <input type="text" {...register("title")} />
        <input type="text" {...register("contents")} />
        <input type="file" onChange={onChangeFile(0)} />
        <img src={imageUrls[0]} />
        <button>등록하기!</button>
      </form>
    </>
  );
}
