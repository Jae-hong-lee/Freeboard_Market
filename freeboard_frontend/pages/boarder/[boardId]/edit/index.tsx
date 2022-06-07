import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CreateBoardPage from "../../../../src/components/units/boards/news/Write.container";
import { motion } from "framer-motion";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;
export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // 수정 등록 컨테이너, 댓글 못록 추가.
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CreateBoardPage isEdit={true} data={data} />
    </motion.div>
  );
}
