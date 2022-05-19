import { gql } from "@apollo/client"


// mutation{
//   createProduct(seller:"JHlee" createProductInput:{
//       name: "의자"detail: "팜팜" price: 5000})
//       {_id   number  message} }
export const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String, $createProductInput: CreateProductInput!){
            createProduct(seller: $seller, createProductInput: $createProductInput){
              _id
              number
              message
        }
    }
`;

// mutation{
//   updateProduct(
//     productId: "430506b5-1c02-405f-8abf-53a720e83bcc"
//     updateProductInput:{ name:"멘토" detail:"안팜" price : 500})
//     {_id  message}}

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID, $updateProductInput: UpdateProductInput!){
      updateProduct(productId: $productId, updateProductInput: $updateProductInput){
        _id
        number
        message
      }
    }
`