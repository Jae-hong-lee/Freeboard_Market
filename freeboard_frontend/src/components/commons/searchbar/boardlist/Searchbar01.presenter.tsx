import * as SB from "./Searchbar01.styles";
export default function Searchbar01UI(props: any) {
  return (
    <>
      <SB.SearchBar>
        <SB.SearchbarInput
          placeholder="검색어 입력"
          onChange={props.onChangeSearchBar}
        />
      </SB.SearchBar>
    </>
  );
}
