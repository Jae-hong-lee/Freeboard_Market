import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
`;

export const itemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-top: 1px solid black;
`;

export const ItemContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ColumName = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ColumRemarks = styled.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 15px;
`;

export const SellerName = styled.div`
  font-size: 13px;
  font-weight:400
  color: #999;
`;

export const RightContentsBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PriceText = styled.div`
  font-weight: 800;
  margin-right: 20px;
  color: #ae0000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfiniteWrapper = styled.div`
  height: 1100px;
  overflow: auto;
`;

export const ImgDiv = styled.div`
  width: 160px;
  height: 160px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

export const itemImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const MoveNewItemPage = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;
