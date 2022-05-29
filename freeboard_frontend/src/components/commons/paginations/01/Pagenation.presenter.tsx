import * as P from "./Pagenation.styles";

export default function Pagination01UI(props: any) {
  return (
    <div>
      <span onClick={props.onClickPreviousPage}>&lt;</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <span
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </span>
          )
      )}
      <span onClick={props.onClickNextPage}>&gt;</span>
    </div>
  );
}
