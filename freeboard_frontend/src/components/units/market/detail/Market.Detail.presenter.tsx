import { getDate } from "../../../../commons/libraries/utils";
import * as MD from "./Market.Detail.styles";
import { Tooltip } from "antd";

export default function MarketDetailUI(props) {
  return (
    <div>
      <h1>디테일페이지</h1>
      <div>
        <div>
          <MD.ProfileImg src="../Detailimage/Profile.png" />
          <div>
            <div>{props.data?.fetchUseditem.name}</div>
            <div>Date: {getDate(props.data?.fetchUseditem.createdAt)}</div>
          </div>
        </div>
        <div>
          <MD.LinkImage src="../Detailimage/Link.png" />
          <MD.LinkGPS src="../Detailimage/GPS.png" />
        </div>
      </div>
      <MD.DivideLine />
      <div>
        <div>
          <div>{props.data?.fetchUseditem.remarks}</div>
          <div>물건종류???</div>
        </div>
        <div>LikeBtn💕</div>
      </div>

      <div>{props.data?.fetchUseditem.price}</div>

      <div>이미지 캐러셀</div>

      <div>{props.data?.fetchUseditem.contents}</div>

      <div>tags</div>
      <MD.DivideLine />
      <div>KakaoMap</div>
      <MD.DivideLine />
    </div>
  );
}
