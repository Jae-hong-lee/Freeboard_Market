import { useContext } from "react";
import { GlobalContext } from "../../../_app";

export default function WritePage(props: any) {
  const { isEdit } = useContext(GlobalContext);

  return (
    <>
      {/* <h1>{props.isEdit ? "수정" : "등록"}하기</h1> */}
      <h1>{isEdit ? "수정" : "등록"} 하기 </h1>
    </>
  );
}
