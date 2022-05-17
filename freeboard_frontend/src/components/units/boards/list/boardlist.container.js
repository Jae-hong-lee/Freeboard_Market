import { useQuery } from "@apollo/client"
// import { useRouter } from "next/router"

import ListsUI from "./boardlist.presenter"
import { FETCH_BOARDS } from "./boardlist.quries"


export default function BoardsListsPage(){

  // const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)

  return(
    <ListsUI
      data = {data}
    />
  )
}