import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
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
  border-radius: 4px;
  border: none;
  height: 30px;
  left: 50%;
  bottom: 30%;
  color: #0066ff;

  /* margin: 10px; */
  :hover {
    background-color: #0066ff;
    color: white;
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
