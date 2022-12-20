import styled from "@emotion/styled";
import { useEffect } from "react";

const KakaoMapDiv = styled.div`
  width: 400px;
  height: 300px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props: any) {
  // console.log(props.address);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=c172c0157f2492a11071e0b098d44983&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5557, 127.0055), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">거래처</div>',
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.address || ""]);

  return (
    <>
      <KakaoMapDiv id="map"></KakaoMapDiv>
      <div id="centerAddr"></div>
    </>
  );
}
