import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";

export default function GlobalStatePage() {
  const [, setIsEdit] = useRecoilState(isEditState);

  // 글로벌스테이츠 변경!
  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContainer />;
}
