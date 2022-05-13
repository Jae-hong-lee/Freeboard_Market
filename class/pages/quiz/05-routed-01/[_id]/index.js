import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            name
            detail
            seller
            price
        }
    }
 `

export default function StaticRoutedPage(){
    const router = useRouter()
    console.log(router.query)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query._id}
    })
    console.log(data)

    return (
        <div>
            <div>판매자: {data && data.fetchProduct.seller}</div>
            <div>상품이름: {data?.fetchProduct.name}</div>
            <div>상품내용: {data?data.fetchProduct.detail: "loading.."}</div>
            <div>가격: {data?data.fetchProduct.price: "loading.."}</div>
           
        </div>
    )
}