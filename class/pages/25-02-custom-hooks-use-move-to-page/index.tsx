// import { useRouter } from "next/router";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  // const router = useRouter();
  // const onClickMoveToPage = (path) => () => {
  //   router.push(path);
  // };
  // 위에 코드들을 커스텀 훅으로 뺴버리는 것
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <div>
      <button onClick={onClickMoveToPage("/boards")}>
        게시판으로 이동하기!!
      </button>
      <button onClick={onClickMoveToPage("/market")}>
        마켓으로 이동하기!!
      </button>
      <button onClick={onClickMoveToPage("/mypages")}>
        마이페이지로 이동하기!!
      </button>
    </div>
  );
}
