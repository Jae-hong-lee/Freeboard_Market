import styled from "@emotion/styled";
// import Head from "next/head";
import { useEffect } from "react";
const KakaoMap = styled.div`
  width: 500px;
  height: 500px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script> 태그 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=808a7e45f480ecab7838f078e915a2c6&autoload=false";
    document.head.appendChild(script); // 헤드 요소에 자식으로 script를 넣는다.

    script.onload = () => {
      // 카카오가 로드가 되면 그때 이 함수를 실행 시켜줘
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커 표시하기===========================================
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=808a7e45f480ecab7838f078e915a2c6"
        ></script>
      </Head> */}
      <KakaoMap id="map"></KakaoMap>
    </>
  );
}
