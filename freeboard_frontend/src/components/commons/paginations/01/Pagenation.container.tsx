import { useState, MouseEvent } from "react";
import Pagination01UI from "./Pagenation.presenter";

export default function Pagination01(props) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivepage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!event.target instanceof Element) return;
    const active = Number(event.target.id);
    setActivepage(active);
    props.refetch({ page: active });
  };

  const onClickPreviousPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivepage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    console.log(startPage);
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivepage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickPreviousPage={onClickPreviousPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
