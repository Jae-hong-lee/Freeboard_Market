import CreateBoardPage from "../../../src/components/units/boards/news/Write.container";
import { motion } from "framer-motion";
export default function BoardCreatePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CreateBoardPage isEdit={false} />;
    </motion.div>
  );
}
