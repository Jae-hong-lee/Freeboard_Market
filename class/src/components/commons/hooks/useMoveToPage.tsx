import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    // 마지막 방문페이지를 글로벌스테이츠 저장
    router.push(path);
  };
  return {
    onClickMoveToPage,
    // key value 가 같아서 줄여서 씀.
  };
}
