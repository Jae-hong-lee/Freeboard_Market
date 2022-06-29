import { useRouter } from "next/router";

export default function KakaoMap2() {
  const router = useRouter();

  const onClickMapMove = () => {
    router.push("/quiz/29_quiz/map1");
  };
  return (
    <>
      <button onClick={onClickMapMove}> 카카오 맵으로 이동하기 </button>
    </>
  );
}
