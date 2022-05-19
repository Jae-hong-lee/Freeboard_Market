import { useMutation } from '@apollo/client'
import { useRouter } from "next/router"
import { useState } from 'react'
import ProductWriteUI from './Product.presenter'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './Product.queries'
// import 업데이트 버튼
// 업데이트 버튼 온클릭 만들고 import하기
// 수정페이지 router 뒤에 edit 붙이기. 주소 확인 잘하기.

export default function ProductWrite(props){
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    const router = useRouter()

    const onClickSubmit = async () => {
        const result = await createProduct({ 
            variables: { 
                seller,
                createProductInput: {
                    name,
                    detail,
                    price
                    // ,productId: router.query.id
                }
            } 
        })

        router.push(`/quiz/08_quiz/${result.data.createProduct._id}`)
    }

    const onClickUpdate = async () => {
      const result = await updateProduct({
        variables: {
          productId: router.query.id, 
          updateProductInput:{
            name, 
            detail, 
            price
          }
        }
      })
      console.log("dasdas")
      router.push(`/quiz/08_quiz/${router.query.id}`)
    }
    
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()
    const [data, setData] = useState("")

    const onChangeSeller = (event) => {
      setSeller(event.target.value)
    }
    const onChangeName = (event) => {
      setName(event.target.value)
    }
    const onChangeDetail = (event) => {
      setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
      setPrice(Number(event.target.value))
    }
    
    return (

      <ProductWriteUI 
        onClickSubmit = {onClickSubmit}
        onClickUpdate = {onClickUpdate}

        onChangeSeller = {onChangeSeller}
        onChangeName = {onChangeName}
        onChangeDetail = {onChangeDetail}
        onChangePrice  = {onChangePrice}
        isEdit = {props.isEdit}
        data = {data}
      />
    )

}