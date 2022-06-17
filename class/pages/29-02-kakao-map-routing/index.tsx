import Link from "next/link";
// import { useRouter } from "next/router";

export default function KakaoMapPage() {
  // const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      {/* <button>
        <a href="/29-03-kakao-map-routed"> 맵으로 이동하기! </a>
      </button> */}
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      <Link href="/29-03-kakao-map-routed"> 맵으로 이동하기!!</Link>
    </>
  );
}
