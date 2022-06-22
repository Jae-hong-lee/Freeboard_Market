import KakaoMap from "../../../../commons/kakakomap";
import { getDate } from "../../../../commons/libraries/utils";
import * as MD from "./Market.Detail.styles";

export default function MarketDetailUI(props) {
  return (
    <MD.Wrapper>
      <MD.HeaderWrapper>
        <MD.ProfileWrapper>
          <MD.ProfileImg src="../Detailimage/Profile.png" />
          <div>
            <MD.UserName>{props.data?.fetchUseditem.seller.name}</MD.UserName>
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
          <MD.ItemTitle>{props.data?.fetchUseditem.name}</MD.ItemTitle>
        </div>
        <MD.LikeWrapper>
          <div style={{ font: "16px" }}>❤️</div>
          <div>{props.data?.fetchUseditem.pickedCount}</div>
        </MD.LikeWrapper>
      </MD.ItemTitleWrapper>
      <MD.PriceDiv>{props.data?.fetchUseditem.price}원</MD.PriceDiv>

      {/* 대표이미지 */}
      <MD.ContentImg>
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el)
          .map((el: any) => (
            <MD.Image key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </MD.ContentImg>

      <MD.ContentsWrapper
        dangerouslySetInnerHTML={{ __html: props.data?.fetchUseditem.contents }}
      ></MD.ContentsWrapper>

      <MD.TagWrapper>tags</MD.TagWrapper>

      <MD.DivideLine />
      <KakaoMap address={props.data?.fetchUseditem.useditemAddress?.address} />
      <MD.DivideLine />
      <MD.Button onClick={props.MoveItemList}>목록으로</MD.Button>
      <MD.Button onClick={props.EditItemNew}>수정하기</MD.Button>
    </MD.Wrapper>
  );
}
