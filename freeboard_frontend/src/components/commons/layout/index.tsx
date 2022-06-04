import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHadder from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
interface ILayoutpageProps {
  children: ReactNode;
}

const BodyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SiteInButton = styled.button`
  position: fixed;
  text-align: center;
  left: 48%;
  bottom: 30%;
  font-size: 15px;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  color: white;
  box-shadow: 0px 1px 10px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  cursor: pointer;
  :hover {
    color: black;
  }
`;
const HIDDEN_BANNER = ["/boarder/news"];
const HIDDEN_LAYOUT = ["/"];

function EditBoolean(element: any) {
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
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  const onClickSiteIn = () => {
    router.push("/boarder/list");
  };

  return (
    <>
      {/* {props.isModalView && ( */}
      {!isHiddenLayout && <LayoutHadder />}
      {isHiddenLayout ? false : !isHiddenBanner && <LayoutBanner />}
      {!isHiddenLayout && <LayoutNavigation />}

      {router.asPath === "/" && (
        <SiteInButton onClick={onClickSiteIn}> 사이트 들어가기 </SiteInButton>
      )}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <BodyDiv>{props.children}</BodyDiv>
        </motion.div>
      </AnimatePresence>

      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}
