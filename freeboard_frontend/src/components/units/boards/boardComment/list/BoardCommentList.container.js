import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_COMMENTS } from "./BoardCommentList.quire";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARDS_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  return <BoardCommentListUI data={data} loadFunc={loadFunc} />;
}
