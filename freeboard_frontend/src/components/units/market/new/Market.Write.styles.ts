import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const WriteItemHeader = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;

export const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const MarketWriteLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const MarketWriteInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const CreateItemBtn = styled.button`
  width: 500px;
  height: 52px;
  margin-bottom: 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "cornflowerblue" : "none")};
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 40px;
`;

// kakaoMap
export const KaKaoMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;
export const kakaoMap = styled.div`
  width: 400px;
  height: 300px;
  background-color: gray;
`;

// Addreess
export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GPSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  width: 80%;
  justify-content: space-between;
`;

export const Latitude = styled.div`
  border: 1px solid #bdbdbd;
  width: 40%;
  height: 52px;
  text-align: center;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
`;

// upload
export const ImgdivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ImgDiv = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 사진첨부
export const ImgPlus = styled.div`
  width: 100%;
  margin-bottom: 90px;
`;
