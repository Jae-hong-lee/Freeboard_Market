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
  return (
    <ListsUI data={data} onClickMoveCreateBoard={onClickMoveCreateBoard} />
  );
}
