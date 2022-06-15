// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// ssr : 서버사이드 렌더링할떄는 import 하지 않겠다 (false)

// 에디터만 보이게 하는 것이 아닌 작성페이지를 만들어보자
export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      작성자: <input type="text" /> <br />
      비밀번호: <input type="password" /> <br />
      {/* ReactQuill */}
      재목내용: <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </div>
  );
}
