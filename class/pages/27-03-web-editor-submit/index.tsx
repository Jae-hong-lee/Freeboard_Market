import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubit = async (data) => {
    // 강제로 입력한 값도 data에 들어와 있다.
    console.log(data);
    // 데이터중 하나라도 없다면 에러메세지
    if (!data.writer || !data.password || !data.title || !data.contents) {
      alert("모두 입력해주세요");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      console.log(result);
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubit)}>
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} /> <br />
      제목: <input type="text" {...register("title")} /> <br />
      내용: <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </form>
  );
}
