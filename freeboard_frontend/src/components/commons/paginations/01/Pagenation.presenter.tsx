import * as P from "./Pagenation.styles";

export default function Pagination01UI(props: any) {
  console.log(props);
  return (
    <P.WrapperPage>
      <button
        onClick={props.onClickPreviousPage}
        disabled={props.startPage === 1 ? true : false}
      >
        &lt;
      </button>
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
      <button
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 >= props.lastPage ? true : false}
      >
        &gt;
      </button>
    </P.WrapperPage>
  );
}
