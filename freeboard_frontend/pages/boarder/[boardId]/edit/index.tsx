import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../src/components/units/boards/list/boardlist.quries";
import CreateBoardPage from "../../../../src/components/units/boards/news/Write.container";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // 수정 등록 컨테이너, 댓글 못록 추가.
  return (
    <>
      <CreateBoardPage isEdit={true} data={data} />
      {/* <BoardCommentWrite /> */}
    </>
  );
}
