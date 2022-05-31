import BoardsListsPage from "../../../src/components/units/boards/list/boardlist.container";
import { motion } from "framer-motion";
export default function ListsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BoardsListsPage />
    </motion.div>
  );
}
