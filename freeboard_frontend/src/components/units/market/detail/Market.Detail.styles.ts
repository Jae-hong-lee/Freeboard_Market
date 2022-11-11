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

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 16px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const ItemTime = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;
// item Title
export const ItemTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemSubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #bdbdbd;
`;

export const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
// price
export const PriceDiv = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 80px;
`;
// 대표이미지
export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-bottom: 30px;
  width: 100%;
`;

// Contents
export const ContentsWrapper = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 40px;
`;

export const TagWrapper = styled.div`
  width: 100%;
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
`;

export const LikeWrapper = styled.div`
  padding-right: 20px;
  font-weight: 500;
  font-size: 18px;
`;

export const LinkGPS = styled.img`
  width: 32px;
  height: 32px;
`;
export const LinkImage = styled.img`
  width: 26px;
  height: 18px;
  margin-right: 25px;
`;

export const DivideLine = styled.div`
  border-top: 1px solid gray;
  width: 100%;
  margin: 20px 0px 40px;
`;

// Kakao Map
export const KakaoMap = styled.div`
  width: 100%;
  height: 360px;
  background-color: gray;
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 20px;
  text-align: center;
  margin: 0px 12px;
  cursor: pointer;
  border: none;
  color: white;
  box-shadow: 0px 1px 10px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

  :hover {
    color: black;
  }
`;

// Buttom Wrapper
export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
