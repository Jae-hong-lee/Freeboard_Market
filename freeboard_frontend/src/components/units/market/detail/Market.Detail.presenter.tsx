import { getDate } from "../../../../commons/libraries/utils";
import * as MD from "./Market.Detail.styles";
// import { Tooltip } from "antd";

export default function MarketDetailUI(props) {
  return (
    <MD.Wrapper>
      <MD.HeaderWrapper>
        <MD.ProfileWrapper>
          <MD.ProfileImg src="../Detailimage/Profile.png" />
          <div>
            <MD.UserName>{props.data?.fetchUseditem.name}</MD.UserName>
            <MD.ItemTime>
              Date: {getDate(props.data?.fetchUseditem.createdAt)}
            </MD.ItemTime>
          </div>
        </MD.ProfileWrapper>
        <div>
          <MD.LinkImage src="../Detailimage/Link.png" />
          <MD.LinkGPS src="../Detailimage/GPS.png" />
        </div>
      </MD.HeaderWrapper>
      <MD.DivideLine />

      <MD.ItemTitleWrapper>
        <div>
          <MD.ItemSubTitle>{props.data?.fetchUseditem.remarks}</MD.ItemSubTitle>
          <MD.ItemTitle>물건종류???</MD.ItemTitle>
        </div>
        <MD.LikeWrapper>
          <div style={{ font: "16px" }}>❤️</div>
          <div>{props.data?.fetchUseditem.pickedCount}</div>
        </MD.LikeWrapper>
      </MD.ItemTitleWrapper>
      <MD.PriceDiv>{props.data?.fetchUseditem.price}원</MD.PriceDiv>
      <MD.CarouselDiv>이미지 캐러셀</MD.CarouselDiv>

      <MD.ContentsWrapper
        dangerouslySetInnerHTML={{ __html: props.data?.fetchUseditem.contents }}
      ></MD.ContentsWrapper>

      <MD.TagWrapper>tags</MD.TagWrapper>

      <MD.DivideLine />
      <MD.KakaoMap>KakaoMap</MD.KakaoMap>
      <MD.DivideLine />
    </MD.Wrapper>
  );
}
