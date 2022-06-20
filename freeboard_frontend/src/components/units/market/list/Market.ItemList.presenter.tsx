import * as MIL from "./Market.ItemList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketItemListUI(props) {
  return (
    <MIL.Wrapper>
      <MIL.Header>
        {/* 검색 컴포넌트 빼기. */}
        <div>판매중 상품</div>
        <div>판매된 상품</div>
        <div>
          <div>서치바</div>
          <div>달력</div>
          <button>검색버튼</button>
        </div>
      </MIL.Header>
      <MIL.InfiniteWrapper>
        <InfiniteScroll
          padStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          {props.data ? (
            props.data?.fetchUseditems.map((el: any) => (
              <MIL.itemWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickItem}
              >
                <div style={{ display: "flex" }}>
                  {el.images[0] === undefined ? (
                    <MIL.ImgDiv>이미지가 없습니다</MIL.ImgDiv>
                  ) : (
                    <MIL.itemImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  )}
                  <MIL.ItemContentsBox>
                    <div>
                      <MIL.ColumName>{el.name}</MIL.ColumName>
                      <MIL.ColumRemarks>{el.remarks}</MIL.ColumRemarks>
                      <MIL.SellerName>{el.seller.name}</MIL.SellerName>
                    </div>
                    <div>tag</div>
                  </MIL.ItemContentsBox>
                </div>
                {/* 판매자 프로필 */}
                <MIL.RightContentsBox>
                  <div>찜하기 {el.pickedCount}</div>
                  <MIL.PriceText>{el.price} 원 </MIL.PriceText>
                </MIL.RightContentsBox>
              </MIL.itemWrapper>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </MIL.InfiniteWrapper>
    </MIL.Wrapper>
  );
}
