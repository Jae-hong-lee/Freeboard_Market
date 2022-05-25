import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import ListsUI from "./boardlist.presenter";
import { FETCH_BOARDS } from "./boardlist.quries";

export default function BoardsListsPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const onClickMoveCreateBoard = () => {
    router.push(`/boarder/news`);
  };

  const onClickTitle = (event) => {
    router.push(`/boarder/${event.target.id}`);
  };
  return (
    <ListsUI
      data={data}
      onClickMoveCreateBoard={onClickMoveCreateBoard}
      onClickTitle={onClickTitle}
    />
  );
}
