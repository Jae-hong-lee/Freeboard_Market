import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from "react"


const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String, $createProductInput: CreateProductInput!){
            createProduct(seller: $seller, createProductInput: $createProductInput){
                    _id
                    number
                    message
        }
    }
`

export default function GraphqlMutationProduct(){

    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [data, setData] = useState("")

    const onClickSubmit = async () => {
        try {
            const result = await createProduct({ 
                variables: { seller: seller,createProductInput: {
                        name, detail, price}
                } 
            })
            // console.log(result)
            // console.log(router)
            setData(result.data.createProduct._id)
            router.push(`/quiz/05-routed-01/${result.data.createProduct._id}`)
           
        } catch (error) {
            alert(error.message)
        }
       
        
    }

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()

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
        <>
            판매자: <input type="text" onChange={onChangeSeller} /><br />
            상품명: <input type="text" onChange={onChangeName} /><br />
            상품내용: <input type="text" onChange={onChangeDetail} /><br />
            상품가격: <input type="text" onChange={onChangePrice} /><br />
            <div>{data}</div>

            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}