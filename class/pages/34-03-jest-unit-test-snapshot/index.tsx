export default function JestUnitTestPage() {
  return (
    <>
      <div>철수는 14살입니다.</div>
      철수의 취미 입력하기: <input type="text" />
      <button>철수랑 놀러가기</button>
    </>
  );
}
// 컴포넌트 랜더링 되었을 당시에를 캡쳐를 해놓고
// 다음번 테스트 코드를 돌렸을때 기존이랑 바뀐게 있는지 없는지를 체크하는 방식.
