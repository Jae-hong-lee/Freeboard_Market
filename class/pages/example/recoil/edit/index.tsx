import WritePage from "../write";
import { useContext } from "react";
import { GlobalContext } from "../../../_app";

export default function EditPage() {
  const { setIsEdit } = useContext(GlobalContext);
  setIsEdit(true);
  return (
    <div>
      <WritePage />
    </div>
  );
}
