import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigtion from "./navigation";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  // ...
  // ...
  // 숨기고 싶은 페이지 배열
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  // const isHiddenHeader = "/12-05-modal-refactoring" === router.asPath; // 라우터 asPath와 주소가 같다면! true.
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {/* 부정연산자 사용해서 헤더 감추기 */}
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigtion />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100px",
            height: "300px",
            backgroundColor: "skyblue",
          }}
        >
          여기는 사이드바입니다.
        </div>
        <div style={{ width: "100%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
// 여기서 작업하면 파일이 커지니까 나눈다.
