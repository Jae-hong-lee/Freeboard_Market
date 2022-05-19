import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId:ID){
    fetchProduct(productId:$productId){
      seller
      name
      detail
      price
    }
  }
`

export default function name() {
  const router = useRouter()  

  const { data } = useQuery(FETCH_PRODUCT, {
      variables:{ productId:router.query.id}
   })
   console.log(data)

  const onClickUpdate = () => {
    router.push(`/quiz/08_quiz/${router.query.id}/edit`)
  }

  return (
    <div>
      <h1>여긴 상세페이지입니다!!</h1>
      {/* <div>{router.query.id}</div> */}
      {/* <div>판매자: {data?.fetchProduct.seller}</div> */}
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상품내용: {data?.fetchProduct.detail}</div>
      <div>상품가격: {data?.fetchProduct.price}</div>
      <button onClick={onClickUpdate}>수정하러 가기!!!</button>
    </div>
  )
}