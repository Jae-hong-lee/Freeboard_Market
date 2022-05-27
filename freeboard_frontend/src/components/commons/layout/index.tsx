import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHadder from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
interface ILayoutpageProps {
  children: ReactNode;
}
const HIDDEN_BANNER = ["/boarder/news"];
function EditBoolean(element: String) {
  const a = element.split("/");
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("edit")) {
      HIDDEN_BANNER.push(element);
    }
  }
}

export default function LayoutPage(props: ILayoutpageProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  EditBoolean(router.asPath);
  return (
    <>
      <LayoutHadder />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutNavigation />
      <div style={{ display: "flex", width: "100%" }}>
        {/* 메뉴 */}
        <LayoutSidebar></LayoutSidebar>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>

      <LayoutFooter />
    </>
  );
}
