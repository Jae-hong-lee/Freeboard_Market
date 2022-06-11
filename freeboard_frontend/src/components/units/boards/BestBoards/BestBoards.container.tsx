import { useQuery } from "@apollo/client";
import BestBoardsUI from "./BestBoards.presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.queries";

export default function BestBoardsContainer() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  // console.log(data);
  const onClickBestBoard = () => {
    console.log(data);
  };
  return <BestBoardsUI data={data} onClickBestBoard={onClickBestBoard} />;
}
