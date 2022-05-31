import DetailBoardPage from "../../../src/components/units/boards/details/detail.container";
import BoardCommentWrite from "../../../src/components/units/boards/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boards/boardComment/list/BoardCommentList.container";
import { motion } from "framer-motion";
export default function DetailPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DetailBoardPage />
      <BoardCommentWrite />
      <BoardCommentList />
    </motion.div>
  );
}
