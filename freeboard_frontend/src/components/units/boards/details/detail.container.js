import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import DetailUI from "./detail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./detail.fetch.board";
import { Modal } from "antd";

export default function DetailBoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data?.fetchBoard);
  // 목록이동
  const onClickMoveBoardList = () => {
    router.push("/boarder/list");
  };
  const onClickEditBoard = () => {
    router.push(`/boarder/${router.query.boardId}/edit`);
  };

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const DeleteButtonClick = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.success({
        content: "삭제 완료!!",
      });
      router.push("/boarder/list");
    } catch (error) {
      Modal.error({
        title: "삭제 실패!",
      });
    }
  };

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [DislikeBoard] = useMutation(DISLIKE_BOARD);
  const OnClickLikeCount = async () => {
    try {
      await likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "좋아요!",
      });
    } catch (error) {
      Modal.error({
        title: "좋아요 실패",
      });
    }
  };

  const OnClickDLikeCount = async () => {
    try {
      await DislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "싫어요",
      });
    } catch (error) {
      Modal.error({
        title: "싫어요 실패",
      });
    }
  };

  return (
    <DetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickEditBoard={onClickEditBoard}
      DeleteButtonClick={DeleteButtonClick}
      OnClickLikeCount={OnClickLikeCount}
      OnClickDLikeCount={OnClickDLikeCount}
      // 주소띄우기
    />
  );
}
