import * as P from "./Pagenation.styles";

export default function Pagination01UI(props: any) {
  console.log(props);
  return (
    <P.WrapperPage>
      <span onClick={props.onClickPreviousPage}>&lt;</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <P.Pages
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activePage}
            >
              {props.startPage + index}
            </P.Pages>
          )
      )}
      <span onClick={props.onClickNextPage}>&gt;</span>
    </P.WrapperPage>
  );
}
