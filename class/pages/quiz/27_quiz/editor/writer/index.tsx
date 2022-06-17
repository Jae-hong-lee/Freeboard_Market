import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
// prerendering, ssr : 서버사이드 랜더링 false
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function quizEditorPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const { register, setValue, trigger, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      Modal.error({ title: "모두 작성해주세요!!" });
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
      router.push(`/quiz/27_quiz/editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (v: string) => {
    // 값 강제로 contents라는 공간에 넣기
    setValue("contents", v === "<p><br></p>" ? "" : v);
    // mode 지정
    trigger("contents");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} /> <br />
      패스워드: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button> 등록하기 </button>
      <br />
    </form>
  );
}
