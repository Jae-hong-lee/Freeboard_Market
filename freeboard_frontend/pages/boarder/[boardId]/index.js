import DetailBoardPage from "../../../src/components/units/boards/details/detail.container";
import BoardCommentWrite from "../../../src/components/units/boards/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boards/boardComment/list/BoardCommentList.container";

export default function DetailPage() {
  return (
    <>
      <DetailBoardPage />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
