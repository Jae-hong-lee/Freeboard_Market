export default function BrowserStoragePage() {
  // 쿠키만 조금 다르고 로컬과 세션은 비슷하다!
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=매매매맴맹";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈발놈");
  };

  const onClickLoadCookie = () => {
    const MyCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="));
    // ; 와 띄어쓰기 까지 같이 배열로 짤라줌
    // aaa로 시작하는 것만 뽑아주세여. (filter 함수 사용)
    console.log(MyCookie);
  };
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };
  return (
    <div>
      <button onClick={onClickSaveCookie}> 쿠키 저장</button>
      <button onClick={onClickSaveLocal}> 로컬 스토리지 저장</button>
      <button onClick={onClickSaveSession}> 세션 스토리지 저장</button>
      ================================================
      <br />
      <button onClick={onClickLoadCookie}> 쿠키 조회 </button>
      <button onClick={onClickLoadLocal}> 로컬 스토리지 조회 </button>
      <button onClick={onClickLoadSession}> 세션 스토리지 조회 </button>
    </div>
  );
}
