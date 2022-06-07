import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import ListsUI from "./boardlist.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardlist.quries";

export default function BoardsListsPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const onClickMoveCreateBoard = () => {
    router.push(`/boarder/news`);
  };

  const onClickTitle = (event) => {
    router.push(`/boarder/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value) => {
    setKeyword(value);
  };
  return (
    <ListsUI
      data={data}
      onClickMoveCreateBoard={onClickMoveCreateBoard}
      onClickTitle={onClickTitle}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount?.fetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      refetchBoardsCount={refetchBoardsCount}
      keyword={keyword}
    />
  );
}
