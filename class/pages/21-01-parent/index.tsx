// functional-component-parent

import ChildPage from "../21-02-child";
export default function ParentPage() {
  const qqq = { count: 200 };

  // return <ChildPage count={123} />;
  // return <>{ChildPage({ count: 100 })};</>;
  return <>{ChildPage(qqq)}</>;
  // 두개다 동일한 결과
  // 즉, ChildPage는 함수이고 부모 페이지에서 자식페이지함수를 실행시킨 것이다.
}
