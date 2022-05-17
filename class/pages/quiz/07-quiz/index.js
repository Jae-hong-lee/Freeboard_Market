import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId : ID){
    deleteProduct(productId:$productId){
      message
    }
  }
`;

const FETCH_PRODUCTS = gql`
    query fetchProducts{
      fetchProducts{
          _id
          seller
          name
          detail
          price
        }
    }
`;

const MyRow = styled.div`
    display: flex;
`;

const MyColumn = styled.div`
    width: 25%;
`;


export default function MapBoardPage(){
    const { data } = useQuery(FETCH_PRODUCTS)
    
    const[deleteProduct] = useMutation(DELETE_PRODUCT)

    const onClickDelete = (event) =>{
      deleteProduct({
        variables:{productId: event.target.id},
        refetchQueries:[{query: FETCH_PRODUCTS}]
      })
    }
    return (
        <div>
          {/* data안에 fetchBoards 안에 있는 요소 map. */}
            {data?.fetchProducts.map((el) => (
                <MyRow key={el._id}>
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el.seller}</MyColumn>
                    <MyColumn>{el.name}</MyColumn>
                    <MyColumn>{el.detail}</MyColumn>
                    <MyColumn>{el.price}</MyColumn>
                    <MyColumn>{el.detail}</MyColumn>
                    <MyColumn>
                      <button onClick={onClickDelete} id={el._id}>삭제버튼</button>
                      {/* button id값이 el._id 로 들어가서 위에서 event.target. 뒤에 _id 가 아닌 id로 씀. */}
                    </MyColumn>
                </MyRow>
            ))}
        </div>
    )

}