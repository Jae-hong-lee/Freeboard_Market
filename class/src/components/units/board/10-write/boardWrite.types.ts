import { ChangeEvent } from 'react'

export interface IBoardWriteProps{
  isEdit: boolean
  boardData?: any
}


export interface IBoardWriteUIProps{
  onChangeWriter :(event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle :(event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents :(event: ChangeEvent<HTMLInputElement>) => void
  onClickGraphqlApi :() => void
  onClickUpdate :() => void

  data: {
    number?: number
    _id?: string
    message? : string
  }
  isEdit: boolean
  boardData?: any 
  // 백에서부터 받아오는 데이터 이기 때문에 아직까진 any로
  // 등록하기 페이지에서 오면 없는 것이니 물음표 붙이기
}

export interface IMyvariables{
    number: number
    writer?: string 
    title? : string
    contents? : string
}
