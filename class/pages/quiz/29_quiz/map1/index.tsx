import styled from "@emotion/styled";
import { useEffect } from "react";

const KakaoMap = styled.div`
  width: 500px;
  height: 500px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMap1() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=808a7e45f480ecab7838f078e915a2c6&autoload=false";
    document.head.appendChild(script);
    // 헤드 자식노드에 스크립트 추가.

    // 스크립트가 로드 되었을때 실행
    script.onload = () => {
      // 윈도우에 카카오 맵이 로드 되면 함수 실행
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5557, 127.0055), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const markerPosition = new window.kakao.maps.LatLng(37.5557, 127.0055);

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 마커표시

        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          image: markerImage,
        });

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            const message =
              "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            const resultDiv = document.getElementById("clickLatlng");
            resultDiv.innerHTML = message;
          }
        );

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <KakaoMap id="map"></KakaoMap>
      <div id="clickLatlng"></div>
    </>
  );
}
