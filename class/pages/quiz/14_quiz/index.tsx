import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import * as E from "./emotion";
import { ListSpan } from "./emotion";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage(props: any) {
  const [startPage, setStartpage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartpage((perv) => perv - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartpage((perv) => perv + 10);
      refetch({ page: startPage + 10 });
    }
  };

  // const [isEdit, setisEdit] = useState();
  const onClickPage = (event: any) => {
    // setisEdit(event.target.id);
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      <E.MyTitleContents>
        <E.MyTitle>제목</E.MyTitle>
        <E.MyContents>내용</E.MyContents>
      </E.MyTitleContents>

      <div style={{ margin: "20px" }}>
        {data?.fetchBoards.map((el: any) => (
          <E.MyRow key={el._id}>
            <E.MyColumn>{el.writer}</E.MyColumn>
            <E.MyColumn>{el.title}</E.MyColumn>
          </E.MyRow>
        ))}
        <E.MyList>
          <button
            onClick={onClickPrevPage}
            // disabled={startPage === 1 ? true : false}
          >
            &lt;
          </button>
          {new Array(10).fill(1).map(
            (_, index) =>
              index + startPage <= lastPage && (
                <ListSpan
                  key={index + startPage}
                  id={String(index + startPage)}
                  onClick={onClickPage}
                  // isEdit={isEdit}
                >
                  {" "}
                  {index + startPage}
                </ListSpan>
              )
          )}
          <button
            onClick={onClickNextPage}
            // disabled={startPage + 10 >= lastPage ? true : false}
          >
            &gt;
          </button>
        </E.MyList>
      </div>
    </div>
  );
}
