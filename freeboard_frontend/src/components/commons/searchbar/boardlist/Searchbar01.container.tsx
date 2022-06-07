import Searchbar01UI from "./Searchbar01.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";

export default function SearchBar01(props: any) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);
  // 현업에선 200으로 많이 쓴다. 디바운싱.
  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <Searchbar01UI onChangeSearchBar={onChangeSearchBar} />;
}
